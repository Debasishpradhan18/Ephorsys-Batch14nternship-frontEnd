import { UtensilsCrossed, ShoppingCart, Users, IndianRupee } from "lucide-react";

const Dashboard = () => {
  return (
    <div>

      {/* Heading */}
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "8px",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "16px",
          }}
        >
          Welcome to Chiku Food Shop Admin Panel 👋
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* Food */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#64748b",
                marginBottom: "10px",
              }}
            >
              Total Foods
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              0
            </h2>
          </div>

          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#dbeafe",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UtensilsCrossed color="#2563eb" size={30} />
          </div>
        </div>

        {/* Orders */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "#64748b", marginBottom: "10px" }}>
              Orders
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              0
            </h2>
          </div>

          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#dcfce7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCart color="#16a34a" size={30} />
          </div>
        </div>

        {/* Customers */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "#64748b", marginBottom: "10px" }}>
              Customers
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              0
            </h2>
          </div>

          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#ffedd5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Users color="#ea580c" size={30} />
          </div>
        </div>

        {/* Revenue */}
        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "#64748b", marginBottom: "10px" }}>
              Revenue
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              ₹0
            </h2>
          </div>

          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#fee2e2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IndianRupee color="#dc2626" size={30} />
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "15px",
            color: "#1e293b",
          }}
        >
          Welcome 👋
        </h2>

        <p
          style={{
            color: "#64748b",
            lineHeight: "30px",
            fontSize: "16px",
          }}
        >
          This is your restaurant admin dashboard.
          <br />
          From here you can manage food items, monitor table bookings,
          update menus and track your restaurant activities.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;