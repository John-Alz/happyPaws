
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/auth/Register"
import RegisterWalker from "./components/auth/RegisterWalker"
import RegisterOwner from "./components/auth/RegisterOwner"
import Login from "./components/auth/Login"
import Home from "./pages/Home"
import Walker from "./pages/Walker"
import Profile from "./pages/Profile"
import Walkers from "./pages/walkers"
import FormInfoWalker from "./components/Dashboard/FormInfoWalker"
import FormInfoOwner from "./components/Dashboard/FormInfoOwner"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/walker" element={<RegisterWalker />} />
          <Route path="/register/owner" element={<RegisterOwner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paseador/:id" element={<Walker />} />
          <Route path="/paseadores" element={<Walkers />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/editUser/:id" element={<FormInfoOwner />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
