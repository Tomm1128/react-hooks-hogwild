import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTileList from "./HogTileList";

function App() {

	return (
		<div className="App">
			<Nav />
      <HogTileList hogs={hogs}/>
		</div>
	);
}

export default App;
