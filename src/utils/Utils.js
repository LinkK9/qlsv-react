export const getAvatarUrlFromFileName = (filename) => {
  return `http://localhost:5000/staticfiles/${filename}`;
};

export const delayAsync = (timeout) => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle();
    }, timeout);
  });
};