/*
Design Philosophy: Reference-aligned Beyond Japanese landing page.
Use the provided horizontal logo without changing its aspect ratio. Do not generate or add new visual assets. Every photo area is a replaceable placeholder for user-provided photos.
*/

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Coffee,
  FileText,
  Globe2,
  Heart,
  Hotel,
  Languages,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  NotebookText,
  Play,
  ShoppingBag,
  Star,
  Train,
} from "lucide-react";
import { useState } from "react";

const logoSrc = "/manus-storage/beyond-japanese-logo_72442cbd.png";

const targetCards = [
  { icon: Briefcase, label: "Planning a trip\nto Japan" },
  { icon: MessageCircle, label: "Want practical\nJapanese" },
  { icon: Heart, label: "Love Japan and\nwant to connect" },
  { icon: Leaf, label: "Feel overwhelmed by\ntraditional learning" },
];

const practicalScenes = [
  { icon: ShoppingBag, title: "At the convenience store", label: "Konbini / store photo" },
  { icon: Train, title: "At the station", label: "Train station photo" },
  { icon: Coffee, title: "At a restaurant", label: "Restaurant / cafe photo" },
  { icon: MapPin, title: "Asking for directions", label: "Street / direction photo" },
];

const journey = [
  { icon: BookOpen, title: "1. Learn", text: "Short, beginner-friendly lessons" },
  { icon: MessageCircle, title: "2. Practice", text: "Real-life examples and shadowing" },
  { icon: Heart, title: "3. Use", text: "Apply in everyday situations in Japan" },
  { icon: Globe2, title: "4. Connect", text: "Feel confident and enjoy deeper experiences" },
];

const portalItems = [
  "Vocabulary sheets",
  "Lesson notes",
  "Flashcards",
  "Quizzes",
  "Personalized study plans",
  "Homework",
  "Review materials",
];

const faqs = [
  {
    q: "I’m a complete beginner. Is this okay for me?",
    a: "Yes. Beyond Japanese is designed for complete beginners. You can start even if you only know a few words or have never spoken Japanese before.",
  },
  {
    q: "Do I need to know hiragana first?",
    a: "No. Hiragana is helpful, but not required for your first lesson. Ayumi can introduce reading gradually while keeping the focus on useful communication.",
  },
  {
    q: "How often should I take lessons?",
    a: "Many students start once a week. If your Japan trip is coming soon, your plan can be adjusted around your schedule and goals.",
  },
  {
    q: "What payment methods are available?",
    a: "Payment details can be explained clearly during the free trial, so you can decide comfortably before continuing.",
  },
  {
    q: "How do online lessons work?",
    a: "Lessons are held online. You receive lesson notes, review materials, homework, and personalized study support through the student portal.",
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
        <a className="logo-link" href="#top" aria-label="Beyond Japanese home">
          <img src={logoSrc} alt="Beyond Japanese" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
        </nav>
        <a className="nav-cta" href="#trial">Start for Free</a>
        <button className="mobile-menu" aria-label="Open menu"><Menu size={24} /></button>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <h1>Learn Japanese.<br />Connect with Japan.<br />Expand your world.</h1>
            <p>A coaching program for beginners and travelers who want to feel more confident and connected in Japan.</p>
            <div className="hero-actions">
              <a className="main-button" href="#trial">Start Your Journey <ArrowRight size={18} /></a>
              <a className="video-link" href="#about"><Play size={15} /> Watch intro (1 min)</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <PhotoSlot label="Hero station / travel photo" className="hero-photo" />
            <div className="hero-note">
              <span className="round-icon"><Heart size={22} /></span>
              <p><strong>It’s more than language.</strong><br />It’s connection.</p>
            </div>
          </div>
        </section>

        <section className="target-section" id="courses">
          <h2>Designed for Japan lovers and travelers</h2>
          <div className="target-grid">
            {targetCards.map((item) => (
              <article className="target-item" key={item.label}>
                <span className="soft-icon"><item.icon size={28} /></span>
                <p>{item.label.split("\n").map((line) => <span key={line}>{line}</span>)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-card" id="about">
          <PhotoSlot label="Ayumi profile photo" className="about-photo" />
          <div className="about-text">
            <p className="kicker">About your coach</p>
            <h2>Hi, I’m Ayumi.</h2>
            <p>I’m a certified Japanese teacher who helps beginners and travelers learn Japanese in a way that feels natural, practical, and enjoyable.</p>
            <p>I create a warm and supportive atmosphere, with personalized lessons that help you feel more connected to Japan — not overwhelmed by rules.</p>
            <div className="signature-line">Ayumi <Heart size={16} /></div>
          </div>
        </section>

        <section className="problem-solution">
          <div>
            <p className="kicker">A different kind of Japanese lesson</p>
            <h2>Less overwhelm. More real communication.</h2>
          </div>
          <div className="problem-copy">
            <p>Traditional learning can feel like you need to master everything before you speak. Beyond Japanese focuses on small, real phrases you can use in daily travel situations.</p>
            <p>You build confidence through practice, gentle correction, and lessons shaped around your Japan goals.</p>
          </div>
        </section>

        <section className="practical-section">
          <div className="section-title-row">
            <div>
              <h2>Practical Japanese for real moments</h2>
              <p>Learn what you actually need, when you need it.</p>
            </div>
          </div>
          <div className="scene-grid">
            {practicalScenes.map((scene) => (
              <article className="scene-card" key={scene.title}>
                <PhotoSlot label={scene.label} className="scene-photo" />
                <span className="scene-icon"><scene.icon size={20} /></span>
                <h3>{scene.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="how">
          <h2>Your learning journey, made simple</h2>
          <div className="journey-line">
            {journey.map((item, index) => (
              <div className="journey-step" key={item.title}>
                <span className="journey-icon"><item.icon size={26} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {index < journey.length - 1 && <ArrowRight className="step-arrow" size={25} />}
              </div>
            ))}
          </div>
        </section>

        <section className="portal-section">
          <div className="portal-copy">
            <p className="kicker">Student portal</p>
            <h2>Your materials stay organized.</h2>
            <p>Students receive access to vocabulary sheets, lesson notes, flashcards, quizzes, study plans, homework, and review materials.</p>
          </div>
          <div className="portal-list">
            {portalItems.map((item, index) => (
              <span key={item}>{index % 2 === 0 ? <FileText size={17} /> : <CheckCircle2 size={17} />} {item}</span>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <h2>What students are saying</h2>
          <div className="testimonial-card">
            <button aria-label="Previous testimonial">‹</button>
            <div className="testimonial-avatar">J</div>
            <div className="testimonial-copy">
              <p>Ayumi’s way of teaching is so kind and easy to follow. I finally feel confident speaking Japanese.</p>
              <span>Jessica, Canada</span>
            </div>
            <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <button aria-label="Next testimonial">›</button>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-heading">
            <h2>FAQ</h2>
            <p>Beginner questions are welcome. You do not need to arrive already confident.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => <FAQItem key={faq.q} {...faq} openByDefault={index === 0} />)}
          </div>
        </section>

        <section className="final-banner" id="trial">
          <PhotoSlot label="Cafe / Japan travel photo" className="cta-photo" />
          <div className="final-card">
            <h2>Your Japan adventure starts here.</h2>
            <p>Take the first step toward real connection and unforgettable experiences.</p>
            <a className="white-button" href="#top">Start for Free <ArrowRight size={18} /></a>
            <small>No credit card required</small>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <img src={logoSrc} alt="Beyond Japanese" />
        <nav>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#faq">FAQ</a>
        </nav>
      </footer>
    </div>
  );
}
