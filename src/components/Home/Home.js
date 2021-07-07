import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import { usePromiseResult } from "use-promise-result";
import { searchStudent } from "../../servies/StudentService";
import { Pagination, Spin } from "antd";

import styles from "./Home.module.css";

const Home = () => {
  const [searchingValue, setSearchingValue] = useState("");

  const [current, setCurrent] = useState(1);
  const [takeItem] = useState(5);

  const { loading, error, success, reload, data } = usePromiseResult(() =>
    searchStudent(searchingValue, current, takeItem)
  );

  console.log(data);

  const handleSearch = (inputVal) => {
    setSearchingValue(inputVal.toLowerCase());
    reload();
  };

  const renderStudentList = () => {
    return <StudentList data={data.data} />;
  };

  const renderStatus = () => {
    if (loading)
      return (
        <div className={styles.spinner}>
          <Spin tip="Loading..." />
        </div>
      );
    if (error) return "Error...";
  };

  const handlePageChanged = (page) => {
    setCurrent(page);
    reload();
  };

  const renderPagination = () => {
    if (success) {
      return (
        <Pagination
          current={current}
          onChange={handlePageChanged}
          total={data.meta.totalElement}
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
