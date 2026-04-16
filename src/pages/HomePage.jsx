import React, { useState, useEffect } from "react";

import {
  Header,
  Navigation,
  Button,
  DayCard,
  StatCard,
  TipCard,
} from "../components";

import { TEXT, ICONS } from "../constants/theme";
import { getDaysStats } from "../storage/index";

export const HomePage = ({ onNavigate }) => {
  const [days, setDays] = useState([]);
  const [stats, setStats] = useState({
    todayWords: 0,
    totalWords: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  // 🟢 تحميل البيانات من SQLite مباشرة
  const loadData = async () => {
    try {
      setLoading(true);

      const { daysArray, todayWords, totalWords } =
        await getDaysStats();

      setDays(daysArray || []);
      setStats({
        todayWords,
        totalWords,
      });
    } catch (err) {
      console.error("Load home error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🟢 إنشاء يوم جديد (UI فقط)
  const handleCreateNewDay = () => {
    const today = new Date().toISOString().split("T")[0];

    setDays((prev) => {
      const exists = prev.some((d) => d.date === today);
      if (exists) return prev;

      return [
        {
          id: today,
          date: today,
          wordsCount: 0,
          status: "جاري",
        },
        ...prev,
      ];
    });
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <Header />

      <main className="pt-24 px-6 max-w-2xl mx-auto">

        {/* Hero */}
        <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary shadow-xl">
          <div className="relative z-10">
            <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">
              {TEXT.readyForNewWords}
            </p>

            <h2 className="text-3xl font-bold mb-6">
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
        </section>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <StatCard
            title={TEXT.todaysWords}
            value={stats.todayWords}
            variant="small"
            bgColor="bg-primary/10"
          />

          <StatCard
            title="إجمالي الكلمات"
            value={stats.totalWords}
            variant="small"
            bgColor="bg-secondary-container/30"
          />
        </div>

        {/* Days */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-on-surface-variant uppercase">
            جلساتك الأخيرة
          </h3>

          {loading ? (
            <p className="text-center">جاري التحميل...</p>
          ) : days.length === 0 ? (
            <p className="text-center text-on-surface-variant">
              لا يوجد بيانات بعد
            </p>
          ) : (
            days.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                onClick={() => onNavigate("dayDetail", day.date)}
              />
            ))
          )}
        </section>

        {/* Tip */}
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