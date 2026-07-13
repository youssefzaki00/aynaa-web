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
};

export default setupValuesData;
