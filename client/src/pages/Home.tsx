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
  Instagram,
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
const finalCtaCafeSrc = "/manus-storage/final-cta-cafe_5ef5bcf6.webp";
const practicalCafeSrc = "/manus-storage/practical-cafe_39895723.png";
const practicalKonbiniSrc = "/manus-storage/practical-konbini-replacement_255ab1bb.jpeg";
const practicalStationSrc = "/manus-storage/practical-station_3402c0ec.jpeg";

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
  { icon: Coffee, title: "At a cafe", label: "Cafe / quiet Japan photo", image: practicalCafeSrc },
  { icon: ShoppingBag, title: "At a convenience store", label: "Konbini / store photo", image: practicalKonbiniSrc },
  { icon: Train, title: "At a station", label: "Train station photo", image: practicalStationSrc },
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
  {
    name: "Trial Lesson",
    price: "$20",
    detail: "30 min",
    note: "A warm first step to meet, talk about your goals and Japan travel plans, check your level, create a simple roadmap, learn one useful expression, and experience the student learning platform.",
  },
  {
    name: "Single Lesson",
    price: "$40",
    detail: "50 min personalized lesson",
    note: "Personalized support for practical communication, real-life Japanese, conversation confidence, and situations you actually want to handle.",
  },
  {
    name: "Beyond Starter Plan",
    price: "$140",
    detail: "4 personalized lessons",
    note: "A supportive beginner-friendly learning journey with consistent guidance, conversation practice, student platform access, and confidence building.",
  },
];

const travelPrograms = [
  {
    name: "Japan Trip Prep",
    duration: "3 Months",
    positioning: "Learn Japanese while preparing for a more meaningful Japan experience.",
    priceNote: "Designed around weekly personalized lessons, averaging around $35 per lesson.",
    detail: "Build confidence before your trip through travel conversation practice, real-situation roleplay, practical phrases, student platform access, personalized support, and progress tracking.",
  },
  {
    name: "Beyond Japan Journey",
    duration: "6 Months",
    positioning: "A longer-term personalized Japanese journey for communication, confidence, and deeper cultural connection.",
    priceNote: "For learners who want sustainable support beyond one trip.",
    detail: "Continue building real communication skills while exploring Japanese culture, strengthening confidence, and receiving long-term personalized support.",
  },
];

const tripSupportItems = [
  "Personalized local recommendations",
  "Curated Google Maps lists",
  "Hidden local spots",
  "Beginner-friendly restaurants and cafes",
  "Travel phrase support",
  "Cultural and etiquette guidance",
  "Roleplay practice",
  "Simple reservation or phone support when needed",
];

const lessonPolicies = [
  {
    title: "Lesson format",
    text: "Lessons are held online via Google Meet. Personalized support, lesson notes, review materials, and useful resources are shared through the custom student learning platform so your learning feels organized and easy to return to.",
  },
  {
    title: "Payments",
    text: "Trial lessons are booked through Cal.com. Continuing lessons are paid in advance via Wise or PayPal, so everything is clear before each learning period begins.",
  },
  {
    title: "Cancellation & rescheduling",
    text: "Lessons may be canceled or rescheduled free of charge up to 24 hours before the lesson. I understand that unexpected situations can happen, so if something urgent comes up, please contact Ayumi as soon as you can. Rescheduling requests made less than 6 hours before the lesson may be considered completed lessons depending on the situation.",
  },
  {
    title: "Late arrival / no-show",
    text: "If you are running late, please send a quick message if possible. If a student is more than 20 minutes late without notice, the lesson may be considered completed so the schedule remains respectful for everyone.",
  },
  {
    title: "Lesson recordings",
    text: "Some lessons may be recorded for personal learning review and progress tracking. Students may receive recordings from their first lesson and occasional progress recordings to help them notice their improvement over time.",
  },
  {
    title: "Homework",
    text: "Homework is optional and always based on your goals, schedule, and preferences. Some learners enjoy extra practice, while others prefer light review between lessons.",
  },
  {
    title: "Student platform",
    text: "Active students receive access to the custom learning platform, including lesson notes, vocabulary review, messaging, booking access, and personalized learning support.",
  },
  {
    title: "Plan expiration",
    text: "To keep learning steady and supportive, the 4-lesson plan is generally valid for 2–3 months, the 3-month travel plan is valid for 3 months, and the 6-month journey plan is valid for 6 months.",
  },
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
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#trial">Book Your Trial Lesson</a>
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
              <a className="main-button" href="#trial">Book Your Trial Lesson <ArrowRight size={18} /></a>
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
              <article className="scene-card" key={scene.title}>{"image" in scene ? <img className="scene-photo scene-real-photo" src={scene.image} alt={scene.label} /> : <PhotoSlot label={scene.label} className="scene-photo" />}<span className="scene-icon"><scene.icon size={20} /></span><h3>{scene.title}</h3></article>
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
          <p className="kicker">Personalized learning experiences</p>
          <h2>Choose the support that fits your Japan journey.</h2>
          <p className="section-lead">Beyond Japanese is not simple hourly tutoring. Each option is designed as warm, personalized support for practical communication, travel confidence, and a deeper connection with Japan.</p>
          <div className="pricing-grid pricing-grid-rich">
            {pricing.map((item) => <article className="pricing-card" key={item.name}><h3>{item.name}</h3><strong>{item.price}</strong><p>{item.detail}</p><span>{item.note}</span></article>)}
          </div>
        </section>

        <section className="program-section">
          <p className="kicker">Travel-focused programs</p>
          <h2>Prepare for Japan with confidence, not pressure.</h2>
          <div className="program-grid">
            {travelPrograms.map((program) => (
              <article className="program-card" key={program.name}>
                <span>{program.duration}</span>
                <h3>{program.name}</h3>
                <p className="program-positioning">{program.positioning}</p>
                <p>{program.detail}</p>
                <small>{program.priceNote}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="trip-addon-section">
          <div className="trip-addon-copy">
            <p className="kicker">Japan Trip Support Add-on</p>
            <h2>Thoughtful travel support for learners — +$40</h2>
            <p>This is not a travel agency or concierge service. It is curated, personal support designed to help you feel more confident, prepared, and connected during your Japan trip.</p>
          </div>
          <div className="trip-addon-list">
            {tripSupportItems.map((item) => <span key={item}><CheckCircle2 size={17} /> {item}</span>)}
          </div>
          <p className="trip-addon-note">Support is intentionally simple and focused. It does not include unlimited travel planning or full itinerary management.</p>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-heading"><h2>FAQ</h2><p>Beginner questions are welcome. You do not need to arrive already confident.</p></div>
          <div className="faq-list">{faqs.map((faq, index) => <FAQItem key={faq.q} {...faq} openByDefault={index === 0} />)}</div>
        </section>

        <section className="policy-section" id="lesson-policy">
          <div className="policy-heading">
            <p className="kicker">Lesson Policy</p>
            <h2>Guidelines for a smooth and respectful learning experience.</h2>
            <p>These guidelines exist to create a calm, supportive learning environment for everyone. They are here to make expectations clear while keeping the experience human, flexible, and respectful.</p>
          </div>
          <div className="policy-grid">
            {lessonPolicies.map((policy) => (
              <article className="policy-card" key={policy.title}>
                <h3>{policy.title}</h3>
                <p>{policy.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="kicker">Contact</p>
            <h2>Questions about lessons or Japan travel preparation?</h2>
            <p>I’d love to hear from you. Whether you are a complete beginner, planning your first Japan trip, or wondering which lesson style fits you best, feel free to reach out anytime.</p>
            <a href="mailto:beyondjp.lesson@gmail.com">beyondjp.lesson@gmail.com</a>
          </div>
          <form className="contact-form" action="mailto:beyondjp.lesson@gmail.com" method="post" encType="text/plain">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell me a little about your Japanese goals or Japan travel plans." />
            </label>
            <button type="submit">Send a Message <ArrowRight size={18} /></button>
          </form>
        </section>

        <section className="final-banner" id="trial">
          <img className="cta-photo final-cafe-photo" src={finalCtaCafeSrc} alt="Cafe in Japan for Beyond Japanese travel lesson CTA" />
          <div className="final-card"><h2>Japan becomes different when you can connect through language.</h2><p>You are not just signing up for Japanese lessons. You are starting a deeper relationship with Japan.</p><a className="white-button" href="#contact">Book Your Trial Lesson <ArrowRight size={18} /></a><small>Trial Lesson — $20 / 30 min</small></div>
        </section>
      </main>

      <footer className="footer-bar"><img src={logoSrc} alt="Beyond Japanese" /><nav><a href="#how">How it works</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a><a href="/ja">日本語確認</a></nav><a className="instagram-link" href="https://www.instagram.com/beyond_japanese.ayumi/" target="_blank" rel="noreferrer" aria-label="Beyond Japanese Instagram"><Instagram size={18} /> Instagram</a></footer>
    </div>
  );
}
