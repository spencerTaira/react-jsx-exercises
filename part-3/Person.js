"use strict";

function Person({name, age, hobbies}) {
  let htmlEl;
  if (age >= 18) {
    htmlEl = <h3>please go vote!</h3>;
  } else {
    htmlEl = <h5>you must be 18</h5>;
  }

  let parsedName;
  if (name.length > 8) {
    parsedName = name.slice(0,5);
  } {
    parsedName = name;
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      {htmlEl}
      <p>Name: {parsedName}</p>
      <ul> Hobbies:
        { hobbies.map(h => <li>{h}</li>) }
      </ul>
    </div>
  );
}

// <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>


