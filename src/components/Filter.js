import React, { useState } from "react";

function Filter({isChecked, onCheckEvent}) {

	return (
		<div id="filter">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={onCheckEvent}
      />
      <label htmlFor="checkbox">Greased</label>
    </div>
	)
}

export default Filter;
