import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta" className="bg-[#F4F4F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#022C22] text-white rounded-3xl overflow-hidden grain-overlay">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-7">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-amber-200">
                  регистрация за 30 секунд
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.05] text-balance">
                Получили требование ФНС?
                <br />
                <span className="gradient-text-emerald">Загрузите его прямо сейчас</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-lg">
                Бесплатный AI-анализ + расчёт стоимости в течение часа. Без обязательств,
                без подписок. Платите только если решение вас устроит.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  data-testid="final-cta-primary"
                  size="lg"
                  className="bg-white text-[#022C22] hover:bg-emerald-50 rounded-full h-14 px-7 text-base font-extrabold"
                >
                  <a href="https://crm.fns.expert/register" className="inline-flex items-center gap-2">
                    Загрузить требование
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  data-testid="final-cta-secondary"
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white bg-transparent hover:bg-white/5 rounded-full h-14 px-7 text-base font-semibold"
                >
                  <a href="tel:+79854883889" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </Button>
              </div>

              <div className="mt-6 text-xs text-white/40 tracking-wide">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных (152-ФЗ)
              </div>
            </div>

            {/* Contact channels */}
            <div className="lg:pl-10 lg:border-l border-white/10">
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-emerald-300 mb-6">
                · или свяжитесь напрямую
              </div>
              <div className="space-y-3">
                <ContactRow
                  icon={<Phone />}
                  label="Телефон"
                  value="+7 985 488-38-89"
                  href="tel:+79854883889"
                  testid="contact-phone"
                />
                <ContactRow
                  icon={<MessageCircle />}
                  label="Telegram-бот"
                  value="@FNS_Expert_bot"
                  href="https://t.me/FNS_Expert_bot"
                  testid="contact-telegram"
                />
                <ContactRow
                  icon={<MessageCircle />}
                  label="WhatsApp"
                  value="+7 985 488-38-89"
                  href="https://wa.me/79854883889"
                  testid="contact-whatsapp"
                />
                <ContactRow
                  icon={<MessageCircle />}
                  label="Почта"
                  value="info@fns.expert"
                  href="mailto:info@fns.expert"
                  testid="contact-email"
                />
              </div>
              <div className="mt-8 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[11px] uppercase tracking-[0.16em] font-bold text-amber-300 mb-2">
                  График работы
                </div>
                <div className="text-sm text-white/80">пн–пт · 09:00–18:00 МСК</div>
                <div className="text-xs text-white/50 mt-1">
                  Дежурный юрист 24/7 для безлимитного тарифа
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href, testid }) {
  return (
    <a
      href={href}
      data-testid={testid}
      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-emerald-400/30 transition-all group"
    >
      <div className="w-11 h-11 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-white/40">{label}</div>
        <div className="text-base font-extrabold text-white tracking-tight truncate">{value}</div>
      </div>
      <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-emerald-300 group-hover:rotate-12 transition-all" />
    </a>
  );
}
