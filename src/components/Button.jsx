import React from "react";
import { MaterialIcon } from "../utils/helpers.jsx";

export const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
  icon,
  iconPosition = "left", // left, right
  disabled = false,
  ...props
}) => {
  const baseClass =
    "flex items-center justify-center gap-3 font-bold rounded-full transition-all active:scale-95 duration-200";

  const variants = {
    primary:
      "bg-gradient-to-br from-[#0058be] to-[#2170e4] text-white shadow-lg hover:shadow-primary/20 hover:scale-[1.02]",
    secondary:
      "bg-surface-container-highest text-on-surface hover:bg-surface-container-high",
    outline: "border-2 border-outline text-on-surface hover:bg-surface-dim",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;

  const iconElement = icon ? (
    <MaterialIcon name={icon} />
  ) : null;

  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};