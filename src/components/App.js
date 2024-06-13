import React, { useState } from "react";

import hogs from "../porkers_data";

import Nav from "./Nav";
import HogTileList from "./HogTileList";
import Filter from "./Filter"
import AddHogForm from "./AddHogForm";

function App() {
  const [hogList, setHogList] = useState(hogs)
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

  const updateHogList = (newHog) => {
    setHogList([...hogList, newHog])
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
      <AddHogForm updateHogList={updateHogList}/>
      <HogTileList
        hogs={hogList}
        isChecked={isChecked}
        sortType={sortType}
        sortName={sortName}
        sortWeight={sortWeight}
      />
		</div>
	);
}

export default App;
