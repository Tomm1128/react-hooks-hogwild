import React from "react"
import HogTile from "./HogTile"

const HogTileList = ({hogs, isChecked, sortType, sortName, sortWeight}) => {

  const filteredHogs = hogs.filter(hog => {
    return isChecked ? hog.greased === true : true
  })

  const sortedHogs = filteredHogs.sort((hog, nextHog) => {
    if(sortType === "sort-name"){
      if(!sortName){
        return hog.name < nextHog.name ? 1 : -1
      } else {
        return hog.name > nextHog.name ? 1 : -1
      }
    } else {
      if(!sortWeight){
        return hog.weight < nextHog.weight ? 1 : -1
      } else {
        return hog.weight > nextHog.weight ? 1 : -1
      }
    }
  })

  const hogTiles = sortedHogs.map(hog => {
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
		<div className="ui three stackable cards">
      {hogTiles}
		</div>
	);
}

export default HogTileList
