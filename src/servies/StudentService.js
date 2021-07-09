import axios from "axios";

const API = 'http://localhost:5000/Student';
const addStudentEndPoint = API + '/AddStudent'

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

export const addStudent = async (newStudent) => {
  let fd = new FormData();

  newStudent = {
    ...newStudent,
    gender: Number.parseInt(newStudent.gender),
  };
  for (const key in newStudent) {
    if (Object.hasOwnProperty.call(newStudent, key)) {
      const value = newStudent[key];
      fd.append(key, value);
    }
  }
  return await axios.post(addStudentEndPoint, fd, {
    headers: {
      "Content-Type": `multipart/form-data boundary=${fd._boundary}`,
    },
  });
};
