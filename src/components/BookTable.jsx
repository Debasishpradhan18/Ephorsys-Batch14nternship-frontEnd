import { useState } from "react";
import axios from "axios";
import "./BookTable.css";

const BookTable = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    totalPerson: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "https://batch14backendnodejs.onrender.com/api/table/create",
        formData
      );

      alert(response.data.message);

      setFormData({
        date: "",
        time: "",
        name: "",
        phone: "",
        totalPerson: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-table-section">
      <div className="book-table-header">
        <h1>Book A Table</h1>

        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="booking-card">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>

              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select Time</option>
                <option value="06:30 PM">06:30 PM</option>
                <option value="07:00 PM">07:00 PM</option>
                <option value="07:30 PM">07:30 PM</option>
                <option value="08:00 PM">08:00 PM</option>
                <option value="08:30 PM">08:30 PM</option>
                <option value="09:00 PM">09:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Total Person</label>

            <select
              name="totalPerson"
              value={formData.totalPerson}
              onChange={handleChange}
              required
            >
              <option value="">Select Person</option>
              <option value="1">1 Person</option>
              <option value="2">2 Person</option>
              <option value="3">3 Person</option>
              <option value="4">4 Person</option>
              <option value="5">5 Person</option>
              <option value="6">6 Person</option>
              <option value="7">7 Person</option>
              <option value="8">8+ Person</option>
            </select>
          </div>

          <button
            type="submit"
            className="book-btn"
            disabled={loading}
          >
            {loading ? "Booking..." : "Book A Table"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookTable;