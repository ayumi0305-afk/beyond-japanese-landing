/*
Design Philosophy: Quiet Japanese Modernism with a lifestyle coaching sensibility.
This page must use the provided horizontal logo without distorting its aspect ratio. No generated photos, illustrations, or extra asset creation are used. Photo areas are intentional placeholders for user-provided images.
*/

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Coffee,
  CreditCard,
  FileText,
  Heart,
  Hotel,
  Languages,
  MapPin,
  MessageCircle,
  NotebookText,
  Plane,
  ShoppingBag,
  Sparkles,
  Star,
  Train,
} from "lucide-react";
import { useState } from "react";

const logoSrc = "/manus-storage/beyond-japanese-logo_72442cbd.png";

const audienceCards = [
  {
    icon: Plane,
    title: "You’re planning a trip to Japan",
    text: "You want to order food, ask simple questions, and enjoy the little moments without freezing up.",
  },
  {
    icon: Heart,
    title: "You love Japan and want to feel closer",
    text: "Anime, food, culture, travel, daily life — you want Japanese to feel personal, not distant.",
  },
  {
    icon: MessageCircle,
    title: "Apps helped, but speaking still feels hard",
    text: "You know some words, but real conversation still feels too fast, too scary, or too uncertain.",
  },
  {
    icon: Sparkles,
    title: "You need warm support, not pressure",
    text: "You want lessons that feel calm, encouraging, and made for complete beginners.",
  },
];

const learnItems = [
  { icon: ShoppingBag, title: "Restaurants", text: "Order with confidence, ask for recommendations, and understand simple replies." },
  { icon: Coffee, title: "Convenience stores & cafes", text: "Use everyday phrases for paying, choosing items, and making small requests." },
  { icon: Train, title: "Trains", text: "Ask about platforms, tickets, directions, and what to say when you feel unsure." },
  { icon: Hotel, title: "Hotels", text: "Check in, ask for help, and communicate politely in common travel situations." },
  { icon: MapPin, title: "Real conversations", text: "Practice short, natural exchanges you can actually use while traveling." },
  { icon: Languages, title: "Travel situations", text: "Build simple phrases around your itinerary, interests, and personal goals." },
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

const testimonials = [
  {
    name: "Jessica",
    location: "Canada",
    text: "Before learning with Ayumi, I was nervous to speak even one sentence. During my trip to Tokyo, I ordered at cafés and asked for directions. It felt amazing.",
  },
  {
    name: "Maya",
    location: "Australia",
    text: "I had tried apps for months, but I still couldn’t speak. These lessons helped me understand what to say in real situations, and I finally felt comfortable.",
  },
  {
    name: "Daniel",
    location: "United States",
    text: "Ayumi creates such a kind atmosphere. I never felt embarrassed as a beginner. Japanese started to feel connected to my travel dreams, not like homework.",
  },
];

const flow = [
  {
    step: "01",
    title: "Book a free trial",
    text: "Meet Ayumi online and experience a calm, beginner-friendly lesson.",
  },
  {
    step: "02",
    title: "Talk about your goals",
    text: "Share your Japan plans, interests, speaking worries, and what you want to feel confident doing.",
  },
  {
    step: "03",
    title: "Receive your plan",
    text: "Get a personalized learning path focused on practical communication, not overwhelming grammar lists.",
  },
  {
    step: "04",
    title: "Keep learning with support",
    text: "Practice real situations step by step with notes, review materials, and warm guidance.",
  },
];

const faqs = [
  {
    question: "I’m a complete beginner. Is this really okay for me?",
    answer: "Yes. Beyond Japanese is designed for complete beginners. You do not need to know grammar rules or have speaking experience before your first lesson.",
  },
  {
    question: "Do I need to know hiragana first?",
    answer: "No. Hiragana is helpful, but it is not required to start. Ayumi can support you from the very beginning and introduce reading step by step when it makes sense for your goals.",
  },
  {
    question: "How often should I take lessons?",
    answer: "Many students begin with one lesson per week. If your Japan trip is coming soon, Ayumi can help you choose a rhythm that fits your timeline and energy level.",
  },
  {
    question: "What payment methods are available?",
    answer: "Payment details can be discussed during the free trial. The goal is to keep the process clear and comfortable before you decide to continue.",
  },
  {
    question: "How do online lessons work?",
    answer: "Lessons are held online with a simple video call setup. You will receive materials, notes, and review support through the student portal.",
  },
];

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-placeholder ${className}`} aria-label={label}>
      <div>
        <span>Photo placeholder</span>
        <strong>{label}</strong>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="faq-item">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <ChevronDown className={open ? "rotate" : ""} size={20} />
      </button>
      {open && <p>{answer}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Beyond Japanese home">
          <img src={logoSrc} alt="Beyond Japanese" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#for-you">For you</a>
          <a href="#about">About</a>
          <a href="#learn">Lessons</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#trial">Book a Free Trial</a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy fade-up">
            <p className="eyebrow">Beginner-friendly Japanese coaching</p>
            <h1>Learn Japanese. Connect with Japan. Expand your world.</h1>
            <p className="hero-subtitle">Beginner-friendly Japanese lessons for travelers and Japan lovers.</p>
            <p className="hero-text">
              Build the confidence to use simple Japanese in real moments — from cafés and trains to warm conversations with people you meet in Japan.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#trial">
                Book a Free Trial Lesson <ArrowRight size={18} />
              </a>
              <a className="secondary-link" href="#how-it-works">See how it works</a>
            </div>
          </div>
          <div className="hero-visual fade-up delay-1">
            <PhotoPlaceholder label="Hero travel photo" />
            <div className="connection-card">
              <Heart size={24} />
              <div>
                <strong>It’s more than language.</strong>
                <span>It’s connection.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="for-you" className="section-pad audience-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Who this is for</p>
            <h2>Designed for beginners who want Japan to feel closer.</h2>
            <p>
              If Japanese has ever felt too fast, too formal, or too hard to use in real life, you are exactly the kind of learner Beyond Japanese was created for.
            </p>
          </div>
          <div className="audience-grid">
            {audienceCards.map((card) => (
              <article className="soft-card" key={card.title}>
                <div className="icon-badge">
                  <card.icon size={25} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad problem-section">
          <div className="problem-card">
            <div>
              <p className="eyebrow">Problem & solution</p>
              <h2>Traditional learning can feel overwhelming. Speaking should feel possible.</h2>
            </div>
            <div className="problem-columns">
              <article>
                <h3>Why beginners get stuck</h3>
                <p>
                  Many learners start with apps, textbooks, or long grammar explanations. They learn words, but when it is time to speak, everything feels too complicated to use.
                </p>
              </article>
              <article>
                <h3>How Beyond Japanese helps</h3>
                <p>
                  Lessons focus on practical communication, emotional confidence, and the real situations you care about. You learn what to say, when to say it, and how to feel calm while speaking.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="about-photo-wrap">
            <PhotoPlaceholder label="Ayumi profile photo" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">About your coach</p>
            <h2>Hi, I’m Ayumi.</h2>
            <p>
              I’m a certified Japanese teacher who helps beginners learn in a way that feels natural, practical, and encouraging. My lessons are not about memorizing everything perfectly. They are about helping you feel more connected to Japan, one useful conversation at a time.
            </p>
            <p>
              Together, we will build lessons around your goals, your pace, and the moments you want to experience — ordering at a restaurant, asking for help at a station, chatting at a café, or simply feeling more confident during your trip.
            </p>
            <div className="trust-list">
              <span><BadgeCheck size={18} /> Certified Japanese teacher</span>
              <span><Heart size={18} /> Supportive atmosphere</span>
              <span><NotebookText size={18} /> Personalized learning</span>
            </div>
          </div>
        </section>

        <section id="learn" className="section-pad learn-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">What you’ll learn</p>
              <h2>Practical Japanese for real moments.</h2>
            </div>
            <p>Learn the phrases, listening patterns, and small confidence-building steps that help Japan feel easier to enjoy.</p>
          </div>
          <div className="learn-grid">
            {learnItems.map((item) => (
              <article className="learn-card" key={item.title}>
                <div className="mini-photo">
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad portal-section">
          <div className="portal-panel">
            <div className="portal-copy">
              <p className="eyebrow">Student portal</p>
              <h2>Your learning materials, organized in one calm place.</h2>
              <p>
                Students receive access to a simple portal that supports each lesson and makes review easier between sessions. Everything is designed to help you remember, practice, and return to useful Japanese with less stress.
              </p>
            </div>
            <div className="portal-grid">
              {portalItems.map((item, index) => (
                <div className="portal-item" key={item}>
                  {index % 3 === 0 ? <FileText size={19} /> : index % 3 === 1 ? <BookOpen size={19} /> : <CheckCircle2 size={19} />}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad testimonials-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Student stories</p>
              <h2>Confidence can change the way Japan feels.</h2>
            </div>
            <p>Stories from learners who began with hesitation and discovered that even simple Japanese can make travel feel more personal.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="stars" aria-label="Five stars">
                  {[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                </div>
                <p>“{testimonial.text}”</p>
                <div className="student-line">
                  <div className="student-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section-pad flow-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Lesson flow</p>
            <h2>Your Japanese journey, made simple.</h2>
            <p>Start gently, talk about what matters to you, and build a plan that helps you use Japanese in real life.</p>
          </div>
          <div className="flow-grid">
            {flow.map((item) => (
              <article className="flow-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section-pad faq-section">
          <div className="faq-intro">
            <p className="eyebrow">FAQ</p>
            <h2>Beginner questions are always welcome.</h2>
            <p>There is no need to arrive prepared or already confident. The whole point is to begin from where you are.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} {...faq} defaultOpen={index === 0} />
            ))}
          </div>
        </section>

        <section id="trial" className="section-pad final-cta-section">
          <div className="final-cta">
            <div>
              <p className="eyebrow light">Begin with one gentle step</p>
              <h2>Start Your Japanese Journey Today</h2>
              <p>
                Learn Japanese as a way to feel closer to Japan — through practical words, calm support, and lessons made for real connection.
              </p>
            </div>
            <a className="primary-button light-button" href="#top">
              Book a Free Trial Lesson <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src={logoSrc} alt="Beyond Japanese" />
        <p>Learn. Connect. Expand.</p>
        <div>
          <a href="#for-you">For you</a>
          <a href="#about">About</a>
          <a href="#learn">Lessons</a>
          <a href="#trial">Free trial</a>
        </div>
      </footer>
    </div>
  );
}
