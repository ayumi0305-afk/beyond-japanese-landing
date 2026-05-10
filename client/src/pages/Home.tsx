/*
Design Philosophy: Multi-page Beyond Japanese brand website.
Use the provided horizontal logo without changing its aspect ratio. Use only user-provided photos. Keep the site cinematic, warm, Kyoto-inspired, and easy to explore instead of a single overwhelming landing page.
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
import { useState, type ReactNode } from "react";

const logoSrc = "/images/logo.png";
const finalCtaCafeSrc = "/images/footer.JPG";
const practicalCafeSrc = "/images/cafe.png";
const practicalKonbiniSrc = "/images/konbini.jpeg";
const practicalStationSrc = "/images/station.jpeg";
const practicalDirectionsSrc = "/images/street.jpeg";

const heroImages = [
  { src: "/images/arashiyama-back.JPG", alt: "Kyoto travel atmosphere" },
  { src: "/images/footer.JPG", alt: "Quiet Japan cafe travel atmosphere" },
];

const profileImages = [
  { src: "/images/ayumi-arashiyama.JPEG", alt: "Ayumi in Arashiyama" },
  { src: "/images/ayumi-flower.JPG", alt: "Ayumi holding flowers" },
  { src: "/images/ayumi-kimono.jpg", alt: "Ayumi in kimono" },
  { src: "/images/ayumi-kyudo.jpg", alt: "Ayumi kyudo portrait" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/lessons", label: "Lessons" },
  { href: "/student-platform", label: "Student Platform" },
  { href: "/library", label: "Library" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const targetCards = [
  { icon: Briefcase, label: "Planning a trip\nto Japan" },
  { icon: MessageCircle, label: "Want to speak\nwith locals" },
  { icon: Heart, label: "Love Japanese culture,\nanime, or travel" },
  { icon: Leaf, label: "Starting from zero\nor feeling overwhelmed" },
];

const practicalScenes = [
  {
    icon: Coffee,
    title: "Restaurants",
    label: "Cafe / quiet Japan photo",
    image: practicalCafeSrc,
    description: "Ordering naturally, asking about ingredients, and understanding local dining culture.",
  },
  {
    icon: ShoppingBag,
    title: "Convenience Stores",
    label: "Konbini / store photo",
    image: practicalKonbiniSrc,
    description: "Understanding common konbini phrases and handling everyday purchases smoothly.",
  },
  {
    icon: Train,
    title: "Transportation",
    label: "Train station photo",
    image: practicalStationSrc,
    description: "Buying tickets, asking for directions, and navigating stations with confidence.",
  },
  {
    icon: MapPin,
    title: "Real Conversations",
    label: "Street / direction photo",
    image: practicalDirectionsSrc,
    description: "Making small talk, greeting naturally, and connecting beyond memorized phrases.",
  },
];

const lessonFlow = [
  { icon: MessageCircle, title: "Casual conversation", text: "Begin with a relaxed check-in so speaking feels natural." },
  { icon: NotebookText, title: "Review", text: "Look back at useful phrases, questions, and your recent progress." },
  { icon: BookOpen, title: "Main topic", text: "Practice travel situations, roleplays, culture, anime, manga, or grammar support." },
  { icon: CalendarCheck, title: "Next steps", text: "Leave with clear notes, homework, and what to practice before the next lesson." },
];

const pricing = [
  {
    name: "Trial Lesson",
    price: "$20",
    detail: "30 min",
    who: "For new students who want to meet Ayumi, ask questions, and understand the best next step.",
    included: ["Goal and travel-plan discussion", "Level check", "Simple study roadmap", "One useful expression", "Student platform preview"],
    note: "A warm first step, not a sales call.",
  },
  {
    name: "Single Lesson",
    price: "$40",
    detail: "50 min personalized lesson",
    who: "For learners who want practical support for one specific situation, goal, or conversation need.",
    included: ["Practical communication", "Personalized lesson notes", "Conversation confidence", "Real-life Japanese situations"],
    note: "Useful when you want focused support without a longer plan.",
  },
  {
    name: "Beyond Starter Plan",
    price: "$140",
    detail: "4 personalized lessons",
    who: "For beginners who want a calm learning rhythm and consistent support.",
    included: ["Four personalized lessons", "Conversation practice", "Student platform access", "Confidence-building review"],
    note: "A supportive beginner-friendly learning journey, not a simple lesson pack.",
  },
];

const travelPrograms = [
  {
    name: "Japan Trip Prep",
    duration: "3 Months",
    price: "Average around $35 per lesson",
    who: "For learners preparing for a Japan trip and wanting to feel more confident before arrival.",
    description: "Learn Japanese while preparing for a more meaningful Japan experience through weekly personalized lessons, travel roleplay, useful phrases, platform access, and progress tracking.",
    included: ["Weekly personalized lessons", "Travel conversation practice", "Real-situation roleplay", "Practical phrases", "Progress tracking"],
  },
  {
    name: "Beyond Japan Journey",
    duration: "6 Months",
    price: "Personalized long-term support",
    who: "For Japan lovers who want sustainable learning beyond one trip.",
    description: "A longer-term personalized Japanese journey focused on communication, confidence, culture, and a deeper relationship with Japan.",
    included: ["Sustainable learning rhythm", "Confidence building", "Real communication", "Japanese culture", "Long-term support"],
  },
  {
    name: "Japan Trip Support Add-on",
    duration: "+ $40",
    price: "Curated travel confidence support",
    who: "For learners who want a little extra personal support before or during their trip.",
    description: "This is not a travel agency or unlimited concierge service. It is warm, curated support to help you feel more prepared and connected.",
    included: ["Local recommendations", "Curated Google Maps lists", "Hidden local spots", "Beginner-friendly cafes", "Travel phrase support", "Etiquette guidance", "Roleplay practice", "Simple reservation or phone support when needed"],
  },
];

const platformFeatures = [
  { icon: FileText, title: "Lesson notes", text: "Clear notes make it easy to return to what you practiced." },
  { icon: Languages, title: "Vocabulary review", text: "Useful words stay connected to your real lesson conversations." },
  { icon: MessageCircle, title: "Messaging", text: "Keep questions, reminders, and learning support organized." },
  { icon: CalendarCheck, title: "Booking access", text: "Your lesson flow stays simple and easy to manage." },
  { icon: Video, title: "Explainer video", text: "Use short walkthroughs or previews to understand your learning space." },
  { icon: Globe2, title: "Mobile support", text: "Review your notes and vocabulary from your phone while traveling." },
];

const libraryItems = [
  { title: "Japanese travel phrases", text: "Practical expressions for cafes, stations, hotels, shops, and everyday travel moments." },
  { title: "Kyoto recommendations", text: "Personal, calm suggestions inspired by Ayumi’s Kyoto lifestyle and favorite local rhythms." },
  { title: "Google Maps lists", text: "Curated places to save for later, from quiet cafes to beginner-friendly local stops." },
  { title: "Hidden local spots", text: "A softer side of Japan beyond famous sightseeing routes." },
  { title: "Seasonal Japan guides", text: "Small cultural notes for cherry blossoms, autumn leaves, festivals, and everyday seasonal beauty." },
  { title: "Beginner-friendly Japanese", text: "Simple language notes that help you speak with warmth, not perfection." },
];

const lessonPolicies = [
  { title: "Lesson format", text: "Lessons are held online via Google Meet. Personalized support, lesson notes, review materials, and resources are shared through the custom student learning platform." },
  { title: "Payments", text: "Trial lessons are booked through Cal.com. Continuing lessons are paid in advance via Wise or PayPal, so everything is clear before each learning period begins." },
  { title: "Cancellation & rescheduling", text: "Lessons may be canceled or rescheduled free of charge up to 24 hours before the lesson. I understand that unexpected situations can happen, so please contact Ayumi as soon as you can. Requests made less than 6 hours before the lesson may be considered completed depending on the situation." },
  { title: "Late arrival / no-show", text: "If you are running late, please send a quick message if possible. If a student is more than 20 minutes late without notice, the lesson may be considered completed." },
  { title: "Lesson recordings", text: "Some lessons may be recorded for personal learning review and progress tracking. These recordings help students notice improvement over time." },
  { title: "Homework", text: "Homework is optional and based on your goals, schedule, and preferences." },
  { title: "Student platform", text: "Active students receive access to lesson notes, vocabulary review, messaging, booking access, and personalized learning support." },
  { title: "Plan expiration", text: "The 4-lesson plan is generally valid for 2–3 months, the 3-month travel plan for 3 months, and the 6-month journey plan for 6 months." },
];

const faqs = [
  { q: "Are complete beginners welcome?", a: "Yes. Many students start from zero or around N5. You can begin even if you only know a few words." },
  { q: "Do I need to know hiragana first?", a: "No. Hiragana is helpful, but not required for your first lesson. Reading can be introduced gradually while keeping the focus on communication." },
  { q: "How often should I study?", a: "Many students begin once a week, especially 3–6 months before a Japan trip. Your rhythm can be adjusted to your schedule and goals." },
  { q: "What happens in the trial lesson?", a: "We talk about your goals, Japan plans, learning background, and what kind of Japanese would help you feel more confident." },
  { q: "Is homework included?", a: "Homework can be included if it helps you. It is optional and adapted to your learning preferences." },
  { q: "What materials are used?", a: "Lessons may include practical roleplays, teacher-made notes, IRODORI for travel Japanese, or GENKI for grammar support depending on your goals." },
  { q: "Are lessons personalized?", a: "Yes. Lessons can include travel situations, culture, anime and manga topics, grammar, or conversation practice." },
];

function SiteHeader() {
  return (
    <header className="topbar site-topbar">
      <a className="logo-link" href="/" aria-label="Beyond Japanese home"><img src={logoSrc} alt="Beyond Japanese" /></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="nav-cta" href="/contact">Book Your Trial Lesson</a>
      <button className="mobile-menu" aria-label="Open menu"><Menu size={24} /></button>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer-bar multi-footer">
      <img src={logoSrc} alt="Beyond Japanese" />
      <nav>
        <a href="/terms">Terms / Lesson Policy</a>
        <a href="/contact">Contact</a>
        <a href="/ja">日本語確認</a>
      </nav>
      <a className="instagram-link" href="https://www.instagram.com/beyond_japanese.ayumi/" target="_blank" rel="noreferrer" aria-label="Beyond Japanese Instagram"><Instagram size={18} /> Instagram</a>
    </footer>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  return <div className="page-shell multi-page-shell" id="top"><SiteHeader />{children}<SiteFooter /></div>;
}

function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <section className="subpage-hero">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
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
        {profileImages.map((image, index) => <button key={image.src} type="button" aria-label={`Show Ayumi photo ${index + 1}`} aria-current={active === index} onClick={() => goTo(index)} />)}
      </div>
    </div>
  );
}

function FounderPhilosophy({ expanded = false }: { expanded?: boolean }) {
  const [open, setOpen] = useState(expanded);
  return (
    <div className="founder-philosophy">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>Read Ayumi’s philosophy</span>
        <ChevronDown size={18} className={open ? "is-open" : ""} />
      </button>
      {open && (
        <div className="founder-letter">
          <p>I believe that speaking the local language can completely change the way we experience a place. Even a small phrase in Japanese — a greeting at a cafe, a question at a station, or a simple thank you at a convenience store — can create warmth, smiles, and a feeling of human connection.</p>
          <p>To me, Japanese is not only about words. It is a bridge that helps people feel closer to each other. I hope Japan becomes a special place in my students’ hearts, not only a destination on a map or a list of famous sightseeing spots.</p>
          <p>There is a quieter, deeper side of Japan waiting in everyday moments. Communication does not need to be perfect to be meaningful. Mistakes are welcome. I also know the courage it takes to speak a second language, and I want every lesson to feel like a safe place to try.</p>
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

function ContactForm() {
  return (
    <form className="contact-form" action="mailto:beyondjp.lesson@gmail.com" method="post" encType="text/plain">
      <label><span>Name</span><input type="text" name="name" placeholder="Your name" /></label>
      <label><span>Email</span><input type="email" name="email" placeholder="you@example.com" /></label>
      <label><span>Message</span><textarea name="message" rows={5} placeholder="Tell me a little about your Japanese goals or Japan travel plans." /></label>
      <button type="submit">Send a Message <ArrowRight size={18} /></button>
    </form>
  );
}

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero-panel hero-immersive">
          <HeroFadeSlider />
          <div className="hero-copy">
            <p className="kicker">Japanese learning for travelers and Japan lovers</p>
            <h1>Explore Beyond<br />with Japanese</h1>
            <p>Beginner-friendly Japanese lessons for travelers and Japan lovers who want more than just phrases — they want connection.</p>
            <div className="hero-actions">
              <a className="main-button" href="/contact">Book Your Trial Lesson <ArrowRight size={18} /></a>
            </div>
            <p className="hero-reflection">Language changes the way you experience a place.</p>
          </div>
        </section>

        <section className="target-section">
          <h2>Is this you?</h2>
          <p className="section-lead">Beyond Japanese is for learners who want Japan to feel less like a tourist destination and more like a place they can truly connect with.</p>
          <div className="target-grid">
            {targetCards.map((item) => <article className="target-item" key={item.label}><span className="soft-icon"><item.icon size={28} /></span><p>{item.label.split("\n").map((line) => <span key={line}>{line}</span>)}</p></article>)}
          </div>
        </section>

        <section className="problem-solution founder-home-block">
          <div><p className="kicker">Founder philosophy</p><h2>Learning Japanese can make Japan feel personal.</h2></div>
          <div className="problem-copy"><p>This is not about memorizing perfect textbook phrases. Beyond Japanese is about discovering small moments of connection — a smile at a cafe, a calmer train ride, a conversation that makes Japan feel closer.</p><FounderPhilosophy /></div>
        </section>

        <section className="about-card">
          <ProfileCarousel />
          <div className="about-text">
            <p className="kicker">About Ayumi</p>
            <h2>A certified Japanese teacher and warm learning partner.</h2>
            <p>Ayumi creates calm, personalized lessons where communication matters more than perfection. Lessons can include Kyoto life, travel situations, seasonal culture, anime, manga, or structured grammar — always at your pace.</p>
            <a className="text-link" href="/about">Read Ayumi’s story <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="journey-section">
          <h2>Lesson style overview</h2>
          <p className="section-lead">Lessons take place on Google Meet and follow a calm, personalized rhythm.</p>
          <div className="journey-line">
            {lessonFlow.map((item, index) => <div className="journey-step" key={item.title}><span className="journey-icon"><item.icon size={26} /></span><h3>{item.title}</h3><p>{item.text}</p>{index < lessonFlow.length - 1 && <ArrowRight className="step-arrow" size={25} />}</div>)}
          </div>
        </section>

        <section className="practical-section">
          <div className="section-title-row"><div><h2>Practical Japanese for real moments</h2><p>Learn what you actually need for cafes, convenience stores, stations, food, directions, and small talk with locals.</p></div><a className="text-link" href="/lessons">See programs <ArrowRight size={16} /></a></div>
          <div className="scene-grid">
            {practicalScenes.map((scene) => <article className="scene-card" key={scene.title}><img className="scene-photo scene-real-photo" src={scene.image} alt={scene.label} /><span className="scene-icon"><scene.icon size={20} strokeWidth={1.65} /></span><h3>{scene.title}</h3><p>{scene.description}</p></article>)}
          </div>
        </section>

        <section className="portal-section platform-section">
          <div className="portal-copy"><p className="kicker">Student Learning Space</p><h2>Your personal learning space, not just a shared folder.</h2><p>Organized, mobile-friendly support for lessons, vocabulary, messages, booking, and review.</p><a className="text-link" href="/student-platform">Explore the platform <ArrowRight size={16} /></a></div>
          <div className="platform-preview">{platformFeatures.slice(0, 4).map((item) => <div className="platform-card" key={item.title}><item.icon size={19} /><strong>{item.title}</strong><span>{item.text}</span></div>)}</div>
        </section>

        <section className="testimonial-section">
          <h2>What students are saying</h2>
          <div className="testimonial-card"><div className="testimonial-avatar">J</div><div className="testimonial-copy"><p>Ayumi’s lessons helped me feel comfortable speaking, even when I made mistakes. Japan felt warmer when I could use simple Japanese.</p><span>Jessica, Canada</span></div><div className="stars">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div></div>
        </section>

        <section className="pricing-section pricing-preview">
          <p className="kicker">Start your journey</p>
          <h2>Simple starting points, personalized support.</h2>
          <div className="pricing-grid pricing-grid-rich">{pricing.map((item) => <article className="pricing-card" key={item.name}><h3>{item.name}</h3><strong>{item.price}</strong><p>{item.detail}</p><span>{item.note}</span></article>)}</div>
          <a className="main-button preview-button" href="/lessons">View all lessons and programs <ArrowRight size={18} /></a>
        </section>

        <section className="final-banner" id="trial">
          <img className="cta-photo final-cafe-photo" src={finalCtaCafeSrc} alt="Cafe in Japan for Beyond Japanese travel lesson CTA" />
          <div className="final-card"><h2>Japan becomes different when you can connect through language.</h2><p>You are not just signing up for Japanese lessons. You are starting a deeper relationship with Japan.</p><a className="white-button" href="/contact">Book Your Trial Lesson <ArrowRight size={18} /></a><small>Trial Lesson — $20 / 30 min</small></div>
        </section>
      </main>
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell>
      <main><PageHero kicker="About Ayumi" title="A warm Japanese learning partner rooted in Kyoto life." text="Beyond Japanese was created for people who want Japan to become more than a destination — a place they can feel connected to." />
        <section className="about-card subpage-card"><ProfileCarousel /><div className="about-text"><p className="kicker">Ayumi’s story</p><h2>Certified teacher, gentle guide, and language bridge.</h2><p>Ayumi brings teaching experience, an educational background, and a love for everyday Japanese culture into each lesson. Her approach is practical and personal: students learn the words they need, but also the confidence to use them with warmth.</p><p>Living in Kyoto continues to shape the feeling of Beyond Japanese. Quiet streets, seasonal changes, local cafes, small greetings, and thoughtful moments all become part of the learning experience.</p><p>Beyond Japanese was created because language can make travel feel human. Even small conversations can turn Japan from a place you visit into a place you remember with your heart.</p><FounderPhilosophy expanded /></div></section>
      </main>
    </PageShell>
  );
}

export function LessonsPage() {
  return (
    <PageShell>
      <main><PageHero kicker="Lessons & Programs" title="Personalized Japanese support for your Japan journey." text="Choose a simple trial, a focused lesson, a beginner-friendly learning journey, or a travel preparation program designed around your goals." />
        <section className="pricing-section subpage-wide"><div className="pricing-grid pricing-grid-rich">{pricing.map((item) => <article className="pricing-card program-detail-card" key={item.name}><h3>{item.name}</h3><strong>{item.price}</strong><p>{item.detail}</p><p>{item.who}</p><div className="mini-list">{item.included.map((included) => <span key={included}><CheckCircle2 size={15} /> {included}</span>)}</div><a className="mini-cta" href="/contact">Book or ask about this</a></article>)}</div></section>
        <section className="program-section subpage-wide"><p className="kicker">Travel-focused programs</p><h2>Prepare for Japan with confidence, not pressure.</h2><div className="program-grid">{travelPrograms.map((program) => <article className="program-card" key={program.name}><span>{program.duration}</span><h3>{program.name}</h3><p className="program-positioning">{program.who}</p><p>{program.description}</p><div className="mini-list">{program.included.map((item) => <span key={item}><CheckCircle2 size={15} /> {item}</span>)}</div><small>{program.price}</small><a className="mini-cta" href="/contact">Ask about {program.name}</a></article>)}</div></section>
      </main>
    </PageShell>
  );
}

export function StudentPlatformPage() {
  return (
    <PageShell>
      <main><PageHero kicker="Student Platform" title="A personal learning space that keeps your Japanese organized." text="The platform is one of the biggest differences at Beyond Japanese. It supports vocabulary, notes, booking, messaging, and personalized learning between lessons." />
        <section className="portal-section platform-section subpage-wide"><div className="portal-copy"><h2>Not just a lesson. A place to return to.</h2><p>Students can review notes, vocabulary, and learning steps from a mobile-friendly space. Screenshots, UI previews, and explainer videos can be added here as the platform grows.</p></div><div className="platform-preview">{platformFeatures.map((item) => <div className="platform-card" key={item.title}><item.icon size={19} /><strong>{item.title}</strong><span>{item.text}</span></div>)}</div></section>
      </main>
    </PageShell>
  );
}

export function LibraryPage() {
  return (
    <PageShell>
      <main><PageHero kicker="Ayumi’s Library" title="A calm Japanese learning, travel, and culture space." text="A curated resource page for travel phrases, Kyoto recommendations, local spots, seasonal notes, and beginner-friendly Japanese." />
        <section className="library-grid subpage-wide">{libraryItems.map((item) => <article className="library-card" key={item.title}><Sparkles size={18} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</section>
      </main>
    </PageShell>
  );
}

export function FAQPage() {
  return (
    <PageShell>
      <main><PageHero kicker="FAQ" title="Beginner questions are welcome." text="You do not need to arrive already confident. This page collects the practical questions many new students ask before starting." />
        <section className="faq-section subpage-wide"><div className="faq-list">{faqs.map((faq, index) => <FAQItem key={faq.q} {...faq} openByDefault={index === 0} />)}</div></section>
      </main>
    </PageShell>
  );
}

export function TermsPage() {
  return (
    <PageShell>
      <main><PageHero kicker="Terms / Lesson Policy" title="Guidelines for a smooth and respectful learning experience." text="These guidelines exist to create a calm, supportive learning environment for everyone. They are here to make expectations clear while keeping the experience human and respectful." />
        <section className="policy-section subpage-wide"><div className="policy-grid">{lessonPolicies.map((policy) => <article className="policy-card" key={policy.title}><h3>{policy.title}</h3><p>{policy.text}</p></article>)}</div></section>
      </main>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell>
      <main><PageHero kicker="Contact" title="Questions about lessons or Japan travel preparation?" text="I’d love to hear from you. Whether you are a complete beginner, planning your first Japan trip, or wondering which lesson style fits you best, feel free to reach out anytime." />
        <section className="contact-section subpage-wide"><div className="contact-copy"><p className="kicker">Get in touch</p><h2>Let’s talk about your Japanese journey.</h2><p>You can send a message using the form, email directly, or follow along on Instagram for updates and learning inspiration.</p><a href="mailto:beyondjp.lesson@gmail.com">beyondjp.lesson@gmail.com</a><a className="instagram-link contact-instagram" href="https://www.instagram.com/beyond_japanese.ayumi/" target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a></div><ContactForm /></section>
      </main>
    </PageShell>
  );
}
