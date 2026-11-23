"use client";

import React from "react";

export function LiquidGlassButton({
  children = "Liquid Glass Button",
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export const liquidGlassButton = LiquidGlassButton;
export default LiquidGlassButton;
