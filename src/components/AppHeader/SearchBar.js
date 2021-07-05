import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ handleSearch }) => {
  const [inputVal, setInputVal] = useState("");

  const handlePress = () => {
    handleSearch(inputVal);
  };

  return (
    <div>
      <Search
        placeholder="Tìm kiếm"
        enterButton
        onChange={(e) => setInputVal(e.target.value)}
        onPressEnter={handlePress}
        onSearch={handlePress}
        style={{ padding: "0 8px" }}
      />
    </div>
  );
};

export default SearchBar;
