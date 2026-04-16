import React, { useEffect, useState } from "react";
import { Header, Navigation, Button, ProgressBar } from "../components";
import { TEXT, ICONS } from "../constants/theme";
import { getWords } from "../storage/index";

export const ReviewPage = ({ onNavigate }) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🟢 تحميل الكلمات من SQLite
  useEffect(() => {
    loadWords();
  }, []);

  const loadWords = async () => {
    try {
      setLoading(true);
      const data = await getWords();

      // ترتيب حسب التاريخ أو ID
      const sorted = (data || []).sort((a, b) => b.id - a.id);

      setWords(sorted);
      setCurrentWordIndex(0);
    } catch (err) {
      console.error("Review load error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        جاري التحميل...
      </div>
    );
  }

  if (words.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        لا توجد كلمات للمراجعة
      </div>
    );
  }

  const currentWord = words[currentWordIndex];

  const handleNext = () => {
    setShowMeaning(false);
    setCurrentWordIndex((prev) =>
      prev < words.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setShowMeaning(false);
    setCurrentWordIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24 flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-24 px-4 md:px-8 max-w-4xl mx-auto w-full flex flex-col justify-center">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-secondary font-bold text-sm uppercase mb-2 block">
            {TEXT.session}: {TEXT.appName}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold">
            {TEXT.focusAndRecall}
          </h2>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar
            current={currentWordIndex + 1}
            total={words.length}
            label={`${currentWordIndex + 1} / ${words.length}`}
          />
        </div>

        {/* Flashcard */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-10 text-center shadow-lg flex flex-col items-center justify-center min-h-[320px]">

          <p className="text-xs uppercase text-primary/60 mb-3">
            {TEXT.englishWord}
          </p>

          <h3 className="text-4xl md:text-6xl font-bold mb-10">
            {currentWord.word}
          </h3>

          <div className="w-full flex justify-center items-center">
            {!showMeaning ? (
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowMeaning(true)}
                icon={ICONS.visibility}
              >
                {TEXT.showMeaning}
              </Button>
            ) : (
              <div className="bg-surface-container-low rounded-2xl p-6 w-full text-center">
                <p className="text-xs uppercase text-secondary mb-2">
                  {TEXT.arabicMeaning}
                </p>
                <p className="text-3xl font-bold text-secondary">
                  {currentWord.meaning}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* مسافة */}
        <div className="h-12 md:h-16" />

        {/* Controls */}
        <div className="flex justify-between items-center max-w-sm mx-auto w-full mb-10">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentWordIndex === 0}
            icon={ICONS.chevronRight}
          >
            {TEXT.previous}
          </Button>

          <Button
            variant="secondary"
            onClick={handleNext}
            disabled={currentWordIndex === words.length - 1}
            icon={ICONS.chevronLeft}
            iconPosition="right"
          >
            {TEXT.next}
          </Button>
        </div>

      </main>

      <Navigation active="review" onNavigate={onNavigate} />
    </div>
  );
};