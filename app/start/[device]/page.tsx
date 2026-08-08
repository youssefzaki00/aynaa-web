import { deviceName } from "@/app/deviceTypes";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import setupGuideData, { SetupGuideData } from "../setupGuideData";
import { getDeviceConfig } from "./_components/deviceConfig";
import DeviceDownloadPage from "./_components/DeviceDownloadPage";
import deviceData, { deviceParams } from "./deviceData";

const deviceMetadata: Record<
  string,
  { title: string; description: string }
> = {
  android: {
    title: "تحميل تطبيق الأندرويد",
    description:
      "حمّل تطبيق عينا سلسبيلا للأندرويد لحجب المواقع والتطبيقات والمحتوى الضار، مع حماية يصعب معها حذف التطبيق.",
  },
  windows: {
    title: "تحميل تطبيق الويندوز",
    description:
      "حمّل تطبيق عينا سلسبيلا للويندوز لحجب المواقع والمحتوى الضار، مع حماية قوية يصعب تعطيلها بعد التفعيل.",
  },
  router: {
    title: "حماية الراوتر",
    description:
      "فعّل حماية عينا سلسبيلا على الراوتر لحجب المحتوى الضار عن كل الأجهزة المتصلة بشبكة المنزل.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ device: deviceName }>;
}): Promise<Metadata> {
  const { device } = await params;
  const meta = deviceMetadata[device];
  if (!meta) {
    return {
      title: "الجهاز غير مدعوم",
      description: "هذا الجهاز غير موجود أو غير مدعوم حالياً.",
    };
  }
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | عينا سلسبيلا`,
      description: meta.description,
      url: `/start/${device}`,
    },
  };
}

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
    const config = getDeviceConfig(dev.device);
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
    redirect("/start/router/step1");
  }
}
export default Page;

export async function generateStaticParams() {
  return deviceData.map((device: deviceParams) => ({
    device: device.device,
  }));
}
