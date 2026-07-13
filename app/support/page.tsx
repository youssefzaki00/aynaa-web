import { supportEmail } from "@/importantLinks";

export default function SupportPage() {
  return (
    <article className="px-4 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <section className="mx-auto max-w-screen-md">
        <h1 className="inline-block px-6 py-2 text-xl font-semibold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-teal-500 to-teal-700 shadow-teal-300 shadow-md">
          الدعم
        </h1>
        <h2 className="mt-6 text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
          كيف يمكننا مساعدتك؟
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          للاستفسارات أو المساعدة، راسلنا على البريد الإلكتروني:
        </p>
        <a
          href={`mailto:${supportEmail}`}
          className="mt-6 inline-block text-xl font-semibold text-[#da442c] hover:underline"
        >
          {supportEmail}
        </a>
      </section>
    </article>
  );
}
