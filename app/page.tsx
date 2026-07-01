import Link from "next/link";
import { Section } from "@/app/components/Section";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { CONTACT_EMAIL, ORDER_PATH } from "@/app/lib/site";

const servedGroups = [
  {
    title: "Backyard Flocks",
    text: "Quality feed and friendly guidance for new and experienced poultry keepers alike.",
  },
  {
    title: "Homesteads",
    text: "Dependable feed and practical advice to help your homestead thrive.",
  },
  {
    title: "Small Farms",
    text: "Production-quality feed, reliable service, and a trusted partner who understands what's at stake.",
  },
];

const reasons = [
  {
    title: "Reliable Feed",
    text: "Carefully selected non-GMO and organic feed trusted by farmers who expect consistent results.",
  },
  {
    title: "Honest Guidance",
    text: "Need help choosing the right ration? We'll help you find the best fit for your animals, not the most expensive option.",
  },
  {
    title: "Simple Ordering",
    text: "Ordering feed shouldn't be complicated. We've made it quick, straightforward, and easy to fit into your schedule.",
  },
  {
    title: "Neighborly Service",
    text: "We're building relationships, not transactions. We want every customer to feel like they've found their feed company.",
  },
];

const steps = [
  {
    title: "Choose Your Feed",
    text: "Browse our feed catalog or reach out if you'd like help selecting the right ration for your animals.",
  },
  {
    title: "Place Your Order",
    text: "Order online in just a few minutes. We'll confirm your order and have everything ready for pickup.",
  },
  {
    title: "See You on Pickup Day",
    text: "Pick up your order during your selected pickup window and get back to what matters most: caring for your animals.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <main className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <section className="relative -mx-5 overflow-hidden bg-[var(--ink)] px-5 pb-16 md:-mx-10 md:px-10 md:pb-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-46"
            style={{
              backgroundImage: "url('/turkeys ranging on pasture.jpg')",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,72,120,0.88),rgba(15,72,120,0.58),rgba(15,72,120,0.35))]" />
          <div className="relative z-10">
            <SiteHeader active="home" tone="dark" />

            <div className="grid min-h-[34rem] items-center py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(17rem,0.45fr)] md:gap-10">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--bronze)]">
                  Built on community. Backed by experience.
                </p>
                <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">
                  Reliable feed from folks you can trust.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
                  Quality non-GMO and organic feed for homesteaders and livestock producers
                  across west-central Missouri.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/82">
                  Whether you&apos;re raising your first backyard flock or managing a growing farm,
                  we&apos;re here to make getting quality feed simple with honest guidance,
                  dependable service, and people who understand the work.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={ORDER_PATH} className="btn-primary">
                    Build My Pallet
                  </Link>
                  <Link href={`${ORDER_PATH}#build-my-pallet`} className="btn-secondary-light">
                    Browse Feed
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="who-we-serve">
          <div className="max-w-3xl">
            <p className="eyebrow">Who We Serve</p>
            <h2 className="section-title">Built for the folks who are building something.</h2>
            <p className="section-copy">
              Whether you&apos;re gathering your first eggs, growing a family homestead, or running a
              small livestock operation, Kesten Feed Co. is here to help you feed your animals
              with confidence.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {servedGroups.map((group) => (
              <article key={group.title} className="info-card">
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section className="-mx-5 bg-white/55 px-5 md:-mx-10 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">Why Kesten Feed Co.?</p>
              <h2 className="section-title">More than a feed supplier: a partner you can count on.</h2>
              <p className="section-copy">
                When you buy feed from Kesten Feed Co., you&apos;re getting more than quality
                nutrition for your animals. We&apos;re the dependable partner who cares about your
                success.
              </p>
              <p className="mt-6 text-lg font-bold text-[var(--brown)]">
                Because taking care of your animals is hard enough: getting quality feed shouldn&apos;t be.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.title} className="info-card">
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="how-it-works">
          <div className="max-w-3xl">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">Getting quality feed is easier than you think.</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="step-card">
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href={ORDER_PATH} className="btn-primary">
              Build My Pallet
            </Link>
          </div>
        </Section>

        <Section className="-mx-5 bg-[var(--ink)] px-5 text-white md:-mx-10 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--bronze)]">
              Ready to Get Started?
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Ready to Get Started?</h2>
            <p className="mt-5 text-base leading-7 text-white/82 md:text-lg">
              Whether you&apos;re feeding a backyard flock or a growing livestock operation, we&apos;re
              here to make getting quality feed simple.
            </p>
            <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">
              Join the families across west-central Missouri who trust Kesten Feed Co. for
              reliable feed, honest guidance, and dependable service.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={ORDER_PATH} className="btn-primary">
                Build My Pallet
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary-light">
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
