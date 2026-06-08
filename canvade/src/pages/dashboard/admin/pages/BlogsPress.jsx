import React, { useState, useMemo } from "react";
import {
  FileText,
  Eye,
  Flame,
  MousePointer,
  Search,
  Filter,
  ArrowUpDown,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Send,
  EyeIcon,
  MoreVertical,
  Archive,
  EyeOff,
} from "lucide-react";

const statsData = [
  {
    label: "Total Posts",
    value: "24",
    icon: FileText,
    trend: "↑ 14% vs last month",
    wrapperBg: "bg-emerald-50 text-emerald-600 border-emerald-100/30",
  },
  {
    label: "Total Views",
    value: "18,450",
    icon: Eye,
    trend: "↑ 21% vs last month",
    wrapperBg: "bg-blue-50 text-blue-600 border-blue-100/30",
  },
  {
    label: "Most Viewed Post",
    value: "Admissions Open for Data Science Batch 2026",
    subValue: "2,850 views",
    icon: Flame,
    isFeatured: true,
    wrapperBg: "bg-amber-50 text-amber-500 border-amber-100/30",
  },
  {
    label: "Clicks to Courses",
    value: "1,245",
    icon: MousePointer,
    trend: "↑ 18% vs last month",
    wrapperBg: "bg-purple-50 text-purple-600 border-purple-100/30",
  },
];

const mockPostsData = [
  {
    id: 1,
    title: "Admissions Open for Data Science Batch 2026",
    description:
      "Kickstart your career in Data Science with our industry-focused curriculum and hands-on projects.",
    type: "Press Release",
    status: "Published",
    date: "28 May 2025",
    views: "2,850",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=160&q=60",
  },
  {
    id: 2,
    title: "The Future of AI in Education",
    description:
      "Explore how AI is transforming the learning experience and shaping the future of education.",
    type: "Blog",
    status: "Published",
    date: "24 May 2025",
    views: "1,920",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=160&q=60",
  },
  {
    id: 3,
    title: "Canvade Partners with TechLabs",
    description:
      "We are excited to announce our partnership with TechLabs to provide industry-ready programs.",
    type: "Press Release",
    status: "Published",
    date: "20 May 2025",
    views: "1,650",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=160&q=60",
  },
  {
    id: 4,
    title: "5 Tips to Stay Productive While Learning Online",
    description:
      "Practical tips and strategies to help you stay focused and productive during online learning.",
    type: "Blog",
    status: "Draft",
    date: "-",
    views: "-",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=160&q=60",
  },
  {
    id: 5,
    title: "Our Students Win National Hackathon 2025",
    description:
      "Proud moment as our students bag the first prize at the National Hackathon 2025.",
    type: "Press Release",
    status: "Published",
    date: "15 May 2025",
    views: "2,210",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=160&q=60",
  },
  {
    id: 6,
    title: "New Campus Expansion in Bangalore",
    description:
      "Our Bangalore campus is expanding! More classrooms, better facilities, and enhanced learning.",
    type: "Press Release",
    status: "Archived",
    date: "10 May 2025",
    views: "980",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=160&q=60",
  },
  {
    id: 7,
    title: "Top Programming Languages to Learn in 2025",
    description:
      "A guide to the most in-demand programming languages you should learn this year.",
    type: "Blog",
    status: "Published",
    date: "5 May 2025",
    views: "1,430",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=160&q=60",
  },
];

export default function BlogsPressDashboard() {
  const [activeTab, setActiveTab] = useState("All Posts"); // 'All Posts' | 'Blogs' | 'Press Releases' | 'Drafts' | 'Published' | 'Archived'
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return mockPostsData.filter((post) => {
      let matchesTab = true;
      if (activeTab === "Blogs") matchesTab = post.type === "Blog";
      else if (activeTab === "Press Releases")
        matchesTab = post.type === "Press Release";
      else if (activeTab === "Drafts") matchesTab = post.status === "Draft";
      else if (activeTab === "Published")
        matchesTab = post.status === "Published";
      else if (activeTab === "Archived")
        matchesTab = post.status === "Archived";

      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col gap-5 select-none text-left">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-slate-900 tracking-tight leading-none">
            Blogs & Press Release
          </h1>
          <p className="text-[12px] font-medium text-slate-600 mt-2">
            Manage your blogs and press releases to keep students and the public
            updated.
          </p>
        </div>
        <button
          type="button"
          className="w-full sm:w-auto bg-[#00875a] hover:bg-[#00704a] text-white rounded-xl px-6 py-3 text-[12px] font-medium flex items-center justify-center gap-1.5 shadow-3xs transition-all cursor-pointer"
        >
          <span>+ Create Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full shrink-0">
        {statsData.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border border-slate-100/40 ${s.wrapperBg}`}
              >
                <Icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11.5px] font-bold text-slate-600 block tracking-tight">
                  {s.label}
                </span>
                {s.isFeatured ? (
                  <div className="mt-1.5">
                    <p className="text-[12px] font-bold text-slate-800 leading-snug line-clamp-2 pr-1">
                      {s.value}
                    </p>
                    <span className="text-[10px] font-medium text-slate-600 block mt-1">
                      {s.subValue}
                    </span>
                  </div>
                ) : (
                  <div className="mt-1">
                    <p className="text-[22px] font-black text-slate-800 leading-none">
                      {s.value}
                    </p>
                    <span className="text-[10px] font-bold text-emerald-600 block mt-2">
                      {s.trend}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-2 flex flex-col justify-between mt-1">
        <div>
          <div className="flex items-center justify-between gap-4 pb-4 mb-1">
            <div className="max-w-full overflow-x-auto pb-0.5">
            <div className="flex items-center bg-white border-2 border-slate-200/50 rounded-md text-[12px] font-bold text-slate-600 shadow-3xs overflow-hidden w-fit">
              {[
                "All Posts",
                "Blogs",
                "Press Releases",
                "Drafts",
                "Published",
                "Archived",
              ].map((tab, idx, arr) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setCurrentPage(1);
                    }}
                    className={`px-5 py-2 whitespace-nowrap transition-all cursor-pointer flex items-center justify-center text-slate-700 font-bold h-full ${
                      isActive
                        ? "bg-emerald-50/60 text-emerald-700"
                        : "hover:text-slate-900 bg-white"
                    } ${
                      idx !== arr.length - 1
                        ? "border-r border-slate-200/50"
                        : ""
                    } ${
                      idx === 0
                        ? "rounded-l-xl"
                        : idx === arr.length - 1
                          ? "rounded-r-xl"
                          : ""
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap shrink-0">
              <div className="relative w-full sm:w-60">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-2 border-2 border-slate-200/50 bg-white rounded-md text-[12px] font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-300 shadow-3xs transition-all"
                />
              </div>

              <button
                type="button"
                className="flex items-center gap-2 border-2 border-slate-200/50 rounded-md px-3.5 py-2 text-[12px] font-semibold text-slate-600 bg-white shadow-3xs hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Filter
                  className="w-3.5 h-3.5 text-slate-600"
                  strokeWidth={2.2}
                />
                <span>Filter</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
              </button>

              <button
                type="button"
                className="flex items-center gap-2 border-2 border-slate-200/50 rounded-md px-3.5 py-2 text-[12px] font-semibold text-slate-600 bg-white shadow-3xs hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span>Latest</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-600" />
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto text-[13px] font-medium text-slate-500">
              <thead className="bg-gray-100">
                <tr className="text-left text-[11px]  font-bold text-slate-600 tracking-wider border-b border-slate-100/60">
                  <th className="py-2.5 font-semibold pl-1 w-[45%]">Post</th>
                  <th className="py-2.5 font-semibold w-[12%]">Type</th>
                  <th className="py-2.5 font-semibold w-[12%]">Status</th>
                  <th className="py-2.5 font-semibold w-[13%]">Published On</th>
                  <th className="py-2.5 font-semibold w-[10%]">Views</th>
                  <th className="py-2.5 text-center font-semibold w-[8%]">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100/60">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className="hover:bg-slate-50/30 transition-colors group"
                    >
                      <td className="py-4 pl-1 pr-4 flex flex-row items-start gap-3">
                        <img
                          src={post.image}
                          className="w-26 h-16 rounded-xl object-cover border border-slate-200/50 bg-slate-50 shrink-0 shadow-3xs"
                          alt=""
                        />
                        <div className="min-w-0 flex flex-col space-y-2">
                          <h4 className="text-[13.5px] font-bold text-slate-800 leading-tight truncate group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-[11.5px] text-slate-600 font-normal leading-normal line-clamp-2 pr-2">
                            {post.description}
                          </p>
                        </div>
                      </td>

                      <td className="py-4 whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide border ${
                            post.type === "Blog"
                              ? "bg-emerald-100 text-emerald-700 border-emerald-100/30"
                              : "bg-purple-100 text-purple-700 border-purple-100/30"
                          }`}
                        >
                          {post.type}
                        </span>
                      </td>

                      <td className="py-4 whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide ${
                            post.status === "Published"
                              ? "bg-emerald-100 text-emerald-700 border border-emerald-100/30"
                              : post.status === "Draft"
                                ? "bg-slate-100 text-slate-500 border border-slate-200/40"
                                : "bg-amber-100 text-amber-600 border border-amber-100/30"
                          }`}
                        >
                          {post.status}
                        </span>
                      </td>

                      <td className="py-4 text-slate-600 font-medium whitespace-nowrap">
                        {post.date}
                      </td>

                      <td className="py-4 text-slate-700 font-semibold whitespace-nowrap">
                        {post.views}
                      </td>

                      <td className="py-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          {post.status !== "Draft" && (
                            <button
                              type="button"
                              title="View Post"
                              className="w-8 h-8 text-slate-400 hover:text-slate-600 border border-slate-200/60 rounded-md bg-white shadow-3xs hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                            >
                              <EyeIcon
                                className="w-4 h-4"
                                strokeWidth={2.5}
                              />
                            </button>
                          )}
                          <button
                            type="button"
                            title="Edit Post"
                            className="w-8 h-8 text-slate-400 hover:text-slate-600 border-2 border-slate-200/60 rounded-md bg-white shadow-3xs hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                          >
                            <Edit2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </button>
                          {post.status === "Draft" ? (
                            <button
                              type="button"
                              title="Publish Post"
                              className="w-8 h-8 text-slate-400 hover:text-slate-600 border-2 border-slate-200/60 rounded-md bg-white shadow-3xs hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" strokeWidth={2.5} />
                            </button>
                          ) : (
                            <button
                              type="button"
                              title="Share Post"
                              className="w-8 h-8 text-slate-400 hover:text-slate-600 border-2 border-slate-200/60 rounded-md bg-white shadow-3xs hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" strokeWidth={2.5} />
                            </button>
                          )}
                          <button
                            type="button"
                            title="More Actions"
                            className="w-8 h-8 text-slate-400 hover:text-slate-600 border-2 border-slate-200/60 rounded-md bg-white shadow-3xs hover:shadow-2xs flex items-center justify-center transition-all cursor-pointer"
                          >
                            <MoreVertical
                              className="w-3.5 h-3.5"
                              strokeWidth={2.5}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-12 text-slate-400 font-medium text-xs"
                    >
                      No posts matching the active filtering rules.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full border-t border-slate-100/80 mt-2 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-semibold text-slate-500">
          <span>Showing 1 to {filteredPosts.length} of 24 posts</span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled
              className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50 opacity-50 cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 1 ? "bg-[#00875a] text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 2 ? "bg-[#00875a] text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 3 ? "bg-[#00875a] text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              3
            </button>
            <span className="px-1 text-slate-300">...</span>
            <button
              type="button"
              className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50"
            >
              5
            </button>
            <button
              type="button"
              className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg px-2.5 py-1 bg-white shadow-3xs">
            <span>10 / page</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
