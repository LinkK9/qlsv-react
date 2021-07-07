import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import { usePromiseResult } from "use-promise-result";
import { searchStudent } from "../../servies/StudentService";
import { Pagination } from "antd";

import styles from "./Home.module.css";

const Home = () => {
  const [searchingValue, setSearchingValue] = useState("");

  const [current, setCurrent] = useState(1);
  const [takeItem, setTakeItem] = useState(3);

  const { loading, error, success, reload, data } = usePromiseResult(() =>
    searchStudent(searchingValue)
  );

  const handleSearch = (inputVal) => {
    setSearchingValue(inputVal.toLowerCase());
    reload();
  };

  const renderStudentList = () => {
    const skipItem = (current - 1) * takeItem;
    return <StudentList data={data.slice(skipItem, skipItem + takeItem)} />;
  };

  const renderStatus = () => {
    if (loading) return "Loading...";
    if (error) return "Error...";
  };

  const handlePageChanged = (page) => {
    setCurrent(page);
  };

  const renderPagination = () => {
    if (success) {
      return (
        <Pagination
          current={current}
          onChange={handlePageChanged}
          total={data.length}
          defaultPageSize={takeItem}
        />
      );
    }
  };

  return (
    <div className={styles.homeContainer}>
      <AppHeader handleSearch={handleSearch} />
      <div className={styles.studentListContainer}>
        {success ? renderStudentList() : renderStatus()}
      </div>
      <div className={styles.pagination}>{renderPagination()}</div>
    </div>
  );
};

export default Home;
