import React, { useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import StudentList from "../StudentList/StudentList";
import mockData from "../../MOCK_DATA";

const Home = () => {
	const [data, setData] = useState(mockData);

	const handleSearch = (inputVal) => {
		if (inputVal === "") {
			setData(mockData);
		}
		const result = mockData.filter(student => student.name.includes(inputVal));
		setData(result);
	}

  return (
    <div>
      <AppHeader handleSearch={handleSearch}  />
      <StudentList data={data} />
    </div>
  );
};

export default Home;
