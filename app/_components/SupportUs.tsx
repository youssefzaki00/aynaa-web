"use client";

import {
	instapayPaymentLink,
	vodafoneCashWallet,
} from "@/importantLinks";
import { Check, ChevronLeft, Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

type SupportUsProps = {
	isOpen: boolean;
	close: boolean;
	onClose?: () => void;
};

export default function SupportUs({ isOpen, onClose, close }: SupportUsProps) {
	const [copied, setCopied] = useState(false);

	const handleCopyWallet = async () => {
		try {
			await navigator.clipboard.writeText(vodafoneCashWallet);
		} catch {
			const input = document.createElement("textarea");
			input.value = vodafoneCashWallet;
			document.body.appendChild(input);
			input.select();
			document.execCommand("copy");
			document.body.removeChild(input);
		}
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleInstapayClick = () => {
		if (instapayPaymentLink) {
			window.open(instapayPaymentLink, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} close={close}>
			<div className="flex flex-col gap-6 w-full" dir="rtl">
				<h2 className="font-bold text-xl text-[#1A1818] text-center">ادعمنا</h2>

				<div className="flex items-center gap-3">
					<div className="flex-1 h-px bg-[#E2E8F0]" />
					<span className="text-[#94A3B8] text-sm whitespace-nowrap">
						طرق الدفع داخل مصر
					</span>
					<div className="flex-1 h-px bg-[#E2E8F0]" />
				</div>

				{instapayPaymentLink ? (
					<a
						href={instapayPaymentLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-between gap-4 border border-[#E2E8F0] rounded-xl p-4 w-full hover:bg-[#F8FAFC] transition-colors"
					>
						<div className="flex items-center gap-3">
							<div className="relative shrink-0 w-10 h-10">
								<Image
									src="/support_us/instapay-icon.png"
									alt=""
									fill
									className="object-contain object-center"
								/>
							</div>
							<span className="font-medium text-[#1A1818]">
								ادفع عبر InstaPay
							</span>
						</div>
						<ChevronLeft size={20} className="text-[#CBD5E1] shrink-0" />
					</a>
				) : (
					<button
						type="button"
						onClick={handleInstapayClick}
						className="flex items-center justify-between gap-4 border border-[#E2E8F0] rounded-xl p-4 w-full hover:bg-[#F8FAFC] transition-colors"
					>
						<div className="flex items-center gap-3">
							<div className="relative shrink-0 w-10 h-10">
								<Image
									src="/support_us/instapay-icon.png"
									alt=""
									fill
									className="object-contain object-center"
								/>
							</div>
							<span className="font-medium text-[#1A1818]">
								ادفع عبر InstaPay
							</span>
						</div>
						<ChevronLeft size={20} className="text-[#CBD5E1] shrink-0" />
					</button>
				)}

				<div className="flex items-center justify-between gap-4 border border-[#E2E8F0] rounded-xl p-4 w-full">
					<div className="flex items-center gap-3 min-w-0">
						<div className="flex shrink-0 justify-center items-center w-10 h-10">
							<Image
								src="/support_us/vodafone-icon.svg"
								alt=""
								width={40}
								height={40}
								className="object-contain"
							/>
						</div>
						<div className="flex flex-col gap-0.5 min-w-0">
							<span className="font-semibold text-[#1A1818]">فودافون كاش</span>
							<span className="text-[#64748B] text-sm truncate">
								المحفظة: {vodafoneCashWallet}
							</span>
						</div>
					</div>
					<button
						type="button"
						onClick={handleCopyWallet}
						className="shrink-0 p-1 text-[#94A3B8] hover:text-[#64748B] transition-colors"
						aria-label="نسخ رقم المحفظة"
					>
						{copied ? (
							<Check size={20} className="text-green-600" />
						) : (
							<Copy size={20} />
						)}
					</button>
				</div>

				{copied && (
					<p className="text-green-600 text-sm text-center">
						تم نسخ رقم المحفظة
					</p>
				)}
			</div>
		</Modal>
	);
}
