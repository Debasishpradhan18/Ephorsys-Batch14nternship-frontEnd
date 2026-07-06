import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BookTable from "./components/BookTable";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import OurMenu from "./pages/OurMenu";
import OurFoods from "./pages/OurFoods";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import OrderSuccess from "./pages/OrderSuccess";

import ProtectedRoutes from "./ProtectedRoutes";

import Dashboard from "./components/Dashboard";
import AdminPanel from "./admin/AdminPanel";
import AdminFood from "./admin/AdminFood";
import AdminFoodAdd from "./admin/AdminFoodAdd";
import FoodUpdatePage from "./admin/FoodUpdatePage";
import Table from "./admin/Table";
import AdminContact from "./admin/AdminContact";

function Layout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Navbar only for Website */}
      {!isAdminRoute && <Navbar />}

      <div style={{ marginTop: isAdminRoute ? "0px" : "80px" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/our-menu" element={<OurMenu />} />
          <Route path="/our-foods" element={<OurFoods />} />
          <Route path="/details/:id" element={<FoodDetailsPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoutes />}>
            <Route element={<AdminPanel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="food" element={<AdminFood />} />
              <Route path="add" element={<AdminFoodAdd />} />
              <Route path="update/:id" element={<FoodUpdatePage />} />
              <Route path="table" element={<Table />} />
              <Route path="contact" element={<AdminContact />} />
            </Route>
          </Route>
        </Routes>
      </div>

      {/* Show Footer only for Website */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;