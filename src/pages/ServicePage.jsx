import "./ServicePage.css";
import {
  FaTruck,
  FaUtensils,
  FaHeadset,
  FaBirthdayCake,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

function ServicePage() {
  return (
    <div className="service-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Our Services</h1>
          <p>
            Fresh Food • Fast Delivery • Premium Quality
          </p>
        </div>
      </section>

      {/* Heading */}
      <section className="section-title">
        <h2>What We Offer</h2>
        <p>
          We provide high-quality food and excellent customer service for
          everyone.
        </p>
      </section>

      {/* Services */}
      <section className="services-container">

        <div className="service-card">
          <FaTruck className="icon" />
          <h3>Fast Delivery</h3>
          <p>
            Get your favourite meals delivered within 30 minutes.
          </p>
        </div>

        <div className="service-card">
          <FaUtensils className="icon" />
          <h3>Fresh Food</h3>
          <p>
            Every dish is prepared with fresh and hygienic ingredients.
          </p>
        </div>

        <div className="service-card">
          <FaBirthdayCake className="icon" />
          <h3>Event Catering</h3>
          <p>
            Catering services for birthdays, weddings and corporate events.
          </p>
        </div>

        <div className="service-card">
          <FaHeadset className="icon" />
          <h3>24/7 Support</h3>
          <p>
            Our customer support team is available all day.
          </p>
        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-section">

        <h2>Why Choose Chiku Food Corner?</h2>

        <div className="why-grid">

          <div>
            <FaLeaf className="why-icon"/>
            <h3>Fresh Ingredients</h3>
            <p>Healthy vegetables and premium quality ingredients.</p>
          </div>

          <div>
            <FaUsers className="why-icon"/>
            <h3>Experienced Chefs</h3>
            <p>Professional chefs preparing every meal with care.</p>
          </div>

          <div>
            <FaTruck className="why-icon"/>
            <h3>Quick Delivery</h3>
            <p>Lightning-fast doorstep delivery.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div>
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2>2500+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>120+</h2>
          <p>Food Items</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>

      </section>

      {/* Process */}

      <section className="process">

        <h2>How It Works</h2>

        <div className="process-grid">

          <div>
            <span>1</span>
            <h3>Choose Food</h3>
            <p>Select your favourite dishes.</p>
          </div>

          <div>
            <span>2</span>
            <h3>Place Order</h3>
            <p>Easy online ordering system.</p>
          </div>

          <div>
            <span>3</span>
            <h3>Cooking</h3>
            <p>Prepared by our expert chefs.</p>
          </div>

          <div>
            <span>4</span>
            <h3>Delivery</h3>
            <p>Delivered fresh to your doorstep.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready To Order Delicious Food?</h2>

        <button>Order Now</button>

      </section>

    </div>
  );
}

export default ServicePage;