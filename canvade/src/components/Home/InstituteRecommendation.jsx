import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  MapPin,
  MoreVertical,
  Star,
  MessageCircle,
  Share2,
  Bell,
} from "lucide-react";

const INSTITUTES = [
  {
    id: 1,
    name: "Delhi Institute of Computer Science and Management",
    category: "Institute",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    extraLocations: "12 More",
    rating: "5.0",
    image: "institute.png",
  },
  {
    id: 2,
    name: "Delhi Institute of Computer Science and Management",
    category: "Institute",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    extraLocations: "12 More",
    rating: "5.0",
    image: "institute.png",
  },
  {
    id: 3,
    name: "Delhi Institute of Computer Science and Management",
    category: "Institute",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    extraLocations: "12 More",
    rating: "5.0",
    image: "institute.png",
  },
  {
    id: 4,
    name: "Delhi Institute of Computer Science and Management",
    category: "Institute",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    extraLocations: "12 More",
    rating: "5.0",
    image: "institute.png",
  },
];

export default function InstituteRecommendation() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOpenMenuId(null);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const toggleMenu = (id, e) => {
    e.stopPropagation();
    if (openMenuId === id) {
      setOpenMenuId(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const menuHeight = 160;
    const menuWidth = 224;
    const spaceBelow = window.innerHeight - rect.bottom;

    const top =
      (spaceBelow > menuHeight ? rect.bottom + 4 : rect.top - menuHeight - 4) +
      window.scrollY;
    const left =
      Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 8) +
      window.scrollX;

    setMenuPos({ top, left });
    setOpenMenuId(id);
  };

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.8;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    {
      label: "Chat",
      icon: <MessageCircle size={16} />,
      onClick: () => console.log("Chat"),
    },
    {
      label: "Share",
      icon: <Share2 size={16} />,
      onClick: () => console.log("Share"),
    },
    {
      label: "Updates",
      icon: <Bell size={16} />,
      onClick: () => console.log("Updates"),
    },
  ];

  return (
    <section className="px-4 md:px-16 py-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-4xl font-heading font-medium text-gray-800 tracking-tight">
            Institute Recommendation.
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-md active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 stroke-[3]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-md active:scale-90"
            >
              <ChevronRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-x-visible pb-6 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {INSTITUTES.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate("/instituteview")}
              className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-full snap-start bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl group cursor-pointer"
            >
              <div className="p-2 pb-0">
                <div className="relative">
                  <div className="relative h-44 md:h-48 w-full overflow-hidden rounded-t-[8px] rounded-bl-[15px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${dot === 2 ? "bg-white w-2.5" : "bg-white/50"}`}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-0 right-0 bg-white pl-2 pt-0 rounded-tl-lg flex items-center gap-2 h-8">
                      <span className="bg-[#FFC107] text-[9px] text-white px-2 py-0.5 rounded-md capitalize">
                        Top Rated
                      </span>
                      <div className="flex items-center gap-0.5 pr-3">
                        <Star size={12} fill="#FFC107" stroke="#FFC107" />
                        <span className="text-[11px] text-gray-700">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-3">
                <h3 className="text-base font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[40px]">
                  {item.name}
                </h3>

                <div className="flex items-stretch text-gray-700 text-[11px] mb-2 border-b border-gray-200">
                  <div className="flex items-center gap-1.5 font-medium pb-3 pr-4">
                    <Home className="w-4 h-4 text-gray-700" />
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-medium border-l border-gray-300 pl-6 pb-3 ml-auto">
                    <BookOpen className="w-4 h-4 text-gray-700" />
                    <span>{item.mode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-600 text-[12px] mb-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-gray-600" />
                  <span className="truncate">
                    {item.location}{" "}
                    <span className="text-gray-800 ml-1">({item.extraLocations})</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/instituteview");
                    }}
                    className="flex-grow py-2 rounded-lg bg-[#E5E5E5] hover:bg-emerald-600 hover:text-white text-gray-700 text-[12px] font-semibold transition-all"
                  >
                    View Courses
                  </button>

                  <button
                    type="button"
                    onClick={(e) => toggleMenu(item.id, e)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        toggleMenu(item.id, e);
                    }}
                    className="ml-2 p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
                    aria-label="More options"
                  >
                    <MoreVertical className="w-5 h-5 text-[#707070]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portal menu — rendered into document.body, never clipped */}
      {openMenuId !== null &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: menuPos.top,
              left: menuPos.left,
              zIndex: 9999,
            }}
            className="w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((menuItem) => (
              <button
                key={menuItem.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  menuItem.onClick();
                  setOpenMenuId(null);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                {menuItem.icon}
                <span>{menuItem.label}</span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </section>
  );
}