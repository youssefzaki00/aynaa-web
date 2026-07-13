import { SetupGuideData } from "../../setupGuideData";
import { deviceParams } from "../deviceData";
import OtherDevicesSection from "@/app/_components/OtherDevicesSection";
import RouterContentSection from "./RouterContentSection";
import RouterHeroSection from "./RouterHeroSection";

interface RouterPageProps {
  setupGuide: SetupGuideData;
  device: deviceParams;
}

export default function RouterPage({
  setupGuide,
  device,
}: RouterPageProps) {
  const otherDevices = setupGuide.devices.filter(
    (d) =>
      !d.soon &&
      ["windows", "android"].includes(d.device) &&
      d.device !== device.device
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <RouterHeroSection />

      {/* Main Content Section */}
      <RouterContentSection
        embeddedVideo={device.embeddedVideo}
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

