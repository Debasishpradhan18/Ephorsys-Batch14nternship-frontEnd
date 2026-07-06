import "./OurMenu.css";

import Biryani from "../assets/Food.jpg";
import Pizza from "../assets/FastestFood.jpg";
import Burger from "../assets/hero.png";
import Catering from "../assets/Caterings.jpg";
import Birthday from "../assets/BirthDay.jpg";
import Tea from "../assets/tea 1.png";

const menuItems = [
  {
    id: 1,
    image: Biryani,
    name: "Chicken Biryani",
    price: "₹199",
    desc: "Delicious aromatic biryani prepared with fresh spices.",
  },
  {
    id: 2,
    image: Pizza,
    name: "Cheese Pizza",
    price: "₹249",
    desc: "Loaded with mozzarella cheese and vegetables.",
  },
  {
    id: 3,
    image: Burger,
    name: "Special Burger",
    price: "₹149",
    desc: "Juicy burger served with fresh vegetables.",
  },
  {
    id: 4,
    image: Catering,
    name: "Catering Service",
    price: "₹999",
    desc: "Professional catering for weddings and parties.",
  },
  {
    id: 5,
    image: Birthday,
    name: "Birthday Package",
    price: "₹1499",
    desc: "Complete birthday celebration package.",
  },
  {
    id: 6,
    image: Tea,
    name: "Special Tea",
    price: "₹30",
    desc: "Fresh hot tea with premium taste.",
  },
];

function OurMenu() {
  return (
    <div className="menu-page">
      <div className="menu-heading">
        <h1>Our Delicious Menu</h1>
        <p>
          Taste our delicious foods prepared with fresh ingredients and love.
        </p>
      </div>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="menu-content">
              <h2>{item.name}</h2>

              <p>{item.desc}</p>

              <div className="menu-bottom">
                <span>{item.price}</span>

                <button>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMenu;