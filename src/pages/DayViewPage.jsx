import React, { useState, useEffect } from "react";
import {
  Header,
  Navigation,
  Button,
  WordCard,
  StatCard,
  Input,
} from "../components";
import { TEXT, ICONS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";
import { addWord, getTodayWords, deleteWord }  from "../storage/index";

export const DayViewPage = ({ onNavigate }) => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState({ english: "", arabic: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  // 🟢 تحميل كلمات اليوم من SQLite مباشرة
  const loadData = async () => {
    try {
      setIsLoading(true);

      const data = await getTodayWords(); // ✅ DB مباشرة

      setWords(data || []);
    } catch (error) {
      console.error("Load data error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 🟢 إضافة كلمة
  const handleAddWord = async () => {
    if (!newWord.english.trim() || !newWord.arabic.trim()) return;

    try {
      const created = await addWord(newWord.english, newWord.arabic);

      // 🔥 إضافة فورية
      setWords((prev) => [created, ...prev]);

      setNewWord({ english: "", arabic: "" });
    } catch (error) {
      console.error("Add word error:", error);
    }
  };

  // 🟢 حذف كلمة
  const handleDeleteWord = async (id) => {
    try {
      await deleteWord(id);

      setWords((prev) => prev.filter((w) => w.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      <Header />

      <main className="max-w-4xl mx-auto pt-28 px-6">
        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title={TEXT.personalDictionary}
            value={TEXT.continueAdding}
            subtitle={TEXT.dailyStatus}
            bgColor="md:col-span-2 bg-surface-container-lowest"
          />

          <StatCard
            title={TEXT.todaysWords}
            value={words.length}
            variant="small"
            bgColor="bg-secondary-container/30"
          />
        </section>

        {/* Add Word */}
        <section className="bg-surface-container-low p-8 rounded-3xl mb-12">
          <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2 font-headline">
            <MaterialIcon name={ICONS.addCircle} className="text-primary" />
            {TEXT.addWord}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label={TEXT.englishWord}
              value={newWord.english}
              onChange={(e) =>
                setNewWord({ ...newWord, english: e.target.value })
              }
              dir="ltr"
            />

            <Input
              label={TEXT.arabicMeaning}
              value={newWord.arabic}
              onChange={(e) =>
                setNewWord({ ...newWord, arabic: e.target.value })
              }
              dir="rtl"
            />
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddWord}
              icon={ICONS.send}
              iconPosition="right"
            >
              {TEXT.addToList}
            </Button>
          </div>
        </section>

        {/* Words List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2 mb-4">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest font-label">
              {TEXT.recentWords}
            </h3>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-on-surface-variant font-body">
                جاري التحميل...
              </p>
            </div>
          ) : words.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-on-surface-variant font-body">
                لا توجد كلمات بعد. أضف كلمة جديدة!
              </p>
            </div>
          ) : (
            words.map((word) => (
              <WordCard
                key={word.id}
                english={word.word}
                arabic={word.meaning}
                onDelete={() => handleDeleteWord(word.id)}
              />
            ))
          )}
        </section>
      </main>

      <Navigation active="dayView" onNavigate={onNavigate} />
    </div>
  );
};