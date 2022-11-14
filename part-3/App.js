"use strict";

function App() {
  return (
    <div>
      <Person name="ez" age={25} hobbies={['basketball', 'crypto']}/>
      <Person name='spencer' age='25' hobbies={['video games', 'golf']}/>
      <Person name='unknown' age='unknown' hobbies={['unknown']}/>
    </div>
  );
}