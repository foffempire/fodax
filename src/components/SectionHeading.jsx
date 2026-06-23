import MotionReveal from "./MotionReveal.jsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const centered = align === "center";

  return (
    <MotionReveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-red-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-2xl font-extrabold leading-tight sm:text-3xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${light ? "text-white/75" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </MotionReveal>
  );
}
