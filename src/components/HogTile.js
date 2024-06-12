import React from "react"

const HogTile = ({name, image}) => {
  return (
    <div className="pigTile">
      <h3>{name}</h3>
      <img src={image} alt="Pig"></img>
    </div>
  )
}

export default HogTile;
