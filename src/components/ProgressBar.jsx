import React from "react";

export const ProgressBar = ({
  current,
  total,
  label,
  showPercentage = true,
}) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-on-surface-variant font-label">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm font-bold text-secondary font-label">
            {percentage}%
          </span>
        )}
      </div>
      <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};