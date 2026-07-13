import Link from "next/link";
import { LEGAL_CONTACT, LegalLang } from "./legalConstants";

const linkClass = "text-blue-600 hover:underline";

function ContactEmail() {
  return (
    <a href={`mailto:${LEGAL_CONTACT.email}`} className={linkClass}>
      {LEGAL_CONTACT.email}
    </a>
  );
}

export function TermsContent({ lang }: { lang: LegalLang }) {
  if (lang === "ar") {
    return <TermsAr />;
  }
  return <TermsEn />;
}

function TermsEn() {
  return (
    <article className="prose prose-gray max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">TERMS AND CONDITIONS</h1>
      <p className="text-lg text-gray-600 mb-6">Last updated {LEGAL_CONTACT.lastUpdated}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
      <p className="mb-4">
        We are <strong>{LEGAL_CONTACT.company}</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a
        company registered in Egypt at {LEGAL_CONTACT.address}.
      </p>
      <p className="mb-4">
        We operate the website{" "}
        <a href={LEGAL_CONTACT.website} className={linkClass} target="_blank" rel="noopener noreferrer">
          {LEGAL_CONTACT.website}
        </a>{" "}
        (the &quot;Site&quot;), the mobile application <strong>عينا سلسبيلا</strong> (the &quot;App&quot;), as
        well as any other related products and services that refer or link to these legal
        terms (collectively, the &quot;Services&quot;).
      </p>
      <p className="mb-4">
        {LEGAL_CONTACT.company} (عينا سلسبيلا) is an anti-pornography and protection mobile
        application designed to help users block inappropriate content and promote digital
        well-being. The app includes an anti-uninstall security feature to prevent
        unauthorized or accidental removal, ensuring continuous protection.
      </p>
      <p className="mb-4">
        You can contact us by phone at {LEGAL_CONTACT.phone}, email at <ContactEmail />, or
        by mail to {LEGAL_CONTACT.address}.
      </p>
      <p className="mb-4">
        These Legal Terms constitute a legally binding agreement between you and{" "}
        {LEGAL_CONTACT.company}. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
        ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE
        IMMEDIATELY.
      </p>
      <p className="mb-4">
        The Services are intended for users who are at least 18 years old. Persons under
        the age of 18 are not permitted to use or register for the Services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">TABLE OF CONTENTS</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-1 text-sm">
        {[
          ["#services", "OUR SERVICES"],
          ["#ip", "INTELLECTUAL PROPERTY RIGHTS"],
          ["#userreps", "USER REPRESENTATIONS"],
          ["#prohibited", "PROHIBITED ACTIVITIES"],
          ["#ugc", "USER GENERATED CONTRIBUTIONS"],
          ["#license", "CONTRIBUTION LICENSE"],
          ["#mobile", "MOBILE APPLICATION LICENSE"],
          ["#thirdparty", "THIRD-PARTY WEBSITES AND CONTENT"],
          ["#sitemanage", "SERVICES MANAGEMENT"],
          ["#ppyes", "PRIVACY POLICY"],
          ["#terms", "TERM AND TERMINATION"],
          ["#modifications", "MODIFICATIONS AND INTERRUPTIONS"],
          ["#law", "GOVERNING LAW"],
          ["#disputes", "DISPUTE RESOLUTION"],
          ["#corrections", "CORRECTIONS"],
          ["#disclaimer", "DISCLAIMER"],
          ["#liability", "LIMITATIONS OF LIABILITY"],
          ["#indemnification", "INDEMNIFICATION"],
          ["#userdata", "USER DATA"],
          ["#electronic", "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES"],
          ["#misc", "MISCELLANEOUS"],
          ["#contact", "CONTACT US"],
        ].map(([id, label]) => (
          <li key={id}>
            <a href={id} className={linkClass}>{label}</a>
          </li>
        ))}
      </ol>

      <h2 id="services" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. OUR SERVICES</h2>
      <p className="mb-4">
        The information provided when using the Services is not intended for distribution to
        or use by any person or entity in any jurisdiction where such distribution or use
        would be contrary to law or regulation.
      </p>

      <h2 id="ip" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
      <p className="mb-4">
        We are the owner or the licensee of all intellectual property rights in our
        Services. Subject to your compliance with these Legal Terms, we grant you a
        non-exclusive, non-transferable, revocable license to access the Services for your
        personal, non-commercial use.
      </p>
      <p className="mb-4">
        By sending us Submissions, you agree to assign to us all intellectual property
        rights in such Submission. For permission requests, contact <ContactEmail />.
      </p>

      <h2 id="userreps" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. USER REPRESENTATIONS</h2>
      <p className="mb-4">
        By using the Services, you represent that: (1) you have legal capacity; (2) you are
        not a minor; (3) you will not access the Services through automated means; (4) you
        will not use the Services for any illegal purpose; and (5) your use will not
        violate any applicable law.
      </p>

      <h2 id="prohibited" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. PROHIBITED ACTIVITIES</h2>
      <p className="mb-4">You may not use the Services for any purpose other than that for which we make the Services available. Prohibited activities include:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
        <li>Systematically retrieving data without written permission.</li>
        <li>Tricking, defrauding, or misleading us or other users.</li>
        <li>Circumventing security-related features of the Services.</li>
        <li>Harassing, abusing, or harming another person.</li>
        <li>Using the Services inconsistently with applicable laws.</li>
        <li>Reverse engineering or decompiling the Services&apos; software.</li>
        <li>Attempting to bypass, disable, or tamper with the application&apos;s anti-uninstall security features without authorization.</li>
      </ul>

      <h2 id="ugc" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. USER GENERATED CONTRIBUTIONS</h2>
      <p className="mb-4">
        The Services does not offer users to submit or post content. We may provide you
        with the opportunity to send feedback. When you do, you represent that your
        Contributions comply with these Legal Terms.
      </p>

      <h2 id="license" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. CONTRIBUTION LICENSE</h2>
      <p className="mb-4">
        By submitting suggestions or feedback, you agree that we can use and share such
        feedback for any purpose without compensation to you. You retain ownership of your
        Contributions.
      </p>

      <h2 id="mobile" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. MOBILE APPLICATION LICENSE</h2>
      <p className="mb-4">
        If you access the Services via the App, we grant you a revocable, non-exclusive,
        non-transferable, limited right to install and use the App on devices you own or
        control. You shall not decompile, reverse engineer, or use the App for commercial
        purposes. Apple and Android App Distributor terms also apply.
      </p>

      <h2 id="thirdparty" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. THIRD-PARTY WEBSITES AND CONTENT</h2>
      <p className="mb-4">
        The Services may contain links to third-party websites. We are not responsible for
        third-party content or practices. You access third-party websites at your own risk.
      </p>

      <h2 id="sitemanage" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. SERVICES MANAGEMENT</h2>
      <p className="mb-4">
        We reserve the right to monitor the Services, take legal action against violators,
        refuse access, and manage the Services to protect our rights and property.
      </p>

      <h2 id="ppyes" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. PRIVACY POLICY</h2>
      <p className="mb-4">
        Please review our Privacy Policy:{" "}
        <Link href="/privacy" className={linkClass}>{LEGAL_CONTACT.privacyUrl}</Link>. By
        using the Services, you agree to be bound by our Privacy Policy. The Services are
        hosted in Germany. By continuing to use the Services, you consent to have your
        data transferred to and processed in Germany.
      </p>

      <h2 id="terms" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. TERM AND TERMINATION</h2>
      <p className="mb-4">
        We reserve the right to deny access to the Services at any time, without notice,
        for any reason including breach of these Legal Terms.
      </p>

      <h2 id="modifications" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">12. MODIFICATIONS AND INTERRUPTIONS</h2>
      <p className="mb-4">
        We reserve the right to change, modify, or remove the contents of the Services at
        any time. We cannot guarantee the Services will be available at all times.
      </p>

      <h2 id="law" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">13. GOVERNING LAW</h2>
      <p className="mb-4">
        These Legal Terms shall be governed by the laws of Egypt. The courts of Egypt shall
        have exclusive jurisdiction to resolve any dispute arising in connection with these
        Legal Terms.
      </p>

      <h2 id="disputes" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">14. DISPUTE RESOLUTION</h2>
      <p className="mb-4">
        You agree to irrevocably submit all disputes related to these Legal Terms to the
        jurisdiction of the Egypt courts.
      </p>

      <h2 id="corrections" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">15. CORRECTIONS</h2>
      <p className="mb-4">
        We reserve the right to correct any errors, inaccuracies, or omissions on the
        Services at any time, without prior notice.
      </p>

      <h2 id="disclaimer" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">16. DISCLAIMER</h2>
      <p className="mb-4 uppercase text-sm">
        THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST EXTENT
        PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
        WITH THE SERVICES AND YOUR USE THEREOF.
      </p>

      <h2 id="liability" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">17. LIMITATIONS OF LIABILITY</h2>
      <p className="mb-4 uppercase text-sm">
        IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
        INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
        OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER WILL AT ALL TIMES BE LIMITED TO $0.10
        USD.
      </p>

      <h2 id="indemnification" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">18. INDEMNIFICATION</h2>
      <p className="mb-4">
        You agree to defend, indemnify, and hold us harmless from any loss arising out of
        your use of the Services, breach of these Legal Terms, or violation of third-party
        rights.
      </p>

      <h2 id="userdata" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">19. USER DATA</h2>
      <p className="mb-4">
        You are solely responsible for all data that you transmit or that relates to any
        activity you have undertaken using the Services. We shall have no liability for any
        loss or corruption of such data.
      </p>

      <h2 id="electronic" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
      <p className="mb-4">
        You consent to receive electronic communications and agree that electronic
        agreements satisfy any legal requirement that such communication be in writing.
      </p>

      <h2 id="misc" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">21. MISCELLANEOUS</h2>
      <p className="mb-4">
        These Legal Terms constitute the entire agreement between you and us. We may assign
        our rights and obligations at any time. If any provision is unlawful, the remaining
        provisions remain in effect.
      </p>

      <h2 id="contact" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">22. CONTACT US</h2>
      <p className="mb-4">
        <strong>{LEGAL_CONTACT.company}</strong>
        <br />
        {LEGAL_CONTACT.address}
        <br />
        Phone: {LEGAL_CONTACT.phone}
        <br />
        <ContactEmail />
      </p>
    </article>
  );
}

function TermsAr() {
  return (
    <article className="prose prose-gray max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">الشروط والأحكام</h1>
      <p className="text-lg text-gray-600 mb-6">آخر تحديث: {LEGAL_CONTACT.lastUpdatedAr}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">الاتفاق على الشروط القانونية</h2>
      <p className="mb-4">
        نحن <strong>{LEGAL_CONTACT.companyAr}</strong>، شركة مسجلة في مصر على العنوان:{" "}
        {LEGAL_CONTACT.address}.
      </p>
      <p className="mb-4">
        ندير الموقع{" "}
        <a href={LEGAL_CONTACT.website} className={linkClass} target="_blank" rel="noopener noreferrer">
          {LEGAL_CONTACT.website}
        </a>{" "}
        وتطبيق <strong>عينا سلسبيلا</strong> وأي منتجات أو خدمات مرتبطة بهذه الشروط
        (مجتمعة: &quot;الخدمات&quot;).
      </p>
      <p className="mb-4">
        عينا سلسبيلا تطبيق حماية ومكافحة إباحية يتضمن ميزة أمان ضد إلغاء التثبيت لضمان
        الحماية المستمرة.
      </p>
      <p className="mb-4">
        للتواصل: هاتف {LEGAL_CONTACT.phone}، بريد <ContactEmail />، أو البريد على{" "}
        {LEGAL_CONTACT.address}.
      </p>
      <p className="mb-4">
        تشكل هذه الشروط اتفاقية ملزمة. إذا لم توافق عليها، يُحظر عليك استخدام الخدمات.
        الخدمات مخصصة لمن هم 18 عاماً فأكثر.
      </p>

      <h2 id="services" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. خدماتنا</h2>
      <p className="mb-4">المعلومات المقدمة غير مخصصة للاستخدام في ولايات قضائية يحظر فيها ذلك.</p>

      <h2 id="ip" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. حقوق الملكية الفكرية</h2>
      <p className="mb-4">نملك أو نرخّص جميع حقوق الملكية الفكرية في الخدمات. نمنحك ترخيصاً محدوداً للاستخدام الشخصي غير التجاري.</p>

      <h2 id="userreps" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. إقرارات المستخدم</h2>
      <p className="mb-4">تقر بأهليتك القانونية وأنك لست قاصراً ولن تستخدم الخدمات لأغراض غير قانونية.</p>

      <h2 id="prohibited" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. الأنشطة المحظورة</h2>
      <p className="mb-4">يُحظر التلاعب بميزات الأمان، الهندسة العكسية، أو محاولة تعطيل ميزة منع إلغاء التثبيت دون إذن.</p>

      <h2 id="ugc" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. مساهمات المستخدمين</h2>
      <p className="mb-4">الخدمات لا تتيح نشر محتوى عام. قد نستقبل ملاحظات أو اقتراحات.</p>

      <h2 id="license" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. ترخيص المساهمات</h2>
      <p className="mb-4">بإرسال ملاحظات، توافق على استخدامنا لها دون تعويض. تحتفظ بملكية مساهماتك.</p>

      <h2 id="mobile" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. ترخيص التطبيق المحمول</h2>
      <p className="mb-4">نمنحك حقاً محدوداً لتثبيت التطبيق على أجهزتك وفق هذه الشروط وشروط متاجر التطبيقات.</p>

      <h2 id="thirdparty" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. مواقع ومحتوى طرف ثالث</h2>
      <p className="mb-4">لسنا مسؤولين عن مواقع أو محتوى أطراف ثالثة تصل إليها من الخدمات.</p>

      <h2 id="sitemanage" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. إدارة الخدمات</h2>
      <p className="mb-4">نحتفظ بحق مراقبة الخدمات واتخاذ إجراءات قانونية ورفض الوصول عند الحاجة.</p>

      <h2 id="ppyes" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. سياسة الخصوصية</h2>
      <p className="mb-4">
        راجع{" "}
        <Link href="/privacy" className={linkClass}>سياسة الخصوصية</Link>. الخدمات
        مستضافة في ألمانيا وتوافق على نقل بياناتك ومعالجتها هناك.
      </p>

      <h2 id="terms" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. المدة والإنهاء</h2>
      <p className="mb-4">نحتفظ بحق إنهاء وصولك للخدمات في أي وقت دون إشعار.</p>

      <h2 id="modifications" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">12. التعديلات والانقطاعات</h2>
      <p className="mb-4">قد نعدّل أو نوقف الخدمات دون ضمان توفرها دائماً.</p>

      <h2 id="law" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">13. القانون الحاكم</h2>
      <p className="mb-4">تخضع هذه الشروط لقوانين مصر وتختص محاكم مصر بالنزاعات.</p>

      <h2 id="disputes" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">14. حل النزاعات</h2>
      <p className="mb-4">توافق على إحالة النزاعات إلى محاكم مصر.</p>

      <h2 id="corrections" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">15. التصحيحات</h2>
      <p className="mb-4">نحتفظ بحق تصحيح الأخطاء على الخدمات في أي وقت.</p>

      <h2 id="disclaimer" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">16. إخلاء المسؤولية</h2>
      <p className="mb-4">تُقدَّم الخدمات &quot;كما هي&quot; دون ضمانات صريحة أو ضمنية.</p>

      <h2 id="liability" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">17. تحديد المسؤولية</h2>
      <p className="mb-4">مسؤوليتنا تجاهك محدودة بـ 0.10 دولار أمريكي إلى أقصى حد يسمح به القانون.</p>

      <h2 id="indemnification" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">18. التعويض</h2>
      <p className="mb-4">توافق على تعويضنا عن أي خسائر ناتجة عن استخدامك للخدمات أو مخالفتك لهذه الشروط.</p>

      <h2 id="userdata" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">19. بيانات المستخدم</h2>
      <p className="mb-4">أنت مسؤول عن البيانات التي تنقلها عبر الخدمات.</p>

      <h2 id="electronic" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">20. الاتصالات الإلكترونية</h2>
      <p className="mb-4">توافق على تلقي الاتصالات إلكترونياً وأنها تلبي متطلبات الكتابة القانونية.</p>

      <h2 id="misc" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">21. متفرقات</h2>
      <p className="mb-4">تشكل هذه الشروط الاتفاق الكامل بيننا وبينك.</p>

      <h2 id="contact" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">22. تواصل معنا</h2>
      <p className="mb-4">
        <strong>{LEGAL_CONTACT.companyAr}</strong>
        <br />
        {LEGAL_CONTACT.address}
        <br />
        هاتف: {LEGAL_CONTACT.phone}
        <br />
        <ContactEmail />
      </p>
    </article>
  );
}
