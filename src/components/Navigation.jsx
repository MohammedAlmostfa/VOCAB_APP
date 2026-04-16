import React from "react";
import { TEXT, ICONS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const Navigation = ({ active = "home", onNavigate }) => {
  const navItems = [
    { id: "home", label: TEXT.home, icon: ICONS.home },
    { id: "dayView", label: TEXT.dayView, icon: ICONS.calendarToday },
    { id: "review", label: TEXT.review, icon: ICONS.menuBook },
  ];

  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white/90 backdrop-blur-xl
        shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
        safe-bottom
      "
    >
      <div className="flex justify-around items-center px-4 py-3">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`
                flex flex-col items-center justify-center
                px-4 py-2 rounded-2xl transition
                active:scale-95
                ${isActive
                  ? "bg-[#006c49]/10 text-[#006c49]"
                  : "text-slate-400"}
              `}
            >
              <MaterialIcon
                name={item.icon}
                filled={isActive}
                className="mb-1"
              />
              <span className="text-[12px] font-semibold uppercase">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};