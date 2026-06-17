import { useEffect, useState, type ReactNode } from "react";

type ResponsiveScaleProps = {
  children: ReactNode;
  designWidth?: number;
  designHeight?: number;
};

export default function ResponsiveScale({
  children,
  designWidth = 1440,
  designHeight = 9700,
}: ResponsiveScaleProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const nextScale = Math.min(1, window.innerWidth / designWidth);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth]);

  const scaledHeight = designHeight * scale;

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div
        className="relative mx-auto"
        style={{ width: designWidth * scale, height: scaledHeight }}
      >
        <div
          className="relative origin-top-left"
          style={{
            width: designWidth,
            height: designHeight,
            transform: `scale(${scale})`,
            // Used by FullWidthBleed so backgrounds span the full viewport
            ["--page-scale" as string]: scale,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
