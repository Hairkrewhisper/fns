import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Scan,
  Sparkles,
  Clock,
  FileText,
  CheckCircle2,
  Brain,
  UploadCloud,
  Lock,
  Zap,
} from "lucide-react";

const CRM_UPLOAD_URL = "https://crm.fns.expert/register?intent=upload&utm_source=landing&utm_medium=hero&utm_campaign=lead_magnet";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative hero-soft-bg overflow-hidden pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-28"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-50" />
      {/* Dot pattern accent top-right */}
      <div className="absolute top-32 right-10 w-64 h-64 dot-pattern opacity-50 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-5 sm:mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-bold text-green-700">
                ai-сервис + налоговые юристы
              </span>
            </div>

            <h1 className="text-[34px] leading-[1.05] sm:text-5xl lg:text-[64px] lg:leading-[1.04] font-extrabold tracking-tighter text-[#0F172A] text-balance">
              Ответы на требования
              <br />
              <span className="gradient-text-green">ИФНС под ключ</span>
              <br />
              <span className="text-[#475569] font-medium">за 2 рабочих дня</span>
            </h1>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg text-[#475569] max-w-xl leading-relaxed">
              Загрузите PDF из ФНС — наш AI извлечёт суть, налоговые юристы подготовят
              юридически выверенный ответ. Без шаблонов и переплат.
            </p>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                data-testid="hero-primary-cta"
                size="lg"
                className="bg-[#16A34A] text-white hover:bg-[#15803D] rounded-full h-14 px-7 text-base font-semibold pulse-green w-full sm:w-auto"
              >
                <a href={CRM_UPLOAD_URL} className="inline-flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Начать бесплатно
                </a>
              </Button>
              <Button
                asChild
                data-testid="hero-secondary-cta"
                variant="outline"
                size="lg"
                className="border-[#E5E7EB] text-[#0F172A] bg-white hover:bg-green-50 hover:border-green-200 hover:text-[#15803D] rounded-full h-14 px-7 text-base font-semibold w-full sm:w-auto"
              >
                <a href="#how" className="inline-flex items-center justify-center gap-2">
                  Как это работает
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <Stat value="500+" label="требований обработано" />
              <Stat value="2 дня" label="среднее время ответа" />
              <Stat value="98%" label="довольных клиентов" />
            </div>
          </div>

          {/* Right side: LEAD MAGNET — file upload card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <LeadMagnetCard />
          </div>
        </div>
      </div>

      {/* Bottom features strip */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <FeatureCell icon={<Scan className="w-5 h-5" />} title="OCR" desc="PDF до 50 МБ, мультистраничные" />
          <FeatureCell icon={<Brain className="w-5 h-5" />} title="AI-анализ" desc="Извлекаем риски и аргументы" />
          <FeatureCell icon={<ShieldCheck className="w-5 h-5" />} title="Юристы" desc="Проверяют каждый ответ" />
          <FeatureCell icon={<Clock className="w-5 h-5" />} title="Дедлайны" desc="Напоминания 24/7" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-[#0F172A]">{value}</div>
      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.14em] mt-1 text-[#475569] font-semibold leading-snug">
        {label}
      </div>
    </div>
  );
}

function FeatureCell({ icon, title, desc }) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex items-start gap-4 hover:border-green-200 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-green-50 text-[#16A34A] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-[#0F172A]">{title}</div>
        <div className="text-xs text-[#475569] mt-0.5">{desc}</div>
      </div>
    </div>
  );
}

/* ===========================================================
   LEAD MAGNET — Drop-zone "Бесплатный AI-анализ за 60 секунд"
   Любое взаимодействие (drop/click/выбор файла) → переход в CRM
   =========================================================== */
function LeadMagnetCard() {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [stage, setStage] = useState("idle"); // idle | preparing | redirecting
  const [fileName, setFileName] = useState("");

  // Redirect with intent. Если был выбран файл — добавим имя в URL для CRM.
  const goToCRM = (name) => {
    const url = name
      ? `${CRM_UPLOAD_URL}&filename=${encodeURIComponent(name)}`
      : CRM_UPLOAD_URL;
    // короткая задержка для UX-индикации
    setStage("redirecting");
    setTimeout(() => {
      window.location.href = url;
    }, 700);
  };

  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    const f = files[0];
    setFileName(f.name);
    setStage("preparing");
    setTimeout(() => goToCRM(f.name), 500);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const onDragLeave = () => setDrag(false);
  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    handleFiles(e.dataTransfer.files);
  };
  const onPick = () => inputRef.current?.click();
  const onChange = (e) => handleFiles(e.target.files);

  const isBusy = stage !== "idle";

  return (
    <div className="relative">
      {/* Floating badge */}
      <div className="absolute -top-3 -left-3 z-20 hidden md:flex items-center gap-2 px-3 py-2 bg-[#0F172A] text-white rounded-full text-xs font-extrabold shadow-xl">
        <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
        <span>Бесплатно · 60 сек</span>
      </div>

      <div
        data-testid="lead-magnet-card"
        className="relative bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(22,163,74,0.18)]"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E5E7EB]">
          <div className="w-10 h-10 rounded-lg bg-green-50 text-[#16A34A] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.18em] font-extrabold text-[#16A34A]">
              · AI-анализ требования
            </div>
            <div className="text-base font-extrabold tracking-tight text-[#0F172A]">
              Получите оценку за 60 секунд
            </div>
          </div>
        </div>

        {/* Drop zone */}
        <label
          data-testid="lead-magnet-dropzone"
          htmlFor="lead-magnet-file"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={(e) => {
            // если клик по самому label — pick файл; кнопки внутри сами обработают свой клик
            if (e.target === e.currentTarget || e.target.tagName === "SPAN" || e.target.tagName === "DIV") {
              e.preventDefault();
              if (!isBusy) onPick();
            }
          }}
          className={`relative block cursor-pointer rounded-2xl border-2 border-dashed p-7 transition-all duration-300 ${
            drag
              ? "border-[#16A34A] bg-green-50"
              : isBusy
              ? "border-[#16A34A] bg-green-50/60"
              : "border-[#E5E7EB] bg-[#F9FAFB] hover:border-green-300 hover:bg-green-50/40"
          }`}
        >
          <input
            ref={inputRef}
            id="lead-magnet-file"
            type="file"
            accept="application/pdf,image/jpeg,image/png,image/heic"
            className="sr-only"
            onChange={onChange}
            data-testid="lead-magnet-input"
            disabled={isBusy}
          />

          {/* IDLE */}
          {stage === "idle" && (
            <div className="text-center select-none">
              <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                drag ? "bg-[#16A34A] text-white scale-110" : "bg-white border border-[#E5E7EB] text-[#16A34A]"
              }`}>
                <UploadCloud className="w-7 h-7" />
              </div>
              <div className="text-[15px] font-extrabold text-[#0F172A] tracking-tight">
                Перетащите PDF требования
              </div>
              <div className="text-xs text-[#475569] mt-1">
                или нажмите, чтобы выбрать файл
              </div>

              <Button
                asChild
                data-testid="lead-magnet-cta"
                className="mt-5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full h-11 px-6 text-sm font-extrabold pulse-green pointer-events-none"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Получить AI-анализ
                </span>
              </Button>

              <div className="mt-4 text-[10px] uppercase tracking-[0.14em] font-bold text-[#475569]">
                pdf · jpg · png · до 50 МБ
              </div>
            </div>
          )}

          {/* PREPARING / REDIRECTING */}
          {stage !== "idle" && (
            <div className="text-center" data-testid="lead-magnet-redirect">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#16A34A] text-white flex items-center justify-center mb-4 animate-pulse">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="text-[15px] font-extrabold text-[#0F172A] tracking-tight">
                {fileName ? "Файл получен" : "Открываем CRM…"}
              </div>
              {fileName && (
                <div className="text-xs text-[#475569] mt-1 mono truncate max-w-[260px] mx-auto">
                  {fileName}
                </div>
              )}
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#16A34A]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Переходим в CRM…
              </div>
            </div>
          )}
        </label>

        {/* Trust row */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <TrustChip icon={<Lock className="w-3.5 h-3.5" />} label="152-ФЗ" />
          <TrustChip icon={<Brain className="w-3.5 h-3.5" />} label="OCR + AI" />
          <TrustChip icon={<ShieldCheck className="w-3.5 h-3.5" />} label="Юристы" />
        </div>

        {/* Footer line */}
        <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 text-[#475569] font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>без обязательств</span>
          </div>
          <a
            href={CRM_UPLOAD_URL}
            data-testid="lead-magnet-skip"
            className="text-[#0F172A] hover:text-[#16A34A] font-bold tracking-tight inline-flex items-center gap-1"
          >
            Перейти в CRM
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Decorative floating mini-card */}
      <div className="absolute -bottom-6 -right-6 hidden md:block bg-[#16A34A] text-white rounded-xl p-4 shadow-2xl max-w-[220px] rotate-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
          </div>
          <span className="text-xs font-bold tracking-tight">Ответ готов</span>
        </div>
        <div className="text-[11px] text-white/80 leading-snug">
          Юрист Е. Соколова · 14 стр. · подпись ЭЦП
        </div>
      </div>
    </div>
  );
}

function TrustChip({ icon, label }) {
  return (
    <div className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
      <span className="text-[#16A34A]">{icon}</span>
      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F172A]">
        {label}
      </span>
    </div>
  );
}
