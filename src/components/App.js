import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile";

function App() {

  const hogTiles = hogs.map(hog => {
    return <HogTile name={hog.name} image={hog.image} />
  })
	return (
		<div className="App">
			<Nav />
      {hogTiles}
		</div>
	);
}

export default App;
