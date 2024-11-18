
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
import AdminLayout from "./components/layouts/AdminLayout"
import FormInfoAdmin from "./components/Dashboard/FormInfoAdmin"
import Users from "./pages/Users"

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
          {/* <Route path="/perfil" element={<Profile />} />
          <Route path="/editUser/:id" element={<FormInfoOwner />} /> */}

          {/* Admin */}
          <Route path="/perfil" element={<AdminLayout />}>
            <Route index element={<FormInfoAdmin />} />
            <Route path="usuarios" element={<Users />} />
            <Route path="usuario/owner/:id" element={<FormInfoOwner />} />
            <Route path="usuario/walker/:id" element={<FormInfoWalker />} />
            <Route path="usuarios/nuevo" element={<FormInfoOwner />} />
            <Route path="usuarios/nuevo/pas" element={<FormInfoWalker />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
