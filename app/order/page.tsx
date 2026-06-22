import { Section } from "@/app/components/Section";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SiteHeader } from "@/app/components/SiteHeader";
import { JotformEmbed } from "@/app/order/JotformEmbed";
import { TextOptInForm } from "@/app/order/TextOptInForm";
import {
  CONTACT_EMAIL,
  ORDER_WINDOW,
  PICKUP_LOCATION,
  getOrderWindowMessage,
} from "@/app/lib/site";

const deliveryOptions = [
  {
    title: "Bagged Feed Delivery",
    intro: "Need a larger quantity?",
    text: "We offer free bagged feed delivery on qualifying orders.",
    items: [
      "Minimum order: 2 tons, any combination of bagged products",
      "Delivered every four weeks on our regular route",
      "Order by emailing remi@kestenfeed.co before the monthly deadline",
    ],
  },
  {
    title: "Tote Bag Delivery",
    intro: "One-ton tote bags are available for customers who need larger quantities without bulk storage.",
    items: [
      "Minimum order: 2 totes",
      "Minimum 1 ton per product",
      "Delivered on our regular monthly route",
    ],
  },
  {
    title: "Bulk Feed Delivery",
    intro: "Bulk feed is available for farms with bulk storage.",
    items: [
      "Minimum order: 2 tons of one product",
      "Delivery is scheduled every 2-3 weeks",
      "Contact us by email or text for pricing and scheduling",
    ],
  },
];

const faqTopics = [
  "When is the next pickup day?",
  "What if I miss the order deadline?",
  "Can someone else pick up my order?",
  "Can I change my order after submitting it?",
  "Where is pickup located?",
  "What if I don't know which feed I need?",
  "What payment methods do you accept?",
  "Do you help load feed?",
  "Why do orders operate on a four-week schedule?",
];

export default function OrderFeed() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      <main className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <SiteHeader active="order" />

        <section className="relative -mx-5 overflow-hidden px-5 py-16 md:-mx-10 md:px-10 md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/order-pigs.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[rgba(15,72,120,0.68)]" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--bronze)]">
              Order Feed
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Build Your Pallet
            </h1>
            <p className="mt-6 text-xl font-semibold">Getting quality feed shouldn&apos;t be complicated.</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 md:text-lg">
              Whether you&apos;re picking up a few bags for your backyard flock or ordering feed for
              your farm, we&apos;re here to make the process simple.
            </p>
          </div>
        </section>

        <Section className="pb-8">
          <div className="deadline-banner">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--bronze)]">
                Current Order Window
              </p>
              <p className="mt-2 text-2xl font-bold text-[var(--ink)]">{getOrderWindowMessage()}</p>
            </div>
            <div className="grid gap-4 text-sm sm:grid-cols-2 lg:min-w-[32rem]">
              <div>
                <p className="font-bold text-[var(--ink)]">Next Pickup</p>
                <p className="text-[var(--ink-muted)]">{ORDER_WINDOW.nextPickup}</p>
              </div>
              <div>
                <p className="font-bold text-[var(--ink)]">Order Deadline</p>
                <p className="text-[var(--ink-muted)]">{ORDER_WINDOW.orderDeadline}</p>
              </div>
            </div>
          </div>

          <a
            href={PICKUP_LOCATION.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 block rounded border border-[var(--ink-soft)] bg-white p-5 transition hover:border-[var(--bronze)]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--bronze)]">
              Pickup Location
            </p>
            <p className="mt-2 text-xl font-bold text-[var(--ink)]">{PICKUP_LOCATION.name}</p>
            <p className="text-[var(--ink-muted)]">
              {PICKUP_LOCATION.street}
              <br />
              {PICKUP_LOCATION.cityStateZip}
            </p>
          </a>
        </Section>

        <Section className="-mx-5 bg-white/55 px-5 md:-mx-10 md:px-10">
          <div className="max-w-3xl">
            <h2 className="section-title">Bagged Feed Pickup</h2>
            <p className="section-copy">Our bagged feed pickup is offered every four weeks.</p>
            <p className="mt-4 font-bold text-[var(--ink)]">Here&apos;s how it works:</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Build Your Pallet", "Complete the online order form before the order deadline."],
              ["Reserve Your Feed", "Payment is collected when you place your order so your feed is reserved and ready."],
              [
                "See You on Pickup Day",
                "Arrive during your selected pickup window. Your order will be palletized and ready for self-load pickup. Need help loading? Just let us know on the order form.",
              ],
            ].map(([title, text], index) => (
              <article key={title} className="step-card">
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="section-title">Delivery Options</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {deliveryOptions.map((option) => (
              <article key={option.title} className="info-card">
                <h3>{option.title}</h3>
                <p className="mt-2 font-semibold text-[var(--brown)]">{option.intro}</p>
                {option.text ? <p>{option.text}</p> : null}
                <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
                  {option.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--bronze)]">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section className="-mx-5 bg-[var(--lace)] px-5 md:-mx-10 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="eyebrow">Never Miss an Order Window</p>
              <h2 className="section-title">Our order form opens once every four weeks.</h2>
              <p className="section-copy">Join our text list to receive:</p>
              <ul className="mt-5 space-y-2 text-[var(--ink-muted)]">
                <li>Order opening notifications</li>
                <li>Upcoming pickup dates</li>
                <li>Order deadline reminders</li>
                <li>Important service updates</li>
              </ul>
              <p className="mt-5 font-bold text-[var(--ink)]">No spam. Just the updates you need.</p>
            </div>
            <div className="rounded bg-white p-5 md:p-7">
              <h3 className="text-2xl font-bold text-[var(--ink)]">Never Miss an Order Window</h3>
              <TextOptInForm />
            </div>
          </div>
        </Section>

        <Section id="build-my-pallet">
          <div className="max-w-3xl">
            <h2 className="section-title">Ready to Build Your Pallet?</h2>
            <p className="section-copy">Complete the order form below to reserve your feed.</p>
          </div>
          <div className="mt-8">
            <JotformEmbed />
          </div>
        </Section>

        <Section className="-mx-5 bg-white/55 px-5 md:-mx-10 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-copy">Coming soon.</p>
              <p className="mt-5">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-[var(--bronze)]">
                  Contact Remi
                </a>
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {faqTopics.map((topic) => (
                <div key={topic} className="rounded border border-[var(--ink-soft)] bg-white p-4 text-sm font-semibold text-[var(--ink)]">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
