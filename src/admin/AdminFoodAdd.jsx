import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminFoodAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    actualPrice: "",
    discoutPrice: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("actualPrice", formData.actualPrice);
      data.append("discoutPrice", formData.discoutPrice);
      data.append("image", image);

      const response = await axios.post(
        "https://batch14backendnodejs.onrender.com/api/food/create",
        data,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);

      setFormData({
        name: "",
        description: "",
        actualPrice: "",
        discoutPrice: "",
      });

      setImage(null);
      setPreview("");

      navigate("/admin/food");
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        padding: "35px",
      }}
    >
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "8px",
          }}
        >
          Add New Food
        </h1>

        <p
          style={{
            color: "#64748b",
          }}
        >
          Fill all the information below.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Food Name */}

        <div style={{ marginBottom: "22px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Food Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        {/* Description */}

        <div style={{ marginBottom: "22px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            placeholder="Food description"
            value={formData.description}
            onChange={handleChange}
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />
        </div>

        {/* Prices */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "22px",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Actual Price
            </label>

            <input
              type="number"
              name="actualPrice"
              value={formData.actualPrice}
              onChange={handleChange}
              placeholder="₹"
              style={inputStyle}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Discount Price
            </label>

            <input
              type="number"
              name="discoutPrice"
              value={formData.discoutPrice}
              onChange={handleChange}
              placeholder="₹"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Image */}

        <div style={{ marginBottom: "30px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            style={inputStyle}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "20px",
                border: "2px solid #ddd",
              }}
            />
          )}
        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/admin/food")}
            style={{
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background: "#64748b",
              color: "#fff",
            }}
          >
            Cancel
          </button>

          <button
            disabled={loading}
            type="submit"
            style={{
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background: "#16a34a",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {loading ? "Creating..." : "Add Food"}
          </button>
        </div>

      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default AdminFoodAdd;