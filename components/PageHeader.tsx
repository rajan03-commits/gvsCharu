import Link from "next/link";
import Section from "@/components/Section";

export default function PageHeader({
  title,
  crumb = title,
}: {
  title: string;
  crumb?: string;
}) {
  return (
    <Section tone="surface">
      <nav aria-label="Breadcrumb" className="text-sm text-foreground">
        <Link
          href="/"
          className="underline underline-offset-4 hover:text-primary"
        >
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{crumb}</span>
      </nav>
      <h1 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h1>
    </Section>
  );
}