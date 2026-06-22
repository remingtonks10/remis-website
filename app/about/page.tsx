import Link from "next/link";
import { Section } from "@/app/components/Section";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { CONTACT_EMAIL, ORDER_PATH } from "@/app/lib/site";

export default function About() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <main className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <SiteHeader active="about" />

        <section className="relative -mx-5 overflow-hidden px-5 py-16 md:-mx-10 md:px-10 md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about-ducks.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[rgba(15,72,120,0.66)]" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--bronze)]">
              Built on community. Backed by experience.
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              Our Story
            </h1>
          </div>
        </section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <article className="story-copy">
              <p>Kesten Feed Co. began with a simple problem.</p>
              <p>
                In 2017, our family was building David&apos;s Pasture and searching for a reliable,
                affordable source of high-quality non-GMO feed. Like many other small farms in
                west-central Missouri, we quickly discovered that finding dependable feed, and
                dependable suppliers, wasn&apos;t always easy.
              </p>
              <p>Then we found NEMO Feeds.</p>
              <p>
                The quality, consistency, and nutritional expertise we had been looking for were
                finally within reach. Before long, friends and neighbors began asking where they
                could get the same feed, and what started as helping a few local farms quickly
                grew into serving a community of homesteaders and livestock producers across
                west-central Missouri.
              </p>
              <p>
                In 2025, my wife Kaitlyn and I founded Kesten Feed Co. to carry that mission
                forward.
              </p>
              <p>
                Today, we&apos;re proud to connect local families with quality feed, honest guidance,
                and dependable service: continuing to invest in the community of small farms and
                homesteaders that has supported us from the beginning.
              </p>
              <p>
                Because taking care of your animals is hard enough: getting quality feed
                shouldn&apos;t be.
              </p>
            </article>

            <aside className="callout-panel">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--bronze)]">
                What Matters Here
              </p>
              <p className="mt-4 text-2xl font-bold leading-snug text-[var(--ink)]">
                We&apos;re not trying to become the biggest feed company in Missouri. We&apos;re trying to
                become the most trusted.
              </p>
            </aside>
          </div>
        </Section>

        <Section className="-mx-5 bg-white/55 px-5 md:-mx-10 md:px-10">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(16rem,0.25fr)] md:items-center">
            <div>
              <h2 className="section-title">We&apos;re grateful to serve this community.</h2>
              <p className="section-copy">
                We&apos;re grateful to serve the community that has supported our family from the very
                beginning.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link href={ORDER_PATH} className="btn-primary">
                Build My Pallet
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary">
                Contact Remi
              </a>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
