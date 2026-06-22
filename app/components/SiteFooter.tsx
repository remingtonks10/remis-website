import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  ORDER_PATH,
  PICKUP_LOCATION,
} from "@/app/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[var(--ink)] text-white">
      <div className="mx-auto grid w-full max-w-[90rem] gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <h2 className="text-lg font-bold">Kesten Feed Co.</h2>
          <p className="mt-3 max-w-md text-sm text-white/78">
            Built on community. Backed by experience.
          </p>
          <p className="mt-3 max-w-md text-sm text-white/78">
            Reliable feed from folks you can trust.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--bronze)]">
            Contact
          </h2>
          <div className="mt-3 space-y-2 text-sm text-white/78">
            <p>
              <a href={CONTACT_PHONE_HREF} className="hover:text-white">
                {CONTACT_PHONE}
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--bronze)]">
            Pickup
          </h2>
          <a
            href={PICKUP_LOCATION.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-sm text-white/78 hover:text-white"
          >
            {PICKUP_LOCATION.name}
            <br />
            {PICKUP_LOCATION.street}
            <br />
            {PICKUP_LOCATION.cityStateZip}
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-xs text-white/62">
        <span>&copy; 2026 Kesten Feed Co.</span>
        <span className="mx-2">|</span>
        <Link href={ORDER_PATH} className="hover:text-white">
          Build My Pallet
        </Link>
      </div>
    </footer>
  );
}
