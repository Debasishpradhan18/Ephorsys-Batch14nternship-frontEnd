import { LayoutDashboard, LogOut, X, Users, Contact, Table } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Logo from "../assets/foodlogochikiu.png";

const NAV_ITEMS = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/admin/food",
    label: "Food",
    icon: Users,
  },
  {
    path: "/admin/table",
    label: "Table",
    icon: Table,
  },
    {
    path: "/admin/contact",
    label: "Contact",
    icon: Contact,
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(
        "http://localhost:8800/api/auth/logout",
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-72
          bg-slate-900
          text-white
          flex
          flex-col
          transition-transform
          duration-300
          lg:relative
          lg:translate-x-0
          lg:shrink-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo Section */}
        <div className="border-b border-slate-700 py-5 flex flex-col items-center">

          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 rounded-full bg-white p-2 object-contain shadow-lg"
          />

          <h2 className="mt-3 text-xl font-bold tracking-wide text-center">
           Chiku FOOD SHOP
          </h2>

          <p className="text-sm text-slate-400">
            Admin Panel
          </p>

        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-5 space-y-2">

          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (

            <NavLink
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-[16px]">{label}</span>
            </NavLink>

          ))}

        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-700">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

        {/* Mobile Close */}
        <button
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;