import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FileText,
  CheckCircle2,
  Brain,
  UploadCloud,
  Lock,
  Zap,
} from "lucide-react";

const CRM_UPLOAD_URL =
  "https://crm.fns.expert/register?intent=upload&utm_source=landing&utm_medium=hero&utm_campaign=lead_magnet";

const STAGE = { idle: "idle", preparing: "preparing", redirecting: "redirecting" };
const REDIRECT_DELAY_MS = 700;

/**
 * Lead-magnet drop-zone — drag/drop or pick a file → CRM register page.
 * The file isn't uploaded from the marketing site; we forward intent + filename to CRM.
 */
export default function LeadMagnetCard() {
  const { inputRef, stage, fileName, drag, handlers, onPick } = useUploadFlow();
  const isBusy = stage !== STAGE.idle;

  return (
    <div className="relative">
      <FloatingBadge />

      <div
        data-testid="lead-magnet-card"
        className="relative bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(22,163,74,0.18)]"
      >
        <CardHeader />

        <Dropzone
          drag={drag}
          isBusy={isBusy}
          onPick={onPick}
          handlers={handlers}
          inputRef={inputRef}
        >
          {stage === STAGE.idle ? <IdleContent drag={drag} /> : <BusyContent fileName={fileName} />}
        </Dropzone>

        <TrustRow />
        <CardFooter />
      </div>

      <FloatingResultCard />
    </div>
  );
}

/* ---------------------------- Hook ---------------------------- */

function useUploadFlow() {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [stage, setStage] = useState(STAGE.idle);
  const [fileName, setFileName] = useState("");
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const redirect = useCallback((name) => {
    const url = name
      ? `${CRM_UPLOAD_URL}&filename=${encodeURIComponent(name)}`
      : CRM_UPLOAD_URL;
    setStage(STAGE.redirecting);
    timerRef.current = setTimeout(() => {
      window.location.href = url;
    }, REDIRECT_DELAY_MS);
  }, []);

  const handleFiles = useCallback(
    (files) => {
      if (!files || files.length === 0) return;
      const f = files[0];
      setFileName(f.name);
      setStage(STAGE.preparing);
      timerRef.current = setTimeout(() => redirect(f.name), 500);
    },
    [redirect]
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setDrag(true);
  }, []);

  const onDragLeave = useCallback(() => setDrag(false), []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDrag(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const onPick = useCallback(() => inputRef.current?.click(), []);
  const onChange = useCallback((e) => handleFiles(e.target.files), [handleFiles]);

  return {
    inputRef,
    stage,
    fileName,
    drag,
    onPick,
    handlers: { onDragOver, onDragLeave, onDrop, onChange },
  };
}

/* --------------------------- Subviews -------------------------- */

function FloatingBadge() {
  return (
    <div className="absolute -top-3 -left-3 z-20 hidden md:flex items-center gap-2 px-3 py-2 bg-[#0F172A] text-white rounded-full text-xs font-extrabold shadow-xl">
      <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
      <span>Бесплатно · 60 сек</span>
    </div>
  );
}

function CardHeader() {
  return (
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
  );
}

function Dropzone({ drag, isBusy, onPick, handlers, inputRef, children }) {
  const handleLabelClick = (e) => {
    const isLabelOrText = e.target === e.currentTarget || e.target.tagName === "SPAN" || e.target.tagName === "DIV";
    if (isLabelOrText && !isBusy) {
      e.preventDefault();
      onPick();
    }
  };

  return (
    <label
      data-testid="lead-magnet-dropzone"
      htmlFor="lead-magnet-file"
      onDragOver={handlers.onDragOver}
      onDragLeave={handlers.onDragLeave}
      onDrop={handlers.onDrop}
      onClick={handleLabelClick}
      className={`relative block cursor-pointer rounded-2xl border-2 border-dashed p-7 transition-all duration-300 ${dropzoneClass(drag, isBusy)}`}
    >
      <input
        ref={inputRef}
        id="lead-magnet-file"
        type="file"
        accept="application/pdf,image/jpeg,image/png,image/heic"
        className="sr-only"
        onChange={handlers.onChange}
        data-testid="lead-magnet-input"
        disabled={isBusy}
      />
      {children}
    </label>
  );
}

function dropzoneClass(drag, isBusy) {
  if (drag) return "border-[#16A34A] bg-green-50";
  if (isBusy) return "border-[#16A34A] bg-green-50/60";
  return "border-[#E5E7EB] bg-[#F9FAFB] hover:border-green-300 hover:bg-green-50/40";
}

function IdleContent({ drag }) {
  return (
    <div className="text-center select-none">
      <div
        className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
          drag ? "bg-[#16A34A] text-white scale-110" : "bg-white border border-[#E5E7EB] text-[#16A34A]"
        }`}
      >
        <UploadCloud className="w-7 h-7" />
      </div>
      <div className="text-[15px] font-extrabold text-[#0F172A] tracking-tight">
        Перетащите PDF требования
      </div>
      <div className="text-xs text-[#475569] mt-1">или нажмите, чтобы выбрать файл</div>

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
  );
}

function BusyContent({ fileName }) {
  return (
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
  );
}

const TRUST_CHIPS = [
  { key: "fz", icon: <Lock className="w-3.5 h-3.5" />, label: "152-ФЗ" },
  { key: "ocr", icon: <Brain className="w-3.5 h-3.5" />, label: "OCR + AI" },
  { key: "lawyer", icon: <ShieldCheck className="w-3.5 h-3.5" />, label: "Юристы" },
];

function TrustRow() {
  return (
    <div className="mt-5 grid grid-cols-3 gap-2">
      {TRUST_CHIPS.map((c) => (
        <TrustChip key={c.key} icon={c.icon} label={c.label} />
      ))}
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

function CardFooter() {
  return (
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
  );
}

function FloatingResultCard() {
  return (
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
  );
}
