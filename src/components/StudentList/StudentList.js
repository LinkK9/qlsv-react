import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ data }) => {
  return (
    <div>
      {data.map((studentData) => (
        <StudentCard
          id={studentData.id}
          key={studentData.id}
          avatar={studentData.avatar}
          name={studentData.name}
          phone={studentData.phone}
          gender={studentData.gender}
        />
      ))}
    </div>
  );
};

export default StudentList;
