import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Game from "./components/game/Game";
import User from "./components/user/User";
import NavBar from "./components/main/NavBar";
import Footer from "./components/main/Footer";
import SearchList from "./components/searchList/SearchList";
import Registration from "./components/registration/Registration";
import PlatformGenre from "./components/user/PlatformGenre";
import BadRequest from "./components/BadRequest/BadRequest";
import UserList from "./components/searchList/UsersList";
import OtherUser from "./components/user/OtherUser";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/game" element={<Game />} />
        <Route path="/platformGenre" element={<PlatformGenre />} />
        <Route path="/user" element={<User />} />
        <Route path="/inspect" element={<OtherUser />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<BadRequest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
