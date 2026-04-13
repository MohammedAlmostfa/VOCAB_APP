import React from "react";
import { TEXT } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const DayCard = ({ day, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-surface-container-lowest p-5 rounded-3xl shadow-card border border-transparent hover:border-primary-container/20 transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between">
        {/* Day Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary">
            <MaterialIcon name="event_available" className="text-3xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-on-surface font-headline">
              {day.date}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <p className="text-sm text-on-surface-variant font-body">
                {day.wordsCount} {TEXT.newWords}
              </p>
            </div>
          </div>
        </div>

        {/* Status and Arrow */}
        <div className="flex items-center gap-2">
          <div className="bg-secondary/10 text-secondary text-[10px] px-2 py-1 rounded-full font-bold">
            {day.status}
          </div>
          <MaterialIcon
            name="chevron_left"
            className="text-slate-300 group-hover:text-primary transition-colors"
          />
        </div>
      </div>
    </div>
  );
};