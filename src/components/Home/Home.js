import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import { usePromiseResult } from "use-promise-result";
import { getAllStudent, searchStudent } from "../../servies/StudentService";

const Home = () => {
  const [searchingValue, setSearchingValue] = useState("");

  const { loading, error, success, reload, data } = usePromiseResult(() =>
    searchStudent(searchingValue)
  );

  const handleSearch = (inputVal) => {
    setSearchingValue(inputVal.toLowerCase());
    reload();
  };

  const renderStudentList = () => {
    return <StudentList data={data} />;
  };

  const renderStatus = () => {
    if (loading) return "Loading...";
    if (error) return "Error...";
  };

  return (
    <div>
      <AppHeader handleSearch={handleSearch} />
      {success ? renderStudentList() : renderStatus()}
    </div>
  );
};

export default Home;
