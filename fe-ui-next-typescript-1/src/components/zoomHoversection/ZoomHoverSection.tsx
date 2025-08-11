import { DEFAULT_ZOOM_SCALE, TRANSITION_DURATION } from "@/constants/constants";
import { ZoomHoverProps } from "@/interface";

const ZoomHoverSection: React.FC<ZoomHoverProps> = ({
  src,
  alt,
  zoomScale = DEFAULT_ZOOM_SCALE,
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden inline-block ${className}`}
      style={{
        transition: `transform ${TRANSITION_DURATION}`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="transform transition-transform duration-300 ease-in-out hover:scale-[var(--zoom-scale)]"
        style={{ "--zoom-scale": zoomScale } as React.CSSProperties}
      />
    </div>
  );
};

export default ZoomHoverSection;
