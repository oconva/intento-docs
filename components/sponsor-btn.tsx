import { Heart } from "lucide-react";
import Link from "next/link";
import SponsorNavBtn from "./sponsor-nav-btn";

type SponsorBtnProps = {
  variant?: "default" | "outline";
  className?: string;
};

export const SponsorBtn = ({
  variant = "outline",
  className,
}: SponsorBtnProps) => {
  return (
    <div id="sponsor-btn" className={`w-fit mt-5 ${className}`}>
      <Link href="https://github.com/sponsors/oconva" className="no-style-link">
        <SponsorNavBtn variant={variant} />
      </Link>
    </div>
  );
};

export default SponsorBtn;
