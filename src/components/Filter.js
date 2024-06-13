import React from "react";

function Filter({isChecked, onCheckEvent, sortName, sortWeight, onSort}) {

	return (
		<div id="filter">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={onCheckEvent}
      />
      <label htmlFor="checkbox">Greased</label>
      <button id="sort-name" onClick={onSort}>Name {sortName ? "ASC" : "DESC"}</button>
      <button id="sort-weight" onClick={onSort}>Weight {sortWeight ? "ASC" : "DESC"}</button>
    </div>
	)
}

export default Filter;
