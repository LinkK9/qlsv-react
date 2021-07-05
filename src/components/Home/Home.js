import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import { usePromiseResult } from "use-promise-result";
import { searchStudent } from "../../servies/StudentService";
import { Pagination } from "antd";

import styles from "./Home.module.css";

const Home = () => {
  const [searchingValue, setSearchingValue] = useState("");

  const [current, setCurrent] = useState(1);

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

  const handlePageChanged = (page) => {
    setCurrent(page);
  };

  return (
    <div className={styles.homeContainer}>
      <AppHeader handleSearch={handleSearch} />
      <div className={styles.studentListContainer}>
        {success ? renderStudentList() : renderStatus()}
      </div>
      <Pagination current={current} onChange={handlePageChanged} total={50} />
    </div>
  );
};

export default Home;
