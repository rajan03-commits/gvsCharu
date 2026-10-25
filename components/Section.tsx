const tones = {
  plain: "",
  surface: "bg-surface",
  primary: "bg-primary",
};

export default function Section({
  children,
  tone = "plain",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <section className={tones[tone]}>
      <div className="mx-auto max-w-6xl px-6 py-16">{children}</div>
    </section>
  );
}       