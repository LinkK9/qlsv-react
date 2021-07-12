import axios from "axios";
import { getAvatarUrlFromFileName } from "../utils/Utils";
import moment from "moment";

const API = "http://localhost:5000/Student";
const addStudentEndPoint = API + "/AddStudent";
const getStudentEndPoint = API + "/GetStudent";
const modifyStudentEndPoint = API + "/ModifyStudent";

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
        data: data.data.map((i) => {
          return {
            ...i,
            avatar: i.img,
          };
        }),
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

export const getStudent = async (id) => {
  return await axios
    .get(getStudentEndPoint, {
      params: {
        id,
      },
    })
    .then((res) => res.data.data)
    .then((data) => {
      return {
        ...data,
        img: getAvatarUrlFromFileName(data.img),
        birthday: moment(data.birthday).format("YYYY-MM-DD"),
        gender: String(data.gender),
        dayAdmission: moment(data.dayAdmission).format("YYYY-MM-DD"),
      };
    });
};

export const modifyStudentAction = async (initVal) => {
  let fd = new FormData();

  initVal = {
    ...initVal,
    gender: +initVal.gender,
  };
  for(let key in initVal){
    const value = initVal[key];
    fd.append(key, value);
  }
  return await axios.post(
    modifyStudentEndPoint,
    fd,
    {
      headers: {
        "Content-Type": false,
      },
    }
  );
};
