import React, { useState } from "react"
import HogTile from "./HogTile"

const HogTileList = ({hogs, isChecked}) => {

  const filteredHogs = hogs.filter(hog => {
    return isChecked ? hog.greased === true : true
  })

  const hogTiles = filteredHogs.map(hog => {
    return (
      <HogTile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medals={hog["highest medal achieved"]}
      />
    )
  })

	return (
		<div className="ui grid container">
      {hogTiles}
		</div>
	);
}

export default HogTileList
