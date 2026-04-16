import { getDB } from "./db";

// 🟢 جلب كل الكلمات
export const getWords = async () => {
  const db = getDB();

  const res = await db.query("SELECT * FROM words");

  return res.values || [];
};

// 🟢 إضافة كلمة
export const addWord = async (word, meaning) => {
  const db = getDB();

  const date = new Date().toISOString().split("T")[0];

  const id = Date.now();

  await db.run(
    `INSERT INTO words (id, word, meaning, date) VALUES (?, ?, ?, ?)`,
    [id, word, meaning, date]
  );

  return { id, word, meaning, date };
};

// 🟢 حذف كلمة
export const deleteWord = async (id) => {
  const db = getDB();

  await db.run(`DELETE FROM words WHERE id = ?`, [id]);
};

// 🟢 تحديث كلمة
export const updateWord = async (id, newData) => {
  const db = getDB();

  await db.run(
    `UPDATE words SET word = ?, meaning = ? WHERE id = ?`,
    [newData.word, newData.meaning, id]
  );
};

// 🟢 كلمات يوم معين
export const getWordsByDate = async (date) => {
  const db = getDB();

  const res = await db.query(
    `SELECT * FROM words WHERE date = ?`,
    [date]
  );

  return res.values || [];
};

export const getTodayWords = async () => {
  const db = getDB();

  const today = new Date().toISOString().split("T")[0];

  const res = await db.query(
    `SELECT * FROM words WHERE date = ? ORDER BY id DESC`,
    [today]
  );

  return res.values || [];
};

export const getDaysStats = async () => {
  const db = getDB();

  const today = new Date().toISOString().split("T")[0];

  // 🟢 الأيام + عدد الكلمات
  const daysRes = await db.query(`
    SELECT date, COUNT(*) as wordsCount
    FROM words
    GROUP BY date
    ORDER BY date DESC
  `);

  const daysArray = (daysRes.values || []).map((d) => ({
    id: d.date,
    date: d.date,
    wordsCount: d.wordsCount,
    status: d.wordsCount > 0 ? "مكتمل" : "فارغ",
  }));

  // 🟢 كلمات اليوم
  const todayRes = await db.query(
    `SELECT COUNT(*) as count FROM words WHERE date = ?`,
    [today]
  );

  const todayWords = todayRes.values?.[0]?.count || 0;

  // 🟢 إجمالي الكلمات
  const totalRes = await db.query(`SELECT COUNT(*) as count FROM words`);
  const totalWords = totalRes.values?.[0]?.count || 0;

  return {
    daysArray,
    todayWords,
    totalWords,
  };
};