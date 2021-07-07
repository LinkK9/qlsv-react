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

export const searchStudent = async (searchValue, page, pageSize) => {
  await delayAsync(2000);

  const filteredData = !searchValue
    ? mockData
    : mockData.filter((i) => i.name.toLowerCase().includes(searchValue));

  const skip = (page - 1) * pageSize;

  return {
    data: filteredData.slice(skip, skip + pageSize),
    meta: { totalElement: filteredData.length },
  };
};
