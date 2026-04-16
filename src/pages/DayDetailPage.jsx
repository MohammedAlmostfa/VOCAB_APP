import React, { useEffect, useState } from "react";
import { Header, Navigation, WordCard } from "../components";
import { getWordsByDate } from "../storage/index";

export const DayDetailPage = ({ date, onNavigate }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!date) {
      setError("لا يوجد تاريخ محدد");
      setLoading(false);
      return;
    }

    loadDayWords();
  }, [date]);

  const loadDayWords = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getWordsByDate(date);

      // 🟢 validation مهم
      if (!Array.isArray(data)) {
        setWords([]);
        return;
      }

      setWords(data);
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء تحميل البيانات");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <Header />

      <main className="pt-24 px-6 max-w-2xl mx-auto">

        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            كلمات يوم: {date || "غير معروف"}
          </h2>
        </div>

        {/* STATES */}
        <section className="space-y-4">

          {loading && (
            <p className="text-center">جاري التحميل...</p>
          )}

          {!loading && error && (
            <p className="text-center text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && words.length === 0 && (
            <p className="text-center text-gray-500">
              لا يوجد كلمات لهذا اليوم
            </p>
          )}

          {!loading && !error && words.length > 0 &&
            words.map((word) => (
              <WordCard
                key={word.id}
                english={word.word}
                arabic={word.meaning}
                onDelete={undefined}
              />
            ))
          }
        </section>

      </main>

      <Navigation active="home" onNavigate={onNavigate} />
    </div>
  );
};