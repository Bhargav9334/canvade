import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bell, ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
import LOGO_SRC from "../../public/canvade1.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isMobileDashboardOpen, setIsMobileDashboardOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const isDashboardActive = () =>
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname.startsWith("/student/dashboard");

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDashboardOpen(false);
  };

  // Auto-close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDashboardDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkStyle = (path, forceActive = false) =>
    `text-[14px] font-[Poppins] transition-colors whitespace-nowrap cursor-pointer ${
      forceActive || isActive(path)
        ? "text-emerald-600 font-semibold"
        : "text-gray-600 hover:text-emerald-500"
    }`;

  return (
    <>
      {/* Mobile backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[99] lg:hidden transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center">
        <div className="w-full max-w-[1700px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-12">
          <nav className="relative flex items-center justify-between rounded-b-2xl border border-gray-100 bg-white px-3 sm:px-4 md:px-6 lg:px-10 py-2.5 sm:py-3 shadow-sm gap-2 sm:gap-3">

            {/* Left — Logo + Search */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 min-w-0">
              <img
                src={LOGO_SRC}
                alt="Canvade"
                className="h-6 sm:h-7 md:h-8 w-auto cursor-pointer object-contain shrink-0"
                onClick={() => navigate("/")}
              />

              <div className="hidden md:flex items-center rounded-md border border-gray-200 bg-white overflow-hidden">
                <Search size={15} className="text-gray-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search Courses and Institutes"
                  className="w-[140px] lg:w-[220px] xl:w-[300px] px-2 py-2 text-[13px] outline-none bg-transparent placeholder:text-gray-400 font-[Inter]"
                />
                <button className="bg-white border-l border-gray-200 px-3 lg:px-4 py-2 text-[13px] font-[Poppins] text-gray-600 hover:bg-gray-50 shrink-0 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Center — Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10 mx-auto">
              <Link to="/explore" className={navLinkStyle("/explore")}>Explore</Link>
              <Link to="/categories" className={navLinkStyle("/categories")}>Categories</Link>
              <Link to="/chat" className={navLinkStyle("/chat")}>Chat</Link>
              <Link to="/updates" className={navLinkStyle("/updates")}>Updates</Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
                  className={`${navLinkStyle("", isDashboardActive())} flex items-center gap-1 focus:outline-none`}
                >
                  Dashboard
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isDashboardDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDashboardDropdownOpen && (
                  <div className="absolute top-[130%] left-0 bg-white border border-gray-100 rounded-xl shadow-xl p-2 min-w-[180px] flex flex-col z-[110]">
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsDashboardDropdownOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-[13px] font-[Poppins] font-medium transition-colors text-left ${
                        isActive("/admin/dashboard")
                          ? "bg-emerald-50 text-emerald-700 font-semibold"
                          : "text-gray-600 hover:bg-slate-50 hover:text-emerald-600"
                      }`}
                    >
                      Admin Dashboard
                    </Link>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDashboardDropdownOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-[13px] font-[Poppins] font-medium transition-colors text-left ${
                        isActive("/dashboard")
                          ? "bg-emerald-50 text-emerald-700 font-semibold"
                          : "text-gray-600 hover:bg-slate-50 hover:text-emerald-600"
                      }`}
                    >
                      Student Dashboard
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right — Icons + CTA + Hamburger */}
            <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 shrink-0">
              <button
                onClick={() => navigate("/notifications")}
                className="p-1.5 sm:p-2 rounded-full transition-colors text-black hover:bg-gray-50"
              >
                <Bell size={18} strokeWidth={2.5} fill="currentColor" className="sm:w-5 sm:h-5" />
              </button>

              <Link to="/cart" className="p-1.5 sm:p-2 rounded-full transition-colors text-black hover:bg-gray-50">
                <ShoppingCart size={18} strokeWidth={2.5} fill="currentColor" className="sm:w-5 sm:h-5" />
              </Link>

              <button
                onClick={() => navigate("/login")}
                className="hidden lg:block rounded-md border border-gray-200 bg-white px-3 xl:px-5 py-2 text-[13px] font-[Poppins] text-gray-700 hover:bg-gray-50 transition-colors active:scale-95 ml-1"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="hidden lg:block rounded-md bg-emerald-500 hover:bg-emerald-600 px-3 xl:px-5 py-2 text-[13px] font-[Poppins] font-semibold text-white transition-colors active:scale-95"
              >
                Sign Up
              </button>

              <button
                className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:bg-gray-50 rounded-lg ml-0.5 sm:ml-1 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={20} className="sm:w-[22px] sm:h-[22px]" /> : <Menu size={20} className="sm:w-[22px] sm:h-[22px]" />}
              </button>
            </div>

            {/* Mobile / Tablet Dropdown Menu */}
            <div
              className={`absolute top-[calc(100%+8px)] left-0 right-0 z-50 rounded-2xl border border-gray-100 bg-white shadow-2xl lg:hidden overflow-hidden transition-all duration-200 origin-top ${
                isMenuOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
              {/* Mobile Search — hidden on md+ since search is in navbar */}
              <div className="p-3 sm:p-4 border-b border-gray-100 md:hidden">
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                  <Search size={15} className="text-gray-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search Courses and Institutes"
                    className="flex-1 min-w-0 px-2 sm:px-2.5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-[Inter] outline-none bg-transparent placeholder:text-gray-400"
                  />
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-[13px] font-[Poppins] font-semibold shrink-0 transition-colors">
                    Search
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-3 sm:px-4 py-1">
                <Link
                  to="/explore"
                  onClick={closeMenu}
                  className={`flex items-center justify-between py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-[Poppins] font-semibold border-b border-gray-100 transition-colors ${
                    isActive("/explore") ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  Explore <span className="text-gray-300 text-xl">›</span>
                </Link>

                <Link
                  to="/categories"
                  onClick={closeMenu}
                  className={`flex items-center justify-between py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-[Poppins] font-semibold border-b border-gray-100 transition-colors ${
                    isActive("/categories") ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  Categories <span className="text-gray-300 text-xl">›</span>
                </Link>

                <Link
                  to="/chat"
                  onClick={closeMenu}
                  className={`flex items-center justify-between py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-[Poppins] font-semibold border-b border-gray-100 transition-colors ${
                    isActive("/chat") ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  Chat <span className="text-gray-300 text-xl">›</span>
                </Link>

                <Link
                  to="/updates"
                  onClick={closeMenu}
                  className={`flex items-center justify-between py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-[Poppins] font-semibold border-b border-gray-100 transition-colors ${
                    isActive("/updates") ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  Updates <span className="text-gray-300 text-xl">›</span>
                </Link>

                {/* Dashboard Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileDashboardOpen(!isMobileDashboardOpen)}
                    className={`w-full flex items-center justify-between py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-[Poppins] font-semibold border-b border-gray-100 transition-colors focus:outline-none ${
                      isDashboardActive() ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    Dashboard
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isMobileDashboardOpen ? "rotate-180 text-emerald-500" : "text-gray-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isMobileDashboardOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col bg-emerald-50/50 rounded-xl my-2 overflow-hidden border border-emerald-100/60">
                      <Link
                        to="/admin/dashboard"
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-4 py-3.5 text-[14px] font-[Poppins] font-semibold border-b border-emerald-100/40 transition-colors ${
                          isActive("/admin/dashboard")
                            ? "text-emerald-700 bg-emerald-50"
                            : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/70"
                        }`}
                      >
                        Admin Dashboard <span className="text-gray-300">›</span>
                      </Link>
                      <Link
                        to="/dashboard"
                        onClick={closeMenu}
                        className={`flex items-center justify-between px-4 py-3.5 text-[14px] font-[Poppins] font-semibold transition-colors ${
                          isActive("/dashboard")
                            ? "text-emerald-700 bg-emerald-50"
                            : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/70"
                        }`}
                      >
                        Student Dashboard <span className="text-gray-300">›</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar — Notifications, Cart, Get Started */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 border-t border-gray-100 bg-gray-50/60">
                <div className="flex items-center gap-3 sm:gap-5">
                  <button
                    onClick={() => { navigate("/notifications"); closeMenu(); }}
                    className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13px] font-[Poppins] text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <Bell size={15} strokeWidth={2.5} fill="currentColor" className="sm:w-4 sm:h-4" />
                    <span>Notifications</span>
                  </button>
                  <Link
                    to="/cart"
                    onClick={closeMenu}
                    className="flex items-center gap-1 sm:gap-1.5 text-[12px] sm:text-[13px] font-[Poppins] text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <ShoppingCart size={15} strokeWidth={2.5} fill="currentColor" className="sm:w-4 sm:h-4" />
                    <span>Cart</span>
                  </Link>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => { navigate("/login"); closeMenu(); }}
                    className="rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 px-3 sm:px-4 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-[Poppins] font-semibold transition-colors active:scale-95"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { navigate("/signup"); closeMenu(); }}
                    className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-[Poppins] font-semibold transition-colors active:scale-95"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}