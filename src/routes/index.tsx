import { createFileRoute } from "@tanstack/react-router";
import {
  Scale,
  ClipboardList,
  Disc3,
  Store,
  TrendingUp,
  MapPin,
  Phone,
  Printer,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import heroImage from "../assets/hero-shima.jpg";

const SITE_URL = "https://www.ip-plan.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "合同会社IPプランニング | 三重県志摩市 - 知的財産・事務代行・コンテンツ制作" },
      {
        name: "description",
        content:
          "合同会社IPプランニング(三重県志摩市)の公式サイト。知的財産権関連事業、事務処理サービス、コンテンツ制作、店舗運営、投資事業を展開しています。",
      },
      { property: "og:title", content: "合同会社IPプランニング" },
      {
        property: "og:description",
        content:
          "知的財産権関連事業、事務処理サービス、コンテンツ制作などを手がける合同会社IPプランニングの公式サイト。",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "合同会社IPプランニング",
          url: SITE_URL,
          email: "info@ip-plan.com",
          telephone: "+81-599-65-7061",
          faxNumber: "050-5857-0216",
          address: {
            "@type": "PostalAddress",
            addressRegion: "三重県",
            addressLocality: "志摩市",
            streetAddress: "阿児町鵜方3144-5 IPビル2階",
            addressCountry: "JP",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Scale,
    title: "知的財産権関連事業",
    description:
      "特許・商標・著作権など、知的財産に係る業務を全般的にサポートいたします。",
  },
  {
    icon: ClipboardList,
    title: "事務処理サービス",
    description:
      "企業のための各種事務代行・支援サービスを提供し、業務の効率化をお手伝いします。",
  },
  {
    icon: Disc3,
    title: "コンテンツ制作",
    description: "音楽CD・DVDの企画、制作、販売を行っています。",
  },
  {
    icon: Store,
    title: "店舗運営",
    description: "飲食業・娯楽業を含む各種店舗の運営を予定しています。",
  },
  {
    icon: TrendingUp,
    title: "投資事業",
    description: "不動産・金融商品への投資事業を展開しています。",
  },
];

const news = [
  { date: "2026年8月28日", text: "ウェブサイトをリニューアルいたしました。" },
  { date: "2015年7月16日", text: "著作物を公表いたしました。" },
  { date: "2013年12月8日", text: "ウェブサイトを更新いたしました。" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif-jp text-lg font-semibold tracking-widest-jp text-navy-foreground">
              IPプランニング
            </span>
            <span className="hidden text-[10px] tracking-[0.25em] text-navy-foreground/60 sm:inline">
              IP PLANNING LLC.
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-navy-foreground/80">
            <a href="#business" className="transition-colors hover:text-gold">
              事業内容
            </a>
            <a href="#news" className="transition-colors hover:text-gold">
              新着情報
            </a>
            <a href="#company" className="transition-colors hover:text-gold">
              会社概要
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-gold/60 px-4 py-1.5 text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[88vh] items-end">
        <img
          src={heroImage}
          alt="志摩の穏やかな海とリアス式海岸の風景"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
          <p className="animate-fade-up text-xs tracking-[0.35em] text-gold">
            IP PLANNING LLC. — SHIMA, MIE
          </p>
          <h1 className="animate-fade-up-delay-1 mt-6 font-serif-jp text-4xl font-semibold leading-snug tracking-widest-jp text-navy-foreground md:text-6xl md:leading-snug">
            知識と、仕組みと、
            <br />
            信頼をかたちに。
          </h1>
          <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-sm leading-loose text-navy-foreground/80 md:text-base">
            合同会社IPプランニングは、三重県志摩市を拠点に、知的財産権関連事業・事務処理サービス・コンテンツ制作など、企業活動を多角的に支える事業を展開しています。
          </p>
          <div className="animate-fade-up-delay-3 mt-10">
            <a
              href="#business"
              className="inline-flex items-center gap-2 border border-gold/70 px-6 py-3 text-sm tracking-widest-jp text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              事業内容を見る
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="scroll-mt-16 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.35em] text-accent">BUSINESS</p>
              <h2 className="mt-4 font-serif-jp text-3xl font-semibold tracking-widest-jp md:text-4xl">
                事業内容
              </h2>
            </div>
            <div className="hidden h-px flex-1 bg-border md:block" />
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.title}
                className={`group bg-card p-8 transition-colors hover:bg-secondary md:p-10 ${
                  i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-accent/30 text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif-jp text-xl font-semibold tracking-wider">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
            <div className="flex items-center justify-center bg-navy p-10">
              <p className="vertical-rl font-serif-jp text-lg tracking-[0.4em] text-navy-foreground/90">
                志摩から、未来へ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="scroll-mt-16 border-y border-border bg-secondary/50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.35em] text-accent">NEWS</p>
          <h2 className="mt-4 font-serif-jp text-3xl font-semibold tracking-widest-jp md:text-4xl">
            新着情報
          </h2>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {news.map((item) => (
              <li
                key={item.date}
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <time className="w-36 shrink-0 text-sm tabular-nums text-muted-foreground">
                  {item.date}
                </time>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="scroll-mt-16 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.35em] text-accent">COMPANY</p>
          <h2 className="mt-4 font-serif-jp text-3xl font-semibold tracking-widest-jp md:text-4xl">
            会社概要
          </h2>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {[
              ["会社名", "合同会社IPプランニング"],
              ["所在地", "三重県志摩市阿児町鵜方3144-5 IPビル2階"],
              ["電話番号", "0599-65-7061"],
              ["FAX番号", "050-5857-0216"],
              [
                "事業内容",
                "知的財産権関連事業 / 事務処理サービス / コンテンツ制作 / 店舗運営 / 投資事業",
              ],
            ].map(([term, desc]) => (
              <div
                key={term}
                className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="text-sm font-medium text-muted-foreground">
                  {term}
                </dt>
                <dd className="text-sm leading-relaxed">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 bg-navy py-24 text-navy-foreground md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs tracking-[0.35em] text-gold">CONTACT</p>
          <h2 className="mt-4 font-serif-jp text-3xl font-semibold tracking-widest-jp md:text-4xl">
            お問い合わせ
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-loose text-navy-foreground/70">
            事業に関するご相談・ご依頼は、お電話またはメールにてお気軽にお問い合わせください。
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <address className="space-y-5 not-italic">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed">
                  三重県志摩市阿児町鵜方3144-5
                  <br />
                  IPビル2階
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <a href="tel:0599657061" className="text-sm transition-colors hover:text-gold">
                  0599-65-7061
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Printer className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="text-sm">050-5857-0216</p>
              </div>
            </address>
            <div className="flex flex-col justify-center rounded-sm border border-navy-foreground/15 bg-navy-foreground/5 p-8">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="text-sm">メールでのお問い合わせ</p>
              </div>
              <a
                href="mailto:info@ip-plan.com"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-gold/70 px-6 py-3 text-sm tracking-widest-jp text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                info@ip-plan.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-foreground/10 bg-navy py-10 text-navy-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs tracking-wider sm:flex-row">
          <p>© 合同会社IPプランニング All Rights Reserved.</p>
          <p className="tracking-[0.25em]">IP PLANNING LLC.</p>
        </div>
      </footer>
    </div>
  );
}
