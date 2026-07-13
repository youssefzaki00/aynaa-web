import { SetupGuideData } from "../../setupGuideData";
import { deviceName } from "@/app/deviceTypes";
import DeviceFeaturesCard from "./DeviceFeaturesCard";
import DeviceHeroSection from "./DeviceHeroSection";
import OtherDevicesSection from "@/app/_components/OtherDevicesSection";

interface DeviceDownloadPageProps {
  device: deviceName;
  setupGuide: SetupGuideData;
  deviceConfig: {
    icon: string;
    title: string;
    description: string;
    features: string[];
    downloadLink: string;
    otherDevicesFilter: (device: string) => boolean;
  };
}

export default function DeviceDownloadPage({
  device,
  setupGuide,
  deviceConfig,
}: DeviceDownloadPageProps) {
  const otherDevices = setupGuide.devices.filter(
    (d) => !d.soon && deviceConfig.otherDevicesFilter(d.device)
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <DeviceHeroSection
        deviceIcon={deviceConfig.icon}
        title={deviceConfig.title}
        description={deviceConfig.description}
      />

      {/* Features Card with Buttons */}
      <DeviceFeaturesCard
        features={deviceConfig.features}
        downloadLink={deviceConfig.downloadLink}
      />

      {/* Other Devices Section */}
      <OtherDevicesSection
        devices={otherDevices}
        sectionClassName="w-full py-10 px-4 lg:px-[155px]"
        cardClassName="rounded-[40px]"
      />
    </div>
  );
}

