
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
import WalksList from "./components/Dashboard/WalksList"
import AboutUs from "./pages/AboutUs"
import BookingAdmin from "./components/Dashboard/BookingAdmin"
import PetsList from "./components/Dashboard/PetsList"
import FormAddPet from "./components/Dashboard/FormAddPet"
import AddPet from "./pages/AddPet"
import Contact from "./pages/Contact"
import FormEditOwner from "./components/Dashboard/FormEditOwner"
import { useSelector } from "react-redux"
import FormEditWalker from "./components/Dashboard/FormEditWalker"

function App() {


  const profile = useSelector(state => state.users.profile)

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
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/contactanos" element={<Contact />} />
          {/* <Route path="/perfil" element={<Profile />} />
          <Route path="/editUser/:id" element={<FormInfoOwner />} /> */}

          {/* Admin */}
          <Route path="/perfil" element={<AdminLayout />}>
            {
              profile.role === 'Administrador' ? <Route path="info" element={<FormInfoAdmin />} /> : profile.role === 'Paseador' ? <Route path="info" element={<FormEditOwner />} /> : <Route path="info" element={<FormEditWalker />} />

            }

            {/* <Route path="info" element={<FormInfoOwner />} /> */}
            <Route path="usuarios" element={<Users />} />
            <Route path="usuario/owner/:id" element={<FormInfoOwner />} />
            <Route path="usuario/walker/:id" element={<FormInfoWalker />} />
            <Route path="usuarios/nuevo" element={<FormInfoOwner />} />
            <Route path="usuarios/nuevo/pas" element={<FormInfoWalker />} />
            <Route path="paseos" element={<WalksList />} />
            <Route path="paseos/nuevo" element={<BookingAdmin />} />
            <Route path="paseos/edit/:id" element={<BookingAdmin />} />
            <Route path="mascotas" element={<PetsList />} />
            <Route path="mascotas/nuevo" element={<AddPet />} />
            <Route path="mascotas/edit/:id" element={<AddPet />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
