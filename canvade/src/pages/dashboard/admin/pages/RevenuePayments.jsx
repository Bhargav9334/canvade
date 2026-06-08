import React from "react";
import {
  Wallet,
  TrendingUp,
  CalendarDays,
  Clock,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  RefreshCw,
  ChevronDown,
  Download,
  SlidersHorizontal,
  Zap,
  MapPin,
  Target,
  Coins,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const statsData = [
  {
    label: "Total Revenue",
    value: "₹ 8,42,000",
    sub: "All time",
    icon: Wallet,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    metric: null,
  },
  {
    label: "This Month Revenue",
    value: "₹ 1,28,000",
    sub: "vs Apr",
    icon: TrendingUp,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    metric: "18.6%",
    isPositive: true,
  },
  {
    label: "Pending Payout",
    value: "₹ 22,000",
    sub: "Payout on 18 Jun 2025",
    icon: Clock,
    color: "text-amber-600 bg-amber-50 border-amber-100",
    metric: null,
  },
  {
    label: "Total Enrollments",
    value: "148",
    sub: "vs Apr",
    icon: Users,
    color: "text-purple-600 bg-purple-50 border-purple-100",
    metric: "16.2%",
    isPositive: true,
  },
  {
    label: "Avg. Enrollment Value",
    value: "₹ 5,600",
    sub: "vs Apr",
    icon: BarChart3,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    metric: "8.3%",
    isPositive: true,
  },
  {
    label: "Total Refunds",
    value: "₹ 6,200",
    sub: "vs Apr",
    icon: RefreshCw,
    color: "text-rose-500 bg-rose-50 border-rose-100",
    metric: "5.1%",
    isPositive: false,
  },
];
const topCourses = [
  {
    name: "Data Science Professional Course",
    enrollments: 48,
    revenue: "₹ 2,40,000",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=60",
  },
  {
    name: "UI/UX Design Fundamentals",
    enrollments: 18,
    revenue: "₹ 54,000",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=80&auto=format&fit=crop&q=60",
  },
  {
    name: "Digital Marketing Masterclass",
    enrollments: 22,
    revenue: "₹ 44,000",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&auto=format&fit=crop&q=60",
  },
  {
    name: "Python Programming for Beginners",
    enrollments: 25,
    revenue: "₹ 37,500",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=80&auto=format&fit=crop&q=60",
  },
  {
    name: "Masterclass on AI Tools",
    enrollments: 15,
    revenue: "₹ 24,000",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=80&auto=format&fit=crop&q=60",
  },
];

const transactionsData = [
  {
    date: "30 May 2025",
    student: "Rahul Verma",
    course: "Data Science Professional Course",
    amount: "₹ 12,999",
    status: "Paid",
    avatar: "/images/user1.jpg",
  },
  {
    date: "29 May 2025",
    student: "Ananya Singh",
    course: "UI/UX Design Fundamentals",
    amount: "₹ 4,999",
    status: "Paid",
    avatar: "/images/user1.jpg",
  },
  {
    date: "28 May 2025",
    student: "Karan Mehta",
    course: "Digital Marketing Masterclass",
    amount: "₹ 2,999",
    status: "Paid",
    avatar: "/images/user1.jpg",
  },
  {
    date: "27 May 2025",
    student: "Pooja Sharma",
    course: "Python Programming for Beginners",
    amount: "₹ 3,499",
    status: "Pending",
    avatar: "/images/user1.jpg",
  },
  {
    date: "26 May 2025",
    student: "Vivek Nair",
    course: "Masterclass on AI Tools",
    amount: "₹ 1,999",
    status: "Processing",
    avatar: "/images/user1.jpg",
  },
];

const insights = [
  {
    text: (
      <>
        <strong>Data Science Professional Course</strong> generated{" "}
        <strong>62%</strong> of this month's revenue.
      </>
    ),
    icon: Zap,
    style: "bg-emerald-50/60 text-emerald-700 border-emerald-100/70",
  },
  {
    text: (
      <>
        Workshop conversions increased by <strong>18%</strong> compared to last
        month.
      </>
    ),
    icon: Users,
    style: "bg-blue-50/60 text-blue-700 border-blue-100/70",
  },
  {
    text: (
      <>
        Students from <strong>Delhi</strong> converted the most this month.
      </>
    ),
    icon: MapPin,
    style: "bg-amber-50/60 text-amber-700 border-amber-100/70",
  },
  {
    text: (
      <>
        Your average enrollment value increased by <strong>8.3%</strong> this
        month.
      </>
    ),
    icon: Target,
    style: "bg-purple-50/60 text-purple-700 border-purple-100/70",
  },
];

const RevenuePayments = () => {
  return (
    <div className="w-full bg-[#f8fafc]   space-y-6 select-none text-left">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 w-full">
        <div>
          <h1 className="text-[24px] font-black text-slate-900 tracking-tight">
            Revenue & Payments
          </h1>
          <p className="text-xs font-semibold text-slate-600 mt-2">
            Track your earnings, enrollments and transactions.
          </p>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 shadow-xs transition-all">
          <CalendarDays className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="whitespace-nowrap">
            This Month (1 May – 31 May 2025)
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1 shrink-0" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 w-full select-none text-left">
        {statsData.map((s, idx) => {
          const Icon = s.icon;

          const cardBgs = [
            "bg-emerald-50/40",
            "bg-blue-50/40",
            "bg-amber-50/40",
            "bg-purple-50/40",
            "bg-teal-50/40",
            "bg-rose-50/40",
          ];

          const cardBorders = [
            "border-emerald-100",
            "border-blue-100",
            "border-amber-100",
            "border-purple-100",
            "border-teal-100",
            "border-rose-100",
          ];

          return (
            <div
              key={idx}
              className={`${cardBgs[idx]} border ${cardBorders[idx]} px-3 py-2.5 rounded-xl flex flex-row items-center gap-2.5 shadow-2xs relative overflow-hidden`}
            >
              <div
                className={`w-9 h-9 -mt-6 rounded-full border border-white bg-white flex items-center justify-center shrink-0 shadow-3xs ${s.color?.split(" ").find((cls) => cls.startsWith("text-")) || "text-slate-600"}`}
              >
                <Icon className="w-4 h-4" strokeWidth={2.2} />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="shrink-0">
                  <span className="text-[10px] font-medium text-slate-600 whitespace-nowrap">
                    {s.label}
                  </span>
                </div>

                <p className="text-[17px] font-medium text-slate-800 tracking-tight mt-1 leading-tight select-all">
                  {s.value}
                </p>

                <div className="flex items-center gap-1 mt-2 text-[10px] font-medium text-slate-600">
                  {s.metric && (
                    <span
                      className={`inline-flex items-center text-[10px] gap-0.5 font-bold ${
                        s.isPositive ? "text-emerald-600" : "text-rose-500"
                      }`}
                    >
                      {s.isPositive ? (
                        <ArrowUpRight className="w-2.5 h-2.5" strokeWidth={3} />
                      ) : (
                        <ArrowDownRight
                          className="w-2.5 h-2.5"
                          strokeWidth={3}
                        />
                      )}
                      {s.metric}
                    </span>
                  )}
                  <span className="opacity-80 whitespace-nowrap">{s.sub}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch w-full">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-5 shadow-xs flex flex-col justify-between min-h-[300px] text-left select-none">
          <div className="flex items-center justify-between border-b border-slate-50 pb-3">
            <h3 className="text-sm font-semibold text-slate-800 tracking-tight">
              Revenue Overview
            </h3>

            <div className="flex bg-slate-100/80 p-1 rounded-lg border border-slate-100 text-[10px] font-bold text-slate-700 overflow-x-auto">
              <button
                type="button"
                className="px-3 py-1 rounded-md transition-colors hover:text-slate-800"
              >
                This Week
              </button>
              <button
                type="button"
                className="px-3 py-1 bg-white text-emerald-700 shadow-2xs border border-slate-200/40 rounded-md font-semibold"
              >
                This Month
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-md transition-colors hover:text-slate-800"
              >
                Last 3 Months
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-md transition-colors hover:text-slate-800"
              >
                This Year
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative min-h-[190px] mt-4 flex flex-col justify-between select-none">
            <div className="relative w-full h-full flex flex-row items-stretch">
              <div className="flex flex-col justify-between text-[10px] font-medium text-black pr-2 h-[150px] pt-1 w-9 shrink-0 text-right select-none">
                <span>₹ 2L</span>
                <span>₹ 1.5L</span>
                <span>₹ 1L</span>
                <span>₹ 50K</span>
                <span>₹ 0</span>
              </div>

              <div className="flex-1 relative h-full">
                <svg
                  viewBox="0 0 600 150"
                  className="w-full h-[150px] overflow-visible z-10 block"
                >
                  <defs>
                    <linearGradient
                      id="gradient-card-tint"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="#ffffff"
                        stopOpacity="0.01"
                      />
                    </linearGradient>
                  </defs>

                  <line
                    x1="0"
                    y1="5"
                    x2="600"
                    y2="5"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="41"
                    x2="600"
                    y2="41"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="78"
                    x2="600"
                    y2="78"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="114"
                    x2="600"
                    y2="114"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="150"
                    x2="600"
                    y2="150"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />

                  <line
                    x1="280"
                    y1="82"
                    x2="280"
                    y2="150"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    className="opacity-70"
                  />

                  <path
                    d="M 10 120 Q 60 115 100 95 T 200 85 T 300 80 T 400 68 T 500 50 T 590 25 L 590 150 L 10 150 Z"
                    fill="url(#gradient-card-tint)"
                  />

                  <path
                    d="M 10 120 Q 60 115 100 95 T 200 85 T 300 80 T 400 68 T 500 50 T 590 25"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle
                    cx="280"
                    y1="0"
                    cy="82"
                    r="3.5"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                </svg>

                <div className="absolute top-[28px] left-[46.5%] transform -translate-x-1/2 bg-white border border-slate-200 shadow-sm rounded-lg p-1.5 text-center text-[10px] z-20 whitespace-nowrap">
                  <p className="text-slate-600 font-medium scale-90">
                    16 May, 2025
                  </p>
                  <p className="text-slate-700 font-semibold text-[11px] mt-2 leading-none">
                    ₹ 1,12,000
                  </p>
                </div>

                <div className="w-full flex justify-between items-center text-[9px] font-medium text-black pt-2 z-10">
                  <span>1 May</span>
                  <span>6 May</span>
                  <span>11 May</span>
                  <span>16 May</span>
                  <span>21 May</span>
                  <span>26 May</span>
                  <span>31 May</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-medium text-slate-500 mt-3 pt-2 border-t border-slate-50">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
              />
              <span>Revenue (₹)</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer opacity-60">
              <input
                type="checkbox"
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
              />
              <span>Enrollments</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-xs flex flex-col justify-between min-h-[300px] relative overflow-hidden">
          <div>
            <h3 className="text-sm font-bold text-slate-400">
              Estimated Next Payout
            </h3>

            <div className="absolute top-6 right-8 w-28 h-28 pointer-events-none select-none">
              <div className="w-full h-full bg-slate-100 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center p-1">
                <img
                  src="/wallet.png"
                  alt="Wallet"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-16">
              <p className="text-[26px] font-black text-emerald-600 tracking-tight">
                ₹ 42,500
              </p>
              <p className="text-xs font-semibold text-gray-400 mt-6">
                Arriving on <strong>18 June 2025</strong>
              </p>
            </div>
          </div>

          <button className="w-full bg-slate-100 hover:bg-slate-100/80 border border-slate-200/50 rounded-lg p-2.5 text-xs font-bold text-slate-700 flex items-center justify-between transition-all shadow-2xs">
            <span>View Payouts</span>
            <span className="text-slate-400 text-sm">→</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full items-stretch">
        <div className="bg-white rounded-xl border border-slate-100 shadow-xs p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-2.5 mb-2">
              <h3 className="text-sm font-extrabold text-slate-800">
                Top Courses by Revenue
              </h3>
              <button className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-2">
                View All Courses <ArrowRight size={14} />
              </button>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="min-w-full table-fixed border-separate border-spacing-x-4 text-xs font-medium text-slate-500">
                <thead>
                  <tr className="text-left text-[12px]  font-bold text-slate-700 border-b border-slate-100">
                    <th className="py-2">Course / Workshop</th>
                    <th className="py-2 text-center">Enrollments</th>
                    <th className="py-2 text-center">Revenue</th>
                    <th className="py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50/60">
                  {topCourses.map((c, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/30 transition-colors"
                    >
                      <td className="py-2.5 flex items-center gap-2">
                        <img
                          src={c.image}
                          className="w-10 h-10 rounded-md object-cover border shrink-0 bg-slate-100"
                          alt=""
                        />
                        <span className="font-bold text-slate-700 whitespace-nowrap max-w-[180px]">
                          {c.name}
                        </span>
                      </td>
                      <td className="py-2.5 text-center font-bold text-slate-600">
                        {c.enrollments}
                      </td>
                      <td className="py-2.5 text-center font-black text-slate-800">
                        {c.revenue}
                      </td>
                      <td className="py-2.5 text-center">
                        <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-[9px]">
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="w-full mt-6 bg-slate-100 border border-slate-200 rounded-lg py-3 text-[11px] font-black text-blue-600 hover:text-blue-700 inline-flex items-center justify-center gap-1">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between select-none text-left">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100/80 pb-3 mb-3">
              <h3 className="text-[16px] font-semibold text-slate-800 tracking-tight">
                Recent Transactions
              </h3>
              <button
                type="button"
                className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors"
              >
                View All <ArrowRight size={14} />
              </button>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="min-w-[560px] w-full table-fixed border-separate text-xs font-medium text-slate-500">
                <thead>
                  <tr className=" text-center text-[12px] font-bold text-slate-700 border-b border-slate-100">
                    <th className=" text-left py-2 pl-1 font-semibold w-[15%]">
                      Date
                    </th>
                    <th className=" text-center py-2 font-semibold w-[20%]">
                      Student
                    </th>
                    <th className=" text-center whitespace-nowrap -pl-6 py-2 font-semibold w-[30%]">
                      Course / Workshop
                    </th>
                    <th className="py-2 text-center font-semibold w-[15%]">
                      Amount
                    </th>
                    <th className="py-2 text-center font-semibold w-[10%]">
                      Status
                    </th>
                    <th className="py-2 text-center font-semibold w-[10%]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100/60">
                  {transactionsData.map((t, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/40 transition-colors group"
                    >
                      <td className="py-3.5 text-black font-medium whitespace-nowrap -translate-x-1">
                        {t.date}
                      </td>

                      <td className="py-3.5 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200/60 shrink-0">
                          <img
                            src={t.avatar}
                            alt={t.student}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <span className="font-semibold text-slate-700 truncate block max-w-[120px]">
                          {t.student}
                        </span>
                      </td>

                      <td className="py-3 text-center text-slate-800 font-normal">
                        <p
                          className="whitespace-normal line-clamp-2 "
                          title={t.course}
                        >
                          {t.course}
                        </p>
                      </td>

                      <td className="py-3.5 text-slate-800 font-semibold whitespace-nowrap">
                        {t.amount}
                      </td>

                      <td className="py-3.5 text-center whitespace-nowrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide ${
                            t.status === "Paid"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100/40"
                              : t.status === "Pending"
                                ? "bg-amber-50 text-amber-600 border border-amber-100/40"
                                : "bg-blue-50 text-blue-600 border border-blue-100/40"
                          }`}
                        >
                          {t.status}
                        </span>
                      </td>

                      <td className="py-3.5 text-center whitespace-nowrap">
                        <button
                          type="button"
                          className="text-slate-500 hover:text-slate-600 p-1  bg-white shadow-3xs hover:shadow-2xs transition-all inline-flex items-center justify-center"
                        >
                          <Download className="w-3.5 h-3.5" strokeWidth={2.2} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button className="w-full mt-6 bg-slate-100 border border-slate-200 rounded-lg py-3 text-[11px] font-black text-blue-600 hover:text-blue-700 inline-flex items-center justify-center gap-1">
            View All Transactions <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-100 p-5 shadow-sm select-none text-left">
        <div className="flex items-center justify-between  pb-3 mb-4">
          <h3 className="text-sm font-semibold text-slate-800 tracking-tight">
            Business Insights
          </h3>
          <button
            type="button"
            className="text-[12px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors"
          >
            View Detailed Report{" "}
            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {insights.map((insight, idx) => {
            const InsightIcon = insight.icon;

            const cardBackgrounds = [
              "bg-emerald-50 border-emerald-100/40",
              "bg-blue-50 border-blue-100/40",
              "bg-amber-50 border-amber-100/40",
              "bg-purple-50 border-purple-100/40",
            ];

            const iconWrappers = [
              "bg-emerald-100/60 text-emerald-600",
              "bg-blue-100/60 text-blue-600",
              "bg-amber-100/60 text-amber-500",
              "bg-purple-100/60 text-purple-600",
            ];

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex flex-row items-center gap-3.5 transition-all duration-200 ${cardBackgrounds[idx]}`}
              >
                <div
                  className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-bold ${iconWrappers[idx]}`}
                >
                  <InsightIcon className="w-6 h-6" strokeWidth={2.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-slate-600 leading-snug tracking-tight select-text">
                    {insight.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenuePayments;
