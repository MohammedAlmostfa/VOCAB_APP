import React from "react";
import { TEXT, COLORS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const Header = ({ userImage }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f9f9ff]/80 backdrop-blur-md shadow-header">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full rtl:flex-row-reverse">
        {/* User Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/20">
            <img
              alt="User"
              src={
                userImage ||
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCTYXQrM_yDW42uNNBIl3JPyrp59z9Zo3Hh2xUVwiTjm1BTFaNZKYnkFQecJvuV2HMzkWEVgxWNaCrw72vGOeqGd9DsKS1uSJIygjodYtA_4AbXpq4HbY9wZIM-qtwQSeg6yhoGyrmUhtCj-_PLJbkQLhxyVaqqyWZ0XXHKez6SBf6MSrcmmJkq1yRORuELH2H_7zAjtV5H_V47Z5JcZU6FwxbF8W9P57V31H5AjOJ4aZyMlWP8sWUAiL4lrCoRDGwujKx0UvpOAaGc"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-xl font-black text-primary font-headline tracking-tight">
          {TEXT.appName}
        </h1>

        {/* Menu Button */}
        <button className="text-slate-500 hover:bg-[#f2f3fd] transition-all active:scale-95 duration-200 p-2 rounded-full">
          <MaterialIcon name="menu" />
        </button>
      </div>
    </header>
  );
};