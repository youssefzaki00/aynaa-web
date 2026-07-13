import { deviceParams } from "@/app/deviceTypes";

const devices: deviceParams[] = [
  {
    device: "android",
    embeddedVideo: {
      src: "https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title:
        "شرح تفعيل حجب المواقع الإباحية على الأندرويد | Android Settings",
    },
  },
  {
    device: "router",
    embeddedVideo: {
      src: "https://player.vimeo.com/video/1065573900?h=52ebb6d47b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "شرح تفعيل حجب المواقع الإباحية على الراوتر | Router Settings",
    },
  },
  {
    device: "windows",
    embeddedVideo: {
      src: "https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "شرح تفعيل حجب المواقع الإباحية من جهاز الويندز | windows",
    },
  },
  {
    device: "linux",
    soon: true,
  },
  {
    device: "ios",
    soon: true,
  },
];

const setupGuideData = { devices };

export type SetupGuideData = typeof setupGuideData;

export default setupGuideData;
