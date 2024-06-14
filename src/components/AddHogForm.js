import React, { useState } from "react"

function AddHogForm({updateHogList}) {
  const [hogName, setHogName] = useState("")
  const [hogSpecialty, setHogSpecialty,] = useState("")
  const [hogWeight, setHogWeight,] = useState("")
  const [hogImage, setHogImage,] = useState("")
  const [hogGreased, setGreased,] = useState(true)
  const [hogMedals, setMedals] = useState("")

  const handleHogName = event => setHogName(event.target.value)

  const handleHogSpecialty = event => setHogSpecialty(event.target.value)

  const handleHogWeight = event => setHogWeight(event.target.value)

  const handleHogImage = event => setHogImage(event.target.value)

  const handleHogMedals = event => setMedals(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newHog = {
      name: hogName,
      specialty: hogSpecialty,
      greased: hogGreased,
      weight: hogWeight,
      "highest medal achieved": hogMedals,
      image: hogImage
    }

    setHogName("")
    setHogSpecialty("")
    setHogWeight("")
    setHogImage("")
    setGreased(true)
    setMedals("")
    updateHogList(newHog)
  }

	return (
    <form id="add-hog-form" onSubmit={handleSubmit}>
      <h3>Add Hog</h3>
      <label htmlFor="hog-name">Name: </label>
      <input id="hog-name" type="text" value={hogName} onChange={handleHogName}></input>

      <label htmlFor="hog-specialty">Specialty: </label>
      <input id="hog-specialty" type="text" value={hogSpecialty} onChange={handleHogSpecialty}/>

      <label htmlFor="hog-weight">Weight: </label>
      <input id="hog-weight" type="text" value={hogWeight} onChange={handleHogWeight}></input>

      <label htmlFor="hog-medal">Highest Medal Achieved: </label>
      <input id="hog-medal" type="text" value={hogMedals} onChange={handleHogMedals}></input>

      <label htmlFor="hog-image">Image: </label>
      <input id="hog-image" type="text" value={hogImage} onChange={handleHogImage}></input>

      <label htmlFor="hog-greased">Greased?: </label>
      <select id="hog-greased" onChange={() => setGreased(!hogGreased)}>
        <option value={hogGreased}>Yes</option>
        <option value={hogGreased}>No</option>
      </select>

      <button>Submit</button>
    </form>
	)
}

export default AddHogForm
