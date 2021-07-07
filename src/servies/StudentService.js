import axios from "axios";

const delayAsync = (timeout) => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle();
    }, timeout);
  });
};

export const searchStudent = async (searchValue, page, pageSize) => {
  await delayAsync(1000);

  return axios
    .get("http://localhost:5000/Student/GetStudents", {
      params: {
        search: searchValue,
        page,
        pageSize,
      },
    })
    .then((respond) => respond.data)
    .then((data) => {
      return {
        ...data,
        meta: {
          ...data.meta,
          totalElement: data.meta.totalItem,
        },
      };
    });
};
