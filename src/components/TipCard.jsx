
import React from "react";
import { TEXT } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const TipCard = ({ title, description, icon, image }) => {
  return (
    <div className="relative rounded-[2.5rem] bg-surface-container-high p-8 flex items-center overflow-hidden group">
      <div className="flex-1 relative z-10">
        <span className="inline-block px-3 py-1 bg-tertiary-container/10 text-tertiary-container text-[10px] rounded-full font-bold mb-3 font-headline">
          {TEXT.todayTip}
        </span>
        <h5 className="text-xl font-bold mb-2 text-on-surface font-headline">
          {title}
        </h5>
        <p className="text-sm text-on-surface-variant leading-relaxed font-body">
          {description}
        </p>
      </div>

      {/* Icon or Image Section */}
      {icon && (
        <div className="w-24 h-24 relative z-10 flex items-center justify-center">
          {icon}
        </div>
      )}

      {image && (
        <div className="w-24 h-24 relative z-10">
          <img
            alt="Tip"
            className="object-contain w-full h-full"
            src={image}
          />
        </div>
      )}

      {/* Artistic Mesh Background */}
      <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-0 group-hover:bg-primary/10 transition-colors"></div>
    </div>
  );
};