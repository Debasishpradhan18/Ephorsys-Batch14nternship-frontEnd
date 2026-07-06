import {
  Menu,
  User,
  LogOut,
  Maximize,
  Minimize,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopBar = ({ setSidebarOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const userData = JSON.parse(localStorage.getItem("user"));

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-20 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-8"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden p-2 rounded-lg border"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Chiku Food Shop
          </h1>

          <p className="text-sm text-gray-500">
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          {isFullscreen ? (
            <Minimize size={22} />
          ) : (
            <Maximize size={22} />
          )}
        </button>

        {/* Profile */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3"
          >
            <div className="text-right">
              <h3 className="text-xl font-semibold leading-5">
                {userData?.fullName}
              </h3>

              <p className="text-sm text-gray-500 capitalize">
                {userData?.role}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center">
              <User
                size={24}
                className="text-blue-600"
              />
            </div>
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border"
              >
                <div className="p-4 border-b">
                  <h3 className="font-semibold">
                    {userData?.fullName}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {userData?.role}
                  </p>
                </div>

                <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100">
                  <User size={18} />
                  My Profile
                </button>

                <button className="w-full px-4 py-3 flex items-center gap-3 text-red-600 hover:bg-red-50">
                  <LogOut size={18} />
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;