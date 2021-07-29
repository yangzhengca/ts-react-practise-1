import React, { useState } from "react";

import "./App.css";
import List from './components/List'
import AddToList from './components/AddToList'

export interface IState {
  people:{
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:'Jordan',
      url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg',
      age:36,
      note:'He is a legend'
    },
  ]);



  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
