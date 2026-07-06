import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FoodUpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    actualPrice: "",
    discoutPrice: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // Get Single Food
  const getSingleFood = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/food/get-single/${id}`,
        {
          withCredentials: true,
        }
      );

      const food = response.data.food;

      setFormData({
        name: food.name || "",
        description: food.description || "",
        actualPrice: food.actualPrice || "",
        discoutPrice: food.discoutPrice || "",
      });

      setPreview(food.image || "");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getSingleFood();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
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

      if (image) {
        data.append("image", image);
      }

      const response = await axios.put(
        `http://localhost:8800/api/food/update/${id}`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(response.data.message);

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
        background: "#ffffff",
        borderRadius: "15px",
        padding: "35px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
      }}
    >
      {/* Heading */}

      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "8px",
          }}
        >
          Update Food
        </h1>

        <p
          style={{
            color: "#64748b",
          }}
        >
          Update your food information.
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
            Food Image
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
              alt="Food"
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
              background: "#2563eb",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            {loading ? "Updating..." : "Update Food"}
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

export default FoodUpdatePage;