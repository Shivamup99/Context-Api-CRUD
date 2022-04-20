import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import Lists from "./components/Lists";
import { DataProvider } from "./DataProvider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <h1>Day Tracker</h1>
      <FormInput />
      <Lists />
      <Footer />
    </div>
    </DataProvider>
  );
}

export default App;
