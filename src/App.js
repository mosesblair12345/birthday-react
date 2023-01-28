import React, { useState } from 'react';
import {names} from './data';
import List from './List';
function App() {
  const [people, setPeople]=useState(names);
  const handleChange=()=>{
    setPeople([])
  }

  return(
    <main>
     <section className="container">
      <h3> {people.length} birthdays today</h3>
      <List people={people} setPeople={setPeople}/>
      <button className="btn" onClick={handleChange} >Clear All</button>
     </section>
    </main>
  )
}

export default App;
