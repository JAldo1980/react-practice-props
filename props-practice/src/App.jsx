import React from "react";
import Person from "./components/Person";
import PersonData from "./components/PersonData";
import "./App.css";

function App() {
  const personElements = PersonData.map((person) => {
    return (
      <Person
        img={person.img}
        name={person.name}
        position={person.position}
        quote={person.quote}
      />
    );
  });
  return <>{personElements}</>;
}

export default App;
