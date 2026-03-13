#import <SduiSpec/SduiSpec.h>

@interface Sdui : NSObject <NativeSduiSpec>

- (void)getPlatformName:(RCTPromiseResolveBlock)resolve
                 reject:(RCTPromiseRejectBlock)reject;

@end
