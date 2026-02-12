import { useState } from "react";
import { films } from "./data/db.js";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

export default function App() {
  return (
    <>
      <Header title="Hello World!" />
      <Main films={films} />
    </>
  );
}
