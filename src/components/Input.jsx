import React from "react";

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  dir = "rtl",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-xs font-bold text-on-surface-variant mr-1 font-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        dir={dir}
        className={`w-full bg-surface-container-lowest border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-lg font-medium placeholder:text-outline-variant/50 ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...props}
      />
    </div>
  );
};