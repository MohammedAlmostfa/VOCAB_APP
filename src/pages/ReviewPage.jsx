import React, { useState } from "react";
import {
  Header,
  Navigation,
  Button,
  ProgressBar,
  TipCard,
} from "../components";
import { TEXT, SAMPLE_WORDS, ICONS, SAMPLE_STATS } from "../constants/theme";
import { MaterialIcon } from "../utils/helpers.jsx";

export const ReviewPage = ({ onNavigate }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const currentWord = SAMPLE_WORDS[currentWordIndex];

  const handleNext = () => {
    setShowMeaning(false);
    setCurrentWordIndex((prev) =>
      prev < SAMPLE_WORDS.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setShowMeaning(false);
    setCurrentWordIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-32 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-32 px-4 md:px-8 max-w-4xl mx-auto w-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block font-label">
            {TEXT.session}: {TEXT.appName}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight font-headline">
            {TEXT.focusAndRecall}
          </h2>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <ProgressBar
            current={currentWordIndex + 1}
            total={SAMPLE_WORDS.length}
            label={`${TEXT.progress}: ${currentWordIndex + 1} / ${SAMPLE_WORDS.length}`}
          />
        </div>

        {/* Flashcard */}
        <div className="relative group mb-12">
          {/* Decorative background elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-fixed/30 rounded-full blur-3xl -z-10 group-hover:bg-primary-fixed/50 transition-colors"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10 group-hover:bg-secondary-container/40 transition-colors"></div>

          <div className="bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-16 shadow-header text-center transition-all duration-500 transform hover:-translate-y-1">
            <div className="space-y-10">
              {/* English Word */}
              <div>
                <span className="text-primary/60 font-medium tracking-widest text-xs uppercase block mb-4 font-label">
                  {TEXT.englishWord}
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-on-surface tracking-tighter font-headline">
                  {currentWord.english}
                </h3>
              </div>

              {/* Meaning Reveal Area */}
              <div className="min-h-[140px] flex items-center justify-center">
                {!showMeaning ? (
                  <div className="w-full">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setShowMeaning(true)}
                      icon={ICONS.visibility}
                      className="w-full max-w-sm mx-auto"
                    >
                      {TEXT.showMeaning}
                    </Button>
                  </div>
                ) : (
                  <div className="w-full animate-in fade-in zoom-in duration-300">
                    <div className="bg-surface-container-low rounded-3xl p-8">
                      <span className="text-secondary/60 font-medium tracking-widest text-xs uppercase block mb-2 font-label">
                        {TEXT.arabicMeaning}
                      </span>
                      <p className="text-4xl md:text-5xl font-bold text-secondary font-headline">
                        {currentWord.arabic}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center max-w-md mx-auto w-full mb-12">
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
            disabled={currentWordIndex === SAMPLE_WORDS.length - 1}
            icon={ICONS.chevronLeft}
            iconPosition="right"
          >
            {TEXT.next}
          </Button>
        </div>
      </main>

      {/* Contextual Information */}
      <section className="max-w-4xl mx-auto w-full px-4 mb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-tertiary-fixed rounded-3xl flex gap-4 items-start">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <MaterialIcon name={ICONS.lightbulb} className="text-tertiary" />
          </div>
          <div>
            <h4 className="font-bold text-on-tertiary-fixed text-lg font-headline">
              {TEXT.todayTip}
            </h4>
            <p className="text-on-tertiary-fixed-variant text-sm mt-1 leading-relaxed font-body">
              كرر الكلمات التي تجد صعوبة فيها ثلاث مرات بصوت عالٍ لتعزيز الذاكرة العضلية للنطق.
            </p>
          </div>
        </div>
        <div className="p-6 bg-secondary-container/30 rounded-3xl flex gap-4 items-start">
          <div className="bg-white p-3 rounded-2xl shadow-sm">
            <MaterialIcon
              name={ICONS.trendingUp}
              className="text-secondary"
            />
          </div>
          <div>
            <h4 className="font-bold text-on-secondary-fixed-variant text-lg font-headline">
              {TEXT.masteryLevel}
            </h4>
            <p className="text-on-secondary-fixed-variant text-sm mt-1 leading-relaxed font-body">
              أنت الآن في المستوى "{SAMPLE_STATS.currentLevel}". أكمل{" "}
              {SAMPLE_STATS.requiredProgress - SAMPLE_STATS.levelProgress} جلسات
              أخرى لتصل للمستوى "المتقدم".
            </p>
          </div>
        </div>
      </section>

      <Navigation active="review" onNavigate={onNavigate} />
    </div>
  );
};