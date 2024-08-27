import React, { useEffect, useRef } from 'react';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div
                ref={modalRef}
                className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            >
                <img src={imageSrc} alt="Imagem ampliada" className="w-full h-auto rounded-lg" />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-100 text-gray-600 rounded-full p-2 hover:bg-gray-200"
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
