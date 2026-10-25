import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";

export default function DonateBanner() {
  return (
    <Section tone="primary">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Help a child find a loving home
          </h2>
          <p className="mt-2 max-w-xl text-white">
            Every contribution supports the care and protection of children in
            need.
          </p>
        </div>
        <ButtonLink href="/donate" variant="light">
          Donate Now
        </ButtonLink>
      </div>
    </Section>
  );
}