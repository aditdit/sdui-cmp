#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import <ModulaSDK/ModulaSDK.h>

@interface SduiView : UIView
@property (nonatomic, copy) NSString *sduiJson;
@property (nonatomic, strong) UIViewController *hostedVC;
@end

@implementation SduiView

- (void)setSduiJson:(NSString *)sduiJson {
    if ([_sduiJson isEqualToString:sduiJson]) {
        return;
    }
    _sduiJson = [sduiJson copy];

    [self renderSduiComponent];
}

- (void)renderSduiComponent {
    if (!_sduiJson || _sduiJson.length == 0) return;

    if (self.hostedVC) {
        [self.hostedVC.view removeFromSuperview];
        [self.hostedVC removeFromParentViewController];
    }

    // Call KMP Exposed Compose UIViewController mapping
    // Depending on Kotlin Obj-C translation it's usually MainViewControllerKt or class named accordingly
    UIViewController *vc = [MSDKMainViewControllerKt MainViewControllerJson:_sduiJson];

    if (vc) {
        self.hostedVC = vc;
        vc.view.frame = self.bounds;
        vc.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        [self addSubview:vc.view];

        UIViewController *parentVC = [self getParentViewController];
        if (parentVC) {
            [parentVC addChildViewController:vc];
            [vc didMoveToParentViewController:parentVC];
        }
    }
}

- (void)layoutSubviews {
    [super layoutSubviews];
    if (self.hostedVC) {
        self.hostedVC.view.frame = self.bounds;
    }
}

- (void)didMoveToWindow {
    [super didMoveToWindow];
    if (self.window && self.hostedVC && ![self.hostedVC parentViewController]) {
        UIViewController *parent = [self getParentViewController];
        if (parent) {
            [parent addChildViewController:self.hostedVC];
            [self.hostedVC didMoveToParentViewController:parent];
        }
    }
}

- (UIViewController *)getParentViewController {
    UIResponder *responder = self;
    while ([responder isKindOfClass:[UIView class]]) {
        responder = [responder nextResponder];
    }
    if ([responder isKindOfClass:[UIViewController class]]) {
        return (UIViewController *)responder;
    }
    return nil;
}

@end

@interface SduiViewManager : RCTViewManager
@end

@implementation SduiViewManager

RCT_EXPORT_MODULE(SduiView)

- (UIView *)view
{
  return [[SduiView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(sduiJson, NSString)

@end
