import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Game from "./components/game/Game";
import User from "./components/user/User";
import Profile from "./components/profile/Profile";
import NavBar from "./components/main/NavBar";
import Footer from "./components/main/Footer";
import SearchList from "./components/searchList/SearchList";
import Genre from "./components/genre/Genre";
import Platform from "./components/platform/Platform";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/game" element={<Game />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
