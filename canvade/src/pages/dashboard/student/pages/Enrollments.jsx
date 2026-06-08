import React, { useState } from "react";
import {
  BookOpen,
  Award,
  Flame,
  CheckCircle,
  Calendar,
  Info,
  Download,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Enrollments = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const stats = [
    {
      label: "Total Enrolled",
      count: 8,
      sub: "Courses & Workshops",
      icon: BookOpen,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      label: "Active",
      count: 4,
      sub: "In Progress",
      icon: Flame,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      label: "Completed",
      count: 3,
      sub: "Finished",
      icon: CheckCircle,
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      label: "Upcoming",
      count: 1,
      sub: "Not Started",
      icon: Calendar,
      color: "text-amber-600 bg-amber-50 border-amber-100",
    },
  ];

  const coursesData = [
    {
      title: "Data Science Fundamentals",
      instructor: "By ExcelR • Intermediate",
      progress: 65,
      duration: "3 Months",
      startDate: "Started on 20 May 2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
      type: "Active",
    },
    {
      title: "UI/UX Design Advanced",
      instructor: "By DesignTrack • Advanced",
      progress: 40,
      duration: "4 Months",
      startDate: "Started on 16 May 2024",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&auto=format&fit=crop&q=80",
      type: "Active",
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "By Intellipaat • Intermediate",
      progress: 25,
      duration: "2 Months",
      startDate: "Started on 15 May 2024",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=120&auto=format&fit=crop&q=80",
      type: "Active",
    },
    {
      title: "Python for Data Analysis",
      instructor: "By UpGrad • Intermediate",
      progress: 75,
      duration: "2 Months",
      startDate: "Started on 12 May 2024",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=120&auto=format&fit=crop&q=80",
      type: "Active",
    },
  ];

  const certificates = [
    {
      title: "Data Science Fundamentals",
      provider: "By ExcelR",
      date: "Issued on 20 Aug 2024",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500",
      bg: " bg-emerald-50",
      iconColor: "text-emerald-600 bg-emerald-50",
    },

    {
      title: "UI/UX Design Advanced",
      provider: "By DesignTrack",
      date: "Issued on 25 Jul 2024",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
      bg: " bg-blue-50",
      iconColor: "text-blue-600 bg-blue-50",
    },

    {
      title: "Digital Marketing Mastery",
      provider: "By Intellipaat",
      date: "Issued on 10 Jul 2024",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      bg: " bg-amber-50",
      iconColor: "text-amber-600 bg-amber-50",
    },

    {
      title: "Python for Data Analysis",
      provider: "By UpGrad",
      date: "Issued on 05 Jun 2024",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500",
      bg: " bg-purple-50",
      iconColor: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <div className="space-y-8 ">
      <section className="space-y-6 w-full max-w-[1400px] mx-auto p-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            My Enrollments
          </h1>
          <p className="text-sm text-[#2e5c42] font-medium mt-0.5">
            Track your learning journey and view your enrolled courses and
            workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-5 rounded-2xl flex items-center gap-4 shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${stat.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-gray-500">
                    {stat.label}
                  </span>
                  <div className="text-2xl font-semibold text-gray-900 leading-none py-0.5">
                    {stat.count}
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-5">
          <div className="border-b border-slate-100">
            <div className="flex gap-6 overflow-x-auto pb-px">
              {["All", "Active", "Completed", "Upcoming", "Workshop"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-medium tracking-wide whitespace-nowrap transition-all relative ${
                      activeTab === tab
                        ? "text-[#10b981]"
                        : "text-slate-500 hover:text-slate-600"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10b981] rounded-full" />
                    )}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="space-y-8">
            {coursesData.map((course, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 last:pb-0 border-b border-slate-150 last:border-0"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="space-y-4 flex-1 max-w-md">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[#2e5c42] font-medium mt-1.5">
                        {course.instructor}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#10b981] h-full rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-[#10b981]">
                        {course.progress}% Complete
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end md:gap-20 shrink-0 w-full md:w-auto">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-gray-500 block">
                      Duration
                    </span>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-gray-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />{" "}
                      {course.duration}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      {course.startDate}
                    </p>
                  </div>
                  <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                    <Info className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1 flex justify-center border-t border-slate-50">
            <button className="flex items-center gap-1.5 text-[12px] font-semibold text-[#10b981]  px-4 py-2 rounded-xl transition-all">
              View All Enrollments <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              My Certificates
            </h2>
            <p className="text-sm text-[#2e5c42] font-medium mt-2">
              View and download your earned certificates.
            </p>
          </div>
          <button className="text-[12px] font-semibold text-[#10b981] hover:underline flex items-center gap-1">
            View All Certificates
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="border border-slate-100 rounded-2xl p-4 bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group w-full"
            >
              <div className="space-y-3 w-full">
                <div
                  className={`w-full h-40 rounded-xl border border-dashed flex items-center justify-center relative overflow-hidden p-2 ${cert.bg}`}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <button
                    className={`absolute top-1.5 right-1.5 p-2 rounded-lg border border-slate-200 bg-white shadow-sm transition-transform ${cert.iconColor} hover:scale-105`}
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#10b981] transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium">
                    {cert.provider}
                  </p>
                  <p className="text-xs text-gray-500 font-medium pt-0.5">
                    {cert.date}
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 py-2 bg-slate-50 hover:bg-emerald-50 hover:text-[#10b981] text-[#10b981] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 border border-slate-100 transition-all">
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          ))}
        </div>

      </section>
      <div className="text-center text-sm font-semibold text-[#2e5c42] pt-4 flex items-center justify-center gap-1">
        You're doing great! Keep it up! 🚀
      </div>
    </div>
  );
};

export default Enrollments;
