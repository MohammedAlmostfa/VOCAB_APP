import React, { useState } from "react";
import { HomePage, DayViewPage, ReviewPage } from "./pages";


function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "dayView":
        return <DayViewPage onNavigate={handleNavigate} />;
      case "review":
        return <ReviewPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-background text-on-surface" dir="rtl">
      {renderPage()}
    </div>
  );
}

function App() {
  return (
  
      <AppContent />
   
  );
}

export default App;