import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEscapeKey } from "@/hooks/use-ui-effects";

/**
 * Lightbox for testimonial screenshots.
 *
 * @param {number|null} index — current image index, null = closed
 * @param {{src:string,alt:string,id?:string}[]} images
 * @param {() => void} onClose
 * @param {() => void} onNext
 * @param {() => void} onPrev
 */
export default function TestimonialLightbox({ index, images, onClose, onNext, onPrev }) {
  const isOpen = index !== null;

  useEscapeKey(onClose, isOpen);

  // Arrow-key navigation
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onNext, onPrev]);

  const stop = useCallback((e) => e.stopPropagation(), []);

  if (!isOpen) return null;
  const img = images[index];

  return (
    <div
      data-testid="lightbox-modal"
      className="fixed inset-0 z-[60] bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <LightboxButton testid="lightbox-close" onClick={onClose} className="top-4 right-4 sm:top-6 sm:right-6" ariaLabel="Закрыть">
        <X className="w-5 h-5" />
      </LightboxButton>

      <LightboxButton testid="lightbox-prev" onClick={(e) => { stop(e); onPrev(); }} className="left-4 sm:left-6" ariaLabel="Предыдущий">
        <ChevronLeft className="w-5 h-5" />
      </LightboxButton>

      <LightboxButton testid="lightbox-next" onClick={(e) => { stop(e); onNext(); }} className="right-4 sm:right-6" ariaLabel="Следующий">
        <ChevronRight className="w-5 h-5" />
      </LightboxButton>

      <img
        src={img.src}
        alt={img.alt}
        className="max-h-[90vh] max-w-full w-auto h-auto rounded-2xl shadow-2xl"
        onClick={stop}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur text-white text-xs font-mono px-3 py-1.5 rounded-full">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function LightboxButton({ testid, onClick, className, ariaLabel, children }) {
  return (
    <button
      type="button"
      data-testid={testid}
      onClick={onClick}
      className={`absolute ${className} w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
