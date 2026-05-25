export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0F172A] text-white/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Logo + about */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#064E3B] rounded-lg flex items-center justify-center font-extrabold text-white text-[15px]">
                fns
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">fns.expert</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              AI-сервис ответов на требования ИФНС с экспертной проверкой налоговых
              юристов. От загрузки PDF до готового документа — 2 рабочих дня.
            </p>
            <div className="text-xs text-white/40 leading-relaxed">
              ИП Пашковский Денис Анатольевич<br />
              ИНН: 550304592403<br />
              ОГРНИП: 322774600694207
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-white mb-5">
              Сервис
            </div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#how" label="Как это работает" />
              <FooterLink href="#features" label="Возможности" />
              <FooterLink href="#pricing" label="Тарифы" />
              <FooterLink href="#faq" label="Вопросы и ответы" />
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-white mb-5">
              Услуги
            </div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#types" label="Ответ по ст. 93 НК РФ" />
              <FooterLink href="#types" label="Встречные проверки (ст. 93.1)" />
              <FooterLink href="#types" label="Пояснения по НДС" />
              <FooterLink href="#types" label="6-НДФЛ и РСВ" />
              <FooterLink href="#types" label="Зарплатные комиссии" />
              <FooterLink href="#types" label="Мотивированный отказ" />
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-white mb-5">
              Контакты
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+79854883889" className="text-white font-bold tracking-tight hover:text-emerald-300 transition-colors">
                  +7 985 488-38-89
                </a>
              </li>
              <li>
                <a href="mailto:info@fns.expert" className="hover:text-white transition-colors">
                  info@fns.expert
                </a>
              </li>
              <li>
                <a href="https://t.me/FNS_Expert_bot" className="hover:text-white transition-colors">
                  Telegram: @FNS_Expert_bot
                </a>
              </li>
              <li>
                <a href="https://wa.me/79854883889" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-white/40">
                пн–пт · 09:00–18:00 МСК
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} fns.expert · Все права защищены</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            <a href="#" className="hover:text-white transition-colors">Обработка ПДн (152-ФЗ)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <li>
      <a href={href} className="hover:text-white transition-colors">
        {label}
      </a>
    </li>
  );
}
