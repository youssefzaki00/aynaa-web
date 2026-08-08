import { downloadAndroid, downloadWindows } from "@/importantLinks";
import { deviceName } from "@/app/deviceTypes";

export interface DeviceConfig {
	icon: string;
	title: string;
	description: string;
	features: string[];
	downloadLink: string;
	otherDevicesFilter: (device: string) => boolean;
}

export const deviceConfigs: Record<"windows" | "android", DeviceConfig> = {
	android: {
		icon: "/devices/android.svg",
		title: "تحميل تطبيق الاندرويد",
		description:
			"احمِ هاتفك من المواقع والتطبيقات والمحتوى الضار. التطبيق يصعب حذفه بعد التفعيل ليمنحك راحة البال.",
		features: [
			"حماية يصعب معها حذف التطبيق",
			"حجب المواقع والتطبيقات والمحتوى الضار",
			"يعمل في الخلفية بدون إبطاء الجهاز",
			"واجهة سهلة الاستخدام ومناسبة لجميع أفراد العائلة",
			"تحديثات مستمرة لضمان أفضل مستوى حماية",
		],
		downloadLink: downloadAndroid,
		otherDevicesFilter: (device) =>
			["windows", "router"].includes(device) && device !== "android",
	},
	windows: {
		icon: "/devices/windows.svg",
		title: "تحميل تطبيق الويندوز",
		description:
			"احمِ جهازك من المحتوى الضار على الإنترنت. الحماية تبقى مفعّلة ويصعب تعطيلها لتمنحك راحة البال.",
		features: [
			"حماية قوية يصعب تعطيلها بعد التفعيل",
			"حجب المواقع الضارة والمحتوى غير المناسب",
			"يعمل بهدوء في الخلفية على جميع المتصفحات",
			"واجهة سهلة الاستخدام ومناسبة لجميع أفراد العائلة",
			"تحديثات مستمرة لضمان أفضل مستوى حماية",
		],
		downloadLink: downloadWindows,
		otherDevicesFilter: (device) =>
			["android", "router"].includes(device) && device !== "windows",
	},
};

export function getDeviceConfig(device: deviceName): DeviceConfig | null {
	if (device === "windows" || device === "android") {
		return deviceConfigs[device];
	}
	return null;
}
