import "./App.css";
import { Route, Routes } from "react-router-dom";

import SearchBar from "./components/SearchBar/SearchBar";
import Form from "./components/Form/Form";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<SearchBar />} />
        <Route path="/" element={<Form/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
