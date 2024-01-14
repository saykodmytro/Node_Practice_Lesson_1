// const checkExtension = (fileName) => {
//   const EXTENSIONS = ["txt", "exe", "json", "pdf", "jpeg", "png", "js"];
// };

// з цієї функції повернути обєкт з двома полями, {extension, result}
// extension - розширення нашого файлу
// result - (true | false) чи допустиме наше розширення

export const checkExtension = (fileName) => {
  const EXTENSIONS = ["txt", "exe", "json", "pdf", "jpeg", "png", "js"];

  // Отримуємо розширення файлу
  // split('.'), щоб розділити ім'я файлу за крапкою, повертає масив з к-ть елем розділений крапкою
  // pop() видаляє останній елемент з кінця масиву і повертає видалений елемент
  const extension = fileName.split(".").pop();

  // Перевіряємо, чи допустиме розширення
  const result = EXTENSIONS.includes(extension);

  // Повертаємо об'єкт з результатами
  return { extension, result };
};
