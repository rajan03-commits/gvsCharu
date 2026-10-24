import { MapPin, Mail, Phone, Navigation } from "lucide-react";
import { contact } from "@/app/lib/contact";

export default function ContactInfo({
  showMap = true,
}: {
  showMap?: boolean;
}) {
  return (
    <address className="text-sm not-italic leading-6 text-foreground">
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-primary" />
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            {contact.address}
            <span className="sr-only">(opens in Google Maps in a new tab)</span>
          </a>
        </li>

        <li className="flex items-start gap-3">
          <Mail size={18} aria-hidden="true" className="mt-1 shrink-0 text-primary" />
          <a
            href={`mailto:${contact.email}`}
            className="break-words underline underline-offset-4 hover:text-primary"
          >
            {contact.email}
          </a>
        </li>

        <li className="flex items-start gap-3">
          <Phone size={18} aria-hidden="true" className="mt-1 shrink-0 text-primary" />
          <a
            href={contact.phoneHref}
            className="underline underline-offset-4 hover:text-primary"
          >
            {contact.phone}
          </a>
        </li>
      </ul>

      {showMap && (
        <a
          href={contact.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 font-medium text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Navigation size={16} aria-hidden="true" />
          View location on Google Maps
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </address>
  );
}