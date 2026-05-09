/*
Japanese review canvas for Beyond Japanese.
This page is for content confirmation only. It mirrors the updated LP message in Japanese while preserving the same warm, travel-oriented brand tone.
*/

import { ArrowRight, BookOpen, CalendarCheck, Coffee, FileText, Globe2, Heart, Languages, MapPin, MessageCircle, NotebookText, ShoppingBag, Sparkles, Train, Video } from "lucide-react";

const logoSrc = "/manus-storage/beyond-japanese-logo_72442cbd.png";

const sections = [
  {
    title: "これはあなたに当てはまりますか？",
    body: "Beyond Japanese は、日本をただの観光地としてではなく、もっと深くつながれる場所として感じたい人のための日本語コーチングです。日本旅行を計画している方、現地の人と少しでも日本語で話してみたい方、日本文化・アニメ・漫画・旅が好きな方、そして従来の勉強法に圧倒されてしまった方に向いています。",
  },
  {
    title: "Ayumiについて",
    body: "こんにちは、Ayumiです。私は、日本語教師であり、学習パートナーであり、日本をもっと深く体験したい方のためのガイドでもあります。3年の日本語指導経験、50名以上のオンライン受講生、教育系大学院での学びを活かし、完璧さよりもコミュニケーションを大切にした、あたたかく一人ひとりに合わせたレッスンを行っています。",
  },
  {
    title: "Founder’s Philosophy",
    body: "現地の言葉を話すことは、旅の体験を大きく変えると私は思っています。カフェでの一言、駅での質問、コンビニでの『ありがとうございます』。そんな小さな日本語でも、笑顔やあたたかさ、人と人とのつながりが生まれます。日本語は単なる言葉ではなく、人と人の距離を近づける橋です。日本が有名な観光地を巡るだけの場所ではなく、生徒さんの心の中で特別な場所になってほしい。完璧に話す必要はありません。間違えても大丈夫です。私自身も第二言語を話す難しさを知っているからこそ、伝えようとする勇気を大切にしたいと思っています。",
  },
  {
    title: "レッスンの流れ",
    body: "レッスンは Google Meet で行います。最初にリラックスした会話から始め、前回の復習をし、その日のメイントピックに進みます。旅行場面のロールプレイ、アニメや漫画の話題、季節の日本文化、必要に応じた文法サポートなど、目標に合わせて内容を調整します。最後に質問と次のステップを確認します。",
  },
  {
    title: "実際の場面で使える日本語",
    body: "カフェ、コンビニ、神社、駅、食事の注文、道案内、現地の人とのちょっとした会話など、旅行中に本当に必要になる日本語を練習します。教科書だけで終わらず、実際に使える表現へつなげます。",
  },
  {
    title: "Student Learning Space",
    body: "受講生には、ただの共有フォルダではない、個別の学習スペースを用意します。単語レビュー、リンクされた単語スプレッドシート、レッスンノート、メッセージ、予約システム、スマホでも見やすい学習サポートを一つの場所で確認できます。",
  },
  {
    title: "成長を実感する仕組み",
    body: "初回レッスンの録画と、数か月ごとの進捗録画を通して、自分の変化を見返せるようにします。少し前の自分と比べることで、話す勇気、聞き取る力、表現できることが増えている実感を持てます。",
  },
  {
    title: "料金",
    body: "体験レッスンは30分15ドル、プライベートレッスンは50分30ドル、4回パックは50分×4回で120ドルです。体験レッスンは Cal.com から予約し、継続レッスンのお支払いは Wise または PayPal を想定しています。",
  },
];

const flow = [
  { icon: MessageCircle, title: "会話", text: "リラックスして近況や目標を話します。" },
  { icon: NotebookText, title: "復習", text: "前回の表現や質問を確認します。" },
  { icon: BookOpen, title: "メイントピック", text: "旅行・文化・文法・会話を練習します。" },
  { icon: CalendarCheck, title: "次のステップ", text: "宿題や復習内容を整理します。" },
];

export default function JapaneseCanvas() {
  return (
    <div className="ja-canvas page-shell">
      <header className="topbar">
        <a className="logo-link" href="/" aria-label="Beyond Japanese home"><img src={logoSrc} alt="Beyond Japanese" /></a>
        <nav className="desktop-nav" aria-label="Japanese review navigation"><a href="/">English LP</a><a href="#philosophy">哲学</a><a href="#pricing-ja">料金</a></nav>
        <a className="nav-cta" href="/">英語版へ戻る</a>
      </header>

      <main>
        <section className="ja-hero">
          <p className="kicker">日本語確認用キャンバス</p>
          <h1>日本語で、その先へ。</h1>
          <p>日本語は、日本との距離を近づけてくれるもの。Beyond Japanese は、実用的な日本語を通して、旅の体験や人とのつながりをより深くするためのパーソナルな学習体験です。</p>
          <blockquote>日本語を学ぶことは、ただスキルを身につけることではありません。人、文化、体験とつながるための一歩です。</blockquote>
        </section>

        <section className="ja-flow">
          {flow.map((item) => <article key={item.title}><item.icon size={24} /><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </section>

        <section className="ja-sections" id="philosophy">
          {sections.map((section) => (
            <article className="ja-section-card" key={section.title} id={section.title === "料金" ? "pricing-ja" : undefined}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </section>

        <section className="ja-icons">
          <article><Coffee size={22} /><span>カフェで</span></article>
          <article><ShoppingBag size={22} /><span>コンビニで</span></article>
          <article><Train size={22} /><span>駅で</span></article>
          <article><MapPin size={22} /><span>道案内で</span></article>
          <article><Languages size={22} /><span>単語レビュー</span></article>
          <article><Video size={22} /><span>成長の録画</span></article>
          <article><FileText size={22} /><span>ノート</span></article>
          <article><Heart size={22} /><span>つながり</span></article>
        </section>

        <section className="final-banner ja-final">
          <div className="final-card"><h2>日本語でつながれると、日本は少し違って見えてきます。</h2><p>日本語レッスンに申し込むだけではなく、日本とのより深い関係を始めるための一歩です。</p><a className="white-button" href="/">英語版LPへ戻る <ArrowRight size={18} /></a></div>
          <div className="ja-final-accent"><Sparkles size={42} /><p>Warm. Personal. Travel-oriented.</p></div>
        </section>
      </main>
    </div>
  );
}
