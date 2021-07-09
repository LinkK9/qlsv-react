import React from "react";
import { getAvatarUrlFromFileName } from "../../utils/Utils";
import { addStudent } from "../../servies/StudentService";
import StudentDetailForm from "../StudentDetailForm";

export default function NewStudent() {
  return (
    <StudentDetailForm
      initialValues={{
        img: getAvatarUrlFromFileName("default.jpeg"),
        imageFile: null,
        name: "",
        phoneNumber: "",
        birthday: "",
        gender: "",
        dayAdmission: "",
      }}
      action={addStudent}
    />
  );
}
