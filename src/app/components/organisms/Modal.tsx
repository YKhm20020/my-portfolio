import React, { useEffect } from 'react';
import Image from 'next/image';

type ModalProps = {
    isModalOpen: boolean;
    src: string;
    alt: string;
    modalTitle: string;
    modalText: string;
    closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isModalOpen, src, alt, modalTitle, modalText, closeModal }) => {
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleEscapeKey);
        } else {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEscapeKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isModalOpen, closeModal]);

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={closeModal}
            ></div>
            <div className="bg-white rounded-md p-5 flex flex-col items-center justify-center z-10">
                <div className="relative flex justify-between mb-2 w-full">
                    <button
                        type="button"
                        className="bg-white absolute top-0 right-0 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={closeModal}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <h1 className="text-4xl font-bold mb-4 md:tracking-wide">{modalTitle}</h1>
                <div className="grid-cols-2 flex flex-col md:flex-row md:gap-4 h-full w-full">
                    <div className="sm:w-full md:w-1/2 md:mx-3 overflow-hidden bg-gray mb-4 md:mb-0 flex items-center justify-center">
                        <Image
                            className="rounded-lg object-cover object-center"
                            src={src}
                            width={600}
                            height={1000}
                            alt={alt}
                        />
                    </div>
                    <div className="md:w-1/2 flex items-center">
                        <p className="sm:text-center md:ml-8 text-left animate-fade-right animate-duration-[1600ms]">
                            {modalText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};