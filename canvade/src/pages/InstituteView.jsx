import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Share2,
  Bookmark,
  AlertCircle,
  CheckCircle2,
  Building,
  Award,
  Users,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Clock,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Lock,
  HelpCircle,
  Headphones,
  LayoutGrid,
  FileText,
  ImageIcon,
  Briefcase,
  Phone,
  MessageSquare,
  BadgeCheck,
  Clock3,
  MoreVertical,
  Scale,
  Heart,
  Bell,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Static Data ────────────────────────────────────────────────────────────

const SUB_TABS = [
  "Overview",
  "Courses",
  "Blogs",
  "Reviews",
  "Photos",
  "Placements",
  "Contact",
];

const TAB_ICONS = {
  Overview: LayoutGrid,
  Courses: BookOpen,
  Blogs: FileText,
  Reviews: MessageSquare,
  Photos: ImageIcon,
  Placements: Briefcase,
  Contact: Phone,
};

const COURSE_DATA = [
  {
    id: 1,
    anim: "anim-left",
    title: "Philosophy of Doctorate in Human Behavior and Phycological Research",
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
    title: "Philosophy of Doctorate in Human Behavior and Phycological Research",
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
    title: "Philosophy of Doctorate in Human Behavior and Phycological Research",
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
    title: "Philosophy of Doctorate in Human Behavior and Phycological Research",
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
    id: 5,
    anim: "anim-right",
    title: "Philosophy of Doctorate in Human Behavior and Phycological Research",
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

const LATEST_BLOGS = [
  {
    date: "24 May 2025",
    title: "Top Engineering Courses in Demand for 2025",
    desc: "Explore the most in-demand engineering courses that offer great career prospects and futures...",
    category: "Admissions",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  },
  {
    date: "18 May 2025",
    title: "Life at Canvade: Beyond Classrooms",
    desc: "From clubs to innovations, discover how we ensure overall development and campus life...",
    category: "Campus Life",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80",
  },
  {
    date: "10 May 2025",
    title: "The Future of AI and Data Science",
    desc: "Understanding how AI and Data Science are shaping the future world and industrial parameters...",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    title: "Data Science Career Roadmap for Beginners",
    desc: "Step-by-step guide to becoming a successful data scientist from scratch.",
    date: "May 30, 2026",
    category: "Data Science",
  },
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    title: "Business Management Strategies for Startups",
    desc: "Practical management tips to help startups scale efficiently and sustainably.",
    date: "May 27, 2026",
    category: "Business",
  },
];

const USER_REVIEWS = [
  {
    name: "Rohit Sharma",
    meta: "B.Tech CSE • 2024 Batch",
    rating: 5,
    text: "Great faculty, excellent infrastructure and a vibrant campus life. The hands-on learning experience here is highly valuable.",
    time: "2 weeks ago",
  },
  {
    name: "Anjali Gupta",
    meta: "MBA Analytics • 2025 Batch",
    rating: 4,
    text: "The placement cell is very proactive. Guest lectures from industry professionals happen regularly which provides amazing corporate insight.",
    time: "1 month ago",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function StarRatingsRow({ rating, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(parseFloat(rating))
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }
        />
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function InstituteView() {
  const navigate = useNavigate();

  // institute-level state
  const [activeSubTab, setActiveSubTab] = useState("Overview");
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // course-cards state (from RecommendedCourses)
  const [visible, setVisible] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });

  const coursesScrollRef = useRef(null);
  const blogsScrollRef = useRef(null);

  // Trigger entrance animations after mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Close context menu on outside click or scroll
  useEffect(() => {
    const close = () => setOpenMenuId(null);
    document.addEventListener("mousedown", close);
    window.addEventListener("scroll", close, true);
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", close, true);
    };
  }, []);

  // ── Handlers ────────────────────────────────────────────────────────────

  const handleNextReview = () =>
    setCurrentReviewIdx((prev) => (prev + 1) % USER_REVIEWS.length);

  const handlePrevReview = () =>
    setCurrentReviewIdx(
      (prev) => (prev - 1 + USER_REVIEWS.length) % USER_REVIEWS.length
    );

  const scrollCourses = (direction) => {
    if (coursesScrollRef.current) {
      coursesScrollRef.current.scrollBy({ left: direction * 320, behavior: "smooth" });
    }
  };

  const scrollBlogs = (direction) => {
    if (blogsScrollRef.current) {
      blogsScrollRef.current.scrollBy({ left: direction * 280, behavior: "smooth" });
    }
  };

  const toggleMenu = (id, e) => {
    e.stopPropagation();
    if (openMenuId === id) { setOpenMenuId(null); return; }

    const rect = e.currentTarget.getBoundingClientRect();
    const menuHeight = 260;
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

  const handleEnroll = (course) => {
    localStorage.setItem("checkoutCourse", JSON.stringify(course));
    navigate("/checkout?step=payment");
  };

  const menuItems = [
    { label: "Compare",           icon: <Scale size={16} />,       onClick: () => console.log("Compare") },
    { label: "Enquiry",           icon: <MessageSquare size={16} />, onClick: () => console.log("Enquiry") },
    { label: "Wishlist",          icon: <Heart size={16} />,        onClick: () => console.log("Wishlist") },
    { label: "Notify When Active",icon: <Bell size={16} />,         onClick: () => console.log("Notify") },
    { label: "Share",             icon: <Share2 size={16} />,       onClick: () => console.log("Share") },
    { label: "Similar Courses",   icon: <BookOpen size={16} />,     onClick: () => console.log("Similar Courses") },
  ];

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased pt-20">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="w-full py-2.5">
        <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 flex-wrap">
            <span className="hover:text-emerald-600 cursor-pointer">Home</span>
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
            <span className="hover:text-emerald-600 cursor-pointer">Institutes</span>
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
            <span className="text-slate-900 font-medium">Canvade Institute of Technology</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
              <Share2 size={13} /> Share
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-semibold transition-colors ${
                isSaved
                  ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Bookmark size={13} fill={isSaved ? "currentColor" : "none"} /> Save
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
              <AlertCircle size={13} /> Report
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-[1700px] w-full mx-auto px-4 md:px-8 lg:px-12 py-6 flex-1 space-y-4">

        {/* ── Institute Hero Card ── */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-3 md:p-4">
          <section className="p-3 md:p-4 w-full">
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">

              {/* Gallery */}
              <div className="w-full lg:w-[28%] shrink-0 space-y-2.5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-slate-100 border border-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80"
                    alt="Canvade Main Campus Building"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                    <CheckCircle2 size={11} /> Verified Institute
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&auto=format&fit=crop&q=80" alt="Campus" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&auto=format&fit=crop&q=80" alt="Auditorium" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 bg-slate-900 cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&auto=format&fit=crop&q=80" alt="Students" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">+12</div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                      Canvade Institute of Technology
                    </h1>
                    <CheckCircle2 size={18} className="text-emerald-500 fill-emerald-500 shrink-0" />
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-4">Empowering Careers, Transforming Futures</p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-slate-50 border border-gray-200 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md">Est. 2012</span>
                    <span className="bg-slate-50 border border-gray-200 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md">Affiliated with AICTE</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-slate-800">4.6</span>
                    <StarRatingsRow rating={4.6} size={15} />
                    <span className="text-xs text-gray-400 font-medium">(256 Reviews)</span>
                  </div>

                  <p className="text-[13px] text-gray-600 leading-relaxed max-w-[800px] mb-6">
                    Canvade Institute of Technology is committed to academic excellence, practical learning and holistic development. We offer industry-aligned programs designed to prepare students for tomorrow's challenges.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2.5 bg-white rounded-xl border border-gray-200/60 mb-6">
                    {[
                      { Icon: Building,     label: "Institute Type",    val: "Private" },
                      { Icon: Award,        label: "Accreditation",     val: "NAAC A Grade" },
                      { Icon: Users,        label: "Students Enrolled", val: "2,500+" },
                      { Icon: GraduationCap,label: "Faculty",           val: "120+" },
                    ].map(({ Icon, label, val }) => (
                      <div key={label} className="flex items-center gap-3.5">
                        <Icon size={18} className="text-gray-600 shrink-0" />
                        <div>
                          <p className="text-[11px] text-gray-500 font-medium mb-1">{label}</p>
                          <p className="text-[13px] font-medium text-slate-800">{val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-10 py-2.5 bg-[#007965] hover:bg-[#006252] text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
                    Enquire Now
                  </button>
                </div>
              </div>

              {/* Map */}
              <div className="w-full lg:w-[24%] shrink-0 bg-white border border-gray-200/60 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">Location</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Canvade Campus, Knowledge Park III, Greater Noida, Uttar Pradesh - 201306
                  </p>
                </div>
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden border border-gray-200 mb-4 shadow-sm">
                  <iframe
                    title="Institute Location"
                    src="https://maps.google.com/maps?q=Knowledge+Park+III,+Greater+Noida,+Uttar+Pradesh,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full border-0"
                    style={{ height: "calc(100% + 30px)", marginTop: "-10px" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex flex-col items-center -translate-y-5">
                      <MapPin size={28} className="text-red-500 fill-red-500 drop-shadow-md" />
                      <span className="text-[11px] font-semibold text-red-600 whitespace-nowrap bg-white/80 px-1.5 py-0.5 rounded mt-0.5">
                        Canvade Institute of Technology
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Knowledge+Park+III,+Greater+Noida,+Uttar+Pradesh+201306", "_blank")}
                  className="w-full py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg" alt="Google Maps" className="w-4 h-4" />
                  Open in Google Maps
                </button>
              </div>

            </div>
          </section>
        </div>

        {/* ── Content Sections ── */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-4 md:p-6 lg:p-8 space-y-6">

          {/* ════ Popular Courses ════ */}
          <section className="bg-slate-50 rounded-xl border border-gray-100 p-5 space-y-4">
            {/* Header — matches Latest Blogs style */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">Popular Courses</h2>
              <button className="text-emerald-700 font-semibold text-xs sm:text-sm flex items-center gap-1 hover:underline">
                View All Courses <ChevronRight size={14} />
              </button>
            </div>

            {/* Scrollable row with side arrow buttons */}
            <div className="relative">
              {/* Left arrow */}
              <button
                onClick={() => scrollCourses(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>

              {/* Cards scroll container */}
              <div
                ref={coursesScrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar px-1 pb-2 snap-x snap-mandatory"
              >
                {COURSE_DATA.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate("/courseview")}
                    className={`flex-shrink-0 snap-start cursor-pointer group w-[82vw] sm:w-[44vw] md:w-[300px] lg:w-[280px] xl:w-[300px] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl ${visible ? item.anim : "opacity-0 translate-y-10"}`}
                  >
                    <div className="p-2 pb-0">
                      <div className="relative">
                        <div className="relative h-44 w-full overflow-hidden rounded-t-[8px] rounded-bl-[15px]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 right-0 bg-white pl-2 rounded-tl-lg flex items-center gap-2 h-8">
                            <span className="bg-[#FFC107] text-[9px] text-white px-2 py-0.5 rounded-md capitalize">
                              Student's Choice
                            </span>
                            <div className="flex items-center gap-0.5 pr-3">
                              <span className="text-[#FFC107] text-sm">★</span>
                              <span className="text-[11px] text-gray-700">{item.rating}</span>
                            </div>
                          </div>
                        </div>

                        {/* Institute logo avatar */}
                        <div
                          className="absolute bottom-2 -left-0.5 translate-y-1/4 w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white z-10"
                          role="button"
                          tabIndex={0}
                          onClick={(e) => { e.stopPropagation(); navigate("/instituteview"); }}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.stopPropagation(); navigate("/instituteview"); } }}
                        >
                          <img src="workshop.png" alt="Logo" className="w-full h-full mx-auto p-0.5 object-cover rounded-full scale-200" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 pt-3">
                      {/* Institution badge */}
                      <div
                        className="flex items-center gap-1 bg-[#f1f5f9] px-3.5 py-1 rounded-[6px] mb-2 overflow-hidden cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={(e) => { e.stopPropagation(); navigate("/instituteview"); }}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.stopPropagation(); navigate("/instituteview"); } }}
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
                          <p className="text-[15px] font-semibold text-gray-900 leading-tight">{item.newPrice}</p>
                          <p className="text-[10px] text-[#303030] line-through">{item.oldPrice}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => { e.stopPropagation(); handleEnroll(item); }}
                            className="bg-[#E5E5E5] hover:bg-emerald-600 hover:text-white text-gray-700 text-[12px] font-semibold px-3 md:px-4 py-2 rounded-md flex items-center gap-2 transition-all"
                          >
                            Enroll
                            <span className="hidden sm:inline-flex w-4 h-4 rounded-md bg-[#484848] text-white items-center justify-center align-middle">
                              <ArrowRight className="w-2.5 h-2.5" />
                            </span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => toggleMenu(item.id, e)}
                            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleMenu(item.id, e); }}
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

              {/* Right arrow */}
              <button
                onClick={() => scrollCourses(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </section>

          {/* ════ Latest Blogs ════ */}
          <section className="lg:col-span-2 bg-slate-50 rounded-xl border border-gray-100 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">Latest Blogs</h2>
              <button className="text-emerald-700 font-semibold text-xs sm:text-sm flex items-center gap-1 hover:underline">
                View All Blogs <ChevronRight size={14} />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => scrollBlogs(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>

              <div ref={blogsScrollRef} className="flex gap-4 overflow-x-auto no-scrollbar px-1 pb-2">
                {LATEST_BLOGS.map((blog, idx) => (
                  <div
                    key={idx}
                   className="
flex-shrink-0
w-[82vw]
sm:w-[44vw]
md:w-[300px]
lg:w-[280px]
xl:w-[300px]
bg-white
rounded-xl
border
border-gray-100
shadow-sm
overflow-hidden
flex
flex-col
group
hover:shadow-md
transition-shadow
"
                  >
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden shrink-0">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <span className="absolute top-2 left-2 bg-purple-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow-sm">Blog</span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                      <div>
                        <p className="text-[11px] text-gray-400 font-medium">{blog.date}</p>
                        <h3 className="font-medium text-[14px] text-slate-900 line-clamp-2 leading-snug mt-1">{blog.title}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">{blog.desc}</p>
                      </div>
                      <div className="flex items-center justify-between pt-3">
                        <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md">{blog.category}</span>
                        <button className="text-xs font-semibold text-emerald-600 hover:text-emerald-700">Read More</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollBlogs(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
          </section>

          {/* ════ Reviews & Ratings ════ */}
          <section className="lg:col-span-2 bg-slate-50 rounded-2xl border border-gray-100 p-6 shadow-xs space-y-5 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">Reviews &amp; Ratings</h2>
              <button className="text-emerald-600 font-semibold text-xs sm:text-sm flex items-center gap-1 hover:underline">
                View All Reviews <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Rating breakdown */}
              <div className="md:col-span-5 flex flex-row items-center gap-6 sm:gap-8 w-full p-4 sm:p-5">
                <div className="flex flex-col items-center shrink-0 text-center">
                  <p className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">4.6</p>
                  <div className="mt-3 mb-1.5"><StarRatingsRow rating={4.6} size={15} /></div>
                  <p className="text-[11px] text-gray-400 font-medium whitespace-nowrap">Based on 256 reviews</p>
                </div>
                <div className="flex-1 space-y-4 w-full">
                  {[
                    { stars: 5, count: 160, fillW: "w-[75%]" },
                    { stars: 4, count: 70,  fillW: "w-[42%]" },
                    { stars: 3, count: 18,  fillW: "w-[15%]" },
                    { stars: 2, count: 5,   fillW: "w-[5%]"  },
                    { stars: 1, count: 3,   fillW: "w-[3%]"  },
                  ].map((row) => (
                    <div key={row.stars} className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                      <span className="w-11 shrink-0 text-gray-400 text-left whitespace-nowrap">
                        {row.stars} Star{row.stars > 1 ? "s" : ""}
                      </span>
                      <div className="flex-1 h-2 bg-slate-200/60 rounded-full overflow-hidden">
                        <div className={`h-full bg-[#007965] rounded-full ${row.fillW}`} />
                      </div>
                      <span className="w-7 text-right text-slate-700 shrink-0 font-semibold">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review card */}
              <div className="md:col-span-7 w-full flex">
                <div className="p-5 bg-white border border-gray-200/70 rounded-2xl shadow-sm relative flex flex-col justify-between w-full min-h-[175px]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-gray-100 bg-slate-50">
                          <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-tight tracking-tight">
                            {USER_REVIEWS[currentReviewIdx].name}
                          </h4>
                          <p className="text-[11px] text-gray-400 font-medium">
                            {USER_REVIEWS[currentReviewIdx].meta}
                          </p>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-slate-600 p-1 rounded transition-colors shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                    </div>
                    <div className="mb-2.5">
                      <StarRatingsRow rating={USER_REVIEWS[currentReviewIdx].rating} size={13} />
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      "{USER_REVIEWS[currentReviewIdx].text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-50/80">
                    <span className="text-[11px] text-gray-400 font-medium">{USER_REVIEWS[currentReviewIdx].time}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={handlePrevReview} className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-slate-700 hover:border-gray-300 transition-colors">
                        <ChevronLeft size={15} className="stroke-[2.5]" />
                      </button>
                      <button onClick={handleNextReview} className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-slate-700 hover:border-gray-300 transition-colors">
                        <ChevronRight size={15} className="stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ════ CTA Banner ════ */}
          <section className="relative w-full bg-[#032e27] rounded-2xl text-white overflow-hidden shadow-md h-auto md:h-40 lg:h-44 flex items-center py-8 md:py-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(0,121,101,0.35),transparent_60%)] z-0 rounded-2xl" />
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 lg:px-12 relative z-10">
              <div className="space-y-1.5 text-center md:text-left py-2">
                <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight">
                  Ready to take the next step?
                </h2>
                <p className="text-xs sm:text-sm text-white/80 font-light">
                  Enquire now and our admission counsellor will connect with you.
                </p>
                <div className="pt-2 flex justify-center md:justify-start">
                  <button className="px-8 py-3 bg-[#007965] hover:bg-[#006252] text-white text-xs font-medium rounded-lg flex items-center gap-2 transition-all group shadow-sm tracking-wide">
                    Enquire Now
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="hidden md:block absolute bottom-4 right-4 lg:right-8 h-[120%] w-[380px] lg:w-[430px] z-20">
                <img
                  src="istituet.png"
                  alt="Admission counsellor illustration"
                  className="w-[150%] h-[160%] object-contain object-bottom select-none pointer-events-none"
                />
              </div>
            </div>
          </section>

          {/* ════ Trust Badges ════ */}
          <div className="max-w-[1200px] mx-auto w-full px-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              {[
                { Icon: ShieldCheck, title: "Trusted by Thousands", desc: "Verified institutes & educators" },
                { Icon: Lock,        title: "Secure & Reliable",    desc: "Your data is safe with us" },
                { Icon: HelpCircle,  title: "Free Enquiry",         desc: "Connect and learn for free" },
                { Icon: Headphones,  title: "24/7 Support",         desc: "We're here to help you" },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3 p-2.5 shadow-2xs">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 rounded-full">
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed mb-1">{title}</p>
                    <p className="text-[11px] text-gray-600 font-medium leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* ── Context Menu Portal ── */}
      {openMenuId !== null &&
        createPortal(
          <div
            style={{ position: "absolute", top: menuPos.top, left: menuPos.left, zIndex: 9999 }}
            className="w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((menuItem) => (
              <button
                key={menuItem.label}
                type="button"
                onClick={(e) => { e.stopPropagation(); menuItem.onClick(); setOpenMenuId(null); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                {menuItem.icon}
                <span>{menuItem.label}</span>
              </button>
            ))}
          </div>,
          document.body
        )
      }
    </div>
  );
}