import React, { useState } from "react";
import {
  Header,
  Navigation,
  Button,
  DayCard,
  StatCard,
  TipCard,
} from "../components";
import { TEXT, SAMPLE_DAYS, SAMPLE_STATS, ICONS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const HomePage = ({ onNavigate }) => {
  const [days, setDays] = useState(SAMPLE_DAYS);

  const handleCreateNewDay = () => {
    const today = new Date().toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const newDay = {
      id: Date.now(),
      date: today,
      wordsCount: 0,
      status: "جاري",
    };

    setDays([newDay, ...days]);
  };

  return (

    
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <Header />

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary shadow-xl">
          <div className="relative z-10">
            <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest font-headline">
              {TEXT.readyForNewWords}
            </p>
            <h2 className="text-3xl font-bold mb-6 leading-tight font-headline">
              {TEXT.startNewJourney}
            </h2>
            <Button
              variant="primary"
              onClick={handleCreateNewDay}
              icon={ICONS.addCircle}
            >
              {TEXT.createNewDay}
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </section>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <StatCard
            title={TEXT.todaysWords}
            value={SAMPLE_STATS.todayWords}
            variant="small"
            bgColor="bg-primary/10"
          />
          <StatCard
            title="إجمالي الكلمات"
            value={SAMPLE_STATS.totalWords}
            variant="small"
            bgColor="bg-secondary-container/30"
          />
        </div>

        {/* Recent Days Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2 mb-4">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-label">
              جلساتك الأخيرة
            </h3>
            <button className="text-xs font-bold text-primary hover:underline font-label">
              {TEXT.viewAll}
            </button>
          </div>

          {days.map((day) => (
            <DayCard
              key={day.id}
              day={day}
              onClick={() => {/* Navigate to day logic here */}}
            />
          ))}
        </section>

        {/* Featured Tip */}
        <div className="mt-12 mb-6">
          <TipCard
            title={TEXT.useFullSentences}
            description={TEXT.sentencesTip}
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuC_GoRIOThb4P97PW5u79MUS3Zrmo3wLceTWqe8H68008eBorVwinrpjEB2AGaAb7Wx36Cl1lMP4WBEBeMATDGsBOnnpJjNHSUp5U4hSWxq7wXmKb6_3nVrS49X0vw2v6Lx4vVk--57YGo9x75WLXkbJyFSDpgQ8a7XYlk0t0kzTRdRcTAMuuHNG--8xHEU7Z0x_oj-ixj7RgRNgVlq7h-fgCrRmfjFf_MbKSSxc-V1q9rjf6b4Lfac1afuTSBo1CAJojMb7AUsp9pD"
          />
        </div>
      </main>

      <Navigation active="home" onNavigate={onNavigate} />
    </div>
  );
};