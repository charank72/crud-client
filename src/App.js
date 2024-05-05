import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import User from "./components/User";
import Update from "./components/Update";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
