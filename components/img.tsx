import Image from "next/image";


export const Img = ({
  src,
  blurUrl,
  showSubtitle,
  subtitle,
  priority,
  className,
  width,
  height,
}: {
  src: string;
  blurUrl?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <>
      <Image
        src={src}
        width={`${width ? width : 1000}`}
        height={`${height ? height : 500}`}
        alt={subtitle}
        className={className}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurUrl ?? src}
      />
      {showSubtitle && subtitle && (
        <p className="text-center text-sm text-gray-500 mt-2">{subtitle}</p>
      )}
    </>
  );
};

export default Img;
