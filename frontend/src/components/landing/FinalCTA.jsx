import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#F9FAFB] border border-[#E5E7EB] rounded-3xl overflow-hidden">
          {/* Soft green corner accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-7">
                <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-green-700">
                  регистрация за 30 секунд
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.05] text-balance text-[#0F172A]">
                Получили требование ФНС?
                <br />
                <span className="gradient-text-green">Загрузите его прямо сейчас</span>
              </h2>
              <p className="mt-6 text-[#475569] text-lg leading-relaxed max-w-lg">
                Бесплатный AI-анализ + расчёт стоимости в течение часа. Без обязательств,
                без подписок. Платите только если решение вас устроит.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  data-testid="final-cta-primary"
                  size="lg"
                  className="bg-[#16A34A] hover:bg-[#15803D] text-white rounded-full h-14 px-7 text-base font-extrabold pulse-green"
                >
                  <a href="https://crm.fns.expert/register" className="inline-flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Загрузить требование
                  </a>
                </Button>
                <Button
                  asChild
                  data-testid="final-cta-secondary"
                  variant="outline"
                  size="lg"
                  className="border-[#E5E7EB] text-[#0F172A] bg-white hover:bg-green-50 hover:border-green-200 hover:text-[#15803D] rounded-full h-14 px-7 text-base font-semibold"
                >
                  <a href="tel:+79854883889" className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </Button>
              </div>

              <div className="mt-6 text-xs text-[#94A3B8] tracking-wide">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных (152-ФЗ)
              </div>
            </div>

            {/* Contact channels */}
            <div className="lg:pl-10 lg:border-l border-[#E5E7EB]">
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#16A34A] mb-6">
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
              <div className="mt-8 p-4 rounded-xl bg-white border border-[#E5E7EB]">
                <div className="text-[11px] uppercase tracking-[0.16em] font-bold text-amber-600 mb-2">
                  График работы
                </div>
                <div className="text-sm text-[#0F172A] font-semibold">пн–пт · 09:00–18:00 МСК</div>
                <div className="text-xs text-[#475569] mt-1">
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
      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E5E7EB] hover:border-green-300 hover:shadow-[0_4px_20px_-8px_rgba(22,163,74,0.25)] transition-all group"
    >
      <div className="w-11 h-11 rounded-lg bg-green-50 text-[#16A34A] flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-[0.16em] font-bold text-[#475569]">{label}</div>
        <div className="text-base font-extrabold text-[#0F172A] tracking-tight truncate">{value}</div>
      </div>
      <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#16A34A] group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}
