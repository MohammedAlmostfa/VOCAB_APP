// الألوان
export const COLORS = {
  primary: "#0058be",
  primaryContainer: "#2170e4",
  primaryFixed: "#d8e2ff",
  secondary: "#006c49",
  secondaryContainer: "#6cf8bb",
  tertiary: "#924700",
  tertiaryContainer: "#b75b00",
  tertiaryFixed: "#ffdcc6",
  error: "#ba1a1a",
  errorContainer: "#ffdad6",
  background: "#f9f9ff",
  surface: "#f9f9ff",
  surfaceContainer: "#ecedf7",
  surfaceContainerLow: "#f2f3fd",
  surfaceContainerHigh: "#e6e7f2",
  surfaceContainerHighest: "#e1e2ec",
  surfaceContainerLowest: "#ffffff",
  onSurface: "#191b23",
  onSurfaceVariant: "#424754",
  outline: "#727785",
};

// النصوص والقيم الثابتة
export const TEXT = {
  appName: "كلماتي الإنجليزية",
  home: "Home",
  dayView: "Day View",
  review: "Review",
  showMeaning: "اعرض المعنى",
  previous: "السابق",
  next: "التالي",
  todayTip: "نصيحة اليوم",
  masteryLevel: "مستوى الإتقان",
  progress: "التقدم",
  addWord: "إضافة كلمة جديدة",
  addToList: "إضافة للقائمة",
  recentWords: "الكلمات المضافة حديثاً",
  viewAll: "عرض الكل",
  englishWord: "English Word",
  arabicMeaning: "الترجمة العربية",
  focusAndRecall: "Focus & Recall",
  session: "Session",
  newWords: "كلمة جديدة",
  completed: "مكتمل",
  startNewJourney: "ابدأ رحلة تعلم جديدة اليوم",
  readyForNewWords: "Ready for new words?",
  createNewDay: "إنشاء يوم جديد",
  useFullSentences: "استخدم الجمل، لا الكلمات",
  sentencesTip: "تعلم الكلمات في سياق جمل كاملة يساعد عقلك على تذكرها بشكل أسرع وأكثر فاعلية.",
  personalDictionary: "قاموسك الشخصي",
  continueAdding: "استمر في إضافة كلمات جديدة يومياً لبناء حصيلتك اللغوية بشكل تدريجي ومستدام.",
  dailyStatus: "الحالة اليومية",
  todaysWords: "كلمة اليوم",
};

// المسافات والحجوم
export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "2.5rem",
  "3xl": "3rem",
};

// أحجام الخط
export const FONT_SIZES = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
};

// أيقونات Material Symbols
export const ICONS = {
  menu: "menu",
  visibility: "visibility",
  visibilityOff: "visibility_off",
  chevronRight: "chevron_right",
  chevronLeft: "chevron_left",
  home: "home",
  calendarToday: "calendar_today",
  menuBook: "menu_book",
  delete: "delete",
  addCircle: "add_circle",
  send: "send",
  lightbulb: "lightbulb",
  trendingUp: "trending_up",
  eventAvailable: "event_available",
};

// البيانات الافتراضية للكلمات
export const SAMPLE_WORDS = [
  {
    id: 1,
    english: "Eloquent",
    arabic: "فصيح / بليغ",
    colorClass: "primary",
  },
  {
    id: 2,
    english: "Serendipity",
    arabic: "صدفة سعيدة",
    colorClass: "secondary",
  },
  {
    id: 3,
    english: "Ambiguous",
    arabic: "غامض / ملتبس",
    colorClass: "tertiary",
  },
];

// الأيام النموذجية
export const SAMPLE_DAYS = [
  {
    id: 1,
    date: "10 يناير 2024",
    wordsCount: 15,
    status: "مكتمل",
  },
  {
    id: 2,
    date: "09 يناير 2024",
    wordsCount: 12,
    status: "مكتمل",
  },
  {
    id: 3,
    date: "08 يناير 2024",
    wordsCount: 20,
    status: "مكتمل",
  },
];

// الإحصائيات
export const SAMPLE_STATS = {
  todayWords: 12,
  totalWords: 45,
  currentLevel: "المتوسط",
  levelProgress: 5,
  requiredProgress: 10,
  progressPercentage: 70,
};