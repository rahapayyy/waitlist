import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Verify, EmojiSad } from "iconsax-react";

interface ModalProps {
  message: string;
  onClose: () => void;
  isSuccess: boolean;
}

const Modal: React.FC<ModalProps> = ({ message, onClose, isSuccess }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#5136C1] p-8 rounded-md shadow-md text-center relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          <AiOutlineClose />
        </button>
        <div className="flex justify-center mt-14 mb-10">
          {isSuccess ? (
            <Verify size={200} color="#fff" />
          ) : (
            <EmojiSad size={200} color="#fff" />
          )}
        </div>
        <p className="text-white font-bold text-2xl mt-4 mb-20">{message}</p>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://twitter.com/raha_pay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/rahapay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
