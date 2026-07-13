import { genData, genProps } from "@/app/[gen]/genData";
import { deviceParams } from "./[device]/deviceData";

const setupGuideData: { gen1: genSetupGuideData; gen2: genSetupGuideData } = {
  gen1: {
    genProps: genData.gen1,
    devices: [
      {
        device: "android",
        gen: "gen1",
        embeddedVideo: {
          src: "https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title:
            "شرح تفعيل حجب المواقع الإباحية على الأندرويد | Android Settings",
        },
      },
      {
        device: "router",
        gen: "gen1",
        embeddedVideo: {
          src: "https://player.vimeo.com/video/1065573900?h=52ebb6d47b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title: "شرح تفعيل حجب المواقع الإباحية على الراوتر | Router Settings",
        },
      },
      {
        device: "windows",
        gen: "gen1",
        embeddedVideo: {
          src: "https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
          title: "شرح تفعيل حجب المواقع الإباحية من جهاز الويندز | windows",
        },
      },

      {
        device: "linux",
        gen: "gen1",
        soon: true,
      },
      {
        device: "ios",
        gen: "gen1",
        soon: true,
      },
    ],
  },
  gen2: {
    genProps: genData.gen2,
    devices: [],
  },
};

export default setupGuideData;

export type genSetupGuideData = {
  genProps: genProps;
  devices: deviceParams[];
};
