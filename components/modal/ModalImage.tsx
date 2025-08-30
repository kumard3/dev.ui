"use client";
import { useState, useEffect, useRef } from "react";

export default function ModalImage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://picsum.photos/400/300?random=80",
    "https://picsum.photos/400/300?random=81",
    "https://picsum.photos/400/300?random=82",
    "https://picsum.photos/400/300?random=83",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  return (
    <div className="p-8 bg-white dark:bg-black">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Image Gallery Modal
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="cursor-pointer group">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-32 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-200"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 animate-fadeIn">
          <div
            ref={modalRef}
            className="relative max-w-4xl max-h-full animate-modalSlideIn"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedImage}
              alt="Enlarged image"
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              Click outside or press ESC to close
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
