import { deviceParams } from "@/app/deviceTypes";

const devices: deviceParams[] = [
	{ device: "android" },
	{ device: "router" },
	{ device: "windows" },
];

const setupGuideData = { devices };

export type SetupGuideData = typeof setupGuideData;

export default setupGuideData;
