import { cn } from "@/lib/utils";

interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  overlay?: boolean;
  aspectRatio?: string;
}

const BrandImage = ({
  src,
  alt,
  className,
  containerClassName,
  overlay = true,
  aspectRatio,
}: BrandImageProps) => {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl", containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        className={cn("brand-photo", className)}
        loading="lazy"
      />
      {overlay && <div className="brand-photo-overlay" />}
    </div>
  );
};

export default BrandImage;
