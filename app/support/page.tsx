import SupportUsContent from "@/app/_components/SupportUsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ادعمنا",
	description:
		"ادعم مشروع عينا سلسبيلا لمساعدتنا على الاستمرار في توفير حماية مجانية للعائلات.",
	openGraph: {
		title: "ادعمنا | عينا سلسبيلا",
		description:
			"ادعم مشروع عينا سلسبيلا لمساعدتنا على الاستمرار في توفير حماية مجانية للعائلات.",
		url: "/support",
	},
};

export default function SupportPage() {
	return (
		<div className="flex flex-col" dir="rtl">
			<section
				className="w-full pt-28 pb-12 lg:pb-16"
				style={{
					background: "linear-gradient(180deg, #E0462D 0%, #A73826 100%)",
				}}
			>
				<div className="flex flex-col items-center gap-4 px-4 max-w-3xl mx-auto text-center">
					<h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
						ادعمنا
					</h1>
					<p className="font-normal text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl">
						مساهمتك تساعدنا على الاستمرار في توفير حماية مجانية للعائلات.
					</p>
				</div>
			</section>

			<div className="flex flex-col items-center px-4 lg:px-16 py-10 lg:py-16 w-full">
				<div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
					<SupportUsContent />
				</div>
			</div>
		</div>
	);
}
