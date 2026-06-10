import React, { useState, useEffect } from "react";
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

import {
  showSuccess,
  showError,
  showWarning,
  showInfo,
} from "../../../../utils/toast";

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

// Normalize API status to display status
const getNormalizedStatus = (status) => {
  const s = (status || "").toLowerCase();
  if (["active", "published"].includes(s)) return "Active";
  if (["inactive", "draft"].includes(s)) return "Inactive";
  if (["archived"].includes(s)) return "Archived";
  return "Inactive";
};

const CoursesAndWorkshops = ({ onCreateCourse }) => {
  const [activeTab, setActiveTab] = useState("Inactive"); // draft comes as Inactive
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/my-courses`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log("Courses API:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch courses");
      }

      // Support both data.data and data.courses
      setCourses(data.data || data.courses || []);
    } catch (error) {
      console.error(error);
      showError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetchCourses();
  }, []);

  const tabs = [
    {
      label: "Active",
      count: courses.filter(
        (c) => getNormalizedStatus(c.status) === "Active"
      ).length,
    },
    {
      label: "Inactive",
      count: courses.filter(
        (c) => getNormalizedStatus(c.status) === "Inactive"
      ).length,
    },
    {
      label: "Archived",
      count: courses.filter(
        (c) => getNormalizedStatus(c.status) === "Archived"
      ).length,
    },
  ];

  const filtered = courses.filter((c) => {
    const normalizedStatus = getNormalizedStatus(c.status);
    const matchTab = normalizedStatus === activeTab;

    const matchSearch =
      (c?.basicDetails?.courseTitle || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (c?.basicDetails?.courseCode || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchTab && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading courses...</p>
      </div>
    );
  }

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
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs font-bold border transition-all ${isSelected
                      ? "bg-[#eefbf7] border-[#b2ddce] text-[#00875a] shadow-sm"
                      : "bg-white border-slate-200/70 text-slate-500 hover:bg-slate-50/80"
                    }`}
                >
                  <span>{tab.label}</span>

                  <span
                    className={`w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center shrink-0 transition-all ${isSelected
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
                paginated.map((c) => {
                  const normalizedStatus = getNormalizedStatus(c.status);
                  return (
                    <tr
                      key={c.id || c._id}
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      <td className="px-6 py-4">
  <div className="flex items-center gap-4">

    <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
      {c?.uploadMaterials?.thumbnail ? (
        <img
          src={c.uploadMaterials.thumbnail}
          alt={c?.basicDetails?.courseTitle}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";

            const fallback =
              e.target.parentElement.querySelector(".image-fallback");

            if (fallback) {
              fallback.classList.remove("hidden");
            }
          }}
        />
      ) : null}

      <div
        className={`image-fallback absolute inset-0 flex flex-col items-center justify-center text-slate-400 text-[11px] ${
          c?.uploadMaterials?.thumbnail ? "hidden" : ""
        }`}
      >
        <svg
          className="w-8 h-8 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4-4 4 4 8-8"
          />
        </svg>

        <span className="text-center px-2">
          Image Not Found
        </span>
      </div>
    </div>

    <div>
      <h3 className="text-[20px] font-bold text-slate-900">
        {c?.basicDetails?.courseTitle}
      </h3>

      <p className="text-[14px] text-slate-500 mt-2">
        ID: {c?.basicDetails?.courseCode}
      </p>
    </div>

  </div>
</td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${typeStyle["Course"]}`}
                        >
                          {c.courseType || "Course"}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[14px] text-gray-700">
                       <div className="text-[16px] text-slate-700 font-medium">
  {c?.basicDetails?.duration}
</div> 
                      </td>
                      <td className="px-4 py-4">
                       <p className="text-[18px] font-bold text-slate-900">
  {c?.batchPlan?.[0]?.openSeats || 0}
</p>

<p className="text-[14px] text-emerald-600 font-semibold">
  ({c?.batchPlan?.[0]?.openSeats || 0} left)
</p>
                        <p className={`text-xs font-medium ${c.seatsLeftColor}`}>
                          ({c.seatsLeft})
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-lg ${statusStyle[normalizedStatus]}`}
                        >
                          {normalizedStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-0.5">
                          {getActionButtons(normalizedStatus).map((action) => (
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
                  );
                })
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
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === p
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