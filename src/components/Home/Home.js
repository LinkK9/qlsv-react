import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import { usePromiseResult } from "use-promise-result";
import { getAllStudent } from "../../servies/StudentService";

const Home = () => {
  const { loading, error, success, reload, data } =
    usePromiseResult(getAllStudent);

  const [searchingValue, setSearchingValue] = useState("");

  const handleSearch = (inputVal) => {
    setSearchingValue(inputVal);

    // if (inputVal === "") {
    //   setData(mockData);
    // }
    // const result = mockData.filter((student) =>
    //   student.name.includes(inputVal)
    // );
    // setData(result);
  };

  const filteredList = []; //

  return (
    <div>
      <AppHeader handleSearch={handleSearch} />
      <StudentList data={filteredList} />
    </div>
  );
};

export default Home;
