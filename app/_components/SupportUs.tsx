"use client";

import Modal from "./Modal";
import SupportUsContent from "./SupportUsContent";

type SupportUsProps = {
	isOpen: boolean;
	close: boolean;
	onClose?: () => void;
};

export default function SupportUs({ isOpen, onClose, close }: SupportUsProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} close={close}>
			<div className="flex flex-col gap-6 w-full" dir="rtl">
				<h2 className="font-bold text-xl text-[#1A1818] text-center">ادعمنا</h2>
				<SupportUsContent />
			</div>
		</Modal>
	);
}
