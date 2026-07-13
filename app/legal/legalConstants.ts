export const LEGAL_CONTACT = {
  email: "zakiyousef15@gmail.com",
  phone: "01070474589",
  company: "aynaa",
  companyAr: "عينا سلسبيلا",
  address: "29 Roshdy Street, Tanta, الغربية — Gharbia Governorate 31511, Egypt",
  website: "https://aynaa.org/",
  privacyUrl: "https://aynaa.org/privacy",
  lastUpdated: "July 13, 2026",
  lastUpdatedAr: "13 يوليو 2026",
} as const;

export type LegalLang = "en" | "ar";

export const LEGAL_LANG_STORAGE_KEY = "aynaa-legal-lang";
