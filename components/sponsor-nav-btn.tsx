import { Heart } from 'lucide-react';

type SponsorBtnProps = {
  variant?: 'default' | 'outline';
  className?: string;
};

export const SponsorNavBtn = ({
  variant = 'default',
  className,
}: SponsorBtnProps) => {
  return (
    <div
      id="sponsor-btn"
      className={`w-fit flex flex-row gap-2 p-2 rounded-lg font-medium hover:bg-destructive hover:text-white hover:fill-white hover:cursor-pointer ${
        variant === 'outline'
          ? 'border border-destructive text-destructive'
          : ''
      } ${className}`}
    >
      <span>Sponsor</span>
      <Heart
        strokeWidth="0.1rem"
        className={`${variant === 'outline' ? 'fill-destructive' : ''}`}
      />
    </div>
  );
};

export default SponsorNavBtn;
