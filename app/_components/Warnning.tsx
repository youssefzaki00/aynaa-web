import { supportEmail } from "@/importantLinks";

function Warnning() {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 p-2 w-[calc(100%-32px)] lg:max-w-md bg-red-100 border border-red-600 rounded-lg text-center md:font-semibold text-xs md:text-sm text-red-800 shadow-md z-20">
      🚨 <span className="font-bold">تنبيه:</span> السيرفرات متوقفة حاليًا بسبب
      نقص التمويل🪙. يُرجى عدم استعمال الخدمة حتى إشعار آخر. ⚠️
      <br />
      في حال واجهت أي مشكلة، يُرجى التواصل عبر{" "}
      <a
        href={`mailto:${supportEmail}`}
        className="underline text-teal-600 hover:text-teal-800 font-semibold"
      >
        {supportEmail}
      </a>
      .
    </div>
  );
}
export default Warnning;
