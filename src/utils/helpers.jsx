/**
 * Material Symbols Icon Component
 * @param {string} name - اسم الأيقونة
 * @param {string} className - classes إضافية
 * @param {boolean} filled - هل الأيقونة ممتلئة
 */
export const MaterialIcon = ({ name, className = "", filled = false }) => {
  const baseClass = "material-symbols-outlined";
  const style = {
    fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
  };

  return (
    <span className={`${baseClass} ${className}`} style={style}>
      {name}
    </span>
  );
};

/**
 * دالة لتوليد الألوان بناءً على الـ index
 */
export const getColorByIndex = (index) => {
  const colors = [
    "border-primary",
    "border-secondary",
    "border-tertiary",
  ];
  return colors[index % colors.length];
};

/**
 * دالة لتوليد لون الخلفية
 */
export const getBgColorByIndex = (index) => {
  const colors = [
    "bg-primary/5",
    "bg-secondary/5",
    "bg-tertiary/5",
  ];
  return colors[index % colors.length];
};
