import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const FILE_NAME = "vocab_words.json";

// 🟢 قراءة الملف
export const getWords = async () => {
  try {
    const result = await Filesystem.readFile({
      path: FILE_NAME,
      directory: Directory.Data,
      encoding: Encoding.UTF8,
    });

    return result.data ? JSON.parse(result.data) : [];
  } catch (err) {
    // إذا الملف مش موجود أول مرة
    return [];
  }
};

// 🟢 حفظ الملف
export const saveWords = async (words) => {
  await Filesystem.writeFile({
    path: FILE_NAME,
    data: JSON.stringify(words),
    directory: Directory.Data,
    encoding: Encoding.UTF8,
  });
};

// 🟢 إضافة كلمة
export const addWord = async (word, meaning) => {
  const newWord = {
    id: Date.now(),
    word,
    meaning,
    date: new Date().toLocaleDateString("en-CA"),
  };

  const words = await getWords();
  words.push(newWord);

  await saveWords(words);

  return newWord;
};

// 🟢 حذف كلمة
export const deleteWord = async (id) => {
  const words = await getWords();
  const filtered = words.filter((w) => w.id !== id);
  await saveWords(filtered);
};

// 🟢 تحديث كلمة
export const updateWord = async (id, newData) => {
  const words = await getWords();

  const updated = words.map((w) =>
    w.id === id ? { ...w, ...newData } : w
  );

  await saveWords(updated);
};

// 🟢 كلمات اليوم
export const getTodayWords = async () => {
  const words = await getWords();
  const today = new Date().toLocaleDateString("en-CA");

  return words.filter((w) => w.date === today);
};