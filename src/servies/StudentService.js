import mockData from "../MOCK_DATA";

const delayAsync = (timeout) => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle();
    }, timeout);
  });
};

export const getAllStudent = async () => {
  await delayAsync(2000);

  return mockData;
};

export const searchStudent = async (searchValue) => {
  await delayAsync(2000);

  if (!searchValue) {
    return mockData;
  }

  return mockData.filter((i) => i.name.toLowerCase().includes(searchValue));
};

