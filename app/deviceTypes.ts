export type deviceName = "windows" | "linux" | "router" | "android" | "ios";

export interface deviceParams {
  device: deviceName;
  soon?: true;
  embeddedVideo?: {
    title: string;
    src: string;
  };
}
