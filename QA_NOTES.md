# QA Notes

今回の修正では、当初の独自デザイン寄りだったレイアウトをやめ、ユーザーが提示した参考デザインに近い構成へ変更した。具体的には、ヘッダー、左コピー・右写真枠のヒーロー、4つの対象者アイコン、About Ayumi の横長カード、Practical Japanese の4枚カード、Learning Journey の横並びステップ、Testimonials の横長カード、写真枠付きFinal CTAに再構成している。

提供済みの横長ロゴは、`width` のみを指定し、`height: auto` と `object-fit: contain` により縦横比を変更しない実装を維持している。

写真・イラスト・追加アイコン画像の生成は一切行っていない。写真部分はすべて `PhotoSlot` コンポーネントによる差し替え用プレースホルダーであり、ユーザーが後から用意した写真に置き換える前提で実装している。

`pnpm build` は成功済み。Vite のチャンクサイズ警告は出ているが、ビルド失敗ではない。ブラウザ上でも、トップビューが参考画像に近いコンパクトなランディングページ構成へ変更されていることを確認した。

## 写真カルーセル確認メモ

ヒーローセクションでは、ユーザー提供写真が表示されており、プレースホルダーではなく実写真に置き換わっていることを確認した。不要な写真ラベルは削除済み。ブラウザ上では日中写真が表示され、ヒーローノートとの重なりも大きな崩れはない。

次の確認として、Ayumiプロフィール位置へ移動して、プロフィール用写真カルーセルと4つのグレードットが表示されることを確認する。

ヒーロー写真については、複数回のブラウザ確認で日中写真と夜景写真が表示されることを確認した。CSSアニメーションにより、5枚を7.5秒周期、各1.5秒間隔でフェード表示する構成にしている。Ayumiプロフィールのカルーセルはコード上で4枚の画像、4つのドット、クリック切替、タッチスワイプ切替を実装済み。

## ヒーロー速度・プロフィールクリック操作の更新

ヒーロー写真の切り替えは、ユーザー要望に合わせて1.5秒間隔から3秒間隔に変更した。5枚構成のため、CSSアニメーション全体は15秒周期としている。

Ayumiプロフィール写真カルーセルには、既存の4つのグレードットによる切り替えとスワイプ操作を維持したうえで、写真エリアの左半分クリックで前の写真へ、右半分クリックで次の写真へ進む透明クリック領域を追加した。

`pnpm build` は成功済みで、ブラウザ上でもヒーロー写真が表示されていることを確認した。

## LP Update Direction とヘッダー・ヒーロー更新確認

添付された新しいブランド方針に合わせて、英語LPのコピーとセクション構成を更新した。ヒーローは「Explore Beyond with Japanese」を中心に、旅行者・日本好き・初心者が日本と深くつながるための学習体験として伝わる内容に変更した。

ヘッダーは参考画像に寄せて、長いロゴ、About、What You’ll Learn、Reviews、Book a Free Trial Lesson のCTA構成に変更した。CTAは `#trial` に遷移する。

ヒーローは写真を独立した右側カードではなく、透過した背景写真として表示する構成へ変更した。写真切替は3秒より遅い4.5秒間隔、5枚で22.5秒周期に調整した。

Ayumiセクションには、Founder’s Philosophy を展開式で追加した。クリックすると、言語が旅の体験や人とのつながりを変えるというAyumiの個人的な哲学が読める。

日本語確認用キャンバスは `/ja` で表示できることを確認した。英語版LPの内容確認用として、日本語の見出し、説明、Founder’s Philosophy、料金、学習スペース、成長記録などを確認できる。

`pnpm build` は成功済み。チャンクサイズ警告はあるがビルド失敗ではない。

## ヒーロー写真・見出し・トライアルCTA修正

ヒーロー写真は以前より視認性が上がるよう、背景写真の不透明度を高め、白〜クリームのオーバーレイを弱めた。ヒーロー見出し「Explore Beyond with Japanese」はブランドの青系カラーに変更した。

トライアルレッスンは無料ではないため、ヘッダーとヒーローのCTAから「Free」を削除し、「Book Your Trial Lesson」に変更した。CTA色はロゴアイコンと連動する赤系に変更している。ビルドは成功済みで、スクリーンショットでも赤CTA、青見出し、背景写真の視認性向上を確認した。

## ヘッダー・ロゴ・ヒーロー写真濃度の再修正確認

ヘッダーが常時表示されるよう、`topbar` の表示指定と重なり順を強化した。ヘッダー内には横長ロゴを必ず表示し、PCでは画面幅に対する `20vw` 指定、最小230px・最大330pxで表示するように調整した。スマホでは `42vw` 指定にし、画面幅に対して小さくなりすぎないようにした。

ヒーロー写真は以前よりさらに濃く見えるよう、写真レイヤーの不透明度を `0.92` まで上げ、オーバーレイを弱めた。PC幅スクリーンショットで、ヘッダー、ロゴ、ナビゲーション、赤いトライアルCTA、濃くなったヒーロー写真が表示されていることを確認した。

## Pricing / Program Section Update 確認

料金セクションを、単なる時間制チュータリングではなく、パーソナライズされた日本語学習体験として再構成した。Trial Lesson は $20 / 30 min、Single Lesson は $40 / 50 min personalized lesson、Beyond Starter Plan は $140 / 4 personalized lessons に更新した。Beyond Starter Plan は単なるレッスンパックではなく、初心者向けの継続的な学習ジャーニーとして表現している。

旅行向けプログラムとして、Japan Trip Prep（3 Months）と Beyond Japan Journey（6 Months）を追加した。Japan Trip Prep は、旅行準備、週1回の個別レッスン、会話練習、ロールプレイ、進捗確認を含む旅行準備プログラムとして表現し、平均 $35 per lesson の位置づけを入れている。

Japan Trip Support Add-on（+$40）も追加した。旅行代理店やコンシェルジュではなく、ローカルおすすめ、Google Mapsリスト、隠れたスポット、初心者向け飲食店、旅行フレーズ、文化・マナー、ロールプレイ、必要時の簡単な予約・電話サポートを含む、限定的でパーソナルな安心サポートとして表現した。

日本語確認キャンバスにも、料金、3か月プログラム、6か月プログラム、Trip Support Add-on の内容を反映した。`pnpm build` は成功し、ブラウザ表示でも更新内容が確認できた。

## Contact / Footer Social / Lesson Policy Update 確認

Contactセクションを追加し、Name、Email、Messageの入力欄を持つ温かい問い合わせフォーム風レイアウトにした。連絡先メールとして `beyondjp.lesson@gmail.com` を表示し、メールリンクとして設定した。フォームの送信先も同じメールアドレス宛の `mailto:` としている。

フッターにはInstagramリンク `https://www.instagram.com/beyond_japanese.ayumi/` を追加し、ミニマルなボタン表示にした。モバイルでは横幅いっぱいでタップしやすい表示になるようCSSを調整している。

Lesson Policyセクションには、Lesson Format、Payments、Cancellation & Rescheduling、Late Arrival / No-show、Lesson Recordings、Homework、Student Platform、Plan Expiration を追加した。文体は冷たい規約文ではなく、学習環境をスムーズで尊重あるものにするための温かいガイドラインとして表現している。

日本語確認キャンバスにもLesson PolicyとContactの要約を反映した。`pnpm build` は成功済みで、ブラウザ上でもContactセクションへのアンカー遷移を確認した。

## 最下部CTAカフェ写真差し替え

ユーザー提供の `IMG_5035.webp` をWeb用ストレージにアップロードし、最下部CTAの「Cafe / Japan travel photo」枠を実写真に差し替えた。画像は `/manus-storage/final-cta-cafe_5ef5bcf6.webp` を参照しており、プロジェクト内には大きな画像ファイルを置かない構成にしている。

`pnpm build` は成功済み。最下部CTAでは、左側画像としてカフェ外観写真が `object-fit: cover` で表示されるようにスタイルを追加した。

## Practical Japanese カフェ・コンビニ写真差し替え確認

Practical Japanese セクションの `Cafe / quiet Japan photo` カードに、ユーザー提供のカフェ会話写真 `/manus-storage/practical-cafe_39895723.png` が表示されていることを確認した。

追加で、`Konbini / store photo` カードに、ユーザー提供のコンビニ会話写真 `/manus-storage/practical-konbini_f671b4a3.png` を挿入した。`pnpm build` は成功済みで、ブラウザ抽出上でも Cafe と Konbini の両方が実写真URLとして反映されていることを確認した。

## At a convenience store 画像差し替え確認

Practical Japanese セクションの `At a convenience store` カード画像を、ユーザー提供の新しいコンビニ写真に差し替えた。新しい画像はWeb用ストレージにアップロードし、`/manus-storage/practical-konbini-replacement_255ab1bb.jpeg` として参照している。

`pnpm build` は成功済み。ビルド済みファイルにも新しい画像URLが含まれていることを確認した。既存の `Cafe / quiet Japan photo` の差し替えは維持している。

## At a station 画像差し替え確認

Practical Japanese セクションの `At a station` カード画像を、ユーザー提供の駅案内写真に差し替えた。新しい画像はWeb用ストレージにアップロードし、`/manus-storage/practical-station_3402c0ec.jpeg` として参照している。

`pnpm build` は成功済み。ビルド済みファイルにも新しい画像URLが含まれていることを確認した。既存の `Cafe / quiet Japan photo` と `At a convenience store` の差し替えは維持している。

## Multi-page Brand Website Restructure 確認

添付指示に従い、Beyond Japaneseを長い単一LPから、HOME、ABOUT、LESSONS、STUDENT PLATFORM、LIBRARY、FAQ、TERMS、CONTACTの複数ページ構成へ再整理した。HOMEにはHero、Is this you、Founder philosophy、短いAbout、Lesson style overview、Student platform preview、Testimonials、Main pricing preview、Final CTAを中心に残し、詳細FAQ、Lesson Policy、Contact詳細、長い料金説明は専用ページへ移動した。

ルーティングは `/about`、`/lessons`、`/student-platform`、`/library`、`/faq`、`/terms`、`/contact` を追加した。ナビゲーションはHOME、ABOUT、LESSONS、STUDENT PLATFORM、LIBRARY、FAQ、CONTACTに更新し、フッターにはTerms / Lesson Policy、Contact、日本語確認、Instagramを配置している。

また、直前に依頼された `Asking for directions` 画像差し替えも反映した。Practical Japanese セクションの4カードには、Cafe、Convenience store、Station、Directionsの各ユーザー提供写真URLがビルド済みファイルに含まれていることを確認した。

`pnpm build` は成功済み。ブラウザでHOME、LESSONS、TERMS、CONTACTの主要ページ表示と内容分離を確認した。

## DESIGN_DIRECTION.md優先のレイアウト精査確認

ユーザー提供のDESIGN_DIRECTION.mdを主要方針として確認し、既存コピーと既存情報構成を保持したまま、ヒーロー、余白、タイポグラフィ、CTA、カードの呼吸感を調整した。参考画像は余白・階層・構図の参考としてのみ使用し、コピーの書き換え、新規セクション追加、セクション削除、画像生成、ストック写真利用は行っていない。

ヒーローでは二次CTAを削除し、主要CTAのみを残した。見出しはイタリックを使わず、過度に太い幾何学的な印象を抑えるため、Cormorant Garamond と Instrument Sans の組み合わせへ調整した。画像参照は client/public/images 配下の既存アップロード画像へ切り替え、client/src内に `/manus-storage` 参照が残っていないことを確認した。

`pnpm build` は成功済み。ホームページ表示で、既存コピーが維持され、ヒーローの二次CTAが消え、温かく落ち着いたトーンに寄せた表示になっていることを確認した。

## DESIGN_DIRECTION.md精査後の画像軽量化確認

チェックポイント保存時に、GitHubから追加された `client/public/images` 内の一部画像が1MBを超えていたため、公開時のタイムアウト防止の観点から同じ用途・同じローカル画像方針のままWeb用に軽量化した。HEIC画像はブラウザ表示とチェックポイント保存の安定性を考慮し、Web用JPEGへ変換し、元の大きなHEICファイルは `/home/ubuntu/webdev-static-assets/beyond-japanese-original-heic-images` に退避した。

ユーザー指定に従い、新規画像生成、ストック画像利用、コピー変更、セクション追加・削除は行っていない。`client/src` 内の `/manus-storage` 参照は残っていないことを確認済み。`pnpm build` は成功し、ホームページ表示も確認済み。

## Practical Japanese 2×2淡い写真カード確認

Practical Japanese for real moments セクションを、参考画像に近い大きめの2×2画像カード構成へ調整した。カード内の写真はクリアに見せず、白〜クリームのオーバーレイと低彩度・低コントラストのフィルターを重ねて、参考画像のような薄い見え方にした。

シチュエーション名は、参考2枚目の内容に合わせて `At a cafe`、`At a convenience store`、`At a station`、`Asking for directions` を維持している。新規画像生成、ストック画像追加、コピー書き換えは行っていない。`pnpm build` は成功済みで、縦長スクリーンショットにて2×2の淡い写真カード表示を確認した。

## Practical Japanese 再精査確認

Practical Japanese for real moments セクションについて、既存の大きな2×2カード構成を維持したまま、写真の白オーバーレイを弱め、人物表情や環境ディテールが残るように調整した。各カードには指定されたタイトルと短い実用説明文を追加し、旅行者が日本で実際に体験する状況として読める階層にした。

カードタイトルは `Restaurants`、`Convenience Stores`、`Transportation`、`Real Conversations` に変更した。説明文はユーザー指定文をそのまま反映している。アイコンは既存アイコンを使い、stroke幅・サイズ・背景のCSS調整でより柔らかく控えめな見え方にした。`pnpm build` は成功済みで、縦長スクリーンショットにて、写真が前回より現実感を保ち、説明文が表示されていることを確認した。

## Student Experiences セクション再構築確認

Student Experiences / What students are saying セクションを、参考画像に近い3カード横並びの testimonial carousel 構造へ再構築した。デスクトップでは3枚のカードが横並びで表示され、4件目は横スライドで確認できる構造にしている。モバイルではカードが横スクロールしやすいよう、1枚ずつ表示に近いカード幅へ調整している。

以前の問題であった、テキストが縦に細く潰れて単語ごとに改行される表示を解消するため、カード幅、quoteの最大行長、word-break、hyphenation、paddingを調整した。カードは温かいベージュ背景、丸み、控えめな境界線と影、deep tealの円形initial avatarで、Beyond Japaneseの落ち着いた編集的な雰囲気に合わせている。

`pnpm build` は成功済み。デスクトップの縦長スクリーンショットで、見出し、サブ見出し、3カード横並び、自然な文章幅、円形initial avatarが表示されていることを確認した。

## Student Moments カルーセル追加確認

Student Experiences / What students are saying セクションの直前に、Student Moments カルーセルを追加した。画像は `/client/public/images` 内に追加された `1_dashboad.jpg`、`2_anouncement.jpg`、`3_quiz.jpg`、`4_spredsheet.jpg` の4枚のみを、この順番で使用している。新規画像生成、ストック写真、別画像への置き換えは行っていない。

追加方向の変更に従い、セクションは旅行日記・インフルエンサー風ではなく、日本語学習サポートプラットフォームの一部として見えるようにした。文脈は「日本語を実生活で使う準備」「日常の日本でのやり取り」「学習体験が実際の経験につながること」に寄せ、縦長比率を保つポートレート型カルーセルとして実装した。横長バナー化や強い横方向トリミングは行っていない。

`pnpm build` は成功済み。縦長スクリーンショットにて、Student Moments が Student Learning Space の後、Student Experiences の直前に表示され、縦長画像が主役として配置されていることを確認した。

## Student Moments レイアウト修正確認

Student Moments セクションを、Your Personal Learning Space セクションと同じ左右バランスに近づけ、左側に既存コピー、右側に縦長モバイル風カルーセルを配置した。既存コピーは変更していない。画像は `/client/public/images` 内の `1_dashboad.jpg`、`2_anouncement.jpg`、`3_quiz.jpg`、`4_spredsheet.jpg` の順番を維持している。

小さいpagination dotsは削除し、左右のナビゲーションボタンをデバイスフレーム外へ配置した。クリック＆ドラッグとタッチスワイプのしきい値を軽くし、操作しやすくした。スクリーンショットは横長バナー化せず、デバイス風フレーム内で全体が見えるよう `object-fit: contain` を使用している。

`pnpm build` は成功済み。縦長スクリーンショットにて、Student Learning Spaceの後、Student Experiencesの前に、学習エコシステムの一部としてStudent Momentsが表示され、画像が切れずに見えていることを確認した。

## Student Moments 参考画像準拠・画像見切れ再修正確認

ユーザー提供の参考画像に合わせ、Student Moments セクションの文言を `YOUR ECOSYSTEM`、`Your Personal Learning Space`、`Say goodbye to scattered notes...`、`Real-time progress tracking`、`Custom digital flashcard sets`、`Lesson recordings & notes history`、`Explore Dashboard` に修正した。左側テキスト、右側デバイス風カルーセルの左右構成にし、Your Personal Learning Space の参考レイアウトに近い比率と余白へ調整した。

画像見切れ対策として、carousel track と slide を `100%` 幅に固定し、gapをなくし、各画像を `object-fit: contain` でデバイスフレーム内に収めた。左右ナビはフレーム外へ逃がし、pagination dotsは使用していない。`pnpm build` は成功済み。PC縦長スクリーンショットでは、右側のスクリーンショットがデバイス枠内に収まり、左テキストとのバランスも参考画像に近づいたことを確認した。
