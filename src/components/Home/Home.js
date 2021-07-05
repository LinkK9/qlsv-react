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
    setSearchingValue(inputVal.toLowerCase());
  };

  const renderStudentList = () => {
    const filteredList = data.filter((i) =>
      i.name.toLowerCase().includes(searchingValue)
    );

    return <StudentList data={filteredList} />;
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
