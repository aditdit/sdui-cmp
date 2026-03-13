#import "Sdui.h"
#import <ModulaSDK/ModulaSDK.h>

@implementation Sdui
- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (void)getPlatformName:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject {
    resolve([[MSDKPlatform_iosKt getPlatform] name]);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeSduiSpecJSI>(params);
}

+ (NSString *)moduleName
{
  return @"Sdui";
}

@end
