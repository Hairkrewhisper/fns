import { useCallback, useState } from "react";
import { Quote, Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { REVIEW_IMAGES, FEATURED, QUOTES, initials } from "./testimonials-data";
import TestimonialLightbox from "./TestimonialLightbox";

export default function Testimonials() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const open = useCallback((i) => setLightboxIdx(i), []);
  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i + 1) % REVIEW_IMAGES.length),
    []
  );
  const prev = useCallback(
    () => setLightboxIdx((i) => (i - 1 + REVIEW_IMAGES.length) % REVIEW_IMAGES.length),
    []
  );

  return (
    <section
      id="testimonials"
      data-testid="testimonials"
      className="bg-white py-14 sm:py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <FeaturedTestimonialCard onPhotoClick={() => open(0)} />
        <RealClientsGallery onOpen={open} />
        <OtherQuotesGrid />
      </div>

      <TestimonialLightbox
        index={lightboxIdx}
        images={REVIEW_IMAGES}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  );
}

/* --------------------- Section header --------------------- */

function SectionHeader() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 mb-10 sm:mb-14">
      <div className="lg:col-span-6">
        <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-5">
          · Отзывы клиентов
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.05]">
          Реальные отзывы
          <br />
          бухгалтеров и руководителей
        </h2>
      </div>
      <div className="lg:col-span-6 lg:flex lg:items-end">
        <RatingPanel />
      </div>
    </div>
  );
}

function RatingPanel() {
  return (
    <div className="flex items-center gap-6">
      <div>
        <div className="flex items-center gap-1 mb-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={`s-${n}`} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <div className="text-sm text-[#475569] font-medium">4.96 из 5 · 312 отзывов</div>
      </div>
      <div className="h-12 w-px bg-black/10" />
      <div>
        <div className="text-2xl font-extrabold tracking-tight text-[#0F172A]">98%</div>
        <div className="text-xs text-[#475569] uppercase tracking-widest font-semibold mt-1">
          возвращаются
        </div>
      </div>
    </div>
  );
}

/* --------------------- Featured testimonial --------------------- */

function FeaturedTestimonialCard({ onPhotoClick }) {
  return (
    <div
      data-testid="featured-testimonial"
      className="mb-14 relative bg-gradient-to-br from-[#0F172A] to-[#064E3B] rounded-3xl overflow-hidden p-7 sm:p-10 lg:p-14 text-white"
    >
      <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[#16A34A]/30 blur-[100px]" />
      <div className="absolute -bottom-24 left-1/3 w-[280px] h-[280px] rounded-full bg-emerald-400/20 blur-[90px]" />

      <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-4 order-2 lg:order-1">
          <FeaturedPhoto onClick={onPhotoClick} />
        </div>
        <div className="lg:col-span-8 order-1 lg:order-2">
          <FeaturedQuoteBody />
        </div>
      </div>
    </div>
  );
}

function FeaturedPhoto({ onClick }) {
  return (
    <button
      onClick={onClick}
      data-testid="featured-review-photo"
      className="group relative block w-full overflow-hidden rounded-2xl border-2 border-white/10 hover:border-[#16A34A]/60 transition-colors"
      aria-label="Открыть скриншот отзыва"
    >
      <img
        src={FEATURED.photo}
        alt="Реальный скриншот отзыва клиента"
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
        <span className="inline-flex items-center gap-1.5 bg-[#16A34A] text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
          <BadgeCheck className="w-3 h-3" />
          Проверено
        </span>
        <span className="text-[10px] font-semibold text-white/80 uppercase tracking-wider">
          fns.expert/otziv
        </span>
      </div>
    </button>
  );
}

const FEATURED_FACTS = [
  { id: "result", label: "результат", value: FEATURED.result },
  { id: "term", label: "срок", value: FEATURED.metric },
  { id: "source", label: "источник", value: "Скриншот клиента" },
];

function FeaturedQuoteBody() {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
        <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
        <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-emerald-200">
          Главный кейс месяца
        </span>
      </div>

      <Quote className="w-10 h-10 text-[#16A34A]/40 mb-4" />
      <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-white/95 text-balance">
        «{FEATURED.quote}»
      </blockquote>

      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-4 pb-7 border-b border-white/10">
        {FEATURED_FACTS.map((f, i) => (
          <FactCell
            key={f.id}
            label={f.label}
            value={f.value}
            colSpan={i === 2 ? "col-span-2 sm:col-span-1" : ""}
          />
        ))}
      </div>

      <Author name={FEATURED.name} role={FEATURED.role} />
    </>
  );
}

function FactCell({ label, value, colSpan = "" }) {
  return (
    <div className={colSpan}>
      <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#16A34A] mb-1">
        {label}
      </div>
      <div className="text-sm font-extrabold tracking-tight text-white">{value}</div>
    </div>
  );
}

function Author({ name, role }) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-extrabold">
        {initials(name)}
      </div>
      <div>
        <div className="text-base font-extrabold tracking-tight text-white">{name}</div>
        <div className="text-xs text-white/60">{role}</div>
      </div>
    </div>
  );
}

/* --------------------- Real clients gallery --------------------- */

function RealClientsGallery({ onOpen }) {
  return (
    <div data-testid="real-clients-section" className="mb-14">
      <GalleryHeader />
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4 [column-fill:_balance]">
        {REVIEW_IMAGES.map((img, i) => (
          <GalleryThumb key={img.id} index={i} image={img} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

function GalleryHeader() {
  return (
    <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
      <div>
        <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#16A34A] mb-2">
          · Реальные клиенты
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-[#0F172A] leading-tight">
          Скриншоты переписок и благодарностей
        </h3>
        <p className="text-sm text-[#475569] mt-2 max-w-2xl">
          Все отзывы взяты с публичной страницы{" "}
          <a
            href="https://fns.expert/otziv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16A34A] font-semibold hover:underline"
          >
            fns.expert/otziv.html
          </a>
          . Нажмите на изображение, чтобы открыть в полном размере.
        </p>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
        <BadgeCheck className="w-3.5 h-3.5 text-[#16A34A]" />
        <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-green-700">
          {REVIEW_IMAGES.length} отзывов · проверены
        </span>
      </div>
    </div>
  );
}

function GalleryThumb({ image, index, onOpen }) {
  return (
    <button
      data-testid={`review-photo-${index}`}
      onClick={() => onOpen(index)}
      className="group relative block w-full mb-3 lg:mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-green-300 hover:shadow-[0_10px_30px_-10px_rgba(22,163,74,0.25)] transition-all duration-300"
      aria-label={image.alt}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16A34A]/0 to-[#16A34A]/0 group-hover:from-[#16A34A]/30 group-hover:to-transparent transition-all duration-300" />
      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="inline-flex items-center gap-1.5 bg-white text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
          Открыть
        </span>
      </div>
    </button>
  );
}

/* --------------------- Other quotes --------------------- */

function OtherQuotesGrid() {
  return (
    <div>
      <div className="text-[11px] tracking-[0.22em] uppercase font-bold text-[#475569] mb-5">
        · Другие отзывы
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {QUOTES.map((q, i) => (
          <QuoteCard key={q.id} quote={q} index={i} />
        ))}
      </div>
    </div>
  );
}

function QuoteCard({ quote, index }) {
  return (
    <div
      data-testid={`testimonial-quote-${index}`}
      className="bg-[#F9FAFB] rounded-3xl p-7 lg:p-8 relative border border-[#E5E7EB]"
    >
      <Quote className="w-8 h-8 text-[#16A34A]/20 mb-4" />
      <p className="text-base text-[#0F172A] leading-relaxed mb-7">«{quote.quote}»</p>
      <div className="flex items-center gap-3 pt-5 border-t border-[#E5E7EB]">
        <div className="w-10 h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center font-bold text-sm">
          {initials(quote.name)}
        </div>
        <div>
          <div className="text-sm font-extrabold text-[#0F172A] tracking-tight">{quote.name}</div>
          <div className="text-xs text-[#475569]">{quote.role}</div>
        </div>
      </div>
    </div>
  );
}
