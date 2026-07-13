interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  close?: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, close, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md">
        {close && (
          <button
            className="absolute top-0 right-2 text-4xl text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
