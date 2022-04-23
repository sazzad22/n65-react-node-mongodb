import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";

function App() {
  return (
    <div className="App">
      <h1>Client side</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/update:id"></Route>
      </Routes>
    </div>
  );
}

export default App;
