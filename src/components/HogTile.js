import React, { useState } from "react"

const HogTile = ({name, image, specialty, weight, greased, medals}) => {
  const [detailsOn, setDetails] = useState(false)
  const [isHidden, setHidden] = useState(false)

  const additionalDetails = (
    <div className="content">
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased.toString()}</p>
      <p>Medals: {medals}</p>
   </div>
  )

  const checkDisplay = {
     display: isHidden ? "none" : "in-line"
  }

  const handleImageClick = () => {
    setDetails(!detailsOn)
  }

  const updateHidden = () => {
    setHidden(!isHidden)
  }

  return (
    <div className="ui card pigTile" style={checkDisplay}>
      <div>
        <h3>{name}</h3>
        <label>Hide </label>
        <input type="checkbox" checked={isHidden} onChange={updateHidden}></input>
      </div>
      <div className="">
        <img className="minPigTile" src={image} alt="Pig" onClick={handleImageClick}></img>
      </div>
      {detailsOn ? additionalDetails : ""}
    </div>
  )
}

export default HogTile
