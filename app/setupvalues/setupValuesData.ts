import { PrimaryDNS, SecondaryDNS } from "@/importantLinks";

export type levelSetupValues = {
  ar: { title: string };
  subdomain: string;
  primary: string;
  secondary: string;
  categories: string[];
};

const setupValuesData = {
  protection: {
    ar: {
      title: "تفاصيل الحماية",
    },
    subdomain: "adult-filter-dns",
    primary: PrimaryDNS,
    secondary: SecondaryDNS,
    categories: [
      "الإباحية",
      "القمار",
      "البرامج غير اللائقة",
      "المواقع العربية الغير لائقة",
    ],
  },
};

export default setupValuesData;
