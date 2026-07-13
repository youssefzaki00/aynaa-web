import { deviceName } from "@/app/[gen]/genData";
import setupGuideData, { genSetupGuideData } from "../setupGuideData";
import { deviceConfigs } from "./_components/deviceConfig";
import DeviceDownloadPage from "./_components/DeviceDownloadPage";
import RouterPage from "./_components/RouterPage";
import deviceData, { deviceParams } from "./deviceData";

function Page({ params }: { params: { device: deviceName } }) {
  const dev = deviceData.gen1.find((value) => value.device === params.device);
  if (!dev) {
    return <div>الجهاز غير موجود أو غير مدعوم حالياً.</div>;
  }
  const genGuide: genSetupGuideData = setupGuideData.gen1;
  if (dev.device === "windows" || dev.device === "android") {
    const config = deviceConfigs[dev.device];
    if (config) {
      return (
        <DeviceDownloadPage
          device={dev.device}
          genGuide={genGuide}
          deviceConfig={config}
        />
      );
    }
  }
  if (dev.device === "router") {
    return <RouterPage genGuide={genGuide} device={dev} />;
  }
}
export default Page;

export async function generateStaticParams() {
  return deviceData.gen1.map((device: deviceParams) => ({
    device: device.device,
  }));
}
