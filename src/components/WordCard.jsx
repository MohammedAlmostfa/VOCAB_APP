import React from "react";
import { MaterialIcon } from "../utils/helpers.jsx";
import {
  getColorByIndex,
  getBgColorByIndex
} from "../utils/helpers.jsx";

export const WordCard = ({
  index,
  english,
  arabic,
  onDelete,
  onClick,
}) => {
  const borderColor = getColorByIndex(index);
  const bgColor = getBgColorByIndex(index);
  // ملاحظة: getTextColorByIndex غير موجودة في helpers.jsx
  // يمكنك تعديل هذا السطر لاحقاً حسب الحاجة
  const textColor = "";

  return (
    <div
      onClick={onClick}
      className={`bg-surface-container-lowest p-6 rounded-2xl flex items-center justify-between hover:bg-surface-container-low transition-all group border-r-4 ${borderColor} shadow-sm cursor-pointer`}
    >
      <div className="flex items-center gap-6 flex-1">
        {/* Index Circle */}
        <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center ${textColor} font-bold font-headline`}>
          {index + 1}
        </div>

        {/* Word Content */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
          <span className="text-xl font-bold text-on-surface font-headline ltr">
            {english}
          </span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-outline-variant/30"></span>
          <span className="text-lg text-on-surface-variant font-body">
            {arabic}
          </span>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete?.(index);
        }}
        className="p-2 rounded-xl text-error/40 hover:text-error hover:bg-error-container/20 transition-all opacity-0 group-hover:opacity-100"
      >
        <MaterialIcon name="delete" />
      </button>
    </div>
  );
};