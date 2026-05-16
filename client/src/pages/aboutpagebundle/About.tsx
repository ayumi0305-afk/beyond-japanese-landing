import { ArrowRight, Heart, Leaf, MessageCircle, ShoppingBag } from "lucide-react";
import { Fragment } from "react";
import { PageShell } from "./Home";
import "./about.css";

const BOOK_TRIAL_URL = "https://cal.com/beyond-japanese-lesson/30min";

const principles = [
  {
    Icon: MessageCircle,
    title: "Language is connection.",
    desc: "Speaking the local language changes the way we experience a place.",
  },
  {
    Icon: ShoppingBag,
    title: "Small moments matter.",
    desc: "A greeting at a café, a question at a station — these moments create warmth and trust.",
  },
  {
    Icon: Heart,
    title: "Closer to people,\ncloser to Japan.",
    desc: "Japanese is a bridge that helps us feel closer to each other.",
  },
  {
    Icon: Leaf,
    title: "A quieter Japan\nreveals more.",
    desc: "Everyday moments hold deep meaning. Communication doesn't need to be perfect — sincerity is enough.",
  },
];

export default function About() {
  return (
    <PageShell>
      <main className="about-page">
        {/* Top intro */}
        <section className="about-intro" data-screen-label="01 About Intro">
          <div className="container">
            <div className="about-intro-grid">
              <div className="about-intro-left">
                <span className="eyebrow">About Beyond Japanese</span>
                <h1>Japanese learning shaped by real human connection.</h1>
                <span className="about-divider" aria-hidden="true" />
              </div>
              <div className="about-intro-right">
                <p>
                  Beyond Japanese was created for people who want Japan to become more than a destination —
                  a place they can feel connected to through language and culture.
                </p>
                <p>
                  Here, you'll learn practical Japanese for real-life situations with a teacher who understands
                  both the beauty and the everyday life of Japan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story + philosophy panel */}
        <section className="about-panel" data-screen-label="02 About Story">
          <div className="about-panel-inner">
            <div className="story-grid">
              <div className="story-photo">
                <img src="/images/ayumi-arashiyama.JPEG" alt="Ayumi in Kyoto" />
              </div>
              <div className="story-copy">
                <span className="eyebrow">Ayumi's Story</span>
                <h2>Certified teacher, gentle guide, and language bridge.</h2>
                <span className="about-divider" aria-hidden="true" />
                <p>
                  Ayumi brings teaching experience, an educational background, and a love for everyday Japanese
                  culture into each lesson.
                </p>
                <p>
                  Her approach is practical and personal: students learn the words they need, but also the
                  confidence to use them with warmth.
                </p>
                <p>
                  Living in Kyoto continues to shape the feeling of Beyond Japanese. Quiet streets, seasonal changes,
                  local cafés, small greetings, and thoughtful moments all become part of the learning experience.
                </p>
                <p>
                  Beyond Japanese was created because language can make travel feel human. Even small conversations
                  can turn Japan from a place you visit into a place you remember with your heart.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="philosophy">
              <span className="eyebrow">Ayumi's Philosophy</span>
              <div className="philosophy-grid">
                {principles.map((p) => (
                  <div className="philosophy-item" key={p.title}>
                    <div className="philosophy-icon">
                      <p.Icon size={36} />
                    </div>
                    <h3>
                      {p.title.split("\n").map((line, i, arr) => (
                        <Fragment key={i}>
                          {line}
                          {i < arr.length - 1 && <br />}
                        </Fragment>
                      ))}
                    </h3>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing line + CTA */}
        <section className="about-close" data-screen-label="03 About Close">
          <p>I'm honored to be part of your Japanese learning journey.</p>
          <p className="accent">Let's take the next step together.</p>
          <a
            href={BOOK_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="main-button"
          >
            Book Your Trial Lesson <ArrowRight size={18} />
          </a>
        </section>
      </main>
    </PageShell>
  );
}
