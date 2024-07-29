import React, { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  customStyle?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  Tag,
  variant,
  customStyle,
}) => {
  const variantOptions = {
    h1: { size: 52, lineHeight: 64 },
    h2: { size: 40, lineHeight: 56 },
    h3: { size: 32, lineHeight: 40 },
    h4: { size: 24, lineHeight: 32 },
    h5: { size: 20, lineHeight: 24 },
    h6: { size: 16, lineHeight: 24 },
  };

  return Tag ? (
    <Tag
      style={
        variant
          ? {
              fontSize: variantOptions[variant].size,
              lineHeight: `${variantOptions[variant].lineHeight}px`,
              ...customStyle,
            }
          : { ...customStyle }
      }
    >
      {children}
    </Tag>
  ) : (
    <div
      style={
        variant
          ? {
              fontSize: variantOptions[variant].size,
              lineHeight: `${variantOptions[variant].lineHeight}px`,
              ...customStyle,
            }
          : { ...customStyle }
      }
    >
      {children}
    </div>
  );
};
