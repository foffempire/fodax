import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-red-600 text-white shadow-lg shadow-red-900/20 hover:bg-red-700 focus-visible:ring-red-600",
  secondary:
    "border border-white/70 bg-white/10 text-white hover:bg-white hover:text-slate-950 focus-visible:ring-white",
  light:
    "border border-slate-200 bg-white text-slate-950 hover:border-red-200 hover:text-red-700 focus-visible:ring-red-600",
  dark:
    "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
};

export default function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  className = "",
  showIcon = true,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showIcon ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
