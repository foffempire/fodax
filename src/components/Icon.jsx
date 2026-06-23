import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cog,
  Fuel,
  HardHat,
  Home,
  Landmark,
  Paintbrush,
  PlugZap,
  Route,
  ShieldCheck,
} from "lucide-react";

const icons = {
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cog,
  HardHat,
  Home,
  Landmark,
  Paintbrush,
  PlugZap,
  Route,
  ShieldCheck,
  Fuel
};

export default function Icon({ name, className = "h-6 w-6" }) {
  const LucideIcon = icons[name] || HardHat;
  return <LucideIcon className={className} aria-hidden="true" />;
}
