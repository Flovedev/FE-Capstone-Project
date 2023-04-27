import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Game from "./components/game/Game";
import User from "./components/user/User";
import Profile from "./components/profile/Profile";
import NavBar from "./components/main/NavBar";
import Footer from "./components/main/Footer";
import SearchList from "./components/searchList/SearchList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/user" element={<User />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
