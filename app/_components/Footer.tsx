"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import SupportUs from "./SupportUs";

const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; clickHandler: () => void }[];
}) => (
  <div className="w-fit md:w-fit">
    <h3 className="pb-[10px] font-bold text-slate-200 text-3xl leading-normal">
      {title}
    </h3>
    <ul className="flex flex-col gap-2.5">
      {links.map(({ text, clickHandler }, index) => (
        <li key={index}>
          <button
            className="py-[8px] font-semibold md:font-bold text-nav_link hover:text-Red text-lg lg:text-xl leading-normal transition-colors"
            onClick={(e) => {
              e.preventDefault();
              clickHandler();
            }}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const router = useRouter();
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const FOOTER_CONTENT = {
    logo: {
      src: "/second-logo.svg",
      alt: "عينا سلسبيلا",
      title: "عَيْنًا سَلْسَبِيلًا",
    },
    importantLinks: {
      title: "روابط تهمك",
      links: [
        {
          text: "الصفحة الرئيسية",
          clickHandler: () => router.push("/"),
        },
        {
          text: "الحماية",
          clickHandler: () => router.push("/start"),
        },
        {
          text: "ادعمنا",
          clickHandler: () => setIsSupportOpen(true),
        },
        {
          text: "سياسة الخصوصية",
          clickHandler: () => router.push("/privacy"),
        },
        {
          text: "الشروط والأحكام",
          clickHandler: () => router.push("/terms"),
        },
      ],
    },
  };

  return (
    <footer className="bg-black">
      <div className="mx-auto py-10 max-w-7xl text-slate-100">
        <div className="mx-auto px-20 py-10">
          <div className="flex md:flex-row flex-col justify-between md:items-center gap-12 md:gap-16 lg:gap-24 2xl:gap-40 xl:gap-32">
            <div className="flex flex-col justify-between items-start gap-4 w-fit md:max-w-[40%] xl:max-w-[50%] lg:-translate-y-16">
              <Image
                src={FOOTER_CONTENT.logo.src}
                alt={FOOTER_CONTENT.logo.alt}
                width={250}
                height={130}
              />
              <p className="font-normal text-lg">
                ملتزمون بتوفير بيئة رقمية أكثر أمانًا للعائلات حول العالم. نوفر
                فلترة متقدمة للمحتوى وتثقيفًا حول السلامة الرقمية لحماية الأطفال
                على الإنترنت.
              </p>

              <div className="flex justify-center items-center gap-4 max-w-96">
                <FaSquareWhatsapp size={40} />
                <FaLinkedin size={40} />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 md:gap-16 lg:gap-24">
              <FooterLinkList
                title={FOOTER_CONTENT.importantLinks.title}
                links={FOOTER_CONTENT.importantLinks.links}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto py-6 border-[#566176] border-t max-w-[90%]">
          <p className="font-normal text-lg text-center translate-y-6">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لدى عينا سلسبيلا.
          </p>
        </div>
      </div>

      <SupportUs
        close={true}
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </footer>
  );
};

export default Footer;
