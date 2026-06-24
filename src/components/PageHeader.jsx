import MotionReveal from "./MotionReveal.jsx";

export default function PageHeader({ eyebrow, title, description, image }) {
  return (
    <header className="relative isolate overflow-hidden bg-slate-950 pt-32 text-white sm:pt-36">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
        src={image}
        alt=""
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-slate-900/45 to-slate-900/30" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <MotionReveal className="max-w-2xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-red-400">
            {eyebrow}
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm lg:text-lg leading-8 text-white/78">{description}</p>
        </MotionReveal>
      </div>
    </header>
  );
}
