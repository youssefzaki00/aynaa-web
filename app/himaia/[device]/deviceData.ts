import setupGuideData from "../setupGuideData";
import { deviceName, genParam } from "@/app/[gen]/genData";

export const ACTIVE_GEN = "gen1" as const;

export type deviceParam = { device: deviceName };

const deviceData: { gen1: any; gen2: any } = {
	gen1: setupGuideData.gen1.devices,
	gen2: setupGuideData.gen2.devices,
};

export default deviceData;

export interface deviceParams extends genParam {
	device: deviceName;
	embeddedVideo?: {
		title: string;
		src: string;
	};
}
