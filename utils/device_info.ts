
import * as Device from 'expo-device';

export const DeviceInfo = async () => {
    
    return {
        brand: Device.brand,
        design: Device.designName,
        type: Device.deviceType,
        manufacturer: Device.manufacturer,
        model:Device.modelId,
        fingerprint: Device.osBuildFingerprint
    }
}