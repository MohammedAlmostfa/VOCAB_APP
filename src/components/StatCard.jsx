import React from "react";

export const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  variant = "default", // default, small
  bgColor = "bg-surface-container-lowest",
  textColor = "text-on-surface",
}) => {
  const isSmall = variant === "small";

  if (isSmall) {
    return (
      <div className={`${bgColor} p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden`}>
        <div className="relative z-10">
          <div className="text-5xl font-black text-on-secondary-container mb-2">
            {value}
          </div>
          <div className="text-sm font-bold text-on-secondary-container/80 uppercase tracking-tighter">
            {title}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className={`${bgColor} p-8 rounded-3xl shadow-card relative overflow-hidden group`}>
      <div className="relative z-10">
        {icon && (
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary">
              {icon}
            </div>
          </div>
        )}

        <span className={`text-tertiary font-bold tracking-widest text-xs uppercase mb-2 block font-label`}>
          {subtitle}
        </span>
        <h3 className={`text-3xl font-bold ${textColor} font-headline`}>
          {title}
        </h3>
        {value && (
          <p className="text-on-surface-variant max-w-xs leading-relaxed mt-3 font-body">
            {value}
          </p>
        )}
      </div>

      {/* Decorative Background */}
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10 group-hover:bg-secondary-container/40 transition-colors"></div>
    </div>
  );
};