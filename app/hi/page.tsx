import Link from "next/link";
import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import DonateBanner from "@/components/DonateBanner";
import HeroSlider from "@/components/HeroSlider";
import MissionVision from "@/components/MissionVision";
import PhotoSlot from "@/components/PhotoSlot";
import PromiseBanner from "@/components/PromiseBanner";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { homeImages } from "@/app/lib/homeVisuals";
import { aboutImages } from "@/app/lib/aboutVisuals";
import { imageDisclaimerHi, siteNameHi } from "@/app/lib/site";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";
import {
  heroSlidesHi,
  aboutIntroHi,
  ourPromiseHi,
  missionShortHi,
  visionShortHi,
  impactHi,
  adoptionStepTitlesHi,
  storyPlaceholderHi,
} from "@/app/lib/hi/home";

export const metadata: Metadata = {
  title: { absolute: `${siteNameHi} | बाल देखभाल और दत्तक ग्रहण` },
};

// Plain strings, so the server page can hand them to the client slider
const sliderLabelsHi = {
  region: "मुख्य संदेश",
  previous: "पिछली स्लाइड",
  next: "अगली स्लाइड",
  goTo: "स्लाइड {n} पर जाएँ",
  slideOf: "{total} में से {n}",
};

const missionLabelsHi = {
  ourMission: hi.home.ourMission,
  ourVision: hi.home.ourVision,
  readFullMission: hi.home.readFullMission,
  readFullVision: hi.home.readFullVision,
  showLess: hi.common.showLess,
};

// Buttons point to a Hindi page if one exists, otherwise to the English page
const slides = heroSlidesHi.map((slide) => ({
  ...slide,
  buttons: slide.buttons.map((button) => ({
    ...button,
    href: hrefFor(button.href, "hi"),
  })),
}));

export default function HindiHome() {
  const aboutPhoto = homeImages.about;

  return (
    <>
      <Section>
        <HeroSlider
          slides={slides}
          note={imageDisclaimerHi}
          labels={sliderLabelsHi}
        />
      </Section>

      <Section tone="surface">
        <div
          className={
            aboutPhoto.src ? "grid items-center gap-10 lg:grid-cols-2" : ""
          }
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {hi.home.aboutHeading(siteNameHi)}
            </h2>
            <p className="mt-4 text-lg text-foreground">{aboutIntroHi}</p>
            <Link
              href={hrefFor("/about", "hi")}
              className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
            >
              {hi.home.learnMore}
            </Link>
          </div>
          {aboutPhoto.src && (
            <Reveal>
              <figure>
                <PhotoSlot
                  src={aboutPhoto.src}
                  alt={aboutPhoto.alt}
                  position={aboutPhoto.position}
                  placeholder="[Photo]"
                  className="aspect-4/3"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <figcaption className="mt-2 text-sm text-foreground">
                  {imageDisclaimerHi}
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </Section>

      <PromiseBanner
        text={ourPromiseHi}
        image={aboutImages.promise}
        heading={hi.home.ourPromise}
      />

      <MissionVision
        labels={missionLabelsHi}
        shortMission={missionShortHi}
        shortVision={visionShortHi}
      />

      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {hi.home.ourImpact}
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {impactHi.map((item) => (
            <li
              key={item.label}
              className="rounded-lg bg-background p-6 text-center"
            >
              <p className="text-4xl font-bold text-primary">{item.value}</p>
              <p className="mt-2 text-foreground">{item.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {hi.home.howAdoptionWorks}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adoptionStepTitlesHi.map((title, index) => (
            <li
              key={title}
              className="flex flex-col gap-3 rounded-lg border border-border p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="font-semibold text-foreground">{title}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ButtonLink href={hrefFor("/adoption", "hi")} variant="outline">
            {hi.home.seeFullProcedure}
          </ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {hi.home.storiesOfHope}
          </h2>
          <blockquote className="mt-6 border-l-4 border-accent pl-6 text-lg text-foreground">
            {storyPlaceholderHi}
          </blockquote>
          <Link
            href={hrefFor("/stories", "hi")}
            className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            {hi.home.readMoreStories}
          </Link>
        </div>
      </Section>

      <DonateBanner
        title={hi.donateBanner.title}
        text={hi.donateBanner.text}
        buttonLabel={hi.nav.donate}
        href={hrefFor("/donate", "hi")}
      />
    </>
  );
}