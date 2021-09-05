export const LANGUAGES = ["JavaScript", "C++", "Ruby", "java", "PHP", "Go"];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // resolve：処理が成功したときのメッセージを表示する関数
      resolve(LANGUAGES);
    }, 1000);
  });
};
