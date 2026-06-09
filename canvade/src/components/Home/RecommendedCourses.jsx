import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Clock3,
  BookOpen,
  MapPin,
  ArrowRight,
  MoreVertical,
  Scale,
  MessageSquare,
  Heart,
  Bell,
  Share2,
  ArrowLeftRight,
} from "lucide-react";

const COURSE_DATA = [
  {
    id: 1,
    anim: "anim-left",
    title:
      "Philosophy of Doctorate in Human Behavior and Phycological Research",
    institution: "ICAI - The Institute of Chartered Accountants",
    duration: "4 Year",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    oldPrice: "₹ 3,40,000",
    newPrice: "₹ 2,90,000",
    rating: "4.8",
    image: "course.png",
  },
  {
    id: 2,
    anim: "anim-top",
    title:
      "Philosophy of Doctorate in Human Behavior and Phycological Research",
    institution: "ICAI - The Institute of Chartered Accountants",
    duration: "4 Year",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    oldPrice: "₹ 3,40,000",
    newPrice: "₹ 2,90,000",
    rating: "4.8",
    image: "course.png",
  },
  {
    id: 3,
    anim: "anim-bottom",
    title:
      "Philosophy of Doctorate in Human Behavior and Phycological Research",
    institution: "ICAI - The Institute of Chartered Accountants",
    duration: "4 Year",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    oldPrice: "₹ 3,40,000",
    newPrice: "₹ 2,90,000",
    rating: "4.8",
    image: "course.png",
  },
  {
    id: 4,
    anim: "anim-right",
    title:
      "Philosophy of Doctorate in Human Behavior and Phycological Research",
    institution: "ICAI - The Institute of Chartered Accountants",
    duration: "4 Year",
    mode: "Onsite & Online",
    location: "Moti Nagar, New Delhi",
    oldPrice: "₹ 3,40,000",
    newPrice: "₹ 2,90,000",
    rating: "4.8",
    image: "course.png",
  },
];

export default function RecommendedCourses() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
const [notified, setNotified] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on scroll so it doesn't drift from its button
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
    const menuHeight = 260;
    const menuWidth = 224;
    const spaceBelow = window.innerHeight - rect.bottom;

    // Convert viewport coords → document coords by adding scroll offset
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
    const { current } = scrollRef;
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
      label: "Compare",
      icon: <ArrowLeftRight size={16} />,
      onClick: () => console.log("Compare"),
    },
    {
      label: "Enquiry",
      icon: <MessageSquare size={16} />,
      onClick: () => console.log("Enquiry"),
    },
    {
  label: "Wishlist",
  icon: <Heart size={16} />,
  onClick: () => {
    navigate("/cart");
  },
},
   {
  id: "notify",
  label: notified
    ? "Notification Enabled"
    : "Notify When Active",
  icon: <Bell size={16} />,
  onClick: () => {
    setNotified((prev) => !prev);
  },
},
    {
      label: "Share",
      icon: <Share2 size={16} />,
      onClick: () => console.log("Share"),
    },
    {
      label: "Similar Courses",
      icon: <BookOpen size={16} />,
      onClick: () => console.log("Similar Courses"),
    },
  ];
const handleEnroll = (course) => {
  localStorage.setItem(
    "checkoutCourse",
    JSON.stringify(course)
  );

  navigate("/checkout?step=payment");
};

  return (
    <section className="px-4 md:px-8 lg:px-12 py-12 bg-white overflow-hidden">
      <div className="max-w-[1700px] mx-auto bg-[#f8fafc] rounded-[30px] md:rounded-[40px] p-4 md:p-10 shadow-sm border border-gray-100">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-1xl md:text-4xl font-medium text-gray-800 mb-2 tracking-tight">
                <span className="text-emerald-600">Courses</span> Picked Just for You
              </h2>
              <p className="text-gray-500 text-xs md:text-sm max-w-2xl">
                Courses and Programs selected based on your interests, profile,
                and activity — helping you find the right options faster.
              </p>
            </div>

            <div className="flex gap-2 self-end">
              <button
                onClick={() => scroll("left")}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="h-9 w-9 flex items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-md active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-x-visible pb-4 no-scrollbar snap-x snap-mandatory"
          >
            {COURSE_DATA.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate("/courseview")}
                className={`flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-full snap-start bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl group cursor-pointer ${
                  visible ? item.anim : "opacity-0 translate-y-10"
                }`}
              >
                <div className="p-2 pb-0">
                  <div className="relative">
                    <div className="relative h-44 md:h-48 w-full overflow-hidden rounded-t-[8px] rounded-bl-[15px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute bottom-0 right-0 bg-white pl-2 pt-0 rounded-tl-lg flex items-center gap-2 h-8">
                        <span className="bg-[#FFC107] text-[9px] text-white px-2 py-0.5 rounded-md capitalize">
                          Student's Choice
                        </span>
                        <div className="flex items-center gap-0.5 pr-3">
                          <span className="text-[#FFC107] text-sm">★</span>
                          <span className="text-[11px] text-gray-700">
                            {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-2 -left-0.5 translate-y-1/4 w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white z-10"
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/instituteview");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                          navigate("/instituteview");
                        }
                      }}
                    >
                      <img
                        src="workshop.png"
                        alt="Logo"
                        className="w-full h-full mx-auto p-0.5 object-cover rounded-full scale-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-3">
                  <div
                    className="flex items-center gap-1 bg-[#f1f5f9] px-3.5 py-1 rounded-[6px] mb-2 overflow-hidden cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/instituteview");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.stopPropagation();
                        navigate("/instituteview");
                      }
                    }}
                  >
                    <span className="text-[10px] font-medium text-[#2563eb] uppercase tracking-tight truncate min-w-0">
                      {item.institution}
                    </span>
                    <BadgeCheck className="w-4 h-4 text-white fill-[#3b82f6] flex-shrink-0" />
                  </div>

                  <h3 className="text-base font-medium text-gray-900 leading-tight mb-2 line-clamp-2 min-h-[40px]">
                    {item.title}
                  </h3>

                  <div className="flex items-stretch text-gray-700 text-[11px] mb-2 border-b border-gray-200">
                    <div className="flex items-center gap-1.5 font-medium pb-3 pr-4">
                      <Clock3 className="w-4 h-4 text-gray-700" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5 font-medium border-l border-gray-300 pl-4 md:pl-6 pb-3 ml-auto">
                      <BookOpen className="w-4 h-4 text-gray-700" />
                      <span>{item.mode}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-600 text-[12px] mb-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 text-gray-600" />
                    <span className="truncate">
                      {item.location}{" "}
                      <span className="text-gray-800 ml-1">(12 More)</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-[#F6F6F6] px-2 py-1 rounded-md space-y-0.5">
                      <p className="text-[15px] font-semibold text-gray-900 leading-tight">
                        {item.newPrice}
                      </p>
                      <p className="text-[10px] text-[#303030] line-through">
                        {item.oldPrice}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
<button
  onClick={(e) => {
    e.stopPropagation();
    handleEnroll(item);
  }}
  className="bg-[#E5E5E5] hover:bg-emerald-600 hover:text-white text-gray-700 text-[12px] font-semibold px-3 md:px-4 py-2 rounded-md flex items-center gap-2 transition-all"
>Enroll
                        <span className="hidden sm:inline-flex w-4 h-4 rounded-md bg-[#484848] text-white items-center justify-center align-middle">
                          <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </button>
                    <button
                      type="button"
                      onClick={(e) => toggleMenu(item.id, e)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          toggleMenu(item.id, e);
                      }}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="More options"
                    >
                      <MoreVertical className="w-5 h-5 text-[#707070]" />
                    </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                <span
  className={
    menuItem.id === "notify" && notified
      ? "text-emerald-600"
      : "text-gray-500"
  }
>
  {menuItem.icon}
</span>

<span className="text-gray-700">
  {menuItem.label}
</span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </section>
  );
}