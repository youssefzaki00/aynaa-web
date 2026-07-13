import { deviceName } from "@/app/deviceTypes";
import setupGuideData, { SetupGuideData } from "../setupGuideData";
import { deviceConfigs } from "./_components/deviceConfig";
import DeviceDownloadPage from "./_components/DeviceDownloadPage";
import RouterPage from "./_components/RouterPage";
import deviceData, { deviceParams } from "./deviceData";

async function Page({
  params,
}: {
  params: Promise<{ device: deviceName }>;
}) {
  const { device } = await params;
  const dev = deviceData.find((value) => value.device === device);
  if (!dev) {
    return <div>الجهاز غير موجود أو غير مدعوم حالياً.</div>;
  }
  const setupGuide: SetupGuideData = setupGuideData;
  if (dev.device === "windows" || dev.device === "android") {
    const config = deviceConfigs[dev.device];
    if (config) {
      return (
        <DeviceDownloadPage
          device={dev.device}
          setupGuide={setupGuide}
          deviceConfig={config}
        />
      );
    }
  }
  if (dev.device === "router") {
    return <RouterPage setupGuide={setupGuide} device={dev} />;
  }
}
export default Page;

export async function generateStaticParams() {
  return deviceData.map((device: deviceParams) => ({
    device: device.device,
  }));
}
