import { useNavigate } from "react-router-dom"
import "./HeroSection.css"
function HeroSection() {

  const navigate = useNavigate()
  return (
    <>
      <div className="Hero-div">
        <div className="Hero-content">
          <h1 className="Hero-heading">Delicious Food, <br />Delivered Fresh</h1>
          <p className="hero-para">Savor mouthwatering dishes crafted with the finest ingredients and served with exceptional care. Experience flavors that keep you coming back for more.</p>

          <div className="Hero-btns">
            <button className="book-btn" onClick={() => navigate("/booktable")}>Book A Table</button>
            <button className="menu-btn" onClick={() => navigate("/our-menu")}>Explore Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection