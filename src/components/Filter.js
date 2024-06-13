import React from "react";

function Filter({isChecked, onCheckEvent, sortName, sortWeight, onSort}) {

	return (
		<div id="filter">
      <label htmlFor="sort">Sort: </label>
      <select id="sort-name" onChange={onSort} value={sortName}>
        <option value={true} >Name ASC</option>
        <option value={false}>Name DESC</option>
      </select>
      <select id="sort-weight" onChange={onSort} value={sortWeight}>
        <option value={true} >Weight ASC</option>
        <option value={false}>Weight DESC</option>
      </select>
      <label htmlFor="checkbox"> Greased </label>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={onCheckEvent}
      />
    </div>
	)
}

export default Filter;
