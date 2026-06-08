import React from "react";
import { ChevronDown } from "lucide-react";

const overviewStats = [
  { label: "Profile Views", value: "1700", trend: "10%", isUp: false },
  { label: "Course Views", value: "6000", trend: "10%", isUp: false },
  { label: "Leads & Enquiries", value: "700", trend: "10%", isUp: true },
  { label: "Enrollments", value: "280", trend: "10%", isUp: false },
  { label: "Revenue", value: "₹ 28,43,000.00", trend: "10%", isUp: false },
];

const courseCounters = [
  { label: "Active", count: 15 },
  { label: "Closed for Intake", count: 10 },
  { label: "Inactive", count: 8 },
  { label: "Archived", count: 3 },
  { label: "Deleted", count: 5 },
];

const stateMetrics = [
  { name: "Delhi", total: 3000, percentage: 95 },
  { name: "Panjab", total: 2500, percentage: 80 },
  { name: "Hariyana", total: 1800, percentage: 58 },
  { name: "UP", total: 400, percentage: 15 },
];

const MiniAreaChart = ({ gradientId, strokeColor, stopColor }) => {
  return (
    <div className="w-full h-48 relative mt-2 flex gap-1">
      <div className="flex flex-col justify-between text-[10px] text-slate-400 font-medium text-right shrink-0 py-0.5">
        {["100k", "50k", "20k", "10k", "0k"].map((v) => (
          <span key={v}>{v}</span>
        ))}
      </div>

      <div className="flex-1 relative rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e8edf2 1px, transparent 1px), linear-gradient(to bottom, #e8edf2 1px, transparent 1px)",
            backgroundSize: "8.33% 25%",
          }}
        />
        <svg
          className="w-full h-full relative z-10"
          preserveAspectRatio="none"
          viewBox="0 0 1200 200"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stopColor} stopOpacity="0.45" />
              <stop offset="100%" stopColor={stopColor} stopOpacity="0.00" />
            </linearGradient>
          </defs>
          <path
            d="M 0 160 Q 100 150 150 130 T 350 110 T 500 120 T 700 70 T 900 85 T 1050 120 L 1050 200 L 0 200 Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M 0 160 Q 100 150 150 130 T 350 110 T 500 120 T 700 70 T 900 85 T 1050 120"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="space-y-6 w-full bg-slate-50/40  min-h-screen pb-14" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-700 tracking-tight">
            Overview
          </h2>
          <button className="flex items-center gap-2 border border-slate-200/70 rounded-xl px-4 py-1.5 text-xs font-semibold text-slate-500 bg-white hover:bg-slate-50 transition-colors shadow-sm">
            This Month <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {overviewStats.map((stat, i) => {
            const isRevenue = i === overviewStats.length - 1;

            return (
              <div
                key={i}
                className={`bg-[#f4f7fa] rounded-2xl p-4 flex flex-col justify-between min-h-[96px] transition-all duration-200
            ${isRevenue ? "lg:col-span-4" : "lg:col-span-2"}`}
              >
                <p className="text-xs font-semibold text-slate-500 tracking-tight">
                  {stat.label}
                </p>

                <div className="flex items-end justify-between mt-2 gap-2">
                  <span className="text-[22px] font-bold text-[#333333] tracking-tight leading-none">
                    {stat.value}
                  </span>

                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1 shrink-0 ${
                      stat.isUp
                        ? "bg-[#e2f7f0] text-[#0fa97d]"
                        : "bg-[#fcded0]/70 text-[#ea5455]"
                    }`}
                  >
                    <span>{stat.trend}</span>
                    <span className="text-xs font-bold leading-none select-none">
                      {stat.isUp ? "↑" : "↓"}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch w-full">
        <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm lg:col-span-8 flex flex-col justify-start gap-3 mt-6">
          <h2 className="text-lg font-bold text-[#333333] tracking-tight">
            Courses and Programes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 w-full">
            {courseCounters.map((item, i) => (
              <div
                key={i}
                className="bg-[#f4f7fa] rounded-xl p-2.5 px-3 flex flex-col justify-between min-h-[68px] "
              >
                <p className="text-[10px] font-semibold text-gray-700 leading-tight">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-gray-700 leading-none mt-0.5">
                  {item.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm lg:col-span-4 flex flex-col">
          <p className="text-xs font-bold text-[#333333] tracking-wide mb-3">
            Your Top 4 states
          </p>

          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            {stateMetrics.map((state, i) => (
              <div
                key={i}
                className="w-full flex items-center justify-between relative h-[24px] bg-[#f4f7fa] rounded-md overflow-hidden border border-slate-100/30"
              >
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1fa485] via-[#1fa485]/80 to-[#1fa485]/40 rounded-r-sm transition-all duration-500"
                  style={{ width: `${state.percentage}%` }}
                />

                <span className="text-[11px] font-bold text-white z-10 pl-2.5 drop-shadow-sm select-none">
                  {state.name}
                </span>

                <span className="text-[10px] font-semibold text-gray-700 z-10 pr-2.5">
                  {state.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm w-full flex items-center min-h-[56px]">
        <h2 className="text-base font-bold text-gray-500 tracking-tight pl-2">
          Workshops (NA)
        </h2>
      </div>

      <div className="space-y-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
          <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm lg:col-span-8 flex flex-col justify-between min-h-[340px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Leads
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="w-full h-48 relative mt-2 flex gap-1">
              <div className="flex flex-col justify-between text-[10px] text-slate-400 font-medium text-right shrink-0 py-0.5">
                {["100k", "50k", "20k", "10k", "0k"].map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>

              <div className="flex-1 relative rounded-xl overflow-hidden">
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #e8edf2 1px, transparent 1px), linear-gradient(to bottom, #e8edf2 1px, transparent 1px)",
                    backgroundSize: "8.33% 25%",
                  }}
                />

                <div className="w-full h-full relative z-10">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 1100 200"
                  >
                    <defs>
                      <linearGradient
                        id="leadsFidelityGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1fa485"
                          stopOpacity="0.65"
                        />
                        <stop
                          offset="40%"
                          stopColor="#2ec4b6"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffffff"
                          stopOpacity="0.00"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 0 170 L 100 160 L 200 120 L 300 150 L 440 145 L 560 105 L 680 75 L 800 65 L 920 90 L 1000 110 L 1000 200 L 0 200 Z"
                      fill="url(#leadsFidelityGrad)"
                    />

                    <path
                      d="M 0 170 L 100 160 L 200 120 L 300 150 L 440 145 L 560 105 L 680 75 L 800 65 L 920 90 L 1000 110"
                      fill="none"
                      stroke="#1fa485"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between text-[11px] text-slate-400 font-bold mt-3 pt-1 pl-7">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <span
                  key={m}
                  className="w-full text-center first:text-left last:text-right"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm lg:col-span-4 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Reach Data
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="my-auto flex items-center justify-center relative py-6">
              <div className="w-40 h-40 rounded-full flex items-center justify-center relative">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="4.2"
                    strokeOpacity="0.8"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4.2"
                    strokeDasharray="42 100"
                    strokeDashoffset="0"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[26px] font-bold text-gray-700 tracking-tight leading-none">
                    1200
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 text-xs font-bold text-gray-700 border-t border-slate-50 pt-3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>500</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Organic
                </span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                  <span>700</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Promotions
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
          <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm lg:col-span-8 flex flex-col justify-between min-h-[340px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Enrollments
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="w-full h-48 relative mt-2 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 w-6 font-medium text-right z-20 select-none">
                <span>1000</span>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>

              <div className="w-full h-full pl-7 relative z-10">
                <svg
                  className="w-full h-full overflow-hidden"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 200"
                >
                  <defs>
                    <linearGradient
                      id="enrollFidelityGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22d3ee"
                        stopOpacity="0.55"
                      />
                      <stop
                        offset="60%"
                        stopColor="#06b6d4"
                        stopOpacity="0.20"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity="0.00"
                      />
                    </linearGradient>
                  </defs>

                  {[0, 50, 100, 150, 200].map((yVal, idx) => (
                    <line
                      key={`h-${idx}`}
                      x1="0"
                      y1={yVal}
                      x2="1000"
                      y2={yVal}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                  ))}

                  {[
                    0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 1000,
                  ].map((xVal, idx) => (
                    <line
                      key={`v-${idx}`}
                      x1={xVal}
                      y1="0"
                      x2={xVal}
                      y2="200"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                  ))}

                  <path
                    d="M 0 175 L 100 145 L 200 130 L 300 160 L 440 150 L 560 110 L 680 130 L 800 70 L 920 145 L 1000 115 L 1000 200 L 0 200 Z"
                    fill="url(#enrollFidelityGrad)"
                  />

                  <path
                    d="M 0 175 L 100 145 L 200 130 L 300 160 L 440 150 L 560 110 L 680 130 L 800 70 L 920 145 L 1000 115"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full flex justify-between text-[11px] text-slate-400 font-bold pl-7 mt-3 pt-1">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <span
                  key={m}
                  className="w-full text-center first:text-left last:text-right"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm lg:col-span-4 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Enrollments Data
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="my-auto flex items-center justify-center relative py-6">
              <div className="w-40 h-40 rounded-full flex items-center justify-center relative">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="4.2"
                    strokeOpacity="0.9"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="4.2"
                    strokeDasharray="78 100"
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[26px] font-bold text-gray-700 tracking-tight leading-none">
                    500
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 text-xs font-bold text-gray-700 border-t border-slate-50 pt-3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1e40af]" />
                  <span>400</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Onsite
                </span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22d3ee]" />
                  <span>100</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full items-stretch">
          <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm lg:col-span-8 flex flex-col justify-between min-h-[340px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Revenue (₹)
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="w-full h-48 relative mt-2 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 w-6 font-medium text-right z-20 select-none">
                <span>100k</span>
                <span>50k</span>
                <span>20k</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="w-full h-full pl-7 relative z-10">
                <svg
                  className="w-full h-full overflow-hidden"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 200"
                >
                  <defs>
                    <linearGradient
                      id="revenueFidelityGrad"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#facc15"
                        stopOpacity="0.45"
                      />
                      <stop
                        offset="60%"
                        stopColor="#fef08a"
                        stopOpacity="0.15"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity="0.00"
                      />
                    </linearGradient>
                  </defs>

                  {[0, 50, 100, 150, 200].map((yVal, idx) => (
                    <line
                      key={`h-rev-${idx}`}
                      x1="0"
                      y1={yVal}
                      x2="1000"
                      y2={yVal}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                  ))}

                  {[
                    0, 90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 1000,
                  ].map((xVal, idx) => (
                    <line
                      key={`v-rev-${idx}`}
                      x1={xVal}
                      y1="0"
                      x2={xVal}
                      y2="200"
                      stroke="#f1f5f9"
                      strokeWidth="1"
                    />
                  ))}

                  <path
                    d="M 0 180 L 100 172 L 200 135 L 300 155 L 440 130 L 560 108 L 680 152 L 800 75 L 920 135 L 1000 115 L 1000 200 L 0 200 Z"
                    fill="url(#revenueFidelityGrad)"
                  />

                  <path
                    d="M 0 180 L 100 172 L 200 135 L 300 155 L 440 130 L 560 108 L 680 152 L 800 75 L 920 135 L 1000 115"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full flex justify-between text-[11px] text-slate-400 font-bold pl-7 mt-3 pt-1">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m) => (
                <span
                  key={m}
                  className="w-full text-center first:text-left last:text-right"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm lg:col-span-4 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-700 tracking-tight">
                Revenue Data
              </h3>
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-400 border border-slate-100 rounded-lg px-2 py-1 bg-white">
                2026 <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            <div className="my-auto flex items-center justify-center relative py-6">
              <div className="w-40 h-40 rounded-full flex items-center justify-center relative">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="4.2"
                    strokeOpacity="0.9"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="4.2"
                    strokeDasharray="84 100"
                    strokeDashoffset="0"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[22px] font-bold text-gray-700 tracking-tight leading-none">
                    ₹ 250K
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 text-xs font-bold text-gray-700 border-t border-slate-50 pt-3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                  <span>₹ 214K</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Net
                </span>
              </div>

              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#facc15]" />
                  <span>₹ 36K</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Gross
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
