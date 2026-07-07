import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllTables = async () => {
    try {
      const response = await axios.get(
        "https://batch14backendnodejs.onrender.com/api/table/all"
      );

      setTables(response.data.tables);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTables();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `hhttps://batch14backendnodejs.onrender.com/api/table/delete/${id}`,
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);

      setTables((prev) =>
        prev.filter((table) => table._id !== id)
      );
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "60px",
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "600",
        }}
      >
        Loading Table Bookings...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "28px",
              color: "#1e293b",
              marginBottom: "6px",
            }}
          >
            Table Bookings
          </h2>

          <p
            style={{
              color: "#64748b",
            }}
          >
            Total Bookings : {tables.length}
          </p>
        </div>
      </div>

      {/* Table */}

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            minWidth: "900px",
            borderCollapse: "collapse",
          }}
        >
          <thead
            style={{
              background: "#1e293b",
              color: "#fff",
            }}
          >
            <tr>
              <th style={th}>#</th>
              <th style={th}>Date</th>
              <th style={th}>Time</th>
              <th style={th}>Name</th>
              <th style={th}>Phone</th>
              <th style={thCenter}>Persons</th>
              <th style={thCenter}>Booked On</th>
              <th style={thCenter}>Action</th>
            </tr>
          </thead>

          <tbody>
            {tables.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  style={{
                    padding: "60px",
                    textAlign: "center",
                    color: "#64748b",
                    fontSize: "20px",
                  }}
                >
                  No Table Booking Found
                </td>
              </tr>
            ) : (
              tables.map((table, index) => (
                <tr
                  key={table._id}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td style={td}>{index + 1}</td>

                  <td style={td}>{table.date}</td>

                  <td style={td}>{table.time}</td>

                  <td style={td}>
                    <strong>{table.name}</strong>
                  </td>

                  <td style={td}>{table.phone}</td>

                  <td style={tdCenter}>
                    {table.totalPerson}
                  </td>

                  <td style={tdCenter}>
                    {new Date(
                      table.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td style={tdCenter}>
                    <button
                      onClick={() =>
                        handleDelete(table._id)
                      }
                      style={{
                        background: "#dc2626",
                        color: "#fff",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const th = {
  padding: "18px",
  textAlign: "left",
};

const thCenter = {
  padding: "18px",
  textAlign: "center",
};

const td = {
  padding: "18px",
};

const tdCenter = {
  padding: "18px",
  textAlign: "center",
};

export default Table;