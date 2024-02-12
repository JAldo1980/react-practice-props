import React from "react";
import Person from "./components/Person";
import PersonData from "./components/PersonData";
import "./App.css";

function App() {
  const personElements = PersonData.map((person) => {
    return <Person key={person.id} {...person} />;
  });
  return <>{personElements}</>;
}

export default App;
