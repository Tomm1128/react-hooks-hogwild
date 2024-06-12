import React, { useState } from "react"

const HogTile = ({name, image, specialty, weight, greased, medals}) => {
  const [detailsOn, setDetails] = useState(false)

  const additionalDetails = (
    <div className="details">
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased.toString()}</p>
      <p>Medals: {medals}</p>
   </div>
  )

  const handleImageClick = () => {
    setDetails(!detailsOn)
  }


  return (
    <div className="pigTile">
      <h3>{name}</h3>
      <img src={image} alt="Pig" onClick={handleImageClick}></img>
      {detailsOn ? additionalDetails : ""}
    </div>
  )
}

export default HogTile
