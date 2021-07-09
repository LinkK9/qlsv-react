import React from "react";
import { Typography, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";
import styles from "./AppHeader.module.css";
import { Link } from "react-router-dom";

const { Title } = Typography;

export const AppHeader = ({ handleSearch }) => {
  return (
    <div>
      <div className={styles.navHeader}>
        <Title level={2}>Quản lý sinh viên</Title>
        <Link to="/add-student">
          <Button type="primary" icon={<PlusOutlined />}>
            Thêm mới
          </Button>
        </Link>
      </div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
