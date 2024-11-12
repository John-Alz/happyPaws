
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./components/auth/Register"
import RegisterWalker from "./components/auth/RegisterWalker"
import RegisterOwner from "./components/auth/RegisterOwner"
import Login from "./components/auth/Login"
import Home from "./pages/Home"
import Header from "./components/Header"
import DetailWaker from "./components/DetailWaker"
import Walker from "./pages/Walker"
import Profile from "./pages/Profile"


function App() {

  return (
    <>
      <BrowserRouter>
        {/* <div className="py-6 relative">
          <Header />
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/walker" element={<RegisterWalker />} />
          <Route path="/register/owner" element={<RegisterOwner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paseador/:id" element={<Walker />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
