import React, { useState } from "react";
import {
  Header,
  Navigation,
  Button,
  WordCard,
  StatCard,
  Input,
} from "../components";
import { TEXT, SAMPLE_WORDS, ICONS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const DayViewPage = ({ onNavigate }) => {
  const [words, setWords] = useState(SAMPLE_WORDS);
  const [newWord, setNewWord] = useState({ english: "", arabic: "" });

  const handleAddWord = () => {
    if (newWord.english.trim() && newWord.arabic.trim()) {
      const word = {
        id: Date.now(),
        english: newWord.english,
        arabic: newWord.arabic,
        colorClass: ["primary", "secondary", "tertiary"][words.length % 3],
      };
      setWords([...words, word]);
      setNewWord({ english: "", arabic: "" });
    }
  };

  const handleDeleteWord = (index) => {
    setWords(words.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32">
      <Header />

      <main className="max-w-4xl mx-auto pt-28 px-6">
        {/* Hero Section */}
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

        {/* Add Word Form */}
        <section className="bg-surface-container-low p-8 rounded-3xl mb-12">
          <h3 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2 font-headline">
            <MaterialIcon name={ICONS.addCircle} className="text-primary" />
            {TEXT.addWord}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label={TEXT.englishWord}
              placeholder="e.g. Resilience"
              value={newWord.english}
              onChange={(e) =>
                setNewWord({ ...newWord, english: e.target.value })
              }
              dir="ltr"
            />
            <Input
              label={TEXT.arabicMeaning}
              placeholder="مثال: المرونة"
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
            <button className="text-xs font-bold text-primary hover:underline font-label">
              {TEXT.viewAll}
            </button>
          </div>

          {words.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-on-surface-variant font-body">
                لا توجد كلمات بعد. أضف كلمة جديدة!
              </p>
            </div>
          ) : (
            words.map((word, index) => (
              <WordCard
                key={word.id}
                index={index}
                english={word.english}
                arabic={word.arabic}
                onDelete={() => handleDeleteWord(index)}
              />
            ))
          )}
        </section>
      </main>

      <Navigation active="dayView" onNavigate={onNavigate} />
    </div>
  );
};