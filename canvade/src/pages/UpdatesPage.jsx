import React, { useState } from "react";
import {
  ChevronDown,
  Download,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Card = ({ image, category, title, description, date, catColor }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <span
        className={`text-[11px] font-bold px-2 py-1 rounded-md w-fit mb-3 ${catColor}`}
      >
        {category}
      </span>
      <h3 className="text-[17px] font-bold text-gray-800 leading-snug mb-2">
        {title}
      </h3>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="flex items-center gap-2 text-gray-700 text-[15px] pt-0 border-t border-gray-50">
        <Calendar size={14} />
        {date}
      </div>
    </div>
  </div>
);

const ITEMS_PER_PAGE = 6;

const allUpdates = [
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&q=80&w=400",
    category: "Press Release",
    catColor: "bg-emerald-50 text-emerald-600",
    title:
      "Canvade Raises $2 Million in Seed Funding to Transform Education Discovery",
    description:
      "The funding will help us expand our platform and bring better opportunities to students across India.",
    date: "May 20, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400",
    category: "Partnership",
    catColor: "bg-purple-50 text-purple-600",
    title: "Canvade Partners with IIT Delhi CEP to Launch Professional Courses",
    description:
      "This collaboration will offer industry-relevant programs to help learners upskill and grow.",
    date: "May 15, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400",
    category: "Product Update",
    catColor: "bg-blue-50 text-blue-600",
    title: "New Dashboard Experience Launched for Students",
    description:
      "We've redesigned the student dashboard to make course discovery and communication easier than ever.",
    date: "May 10, 2025",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400",
    category: "Event",
    catColor: "bg-orange-50 text-orange-600",
    title: "Canvade at EdTech India Summit 2025",
    description:
      "Our team spoke about the future of education discovery and building a more transparent learning ecosystem.",
    date: "May 05, 2025",
  },
 
];

const UpdatesPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [activeYear, setActiveYear] = useState("2025");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = [
    { name: "All Updates", count: 24 },
    { name: "Press Releases", count: 10 },
    { name: "Company Updates", count: 7 },
    { name: "Partnerships", count: 4 },
    { name: "Events", count: 3 },
  ];

  const years = [
    { year: "2025", count: 12 },
    { year: "2024", count: 8 },
    { year: "2023", count: 4 },
  ];

  const totalPages = Math.ceil(allUpdates.length / ITEMS_PER_PAGE);
  const paginatedUpdates = allUpdates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    document
      .getElementById("main-scroll-area")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const SidebarContent = () => (
    <div className="space-y-4">
      
      <div>
        <h4 className="font-bold text-[#111827] mb-4 text-[16px]">
          Categories
        </h4>
        <div className="space-y-1">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => {
                setActiveCategory(cat.name);
                setSidebarOpen(false);
              }}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                activeCategory === cat.name
                  ? "bg-[#E6F4F1] text-[#059669] font-bold"
                  : "text-gray-700 hover:bg-gray-50 font-bold"
              }`}
            >
              <span className="text-[14px]">{cat.name}</span>
              <span className="text-[13px]">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-[#111827] text-[16px]">Year</h4>
          <ChevronDown size={18} className="text-gray-700 " />
        </div>
        <div className="space-y-1">
          {years.map((item) => (
            <div
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                activeYear === item.year
                  ? "bg-[#E6F4F1] text-[#059669] font-semibold"
                  : "text-gray-700 hover:bg-gray-50 font-bold"
              }`}
            >
              <span className="text-[14px]">{item.year}</span>
              <span className="text-[13px]">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/*<div className="border-t border-gray-100 pt-6">
        <h4 className="font-bold text-[#111827] mb-2 text-[16px]">
          Subscribe to Updates
        </h4>
        <p className="text-[13px] text-gray-500 mb-4 leading-relaxed">
          Get the latest announcements and updates delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg border border-gray-200 text-[13px] bg-white outline-none focus:ring-1 focus:ring-[#059669]"
          />
          <button className="w-full bg-[#059669] text-white py-3 rounded-lg font-bold text-[14px] hover:bg-[#047857] transition-all">
            Subscribe
          </button>
        </div>
      </div>*/}

      {/*<div className="bg-[#F9FAFB] rounded-2xl p-5 border border-gray-100">
        <div className="w-11 h-11 bg-[#E6F4F1] rounded-xl flex items-center justify-center text-[#059669] mb-4">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        </div>
        <h4 className="font-bold text-[#111827] mb-1 text-[15px]">Media Kit</h4>
        <p className="text-[12px] text-gray-500 mb-4 leading-relaxed">
          Download our media kit for logos, images, and brand resources.
        </p>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#D1D5DB] py-2.5 rounded-lg text-[13px] font-bold text-[#059669] hover:bg-gray-50 transition-all">
          Download Media Kit
          <Download size={14} />
        </button>
      </div>*/}
    </div>
  );

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden bg-white">
        <Navbar />

        <div className="px-6 md:px-14 lg:px-24 pt-24 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[10px] h-12 bg-amber-400 rounded-full" />
              <h1 className="text-2xl md:text-3xl font-bold text-[#068467]">
                Press Release & Updates
              </h1>
            </div>

            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-[13px] font-semibold text-gray-700 hover:bg-gray-50"
            >
              <Menu size={16} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-1 min-h-0 -mt-4 px-6 md:px-14 lg:px-24">
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setSidebarOpen(false)}
              />
              <aside
                className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-xl overflow-y-auto p-6 z-50"
                style={{ scrollbarWidth: "none" }}
              >
                <style>{`aside::-webkit-scrollbar { display: none; }`}</style>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-gray-800 text-[16px]">
                    Filters
                  </span>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 rounded-lg hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <SidebarContent />
              </aside>
            </div>
          )}

          <aside
            className="hidden lg:flex flex-col w-[280px] xl:w-[300px] flex-shrink-0 overflow-y-auto border-r border-gray-100 px-3 py-6 bg-white"
            style={{ scrollbarWidth: "none" }}
          >
            <SidebarContent />
          </aside>

          <main
            id="main-scroll-area"
            className="flex-1 overflow-y-auto bg-white"
            style={{ scrollbarWidth: "none" }}
          >
            <style>{`
            #main-scroll-area::-webkit-scrollbar { display: none; }
            aside::-webkit-scrollbar { display: none; }
          `}</style>

            <div className="w-full mx-auto px-2 sm:px-3 lg:px-4 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-3">
                <p className="text-gray-700 text-[13px] font-medium">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                  {Math.min(currentPage * ITEMS_PER_PAGE, allUpdates.length)} of{" "}
                  {allUpdates.length} updates
                </p>
                <div className="flex items-center gap-2 text-[13px] text-gray-600">
                  <span className="opacity-60">Sort by:</span>
                  <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 font-bold text-gray-800 shadow-sm hover:border-emerald-200 transition-colors">
                    Latest <ChevronDown size={14} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedUpdates.map((item, idx) => (
                  <Card key={`${currentPage}-${idx}`} {...item} />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 mt-14 mb-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2.5 rounded-full transition-colors ${
                    currentPage === 1
                      ? "text-gray-200 cursor-not-allowed"
                      : "hover:bg-gray-100 text-gray-400 hover:text-emerald-600"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-xl font-bold text-sm transition-colors ${
                          currentPage === page
                            ? "bg-emerald-800 text-white shadow shadow-emerald-100"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2.5 rounded-full transition-colors ${
                    currentPage === totalPages
                      ? "text-gray-200 cursor-not-allowed"
                      : "hover:bg-gray-100 text-gray-400 hover:text-emerald-600"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdatesPage;
