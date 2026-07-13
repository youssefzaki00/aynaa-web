import { PrimaryDNS, SecondaryDNS } from "@/importantLinks";

export type levelSetupValues = {
  ar: { title: string };
  subdomain: string;
  primary: string;
  secondary: string;
  categories: string[];
};

export type genSetupValues = {
  protection: levelSetupValues;
};

const setupValuesData: { gen1: genSetupValues; gen2: genSetupValues } = {
  gen1: {
    protection: {
      ar: {
        title: "الحماية",
      },
      subdomain: "adult-filter-dns",
      primary: PrimaryDNS,
      secondary: SecondaryDNS,
      categories: [
        "الإباحية والمحتوى غير المناسب",
        "القمار والمراهنات",
        "التطبيقات الضارة",
        "المواقع والتطبيقات على الشبكة بالكامل",
      ],
    },
  },
  gen2: {
    protection: {
      ar: {
        title: "Protection",
      },
      subdomain: "adult-filter-dns",
      primary: PrimaryDNS,
      secondary: SecondaryDNS,
      categories: [
        "Pornography and inappropriate content",
        "Gambling and betting",
        "Harmful apps",
        "All sites and apps on the network",
      ],
    },
  },
};

export default setupValuesData;
