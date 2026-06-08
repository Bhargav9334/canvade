import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Archive,
  Clock,
  MoreHorizontal,
  Search,
  SlidersHorizontal,
  Plus,
  Pencil,
  ArchiveIcon,
  History,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const tabs = [
  { label: "Active", count: 12 },
  { label: "Inactive", count: 3 },
  { label: "Archived", count: 5 },
  { label: "Deleted", count: 2 },
];

const courses = [
  {
    id: "CSE-001",
    name: "Data Science Professional Course",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop",
    type: "Course",
    duration: "6 Months",
    seats: "25 / 30",
    seatsLeft: "5 left",
    seatsLeftColor: "text-emerald-600",
    status: "Active",
  },
  {
    id: "DMM-002",
    name: "Digital Marketing Masterclass",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop",
    type: "Course",
    duration: "3 Months",
    seats: "40 / 40",
    seatsLeft: "Full",
    seatsLeftColor: "text-red-500",
    status: "Active",
  },
  {
    id: "UIUX-003",
    name: "UI/UX Design Fundamentals",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=80&h=80&fit=crop",
    type: "Course",
    duration: "2 Months",
    seats: "18 / 25",
    seatsLeft: "7 left",
    seatsLeftColor: "text-emerald-600",
    status: "Active",
  },
  {
    id: "PY-004",
    name: "Python Programming for Beginners",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=80&h=80&fit=crop",
    type: "Course",
    duration: "8 Weeks",
    seats: "30 / 30",
    seatsLeft: "Full",
    seatsLeftColor: "text-red-500",
    status: "Active",
  },
  {
    id: "WK-AI01",
    name: "Masterclass on AI Tools for Productivity",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=80&h=80&fit=crop",
    type: "Workshop",
    duration: "2 Hours",
    seats: "45 / 50",
    seatsLeft: "5 left",
    seatsLeftColor: "text-emerald-600",
    status: "Active",
  },
  {
    id: "WK-CS02",
    name: "Cyber Security Essentials Workshop",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=80&h=80&fit=crop",
    type: "Workshop",
    duration: "3 Hours",
    seats: "28 / 30",
    seatsLeft: "2 left",
    seatsLeftColor: "text-emerald-600",
    status: "Active",
  },
  {
    id: "EX-005",
    name: "Excel for Data Analysis",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=80&h=80&fit=crop",
    type: "Course",
    duration: "4 Weeks",
    seats: "15 / 20",
    seatsLeft: "5 left",
    seatsLeftColor: "text-emerald-600",
    status: "Inactive",
  },
  {
    id: "WK-PH01",
    name: "Photography Basics Workshop",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=80&h=80&fit=crop",
    type: "Workshop",
    duration: "4 Hours",
    seats: "0 / 25",
    seatsLeft: "25 left",
    seatsLeftColor: "text-emerald-600",
    status: "Archived",
  },
];

const typeStyle = {
  Course: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  Workshop: "bg-purple-50 text-purple-700 border border-purple-100",
};

const statusStyle = {
  Active: "bg-emerald-50 text-emerald-700",
  Inactive: "bg-amber-50 text-amber-600",
  Archived: "bg-slate-100 text-slate-600",
};

const getActionButtons = (status) => {
  if (status === "Active")
    return ["Edit Seats", "Edit Details", "Archive", "History"];
  if (status === "Inactive")
    return ["Edit Seats", "Edit Details", "Activate", "History"];
  if (status === "Archived")
    return ["Edit Seats", "Edit Details", "Unarchive", "History"];
  return ["Edit Seats", "Edit Details", "Archive", "History"];
};

const actionIcons = {
  "Edit Seats": <Users className="w-4 h-4" />,
  "Edit Details": <Pencil className="w-4 h-4" />,
  Archive: <ArchiveIcon className="w-4 h-4" />,
  Unarchive: <ArchiveIcon className="w-4 h-4" />,
  Activate: <BookOpen className="w-4 h-4" />,
  History: <History className="w-4 h-4" />,
};

const CoursesAndWorkshops = ({ onCreateCourse }) => {
  const [activeTab, setActiveTab] = useState("Active");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const filtered = courses.filter((c) => {
    const matchTab =
      activeTab === "Active"
        ? c.status === "Active"
        : activeTab === "Inactive"
          ? c.status === "Inactive"
          : activeTab === "Archived"
            ? c.status === "Archived"
            : activeTab === "Deleted"
              ? c.status === "Deleted"
              : true;
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <div className="space-y-6 px-4 ">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Courses and Workshops
          </h1>
          <p className="text-sm text-[#2e5c42] font-medium mt-0.5">
            Create, manage and organize all your courses and workshops.
          </p>
        </div>
        <button
          type="button"
          onClick={onCreateCourse}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#0ea271] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New Course / Workshop
        </button>
      </div>

      <div className="bg-white border border-slate-300 rounded-2xl shadow-sm overflow-hidden pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 py-4 gap-4 w-full select-none">
          <div className="flex flex-row items-center gap-2.5 flex-wrap">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(tab.label);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs font-bold border transition-all ${
                    isSelected
                      ? "bg-[#eefbf7] border-[#b2ddce] text-[#00875a] shadow-sm"
                      : "bg-white border-slate-200/70 text-slate-500 hover:bg-slate-50/80"
                  }`}
                >
                  <span>{tab.label}</span>

                  <span
                    className={`w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isSelected
                        ? "bg-[#00875a] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto flex-wrap">
            <div className="relative w-full sm:w-56 lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search courses..."
                className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-all shadow-sm"
              />
            </div>

            <button className="flex items-center gap-2 border border-slate-200 bg-white rounded-lg px-4 py-3 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm shrink-0">
              <SlidersHorizontal
                className="w-3.5 h-3.5 text-slate-500"
                strokeWidth={2}
              />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto space-y-4 pb-6">
          <table className="min-w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-center text-xs font-semibold text-slate-700 px-4 py-3">
                  Course / Workshop
                </th>
                <th className="text-center text-xs font-semibold text-slate-700 px-5 py-3">
                  Type
                </th>
                <th className="text-center text-xs font-semibold text-slate-700 px-5 py-3">
                  Duration
                </th>
                <th className="text-center text-xs font-semibold text-slate-700 px-5 py-3">
                  Seats
                </th>
                <th className="text-center text-xs font-semibold text-slate-700 px-5 py-3">
                  Status
                </th>
                <th className="text-center text-xs font-semibold text-slate-700 px-5 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-16 text-center text-sm text-slate-400"
                  >
                    No courses found.
                  </td>
                </tr>
              ) : (
                paginated.map((c) => (
                  <tr
                    key={c.id}
                    className="hover:bg-slate-50/60 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-18 h-18 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {c.name}
                          </p>
                          <p className="text-[12px] text-slate-600 mt-2">
                            ID: {c.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${typeStyle[c.type]}`}
                      >
                        {c.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[14px] text-gray-700">
                      {c.duration}
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm font-semibold text-gray-900">
                        {c.seats}
                      </p>
                      <p className={`text-xs font-medium ${c.seatsLeftColor}`}>
                        ({c.seatsLeft})
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-lg ${statusStyle[c.status]}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-0.5">
                        {getActionButtons(c.status).map((action) => (
                          <button
                            key={action}
                            title={action}
                            className="flex flex-col items-center gap-0 p-1 rounded-lg text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-colors border border-slate-200">
                              {actionIcons[action]}
                            </div>
                            <span className="text-[10px] font-bold leading-none mt-3">
                              {action}
                            </span>
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-4 sm:py-6 border-t border-slate-200 gap-4">
        <p className="text-sm text-slate-500">
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * perPage + 1}{" "}
          to {Math.min(currentPage * perPage, filtered.length)} of{" "}
          {filtered.length} courses
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                currentPage === p
                  ? "bg-[#10b981] text-white"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <select className="ml-2 text-sm border border-slate-200 rounded-lg px-2 py-1.5 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200">
            <option>10 / page</option>
            <option>20 / page</option>
            <option>50 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndWorkshops;
