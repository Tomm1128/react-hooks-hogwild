import React, { useState } from "react"

import AddHogForm from "./AddHogForm"
import Filter from "./Filter"
import HogTileList from "./HogTileList"
import Nav from "./Nav"

import hogs from "../porkers_data"

function App() {
  const [hogList, setHogList] = useState(hogs)
  const [isChecked, setCheck] = useState(false)
  const [sortName, setSortName] = useState(true)
  const [sortWeight, setSortWeight] = useState(true)
  const [sortType, setSortType] = useState("sort-name")

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
        onCheckEvent={setCheck}
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
      <div className="footer"></div>
		</div>
	)
}

export default App
