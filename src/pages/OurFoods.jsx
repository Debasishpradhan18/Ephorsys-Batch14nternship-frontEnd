import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OurFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllFoods = async () => {
    try {
      const response = await axios.get(
        "https://batch14backendnodejs.onrender.com/api/food/all"
      );

      setFoods(response.data.foods);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFoods();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        Loading Foods...
      </div>
    );
  }

  return (
    <section
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            color: "#1e293b",
            marginBottom: "10px",
          }}
        >
          Our Delicious Foods
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          Choose your favourite food and enjoy the best taste.
        </p>
      </div>

      {/* Cards */}

      <div
        style={{
          width: "95%",
          maxWidth: "1400px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0,0,0,.12)",
              transition: ".3s",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={food.image}
              alt={food.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  color: "#111827",
                  marginBottom: "10px",
                }}
              >
                {food.name}
              </h2>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: "25px",
                  minHeight: "70px",
                }}
              >
                {food.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#999",
                      textDecoration: "line-through",
                      fontSize: "20px",
                    }}
                  >
                    ₹{food.actualPrice}
                  </p>

                  <p
                    style={{
                      color: "#00a63e",
                      fontWeight: "bold",
                      fontSize: "32px",
                    }}
                  >
                    ₹{food.discoutPrice}
                  </p>
                </div>

                <span
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Save ₹
                  {Number(food.actualPrice) -
                    Number(food.discoutPrice)}
                </span>
              </div>

              <Link
                to={`/details/${food._id}`}
                style={{
                  marginTop: "25px",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#ff6b00",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFoods;