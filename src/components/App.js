import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTileList from "./HogTileList";
import Filter from "./Filter"

function App() {
  const [isChecked, setCheck] = useState(false)

  const checkHandler = () => {
    setCheck(!isChecked)
  }

	return (
		<div className="App">
			<Nav />
      <Filter isChecked={isChecked} onCheckEvent={checkHandler}/>
      <HogTileList hogs={hogs} isChecked={isChecked}/>
		</div>
	);
}

export default App;
