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
    <nav className="fixed bottom-0 w-full z-50 rounded-t-3xl bg-white/90 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      <div className="flex justify-around items-center w-full px-4 pb-6 pt-2 rtl:flex-row-reverse">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`flex flex-col items-center justify-center px-6 py-2 active:scale-90 transition-transform duration-150 rounded-2xl ${
                isActive
                  ? "bg-[#006c49]/10 text-[#006c49]"
                  : "text-slate-400 hover:text-primary"
              }`}
            >
              <MaterialIcon
                name={item.icon}
                filled={isActive}
                className="mb-1"
              />

              <span className="font-headline text-[12px] font-semibold uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};