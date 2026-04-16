import React, { useState, useEffect } from "react";
import {
  HomePage,
  DayViewPage,
  ReviewPage,
  DayDetailPage,
} from "./pages";

import { initDB } from "./storage/db";

export default function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // 🟢 تشغيل قاعدة البيانات أول ما يفتح التطبيق
  useEffect(() => {
    const setup = async () => {
      try {
        await initDB();
        setIsReady(true);
      } catch (err) {
        console.error("DB init error:", err);
      }
    };

    setup();
  }, []);

  // 🟢 التنقل بين الصفحات
  const handleNavigate = (page, data) => {
    setCurrentPage(page);

    if (page === "dayDetail") {
      setSelectedDate(data);
    }
  };

  // 🟢 عرض الصفحات
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;

      case "dayView":
        return <DayViewPage onNavigate={handleNavigate} />;

      case "review":
        return <ReviewPage onNavigate={handleNavigate} />;

      case "dayDetail":
        return (
          <DayDetailPage
            date={selectedDate}
            onNavigate={handleNavigate}
          />
        );

      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // 🟡 شاشة تحميل
  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-on-surface">
        <p className="text-lg">جاري تجهيز التطبيق...</p>
      </div>
    );
  }

  // 🟢 التطبيق الرئيسي
  return (
    <div className="w-full min-h-screen bg-background text-on-surface" dir="rtl">
      {renderPage()}
    </div>
  );
}