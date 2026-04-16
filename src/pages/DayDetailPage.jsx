import React, { useEffect, useState } from "react";
import { Header, Navigation, WordCard } from "../components";
import { getWordsByDate } from "../storage/index";

export const DayDetailPage = ({ date, onNavigate }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🟢 تحميل كلمات اليوم
  useEffect(() => {
    loadDayWords();
  }, [date]);

  const loadDayWords = async () => {
    try {
      setLoading(true);

      const data = await getWordsByDate(date);

      setWords(data || []);
    } catch (err) {
      console.error("Load day error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <Header />

      <main className="pt-24 px-6 max-w-2xl mx-auto">

        {/* 🟢 عنوان اليوم */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            كلمات يوم: {date}
          </h2>
        </div>

        {/* 🟢 قائمة الكلمات فقط */}
        {loading ? (
          <p className="text-center">جاري التحميل...</p>
        ) : words.length === 0 ? (
          <p className="text-center text-gray-500">
            لا يوجد كلمات لهذا اليوم
          </p>
        ) : (
          words.map((word) => (
            <WordCard
              key={word.id}
              english={word.word}
              arabic={word.meaning}
              onDelete={undefined}
            />
          ))
        )}

      </main>

      <Navigation active="home" onNavigate={onNavigate} />
    </div>
  );
};