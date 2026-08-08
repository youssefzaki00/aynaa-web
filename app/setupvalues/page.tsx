import type { Metadata } from "next";
import SetupValuesComponent from "./SetupValuesComponent";

export const metadata: Metadata = {
  title: "تفاصيل الحماية",
  description:
    "تعرّف على تفاصيل حماية عينا سلسبيلا الشاملة ضد الإباحية والقمار والمحتوى غير اللائق.",
};

const SetupValuesPage = () => {
  return <SetupValuesComponent />;
};

export default SetupValuesPage;
