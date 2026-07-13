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

export function PrivacyContent({ lang }: { lang: LegalLang }) {
  if (lang === "ar") {
    return <PrivacyAr />;
  }
  return <PrivacyEn />;
}

function PrivacyEn() {
  return (
    <article className="prose prose-gray max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">PRIVACY POLICY</h1>
      <p className="text-lg text-gray-600 mb-6">
        Last updated: {LEGAL_CONTACT.lastUpdated}
      </p>

      <p className="mb-4">
        This Privacy Notice for <strong>{LEGAL_CONTACT.company}</strong> (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;), describes how and why we might access, collect,
        store, use, and/or share (&quot;process&quot;) your personal information when you
        use our services (&quot;Services&quot;), including when you:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Visit our website at{" "}
          <a href={LEGAL_CONTACT.website} className={linkClass} target="_blank" rel="noopener noreferrer">
            {LEGAL_CONTACT.website}
          </a>{" "}
          or any website of ours that links to this Privacy Notice.
        </li>
        <li>
          Download and use our mobile application (<strong>عينا سلسبيلا</strong>), or
          any other application of ours that links to this Privacy Notice.
        </li>
        <li>
          Use <strong>عينا سلسبيلا</strong>: An anti-pornography and protection mobile
          application designed to help users block inappropriate content and promote
          digital well-being. The app includes an anti-uninstall security feature to
          prevent unauthorized or accidental removal, ensuring continuous protection. It
          does not collect or share user personal data.
        </li>
        <li>Engage with us in other related ways, including any marketing or events.</li>
      </ul>

      <p className="mb-6">
        <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you
        understand your privacy rights and choices. We are responsible for making
        decisions about how your personal information is processed. If you do not agree
        with our policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at <ContactEmail />.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">SUMMARY OF KEY POINTS</h2>
      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services.</li>
        <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
        <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
        <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
        <li><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</li>
        <li><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes in place to protect your personal information.</li>
        <li><strong>What are your rights?</strong> Depending on your geographical location, you may have certain rights regarding your personal information.</li>
        <li><strong>How do you exercise your rights?</strong> The easiest way is by contacting us at <ContactEmail />.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">TABLE OF CONTENTS</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-1">
        <li><a href="#infocollect" className={linkClass}>WHAT INFORMATION DO WE COLLECT?</a></li>
        <li><a href="#infouse" className={linkClass}>HOW DO WE PROCESS YOUR INFORMATION?</a></li>
        <li><a href="#whoshare" className={linkClass}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
        <li><a href="#inforetain" className={linkClass}>HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
        <li><a href="#infosafe" className={linkClass}>HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
        <li><a href="#infominors" className={linkClass}>DO WE COLLECT INFORMATION FROM MINORS?</a></li>
        <li><a href="#privacyrights" className={linkClass}>WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
        <li><a href="#DNT" className={linkClass}>CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
        <li><a href="#policyupdates" className={linkClass}>DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
        <li><a href="#contact" className={linkClass}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
        <li><a href="#request" className={linkClass}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
      </ol>

      <h2 id="infocollect" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
      <h3 className="text-xl font-medium text-gray-800 mb-2">Personal information you disclose to us</h3>
      <p className="mb-4 italic">In Short: We collect personal information that you provide to us.</p>
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when you express
        an interest in obtaining information about us or our products and Services, when
        you participate in activities on the Services, or otherwise when you contact us.
      </p>
      <p className="mb-4"><strong>Sensitive Information:</strong> We do not process sensitive information.</p>
      <p className="mb-4"><strong>Application Data:</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><em>Mobile Device Data:</em> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model, Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server).</li>
      </ul>
      <h3 className="text-xl font-medium text-gray-800 mb-2">Information automatically collected</h3>
      <p className="mb-4 italic">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
      <p className="mb-4">
        We automatically collect certain information when you visit, use, or navigate the
        Services. This information does not reveal your specific identity but may include
        device and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs, device
        name, country, location, information about how and when you use our Services, and
        other technical information.
      </p>

      <h2 id="infouse" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
      <p className="mb-4 italic">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>To deliver and facilitate delivery of services to the user:</strong> We may process your information to provide you with the requested service.</li>
        <li><strong>To protect our Services:</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
      </ul>

      <h2 id="whoshare" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
      <p className="mb-4 italic">In Short: We may share information in specific situations described in this section.</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
      </ul>

      <h2 id="inforetain" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
      <p className="mb-4">
        We will only keep your personal information for as long as it is necessary for the
        purposes set out in this Privacy Notice, unless a longer retention period is
        required or permitted by law.
      </p>

      <h2 id="infosafe" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
      <p className="mb-4">
        We have implemented appropriate and reasonable technical and organizational security
        measures designed to protect the security of any personal information we process.
        However, no electronic transmission over the Internet can be guaranteed to be 100%
        secure. Transmission of personal information to and from our Services is at your
        own risk.
      </p>

      <h2 id="infominors" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. DO WE COLLECT INFORMATION FROM MINORS?</h2>
      <p className="mb-4">
        We do not knowingly collect, solicit data from, or market to children under 18
        years of age. By using the Services, you represent that you are at least 18 or
        that you are the parent or guardian of such a minor and consent to such minor
        dependent&apos;s use of the Services.
      </p>

      <h2 id="privacyrights" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
      <p className="mb-4">
        Depending on your country, province, or state of residence, you may have certain
        rights regarding your personal information. If we are relying on your consent to
        process your personal information, you have the right to withdraw your consent at
        any time by contacting us.
      </p>

      <h2 id="DNT" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
      <p className="mb-4">
        At this stage, no uniform technology standard for recognizing and implementing DNT
        signals has been finalized. As such, we do not currently respond to DNT browser
        signals.
      </p>

      <h2 id="policyupdates" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
      <p className="mb-4">
        We may update this Privacy Notice from time to time. The updated version will be
        indicated by an updated &quot;Last updated&quot; date at the top of this Privacy Notice.
      </p>

      <h2 id="contact" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
      <p className="mb-4">
        If you have questions or comments about this notice, you may email us at{" "}
        <ContactEmail /> or contact us by post at:
      </p>
      <p className="mb-4">
        <strong>{LEGAL_CONTACT.company}</strong>
        <br />
        {LEGAL_CONTACT.address}
      </p>

      <h2 id="request" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
      <p className="mb-4">
        Based on the applicable laws of your country, you may have the right to request
        access to the personal information we collect from you, correct inaccuracies, or
        delete your personal information. To request to review, update, or delete your
        personal information, please email: <ContactEmail />.
      </p>
    </article>
  );
}

function PrivacyAr() {
  return (
    <article className="prose prose-gray max-w-none text-gray-700">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">سياسة الخصوصية</h1>
      <p className="text-lg text-gray-600 mb-6">آخر تحديث: {LEGAL_CONTACT.lastUpdatedAr}</p>

      <p className="mb-4">
        تصف سياسة الخصوصية هذه الخاصة بـ <strong>{LEGAL_CONTACT.companyAr}</strong> (&quot;نحن&quot; أو
        &quot;لنا&quot;) كيف ولماذا قد نصل إلى معلوماتك الشخصية ونجمعها ونخزنها ونستخدمها و/أو
        نشاركها (&quot;نعالجها&quot;) عند استخدامك لخدماتنا (&quot;الخدمات&quot;)، بما في ذلك عندما:
      </p>
      <ul className="list-disc pr-6 mb-4 space-y-2">
        <li>
          تزور موقعنا على{" "}
          <a href={LEGAL_CONTACT.website} className={linkClass} target="_blank" rel="noopener noreferrer">
            {LEGAL_CONTACT.website}
          </a>
        </li>
        <li>تنزّل وتستخدم تطبيقنا المحمول (<strong>عينا سلسبيلا</strong>).</li>
        <li>
          تستخدم <strong>عينا سلسبيلا</strong>: تطبيق حماية ومكافحة إباحية يساعد المستخدمين
          على حجب المحتوى غير المناسب وتعزيز الرفاهية الرقمية. يتضمن التطبيق ميزة أمان
          ضد إلغاء التثبيت لمنع الإزالة غير المصرح بها أو العرضية. لا يجمع التطبيق أو
          يشارك بيانات المستخدم الشخصية.
        </li>
        <li>تتفاعل معنا بطرق أخرى ذات صلة، بما في ذلك التسويق أو الفعاليات.</li>
      </ul>

      <p className="mb-6">
        <strong>أسئلة أو مخاوف؟</strong> إذا كان لديك أي أسئلة، تواصل معنا على{" "}
        <ContactEmail />.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">ملخص النقاط الرئيسية</h2>
      <ul className="list-disc pr-6 mb-6 space-y-3">
        <li><strong>ما المعلومات التي نعالجها؟</strong> قد نعالج معلومات شخصية حسب تفاعلك مع الخدمات.</li>
        <li><strong>هل نعالج معلومات حساسة؟</strong> لا نعالج معلومات حساسة.</li>
        <li><strong>هل نجمع معلومات من أطراف ثالثة؟</strong> لا.</li>
        <li><strong>كيف نعالج معلوماتك؟</strong> لتقديم الخدمات وتحسينها والأمان والامتثال للقانون.</li>
        <li><strong>متى نشارك المعلومات؟</strong> في حالات محددة مثل نقل الأعمال.</li>
        <li><strong>كيف نحافظ على الأمان؟</strong> لدينا تدابير تنظيمية وتقنية مناسبة.</li>
        <li><strong>ما حقوقك؟</strong> قد تكون لك حقوق حسب موقعك الجغرافي.</li>
        <li><strong>كيف تمارس حقوقك؟</strong> عبر التواصل على <ContactEmail />.</li>
      </ul>

      <h2 id="infocollect" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. ما المعلومات التي نجمعها؟</h2>
      <p className="mb-4">نجمع المعلومات التي تقدمها لنا طواعية عند التواصل معنا أو استخدام الخدمات.</p>
      <p className="mb-4"><strong>معلومات حساسة:</strong> لا نعالج معلومات حساسة.</p>
      <p className="mb-4"><strong>بيانات التطبيق:</strong> قد نجمع معلومات الجهاز (معرّف الجهاز، النموذج، نظام التشغيل، عنوان IP) عند استخدام التطبيق.</p>
      <p className="mb-4"><strong>معلومات تُجمع تلقائياً:</strong> مثل عنوان IP وخصائص المتصفح والجهاز عند زيارة موقعنا.</p>

      <h2 id="infouse" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. كيف نعالج معلوماتك؟</h2>
      <ul className="list-disc pr-6 mb-4 space-y-2">
        <li>لتقديم الخدمات المطلوبة.</li>
        <li>لحماية خدماتنا ومنع الاحتيال.</li>
      </ul>

      <h2 id="whoshare" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. متى ومع من نشارك معلوماتك؟</h2>
      <p className="mb-4"><strong>نقل الأعمال:</strong> قد نشارك معلوماتك في حالة اندماج أو بيع أو تمويل أو استحواذ.</p>

      <h2 id="inforetain" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. كم نحتفظ بمعلوماتك؟</h2>
      <p className="mb-4">نحتفظ بمعلوماتك للمدة اللازمة للأغراض الموضحة في هذه السياسة ما لم يتطلب القانون خلاف ذلك.</p>

      <h2 id="infosafe" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. كيف نحافظ على أمان معلوماتك؟</h2>
      <p className="mb-4">نطبق تدابير أمنية تقنية وتنظيمية مناسبة، لكن لا يمكن ضمان أمان النقل الإلكتروني بنسبة 100%.</p>

      <h2 id="infominors" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. هل نجمع معلومات من القُصّر؟</h2>
      <p className="mb-4">لا نجمع عن قصد بيانات من الأطفال دون 18 عاماً.</p>

      <h2 id="privacyrights" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. ما حقوق الخصوصية الخاصة بك؟</h2>
      <p className="mb-4">قد يكون لك الحق في مراجعة أو تعديل أو حذف معلوماتك حسب القوانين المعمول بها.</p>

      <h2 id="DNT" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. التحكم في ميزات عدم التتبع</h2>
      <p className="mb-4">لا نستجيب حالياً لإشارات DNT في المتصفح.</p>

      <h2 id="policyupdates" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">9. هل نحدّث هذه السياسة؟</h2>
      <p className="mb-4">قد نحدّث هذه السياسة من وقت لآخر مع تحديث تاريخ &quot;آخر تحديث&quot; في الأعلى.</p>

      <h2 id="contact" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">10. كيف تتواصل معنا؟</h2>
      <p className="mb-4">
        راسلنا على <ContactEmail /> أو بالبريد على:
        <br />
        <strong>{LEGAL_CONTACT.companyAr}</strong>
        <br />
        {LEGAL_CONTACT.address}
      </p>

      <h2 id="request" className="text-2xl font-semibold text-gray-800 mt-8 mb-4">11. مراجعة أو تحديث أو حذف بياناتك</h2>
      <p className="mb-4">لطلب مراجعة أو تحديث أو حذف معلوماتك، راسلنا على <ContactEmail />.</p>
    </article>
  );
}
