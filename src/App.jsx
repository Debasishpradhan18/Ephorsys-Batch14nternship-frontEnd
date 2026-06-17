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
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booktable" element={<BookTable />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/our-menu" element={<OurMenu />} />


          </Routes>
        </div>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
