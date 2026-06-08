import React, { useState } from "react";
import {
  MessageSquare,
  HelpCircle,
  Link,
  ChevronRight,
  Eye,
  Search,
  ShoppingCart,
  Users,
  Pencil,
  Archive as ArchiveIcon,
  History,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const leadCategories = [
  {
    id: "cat-1",
    title: "1. Profile Views, Course Checks & Adds",
    desc: "Students who viewed your profile, checked or added courses.",
    countBadge: "12 New",
    themeColor: "bg-blue-100 border-blue-100 text-blue-600",
    headerBg: "bg-blue-50 border-blue-100",
    badgeStyle: "bg-blue-100 text-blue-600 border border-blue-100",
    headers: ["Student", "Activity", "Course", "Time", "Actions"],
    rows: [
      {
        id: "r1-1",
        name: "Rohit Sharma",
        location: "Delhi, India",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        activityText: "Viewed Profile",
        activityIcon: <Eye className="w-5 h-5 text-emerald-600" />,
        course: "Data Science Professional Course",
        time: "10 min ago",
      },
      {
        id: "r1-2",
        name: "Ananya Verma",
        location: "Noida, India",
        avatar: "A",
        activityText: "Checked Course",
        activityIcon: <Search className="w-5 h-5 text-blue-500" />,
        course: "Digital Marketing Masterclass",
        time: "25 min ago",
      },
      {
        id: "r1-3",
        name: "Karan Mehta",
        location: "Gurgaon, India",
        avatar: "K",
        activityText: "Added Course",
        activityIcon: <ShoppingCart className="w-5 h-5 text-blue-500" />,
        course: "UI/UX Design Fundamentals",
        time: "1 hr ago",
      },
      {
        id: "r1-4",
        name: "Pooja Singh",
        location: "Faridabad, India",
        avatar: "P",
        activityText: "Viewed Profile",
        activityIcon: <Eye className="w-5 h-5 text-blue-500" />,
        course: "Full Stack Web Development",
        time: "2 hours ago",
      },
    ],
  },
  {
    id: "cat-2",
    title: "2. Connected, Messaged & Enquired",
    desc: "Students who connected, messaged or enquired about your courses.",
    countBadge: "8 New",
    themeColor: "bg-emerald-100 border-emerald-100 text-emerald-600",
    headerBg: "bg-emerald-50 border-emerald-100",
    badgeStyle: "bg-emerald-100 text-emerald-600 border border-emerald-100",
    headers: ["Student", "Type", "Course", "Last Interaction", "Actions"],
    rows: [
      {
        id: "r2-1",
        name: "Aditya Raj",
        location: "Delhi, India",
        avatar: "A",
        activityText: "Messaged",
        activityIcon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
        course: "Data Analytics Certification",
        time: "15 min ago",
      },
      {
        id: "r2-2",
        name: "Megha Kapoor",
        location: "Noida, India",
        avatar: "M",
        activityText: "Enquired",
        activityIcon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
        course: "Python Programming for Beginners",
        time: "45 min ago",
      },
      {
        id: "r2-3",
        name: "Vivek Nair",
        location: "Bangalore, India",
        avatar: "V",
        activityText: "Connected",
        activityIcon: <Link className="w-5 h-5 text-emerald-600" />,
        course: "Cyber Security Essentials",
        time: "1 hr ago",
      },
    ],
  },
  {
    id: "cat-3",
    title: "3. Enrolled, Past & Ongoing Students",
    desc: "Students who joined, completed or are continuing their courses.",
    countBadge: "23 Students",
    themeColor: "bg-purple-100 border-purple-100 text-purple-600",
    headerBg: "bg-purple-50 border-purple-100",
    badgeStyle: "bg-purple-100 text-purple-600 border border-purple-100",
    headers: ["Student", "Status", "Course", "Progress", "Actions"],
    rows: [
      {
        id: "r3-1",
        name: "Sneha Iyer",
        location: "Mumbai, India",
        avatar: "S",
        activityText: "Ongoing",
        isStatus: true,
        statusColor: "bg-emerald-500",
        course: "Data Science Professional Course",
        progress: 65,
      },
      {
        id: "r3-2",
        name: "Arjun Patel",
        location: "Ahmedabad, India",
        avatar: "A",
        activityText: "Ongoing",
        isStatus: true,
        statusColor: "bg-emerald-500",
        course: "Full Stack Web Development",
        progress: 40,
      },
      {
        id: "r3-3",
        name: "Neha Joshi",
        location: "Pune, India",
        avatar: "N",
        activityText: "Completed",
        isStatus: true,
        statusColor: "bg-blue-500",
        course: "Digital Marketing Masterclass",
        progress: 100,
      },
    ],
  },
];

const LeadsEnquiries = () => {
  return (
   <div className="w-full min-h-screen bg-[#f8fafc] px-3 pb-4 sm:px-6 select-none text-left space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-3">
        <div>
          <h1 className="text-[24px] font-black text-slate-900 tracking-tight">
            Leads & Enquiries
          </h1>
          <p className="text-xs font-semibold text-slate-400 mt-3">
            Manage and engage with your potential students.
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 bg-white rounded-lg px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
          <SlidersHorizontal
            className="w-3.5 h-3.5 text-slate-500"
            strokeWidth={2}
          />
          Filter
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
        </button>
      </div>

      <div className="space-y-5 ">
        {leadCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-[16px] border border-slate-100 shadow-sm overflow-hidden"
          >
            <div
              className={`flex items-center justify-between p-4 border-b ${category.headerBg}`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${category.themeColor}`}
                >
                  {category.id === "cat-1" && <Eye className="w-5 h-5" />}
                  {category.id === "cat-2" && (
                    <MessageSquare className="w-5 h-5" />
                  )}
                  {category.id === "cat-3" && <Users className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-800 tracking-tight leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-[11.5px] font-medium text-slate-600 mt-0.5">
                    {category.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 cursor-pointer group">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-extrabold ${category.badgeStyle}`}
                >
                  {category.countBadge}
                </span>
                <ChevronRight
                  className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <div className="min-w-[960px]">
                <div className="grid grid-cols-12 bg-slate-50/40 border-b border-slate-100 text-[11px] font-bold text-slate-700 px-5 py-2.5 ">
                  <div className="col-span-3">{category.headers[0]}</div>
                  <div className="col-span-2 text-center sm:text-left pl-4">
                    {category.headers[1]}
                  </div>
                  <div className="col-span-3">{category.headers[2]}</div>
                  <div className="col-span-2 text-center">
                    {category.headers[3]}
                  </div>
                  <div className="col-span-2 text-center pr-2">
                    {category.headers[4]}
                  </div>
                </div>

                <div className="divide-y divide-slate-100/60">
                  {category.rows.map((row) => (
                    <div
                      key={row.id}
                      className="grid grid-cols-12 items-center px-5 py-2 hover:bg-slate-50/30 transition-colors"
                    >
                      <div className="col-span-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                          {row.avatar && row.avatar.startsWith("http") ? (
                            <img
                              src={row.avatar}
                              alt={row.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-sm font-[Poppins]">
                              {row.avatar}
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-[13px] font-bold text-slate-800 leading-snug">
                            {row.name}
                          </h4>
                          <p className="text-[11px] font-semi text-slate-600 mt-0.5">
                            {row.location}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-2 flex items-center gap-2 pl-4">
                        {row.isStatus ? (
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${row.statusColor}`}
                            />
                            <span className="text-xs font-bold text-slate-700">
                              {row.activityText}
                            </span>
                          </div>
                        ) : (
                          <>
                            {row.activityIcon}
                            <span className="text-xs font-bold text-slate-600">
                              {row.activityText}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="col-span-3 text-xs font-bold text-slate-700 pr-2">
                        {row.course}
                      </div>

                      <div className="col-span-2 text-center flex flex-col justify-center items-center px-2">
                        {row.progress !== undefined ? (
                          <div className="w-full max-w-[120px] space-y-1">
                            <span className="text-[11px] font-extrabold text-slate-600 block text-left">
                              {row.progress}%
                            </span>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div
                                className="bg-emerald-500 h-full rounded-full transition-all"
                                style={{ width: `${row.progress}%` }}
                              />
                            </div>
                          </div>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-500">
                            {row.time}
                          </span>
                        )}
                      </div>

                      <div className="col-span-2 flex flex-row items-center justify-center gap-3">
                        <button className="w-10 h-10 rounded-md border border-slate-200 bg-white flex items-center justify-center shadow-xs text-slate-500 hover:text-[#00875a] hover:border-[#b2ddce] hover:bg-[#eefbf7] transition-all">
                          <MessageSquare
                            className="w-4 h-4 text-[#00875a]"
                            strokeWidth={2.5}
                          />
                        </button>
                        <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center shadow-xs text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-all">
                          <Users className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full border-t border-slate-50 bg-white text-center py-2.5">
              <button className="inline-flex items-center gap-1.5 text-[11px] font-black text-blue-600 hover:text-blue-700 tracking-wide">
                View All
                <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsEnquiries;
