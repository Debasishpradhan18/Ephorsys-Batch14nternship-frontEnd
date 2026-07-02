import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ServicePage from "./pages/ServicePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BookTable from "./components/BookTable"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import OurMenu from "./pages/OurMenu"
import ProtectedRoutes from "./ProtectedRoutes"
import Dashboard from "./components/Dashboard"
import AdminPanel from "./admin/AdminPanel"
import  AdminFood  from "./admin/AdminFood"
import AdminFoodAdd from "./admin/AdminFoodAdd"
import FoodUpdatePage from "./admin/FoodUpdatePage";
import  OurFood  from "./pages/OurFood"
import FoodDetailsPage from "./pages/FoodDetailsPage"
import OrderSuccess from "./pages/OrderSuccess"

function Layout() {
  const isAdminRoue = location.pathname.startsWith("/admin");
  return (
    <>

      {!isAdminRoue && <Navbar />}
      <div style={{ marginTop: isAdminRoue ? "0px" : "80px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/our-foods" element={<OurFood />} />
          <Route path="/details/:id" element={<FoodDetailsPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/admin" element={<ProtectedRoutes />}>
            <Route path="" element={<AdminPanel />}>
              <Route
                path="dashboard"
                element={<Dashboard />}
              />
              <Route
                path="Food"
                element={<AdminFood />}
              />

              <Route
                path="add"
                element={<AdminFoodAdd />}
              />

              <Route
                path="update/:id"
                element={<FoodUpdatePage />}
              />

            </Route>
          </Route>
        </Routes>
      </div>
      {!isAdminRoue && <Footer />}

    </>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
