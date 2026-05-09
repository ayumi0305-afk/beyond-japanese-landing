/*
Design Philosophy: Reference-aligned Beyond Japanese landing page.
Use the provided horizontal logo without changing its aspect ratio. Use only user-provided photos. The page should feel like a warm Japanese learning companion, not a typical language school.
*/

import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Coffee,
  FileText,
  Globe2,
  Heart,
  Languages,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  NotebookText,
  Play,
  ShoppingBag,
  Sparkles,
  Star,
  Train,
  Video,
} from "lucide-react";
import { useState } from "react";

const logoSrc = "/manus-storage/beyond-japanese-logo_72442cbd.png";

const heroImages = [
  { src: "/manus-storage/hero_user_3_9b94a54c.webp", alt: "Daytime Japan travel scene" },
  { src: "/manus-storage/hero_user_1_c4fc8c3d.webp", alt: "Nighttime Japan travel scene" },
  { src: "/manus-storage/hero_user_4_17b058f9.webp", alt: "Daytime Japan city scene" },
  { src: "/manus-storage/hero_user_2_d776da40.webp", alt: "Nighttime Japan city scene" },
  { src: "/manus-storage/hero_user_5_050a089f.webp", alt: "Daytime bamboo forest in Japan" },
];

const profileImages = [
  { src: "/manus-storage/profile_user_1_08a7bc35.webp", alt: "Ayumi walking outdoors in Japan" },
  { src: "/manus-storage/profile_user_2_5a64ddaa.webp", alt: "Ayumi holding flowers" },
  { src: "/manus-storage/profile_user_3_1ee40be5.webp", alt: "Ayumi profile photo in Japan" },
  { src: "/manus-storage/profile_user_4_6b52a76c.webp", alt: "Ayumi lifestyle profile photo" },
];

const targetCards = [
  { icon: Briefcase, label: "Planning a trip\nto Japan" },
  { icon: MessageCircle, label: "Want to speak\nwith locals" },
  { icon: Heart, label: "Love Japanese culture,\nanime, or travel" },
  { icon: Leaf, label: "Starting from zero\nor feeling overwhelmed" },
];

const practicalScenes = [
  { icon: Coffee, title: "At a cafe", label: "Cafe / quiet Japan photo" },
  { icon: ShoppingBag, title: "At a convenience store", label: "Konbini / store photo" },
  { icon: Train, title: "At a station", label: "Train station photo" },
  { icon: MapPin, title: "Asking for directions", label: "Street / direction photo" },
];

const lessonFlow = [
  { icon: MessageCircle, title: "Casual conversation", text: "Begin with a relaxed check-in so speaking feels natural." },
  { icon: NotebookText, title: "Review", text: "Look back at useful phrases, questions, and your recent progress." },
  { icon: BookOpen, title: "Main topic", text: "Practice travel situations, roleplays, culture, anime, manga, or grammar support." },
  { icon: CalendarCheck, title: "Next steps", text: "Leave with clear notes, homework, and what to practice before the next lesson." },
];

const platformItems = [
  "Personal vocabulary review",
  "Linked vocabulary spreadsheet",
  "Lesson notes",
  "Messaging",
  "Booking system",
  "Mobile-friendly learning support",
];

const pricing = [
  { name: "Trial Lesson", price: "$15", detail: "30 min", note: "Book through Cal.com" },
  { name: "Private Lesson", price: "$30", detail: "50 min", note: "Continue via Wise or PayPal" },
  { name: "4 Lesson Pack", price: "$120", detail: "50 min × 4", note: "A simple rhythm for steady progress" },
];

const faqs = [
  {
    q: "Are complete beginners welcome?",
    a: "Yes. More than 60% of students are beginners, and many start around N5 or from zero. You can begin even if you only know a few words.",
  },
  {
    q: "Do I need to know hiragana first?",
    a: "No. Hiragana is helpful, but not required for your first lesson. Reading can be introduced gradually while keeping the focus on communication.",
  },
  {
    q: "How often should I study?",
    a: "Many students begin once a week, especially 3–6 months before a Japan trip. Your lesson rhythm can be adjusted to your schedule and goals.",
  },
  {
    q: "What happens in the trial lesson?",
    a: "We talk about your goals, your Japan plans, your learning background, and what kind of Japanese would help you feel more confident.",
  },
  {
    q: "Is homework included?",
    a: "Yes. Homework and review materials can be included so you know exactly what to practice between lessons.",
  },
  {
    q: "What materials are used?",
    a: "Lessons can include IRODORI for practical travel Japanese and GENKI for structured grammar learning, depending on your goals.",
  },
  {
    q: "Are lessons personalized?",
    a: "Yes. Lessons can include travel roleplays, seasonal Japanese culture, anime and manga topics, grammar support, or conversation practice.",
  },
];

function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-slot ${className}`}>
      <span>Photo</span>
      <strong>{label}</strong>
    </div>
  );
}

function HeroFadeSlider() {
  return (
    <div className="hero-slider hero-photo">
      {heroImages.map((image, index) => (
        <img key={image.src} src={image.src} alt={image.alt} className="hero-slide" style={{ animationDelay: `${index * 4.5}s` }} />
      ))}
    </div>
  );
}

function ProfileCarousel() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const goTo = (index: number) => setActive((index + profileImages.length) % profileImages.length);
  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const diff = touchStart - clientX;
    if (Math.abs(diff) > 38) goTo(active + (diff > 0 ? 1 : -1));
    setTouchStart(null);
  };

  return (
    <div className="profile-carousel" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}>
      <div className="profile-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {profileImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} draggable="false" />)}
      </div>
      <button type="button" className="profile-click-zone profile-click-left" aria-label="Previous Ayumi photo" onClick={() => goTo(active - 1)} />
      <button type="button" className="profile-click-zone profile-click-right" aria-label="Next Ayumi photo" onClick={() => goTo(active + 1)} />
      <div className="profile-dots" aria-label="Ayumi photo selector">
        {profileImages.map((image, index) => (
          <button key={image.src} type="button" aria-label={`Show Ayumi photo ${index + 1}`} aria-current={active === index} onClick={() => goTo(index)} />
        ))}
      </div>
    </div>
  );
}

function FounderPhilosophy() {
  const [open, setOpen] = useState(false);
  return (
    <div className="founder-philosophy">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>Read Ayumi’s philosophy</span>
        <ChevronDown size={18} className={open ? "is-open" : ""} />
      </button>
      {open && (
        <div className="founder-letter">
          <p>
            I believe that speaking the local language can completely change the way we experience a place. Even a small phrase in Japanese — a greeting at a cafe, a question at a station, or a simple thank you at a convenience store — can create warmth, smiles, and a feeling of human connection.
          </p>
          <p>
            To me, Japanese is not only about words. It is a bridge that helps people feel closer to each other. I hope Japan becomes a special place in my students’ hearts, not only a destination on a map or a list of famous sightseeing spots.
          </p>
          <p>
            There is a quieter, deeper side of Japan waiting in everyday moments. Communication does not need to be perfect to be meaningful. Mistakes are welcome. I also know the courage it takes to speak a second language, and I want every lesson to feel like a safe place to try.
          </p>
        </div>
      )}
    </div>
  );
}

function FAQItem({ q, a, openByDefault = false }: { q: string; a: string; openByDefault?: boolean }) {
  const [open, setOpen] = useState(openByDefault);
  return (
    <article className="faq-row">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronDown size={18} className={open ? "is-open" : ""} />
      </button>
      {open && <p>{a}</p>}
    </article>
  );
}

export default function Home() {
  return (
    <div className="page-shell" id="top">
      <header className="topbar">
        <a className="logo-link" href="#top" aria-label="Beyond Japanese home"><img src={logoSrc} alt="Beyond Japanese" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#learn">What You’ll Learn</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a className="nav-cta" href="#trial">Book a Free Trial Lesson</a>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={24} /></button>
      </header>

      <main>
        <section className="hero-panel hero-immersive">
          <HeroFadeSlider />
          <div className="hero-copy">
            <p className="kicker">Japanese learning for travelers and Japan lovers</p>
            <h1>Explore Beyond<br />with Japanese</h1>
            <p>Beginner-friendly Japanese lessons for travelers and Japan lovers who want more than just phrases — they want connection.</p>
            <div className="hero-actions">
              <a className="main-button" href="#trial">Book a Free Trial Lesson <ArrowRight size={18} /></a>
              <a className="outline-button" href="#learn">View Curriculum</a>
            </div>
            <p className="hero-reflection">Language changes the way you experience a place.</p>
          </div>
        </section>

        <section className="target-section" id="courses">
          <h2>Is this you?</h2>
          <p className="section-lead">Beyond Japanese is for learners who want Japan to feel less like a tourist destination and more like a place they can truly connect with.</p>
          <div className="target-grid">
            {targetCards.map((item) => (
              <article className="target-item" key={item.label}><span className="soft-icon"><item.icon size={28} /></span><p>{item.label.split("\n").map((line) => <span key={line}>{line}</span>)}</p></article>
            ))}
          </div>
        </section>

        <section className="about-card" id="about">
          <ProfileCarousel />
          <div className="about-text">
            <p className="kicker">About your coach</p>
            <h2>Hi, I’m Ayumi.</h2>
            <p>I’m a Japanese teacher, learning partner, and personal guide for students who want to experience Japan more deeply through language.</p>
            <p>With 3 years of teaching experience, more than 50 online students, and a graduate school background in education, I create warm, customized lessons where communication matters more than perfection.</p>
            <p>We can talk about Kyoto life, travel situations, seasonal culture, anime, manga, or structured grammar — always at your pace.</p>
            <div className="signature-line">Ayumi <Heart size={16} /></div>
            <FounderPhilosophy />
          </div>
        </section>

        <section className="problem-solution">
          <div><p className="kicker">More than a language school</p><h2>Learning Japanese can make Japan feel personal.</h2></div>
          <div className="problem-copy">
            <p>This is not a strict JLPT academy or a corporate tutoring service. Beyond Japanese is a cultural bridge for people who want to feel connected, not just prepared.</p>
            <p>JLPT and textbook support are available when helpful, but the heart of each lesson is practical communication, confidence, and the joy of being understood.</p>
          </div>
        </section>

        <section className="journey-section" id="how">
          <h2>How lessons work</h2>
          <p className="section-lead">Lessons take place on Google Meet and follow a calm, personalized rhythm.</p>
          <div className="journey-line">
            {lessonFlow.map((item, index) => (
              <div className="journey-step" key={item.title}><span className="journey-icon"><item.icon size={26} /></span><h3>{item.title}</h3><p>{item.text}</p>{index < lessonFlow.length - 1 && <ArrowRight className="step-arrow" size={25} />}</div>
            ))}
          </div>
        </section>

        <section className="practical-section" id="learn">
          <div className="section-title-row"><div><h2>Practical Japanese for real moments</h2><p>Learn what you actually need for cafes, shrines, stations, food, directions, and small talk with locals.</p></div></div>
          <div className="scene-grid">
            {practicalScenes.map((scene) => (
              <article className="scene-card" key={scene.title}><PhotoSlot label={scene.label} className="scene-photo" /><span className="scene-icon"><scene.icon size={20} /></span><h3>{scene.title}</h3></article>
            ))}
          </div>
        </section>

        <section className="portal-section platform-section">
          <div className="portal-copy"><p className="kicker">Student Learning Space</p><h2>Your personal learning space, not just a shared folder.</h2><p>Each student receives organized, mobile-friendly support for lessons, vocabulary, messages, booking, and review.</p></div>
          <div className="platform-preview">
            <div className="platform-card"><FileText size={19} /><strong>Lesson notes</strong><span>Review what you learned anytime.</span></div>
            <div className="platform-card"><Languages size={19} /><strong>Vocabulary spreadsheet</strong><span>Keep useful words connected to each lesson.</span></div>
            <div className="platform-card"><MessageCircle size={19} /><strong>Messaging & booking</strong><span>Stay organized between lessons.</span></div>
            <div className="platform-card"><Video size={19} /><strong>Short explainer video</strong><span>A space for platform previews or screenshots.</span></div>
          </div>
        </section>

        <section className="growth-section">
          <div><p className="kicker">See your growth</p><h2>Confidence becomes visible when you can hear your progress.</h2></div>
          <p>Students receive their first lesson recording and progress recordings every few months. Looking back helps you notice the courage, clarity, and confidence you are building step by step.</p>
        </section>

        <section className="testimonial-section" id="reviews">
          <h2>What students are saying</h2>
          <div className="testimonial-card"><button aria-label="Previous testimonial">‹</button><div className="testimonial-avatar">J</div><div className="testimonial-copy"><p>Ayumi’s lessons helped me feel comfortable speaking, even when I made mistakes. Japan felt warmer when I could use simple Japanese.</p><span>Jessica, Canada</span></div><div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div><button aria-label="Next testimonial">›</button></div>
        </section>

        <section className="pricing-section" id="pricing">
          <h2>Simple pricing</h2>
          <div className="pricing-grid">
            {pricing.map((item) => <article className="pricing-card" key={item.name}><h3>{item.name}</h3><strong>{item.price}</strong><p>{item.detail}</p><span>{item.note}</span></article>)}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-heading"><h2>FAQ</h2><p>Beginner questions are welcome. You do not need to arrive already confident.</p></div>
          <div className="faq-list">{faqs.map((faq, index) => <FAQItem key={faq.q} {...faq} openByDefault={index === 0} />)}</div>
        </section>

        <section className="final-banner" id="trial">
          <PhotoSlot label="Cafe / Japan travel photo" className="cta-photo" />
          <div className="final-card"><h2>Japan becomes different when you can connect through language.</h2><p>You are not just signing up for Japanese lessons. You are starting a deeper relationship with Japan.</p><a className="white-button" href="#top">Book Your Trial Lesson <ArrowRight size={18} /></a><small>Trial Lesson — $15 / 30 min</small></div>
        </section>
      </main>

      <footer className="footer-bar"><img src={logoSrc} alt="Beyond Japanese" /><nav><a href="#how">How it works</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="/ja">日本語確認</a></nav></footer>
    </div>
  );
}
