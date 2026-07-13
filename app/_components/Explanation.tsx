"use client";
import Link from "next/link";
import Modal from "../_components/Modal";

type ExplanationProps = {
	isOpen: boolean;
	onClose?: () => void;
};
export default function Explanation({ isOpen, onClose }: ExplanationProps) {
	return (
		// <article className="px-4 flex flex-col items-center justify-center text-center">
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="flex flex-col items-center justify-center gap-8">
				<h2 className="text-3xl font-semibold">تنبيهات!!</h2>

				<div className=" flex flex-col justify-center gap-2   ">
					<p>
						نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز
						واحد، فلا توجد حماية 100%. ولكنها طبقات متعددة ترفع من
						مستوى الأمان.
					</p>
					<p>
						في حال واجهتك أي مشكلة مع الحماية، أو عندك اقتراحات
						لتحسينها، راجع دليل الإعداد مرة أخرى وتأكد من تطبيق جميع
						الخطوات.
					</p>
				</div>

				<div className="flex justify-around w-full items-center gap-4 ">
					<Link
						href="/start"
						className="w-40 p-4 rounded-md text-white bg-red-700 text-center"
						onClick={onClose}
					>
						أكمل
					</Link>
				</div>
			</div>
		</Modal>
		// </article>
	);
}
