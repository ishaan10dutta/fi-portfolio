import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  href: string;
  isActive?: boolean;
};

const NavButton = (props: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        props.isActive ? "bg-white/10 text-white" : "bg-transparent"
      )}>
      <Link href={props.href}>{props.label}</Link>
    </Button>
  );
};

export { NavButton };
