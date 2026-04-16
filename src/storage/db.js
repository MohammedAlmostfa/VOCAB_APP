import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite);
let db = null;

export const initDB = async () => {
  db = await sqlite.createConnection(
    "vocab_db",
    false,
    "no-encryption",
    1
  );

  await db.open();

  // 🟢 إنشاء الجدول
  await db.execute(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY NOT NULL,
      word TEXT,
      meaning TEXT,
      date TEXT
    );
  `);
};

export const getDB = () => db;