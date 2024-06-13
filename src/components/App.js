import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTileList from "./HogTileList";
import Filter from "./Filter"

function App() {
  const [isChecked, setCheck] = useState(false)
  const [sortName, setSortName] = useState(true)
  const [sortWeight, setSortWeight] = useState(true)
  const [sortType, setSortType] = useState("sort-name")

  const checkHandler = () => {
    setCheck(!isChecked)
  }

  const sortHandler = (event) => {
    const newSortType = event.target.id

    setSortType(newSortType)

    newSortType === "sort-name" ? setSortName(!sortName) : setSortWeight(!sortWeight)
  }

	return (
		<div className="App">
			<Nav />
      <Filter
        isChecked={isChecked}
        onCheckEvent={checkHandler}
        sortName={sortName}
        sortWeight={sortWeight}
        onSort={sortHandler}
      />
      <HogTileList
        hogs={hogs}
        isChecked={isChecked}
        sortType={sortType}
        sortName={sortName}
        sortWeight={sortWeight}
      />
		</div>
	);
}

export default App;
