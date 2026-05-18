import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageShell } from "./Home";
import "./faq.css";

const BOOK_TRIAL_URL = "https://cal.com/beyond-japanese-lesson/30min";

interface FAQEntry { q: string; a: string; }
interface Category { prefix: string; title: string; items: FAQEntry[]; }

const categories: Category[] = [
  {
    prefix: "start",
    title: "Getting Started",
    items: [
      {
        q: "Do I need to know any Japanese before starting?",
        a: "Not at all. Most students start as complete beginners. We'll begin from where you are — even if that's hiragana from scratch — and build at a pace that feels comfortable for you.",
      },
      {
        q: "What does a trial lesson look like?",
        a: "A relaxed 30-minute conversation. We'll chat about why you want to learn Japanese, what your trip or goals look like, and try a small piece of real Japanese together. No tests, no pressure — just a chance to see if learning with me feels right for you.",
      },
      {
        q: "What if I'm shy about speaking?",
        a: "That's very normal. Lessons are designed so you build confidence slowly — we start small, use phrases you'll actually want to say, and there's no pressure to be perfect. Many students who started shy now speak comfortably.",
      },
    ],
  },
  {
    prefix: "lessons",
    title: "Lessons & Learning",
    items: [
      {
        q: "How long are the lesson sessions?",
        a: "Trial lessons are 30 minutes, so you can meet me without pressure. Regular private lessons are 50 minutes, which gives time for a warm-up conversation, focused learning, speaking practice, and a short review without rushing.",
      },
      {
        q: "What level are these lessons for?",
        a: "Beginner-friendly through lower intermediate. Lessons are most useful for travelers, hobby learners, and anyone who wants practical Japanese for real conversations rather than test prep.",
      },
      {
        q: "Can I focus on specific topics like travel, food, or culture?",
        a: "Absolutely. Lessons are personalized — we can spend time on travel phrases, Kyoto-area culture, anime and manga vocabulary, restaurant Japanese, or anything else you're drawn to.",
      },
      {
        q: "Do I get materials after the lesson?",
        a: "Yes. After each lesson, you'll receive lesson notes, a vocabulary list, and optional homework on your personal dashboard, so you can review anytime between lessons.",
      },
    ],
  },
  {
    prefix: "schedule",
    title: "Scheduling",
    items: [
      {
        q: "How do I book a lesson?",
        a: "Trial lessons are booked through Cal.com — you'll pick a time that works for both of us. After the trial, continuing students book directly with me by message so we can find a rhythm that suits your week.",
      },
      {
        q: "What happens if I need to reschedule?",
        a: "Life happens. You can reschedule up to 24 hours before your lesson at no charge — just send me a message and we'll find a new time that works for you.",
      },
      {
        q: "What time zones do you work with?",
        a: "Lessons are based in Japan time, and I'm flexible with students in Asia, Europe, and parts of North America. We'll find a time that fits both of our schedules during the trial.",
      },
    ],
  },
  {
    prefix: "payment",
    title: "Payments",
    items: [
      {
        q: "How much do lessons cost?",
        a: "Trial lessons are $20 for 30 minutes. Single private lessons are $40 for 50 minutes. The Beyond Starter Plan is $140 for 4 personalized lessons — a gentle beginner-friendly journey designed for steady progress.",
      },
      {
        q: "How do I pay?",
        a: "Trial lessons are paid through the Cal.com booking page. For continuing lessons and the Starter Plan, I accept Wise and PayPal for easy international payments.",
      },
      {
        q: "Do lesson packs expire?",
        a: "There's no harsh expiry. Lessons in the Starter Plan can be used at your own pace across several weeks or months. If life gets busy, we'll just pause and resume when you're ready.",
      },
    ],
  },
  {
    prefix: "travel",
    title: "Travel & Practical Japanese",
    items: [
      {
        q: "I'm visiting Japan soon. How early should I start?",
        a: "Even a few lessons before your trip make a real difference. If you're flexible, starting 4–8 weeks before travel gives time to build the core phrases that come up at konbini, restaurants, stations, and shops.",
      },
      {
        q: "Do you teach polite Japanese, casual Japanese, or both?",
        a: "Both — naturally. We'll focus on the polite forms you'll need with shopkeepers, station staff, and new people, and add casual expressions when you're chatting with friends or watching shows.",
      },
      {
        q: "Will you help me prepare for specific situations on my trip?",
        a: "Yes. If you tell me your itinerary or the situations you're most nervous about — ordering at an izakaya, asking for directions, checking in at a ryokan — we can practice them together before you go.",
      },
    ],
  },
  {
    prefix: "tech",
    title: "Technical Questions",
    items: [
      {
        q: "What platform do lessons happen on?",
        a: "Lessons take place over Zoom. You'll get a calendar invite with the link once you book. No special software is needed — just a quiet space and a stable internet connection.",
      },
      {
        q: "Do I need a textbook?",
        a: "No textbook required. All materials, notes, and vocabulary lists are provided through your personal student dashboard, which you can access anytime between lessons.",
      },
      {
        q: "What if my internet drops mid-lesson?",
        a: "It happens. If we lose connection, just rejoin the call — I'll be waiting. If we can't reconnect, we'll reschedule the remaining time at no charge.",
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item${isOpen ? " open" : ""}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && <div className="faq-a">{a}</div>}
    </div>
  );
}

function FAQSection({ index, title, items, prefix, openKey, setOpenKey }: {
  index: string; title: string; items: FAQEntry[];
  prefix: string; openKey: string | null; setOpenKey: (k: string | null) => void;
}) {
  return (
    <section className="faq-section">
      <div className="faq-section-head">
        <span className="index">{index}</span>
        <h2>{title}</h2>
      </div>
      <div className="faq-section-list">
        {items.map((it, i) => {
          const key = `${prefix}-${i}`;
          return (
            <FAQItem
              key={key}
              q={it.q}
              a={it.a}
              isOpen={openKey === key}
              onToggle={() => setOpenKey(openKey === key ? null : key)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <PageShell>
      <main className="faq-page">
        <section className="faq-hero" data-screen-label="01 FAQ Hero">
          <div className="container">
            <span className="eyebrow">FAQ</span>
            <h1>Common Questions</h1>
            <p>Everything you need to know before starting your Japanese journey.</p>
          </div>
        </section>

        <div className="faq-body">
          {categories.map((cat, i) => (
            <FAQSection
              key={cat.prefix}
              index={String(i + 1).padStart(2, "0")}
              title={cat.title}
              items={cat.items}
              prefix={cat.prefix}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          ))}
        </div>

        <section className="faq-cta" data-screen-label="07 FAQ Footer CTA">
          <div className="faq-cta-inner">
            <h2>Still have questions?</h2>
            <p>I'd be happy to help you find the right starting point.</p>
            <a
              href={BOOK_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="main-button"
            >
              Book Your Trial Lesson <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
