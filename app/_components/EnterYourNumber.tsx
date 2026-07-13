"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../_components/Modal";

type EnterYourNumberProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function EnterYourNumber({
	isOpen,
	onClose,
}: EnterYourNumberProps) {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const router = useRouter();
	// Your Google Form URLs
	const GOOGLE_FORM_ACTION_URL = `https://docs.google.com/forms/d/e/1SisfmhFyuSPjafRb3UKf66QBgjO83Bcxc7DfIkddRiM/formResponse`;

	// The actual field name from your Google Form
	const PHONE_FIELD_ENTRY = "entry.1388739102";

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(e.target.value);
	};

	const submitPhoneToGoogleForm = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!phoneNumber.trim()) {
			alert("برجاء إدخال رقم الهاتف");
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Create FormData object with Google Form field mapping
			const formData = new FormData();
			formData.append(PHONE_FIELD_ENTRY, phoneNumber);

			// Submit to Google Form
			const response = await fetch(GOOGLE_FORM_ACTION_URL, {
				method: "POST",
				body: formData,
				mode: "no-cors", // Required for Google Forms
			});

			// With no-cors mode, we can't read the response, so we assume success
			setSubmitStatus("success");

			// Optional: Redirect after successful submission
			setTimeout(() => {
				router.push("/setupguide/router");
			}, 1500);
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<article className="px-4 flex flex-col items-center justify-center text-center sm:px-6 md:px-8">
			<Modal isOpen={isOpen} onClose={onClose}>
				<form
					onSubmit={submitPhoneToGoogleForm}
					className="flex flex-col items-center justify-center gap-8 w-full max-w-md"
				>
					<h2 className="text-2xl font-semibold sm:text-3xl">
						نحتاج منك رقم الهاتف حتى تبدأ في الخطوات
					</h2>

					<div className="flex flex-col justify-center gap-2 w-full">
						<label
							className="text-xl font-semibold flex-1"
							htmlFor="phone"
						>
							رقم الهاتف
						</label>

						<input
							id="phone"
							name="phone"
							type="number"
							value={phoneNumber}
							onChange={handlePhoneChange}
							placeholder="برجاء إدخال رقم الهاتف"
							className="border p-4 no-arrows rounded-md w-full"
							required
							disabled={isSubmitting}
						/>
					</div>

					{/* Status Messages */}
					{submitStatus === "success" && (
						<div className="text-green-600 font-semibold">
							تم إرسال رقم الهاتف بنجاح! جاري التوجيه...
						</div>
					)}

					{submitStatus === "error" && (
						<div className="text-red-600 font-semibold">
							حدث خطأ في الإرسال. برجاء المحاولة مرة أخرى.
						</div>
					)}

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row justify-around w-full items-center gap-4">
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full sm:w-40 p-4 rounded-md text-white bg-red-700 disabled:bg-red-400 transition-colors"
						>
							{isSubmitting ? "جاري الإرسال..." : "أكمل"}
						</button>

						<button
							type="button"
							onClick={onClose}
							className="w-full sm:w-40 p-4 rounded-lg border-4 border-black"
							disabled={isSubmitting}
						>
							لاحقا
						</button>
					</div>
				</form>
			</Modal>
		</article>
	);
}
