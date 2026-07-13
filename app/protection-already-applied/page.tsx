"use client";
import { useState } from "react";
import Modal from "../_components/Modal";

export default function ProtectionAlreadyApplied() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article className="px-4 flex flex-col items-center justify-center text-center">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <h2 className="text-2xl font-semibold">
              لقد تم تفعيل الحماية بالفعل.!
            </h2>
            <p className="mt-2">
              هذا الجهاز تم تفعيل الحماية عليه بالفعل مرة، لا يمكنك رؤية
              الخطوات!
            </p>
          </div>
          <p>
            هذا من أجل سد ثغرات الحماية، حتى لا يستطيع شاب فكها في لحظة ضعف! إن
            كنت أباً أو شخصاً يحتاج تفعيلها من الراوتر، يجب عليك الرجوع إلى
            الشخص المسؤول عن الشبكة.
          </p>
        </div>
      </Modal>
    </article>
  );
}
