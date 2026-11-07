
// A soft wave between two sections. "from" is the colour of the section above,
// "to" is the colour of the section below.
type Tone = "plain" | "surface";

const background: Record<Tone, string> = {
  plain: "bg-background",
  surface: "bg-surface",
};
const fill: Record<Tone, string> = {
  plain: "fill-background",
  surface: "fill-surface",
};

export default function WaveDivider({ from, to }: { from: Tone; to: Tone }) {
  return (
    <div aria-hidden="true" className={`${background[from]} leading-[0]`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block h-8 w-full md:h-12 ${fill[to]}`}
      >
        <path d="M0 42C200 86 420 4 720 40S1210 84 1440 30V80H0Z" />
      </svg>
    </div>
  );
}