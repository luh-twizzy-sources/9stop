import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Beer,
  CalendarDays,
  ChevronRight,
  Clock3,
  CreditCard,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Trophy,
  Tv,
  UsersRound,
  X,
} from 'lucide-react';

const phoneDisplay = '787 979 949';
const phoneHref = 'tel:+48787979949';
const email = 'bilard9stop@gmail.com';
const mapsQuery = 'Klub Bilardowy 9 stop Poznań';
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  mapsQuery,
)}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsQuery,
)}`;

const openingHours = [
  { day: 'Poniedziałek', hours: '17:00 - 01:00' },
  { day: 'Wtorek', hours: '17:00 - 01:00' },
  { day: 'Środa', hours: '17:00 - 01:00' },
  { day: 'Czwartek', hours: '17:00 - 01:00' },
  { day: 'Piątek', hours: '17:00 - 01:00' },
  { day: 'Sobota', hours: '17:00 - 02:00' },
  { day: 'Niedziela', hours: '17:00 - 00:00' },
];

const navItems = [
  { label: 'O klubie', href: '#o-klubie' },
  { label: 'Stoły', href: '#stoly' },
  { label: 'Udogodnienia', href: '#udogodnienia' },
  { label: 'Rezerwacje', href: '#rezerwacje' },
];

const clubReasons = [
  {
    icon: Trophy,
    title: 'Profesjonalny sprzęt',
    text: 'Gramy na 9-stopowych stołach Dynamic II, oficjalnych stołach Mistrzostw Europy, z turniejowym suknem Iwan Simonis 860.',
  },
  {
    icon: Snowflake,
    title: 'Pełen komfort',
    text: 'Klimatyzowane sale i profesjonalne oświetlenie nad każdym stołem zapewniają idealne warunki o każdej porze roku.',
  },
  {
    icon: Beer,
    title: 'Strefa chillout',
    text: 'Odpocznij między partiami w naszym barze, zamów zimne napoje i oglądaj najważniejsze wydarzenia sportowe na dużym ekranie.',
  },
];

const offerCards = [
  {
    kicker: 'Pool',
    title: 'Pool Bilard',
    text: 'Dynamiczna gra na najwyższej klasy stołach 9ft. Idealna zarówno do towarzyskich spotkań, jak i profesjonalnych rozgrywek.',
  },
  {
    kicker: 'Snooker',
    title: 'Snooker',
    text: 'Sprawdź swoje umiejętności taktyczne na precyzyjnym stole do snookera i poczuj rytm spokojnej, technicznej gry.',
  },
  {
    kicker: 'Bar',
    title: 'Bar & Gastro',
    text: 'Bogata oferta napojów bezalkoholowych, piwa oraz drinków, które umilą każdy wieczór przy stole.',
  },
];

const amenities = [
  {
    icon: CreditCard,
    title: 'Płatność kartą',
    text: 'Nie musisz martwić się o gotówkę - akceptujemy karty płatnicze i Blik.',
  },
  {
    icon: Tv,
    title: 'Transmisje sportowe',
    text: 'Kibicuj swoim ulubionym drużynom w naszej strefie z TV.',
  },
  {
    icon: Lightbulb,
    title: 'Oświetlenie turniejowe',
    text: 'Profesjonalne światło nad każdym stołem pomaga utrzymać koncentrację i precyzję gry.',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    game: 'Pool bilard',
    date: '',
    message: '',
  });

  const mailtoHref = useMemo(() => {
    const subject = 'Rezerwacja stołu - Klub Bilardowy 9 stop';
    const body = [
      'Dzień dobry,',
      '',
      'Chcę zapytać o rezerwację stołu w Klubie Bilardowym 9 stop.',
      '',
      `Imię: ${form.name || '-'}`,
      `Telefon: ${form.phone || '-'}`,
      `Gra: ${form.game || '-'}`,
      `Preferowany termin: ${form.date || '-'}`,
      `Wiadomość: ${form.message || '-'}`,
      '',
      'Proszę o potwierdzenie dostępności.',
    ].join('\n');

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;
  }, [form]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Główna nawigacja">
        <a className="brand" href="#top" aria-label="Klub Bilardowy 9 stop">
          <span className="brand-logo-wrap">
            <img src="/logo-9stop-clean.png" alt="" />
          </span>
          <span>
            9 stop
            <small>Klub Bilardowy</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="ghost-button" href="#rezerwacje">
          <CalendarDays size={18} aria-hidden="true" />
          Rezerwacje
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span>Menu</span>
        </button>

        <nav
          className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
          id="mobile-menu"
          aria-label="Menu mobilne"
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-cta" href={phoneHref} onClick={() => setIsMenuOpen(false)}>
            <Phone size={17} aria-hidden="true" />
            {phoneDisplay}
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/pool-hero-9stop.png"
          alt="Klimatyczny stół do pool bilarda z bilami w klubie 9 stop"
        />
        <div className="hero-shade" />

        <div className="hero-content">
          <div className="hero-logo-lockup" aria-label="Klub Bilardowy 9 stop">
            <img src="/logo-9stop-clean.png" alt="Klub Bilardowy 9 stop" />
          </div>
          <p className="eyebrow">Klub bilardowy w Poznaniu</p>
          <h1>
            Klub Bilardowy <span className="no-break">9 stop</span> - Twój czas na idealną grę
          </h1>
          <p className="hero-copy">
            Profesjonalne stoły Dynamic II, klimatyzowane wnętrza i świetnie
            zaopatrzony bar. Zagraj w poola lub snookera w najlepszej
            atmosferze w Poznaniu!
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#rezerwacje">
              Zarezerwuj stół online
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="text-link" href={phoneHref}>
              <Phone size={18} aria-hidden="true" />
              {phoneDisplay}
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Najważniejsze informacje">
          <div>
            <MapPin size={18} aria-hidden="true" />
            <span>Poznań, Klub Bilardowy 9 stop</span>
          </div>
          <div>
            <Clock3 size={18} aria-hidden="true" />
            <span>Pon-Pt: 17:00 - 01:00 | Sob: 17:00 - 02:00 | Niedz: 17:00 - 00:00</span>
          </div>
        </aside>
      </section>

      <section className="intro-band" id="o-klubie">
        <div className="intro-copy">
          <p className="eyebrow">O klubie</p>
          <h2>Pasja do bilardu, komfort dla graczy</h2>
        </div>
        <p>
          W klubie 9 stop łączymy miłość do sportu z komfortem na najwyższym
          poziomie. Bez względu na to, czy planujesz wieczór ze znajomymi, czy
          trenujesz przed turniejem - u nas znajdziesz idealne warunki.
        </p>
      </section>

      <section className="highlights">
        {clubReasons.map(({ icon: Icon, title, text }) => (
          <article className="highlight-card" key={title}>
            <Icon size={24} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="split-section" id="stoly">
        <div className="image-column" aria-hidden="true">
          <div className="ambient-frame frame-large" />
          <div className="ambient-frame frame-small" />
        </div>

        <div className="section-copy">
          <p className="eyebrow">Nasze stoły</p>
          <h2>Wybierz swoją grę</h2>
          <p>
            Pool, snooker, szybki wieczór ze znajomymi albo spokojny trening
            przed turniejem. 9 stop daje warunki, w których można grać na serio
            i odpoczywać bez pośpiechu.
          </p>

          <div className="stats-grid">
            <div>
              <strong>9ft</strong>
              <span>stoły Dynamic II</span>
            </div>
            <div>
              <strong>860</strong>
              <span>sukno Iwan Simonis</span>
            </div>
            <div>
              <strong>Pool + Snooker</strong>
              <span>dwa formaty gry</span>
            </div>
          </div>
        </div>
      </section>

      <section className="formats" aria-labelledby="oferta-heading">
        <div className="section-heading">
          <p className="eyebrow">Oferta</p>
          <h2 id="oferta-heading">Gra, bar i wieczór w dobrym stylu</h2>
        </div>

        <div className="experience-grid offer-grid">
          {offerCards.map((item) => (
            <article className="experience-card" key={item.title}>
              <span>{item.kicker}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="udogodnienia">
        <div className="section-heading">
          <p className="eyebrow">Udogodnienia</p>
          <h2>Komfort w każdym detalu</h2>
        </div>

        <div className="highlights amenities-grid">
          {amenities.map(({ icon: Icon, title, text }) => (
            <article className="highlight-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="membership">
        <div>
          <p className="eyebrow">Atmosfera 9 stop</p>
          <h2>Wieczór przy stole, który naprawdę ma swój rytm</h2>
        </div>

        <div className="membership-list">
          <p>
            <ShieldCheck size={20} aria-hidden="true" />
            Profesjonalny sprzęt dla osób, które chcą grać precyzyjnie.
          </p>
          <p>
            <UsersRound size={20} aria-hidden="true" />
            Przyjazna przestrzeń na spotkania ze znajomymi i dłuższe rozgrywki.
          </p>
          <p>
            <Tv size={20} aria-hidden="true" />
            Bar, chillout i sport na dużym ekranie między partiami.
          </p>
        </div>
      </section>

      <section className="reservation-section" id="rezerwacje">
        <div className="section-heading">
          <p className="eyebrow">Kontakt i rezerwacje</p>
          <h2>Rezerwacja stołów</h2>
          <p>
            Rezerwacje stolików przyjmujemy wyłącznie telefonicznie lub
            mailowo. Nie ma możliwości rezerwacji miejsc poprzez profil na
            Facebooku.
          </p>
        </div>

        <div className="reservation-layout">
          <div className="contact-card">
            <a className="contact-row" href={phoneHref}>
              <Phone size={22} aria-hidden="true" />
              <span>
                Zadzwoń do nas
                <strong>{phoneDisplay}</strong>
              </span>
            </a>
            <a className="contact-row" href={`mailto:${email}`}>
              <Mail size={22} aria-hidden="true" />
              <span>
                Napisz e-mail
                <strong>{email}</strong>
              </span>
            </a>
            <div className="contact-row">
              <Clock3 size={22} aria-hidden="true" />
              <div className="contact-content">
                Godziny otwarcia
                <div className="opening-hours">
                  {openingHours.map((item) => (
                    <div key={item.day}>
                      <span>{item.day}</span>
                      <strong>{item.hours}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form className="call-form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name">Imię</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Twoje imię"
              />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <input
                id="phone"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Numer kontaktowy"
                inputMode="tel"
              />
            </div>
            <div>
              <label htmlFor="game">Gra</label>
              <select id="game" name="game" value={form.game} onChange={updateField}>
                <option>Pool bilard</option>
                <option>Snooker</option>
                <option>Bar & spotkanie</option>
              </select>
            </div>
            <div>
              <label htmlFor="date">Preferowany termin</label>
              <input
                id="date"
                name="date"
                value={form.date}
                onChange={updateField}
                placeholder="Np. piątek 20:00"
              />
            </div>
            <div className="form-full">
              <label htmlFor="message">Wiadomość</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Liczba osób, rodzaj gry lub dodatkowe pytanie"
              />
            </div>
            <div className="form-actions">
              <a className="primary-button" href={mailtoHref}>
                Wyślij zapytanie e-mail
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="text-link" href={phoneHref}>
                Zadzwoń teraz
                <ChevronRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="form-note">
              Formularz przygotowuje wiadomość e-mail. Rezerwacja jest ważna
              dopiero po potwierdzeniu przez klub.
            </p>
          </form>
        </div>
      </section>

      <section className="map-section" aria-label="Mapa Google">
        <div className="map-copy">
          <p className="eyebrow">Mapa</p>
          <h2>Znajdź Klub Bilardowy 9 stop w Poznaniu</h2>
          <p>
            Mapa jest przygotowana jako wyszukiwana metka Google dla klubu.
            Dokładny adres można podmienić w jednym miejscu, gdy będzie gotowy.
          </p>
          <a className="text-link" href={mapsLink} target="_blank" rel="noreferrer">
            Otwórz w Google Maps
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <iframe
          className="google-map"
          title="Klub Bilardowy 9 stop - mapa Google"
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}

export default App;
