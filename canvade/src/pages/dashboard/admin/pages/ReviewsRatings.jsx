import React, { useState, useMemo } from "react";
import {
  Star,
  MessageSquare,
  ThumbsUp,
  Smile,
  AlertCircle,
  Calendar,
  Filter,
  MoreVertical,
  MessageSquareText,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const reviewStats = {
  avgRating: "4.7",
  totalReviews: 128,
  reviewsComparison: "+18.6%",
  positiveReviews: 112,
  positivePercentage: "88%",
  positiveComparison: "+12.4%",
  neutralReviews: 12,
  neutralPercentage: "9%",
  neutralComparison: "-5.1%",
  negativeReviews: 4,
  negativePercentage: "3%",
  negativeComparison: "-1.2%",
};

const ratingBreakdown = [
  { stars: 5, count: 88, percentage: 69 },
  { stars: 4, count: 28, percentage: 22 },
  { stars: 3, count: 8, percentage: 6 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 },
];

const mockReviewsData = [
  {
    id: 1,
    name: "Rahul Verma",
    avatar: "R",
    avatarBg: "bg-blue-100 text-blue-600 border-blue-100",
    isVerified: true,
    type: "course",
    targetName: "Data Science Professional Course",
    rating: 5,
    comment:
      "Great course content and very well explained. The practical examples helped me a lot in understanding the concepts.",
    date: "28 May 2026",
  },
  {
    id: 2,
    name: "Ananya Singh",
    avatar: "A",
    avatarBg: "bg-purple-100 text-purple-600 border-purple-100",
    isVerified: true,
    type: "course",
    targetName: "UI/UX Design Fundamentals",
    rating: 4,
    comment:
      "Very informative workshop. Learnt a lot about user research and wireframing.",
    date: "26 May 2026",
  },
  {
    id: 3,
    name: "Karan Mehta",
    avatar: "K",
    avatarBg: "bg-amber-100 text-amber-600 border-amber-100",
    isVerified: true,
    type: "course",
    targetName: "Digital Marketing Masterclass",
    rating: 5,
    comment:
      "Excellent teaching and real-life case studies. Highly recommended!",
    date: "24 May 2026",
  },
  {
    id: 4,
    name: "Pooja Sharma",
    avatar: "P",
    avatarBg: "bg-rose-100 text-rose-600 border-rose-100",
    isVerified: true,
    type: "course",
    targetName: "Python Programming for Beginners",
    rating: 3,
    comment:
      "Good for beginners. Some topics could have been explained in more depth.",
    date: "22 May 2026",
  },
  {
    id: 5,
    name: "Vivek Nair",
    avatar: "V",
    avatarBg: "bg-emerald-100 text-emerald-600 border-emerald-100",
    isVerified: true,
    type: "workshop",
    targetName: "Cyber Security Essentials Workshop",
    rating: 5,
    comment: "Amazing session! The instructor explained everything so clearly.",
    date: "20 May 2026",
  },
];

export default function ReviewsRatingsDashboard() {
  const [activeTab, setActiveTab] = useState("all"); 
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("all"); 
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredReviews = useMemo(() => {
    return mockReviewsData.filter((review) => {
      const matchesTab = activeTab === "all" || review.type === activeTab;
      const matchesRating =
        selectedRatingFilter === "all" ||
        review.rating === Number(selectedRatingFilter);
      return matchesTab && matchesRating;
    });
  }, [activeTab, selectedRatingFilter]);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col gap-6 select-none text-left">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shrink-0">
        <div>
          <h1 className="text-[22px] font-bold text-slate-900 tracking-tight leading-none">
            Reviews & Ratings
          </h1>
          <p className="text-[12px] font-medium text-slate-800 mt-1.5">
            See what your students are saying about your courses and workshops.
          </p>
        </div>
        <button
          type="button"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-[12px] font-semibold text-slate-600 shadow-3xs hover:bg-slate-50 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="whitespace-nowrap">This Month (1 May – 31 May 2026)</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full select-none text-left">
        <div className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/30">
            <Star className="w-5 h-5 fill-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-500 block tracking-tight">
              Average Rating
            </span>
            <p className="text-[20px] font-black text-slate-800 leading-none mt-1.5">
              {reviewStats.avgRating}{" "}
              <span className="text-slate-400 text-sm font-semibold">/ 5</span>
            </p>
            <div className="flex items-center gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-600 font-medium block mt-2 tracking-tight">
              Based on 128 reviews
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/30">
            <MessageSquare className="w-5 h-5 fill-blue-600/10" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-500 block tracking-tight">
              Total Reviews
            </span>
            <p className="text-[22px] font-black text-slate-800 leading-none mt-1.5">
              {reviewStats.totalReviews}
            </p>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-emerald-600 inline-flex items-center gap-0.5">
                ↑ {reviewStats.reviewsComparison}{" "}
                <span className="text-slate-600 font-medium ml-1">vs Apr</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/30">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-500 block tracking-tight">
              Positive Reviews
            </span>
            <p className="text-[22px] font-black text-slate-800 leading-none mt-1.5">
              {reviewStats.positiveReviews}{" "}
              <span className="text-emerald-600 text-sm font-bold">
                ({reviewStats.positivePercentage})
              </span>
            </p>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-emerald-600 inline-flex items-center gap-0.5">
                ↑ {reviewStats.positiveComparison}{" "}
                <span className="text-slate-600 font-medium ml-1">vs Apr</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100/30">
            <Smile className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-500 block tracking-tight">
              Neutral Reviews
            </span>
            <p className="text-[22px] font-black text-slate-800 leading-none mt-1.5">
              {reviewStats.neutralReviews}{" "}
              <span className="text-slate-500 text-sm font-bold">
                ({reviewStats.neutralPercentage})
              </span>
            </p>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-rose-600 inline-flex items-center gap-0.5">
                ↓ {reviewStats.neutralComparison}{" "}
                <span className="text-slate-600 font-medium ml-1">vs Apr</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100/80 p-4 rounded-2xl shadow-3xs flex flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/30">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] font-bold text-slate-500 block tracking-tight">
              Negative Reviews
            </span>
            <p className="text-[22px] font-black text-slate-800 leading-none mt-1.5">
              {reviewStats.negativeReviews}{" "}
              <span className="text-rose-500 text-sm font-bold">
                ({reviewStats.negativePercentage})
              </span>
            </p>
            <div className="mt-2.5">
              <span className="text-[11px] font-bold text-rose-600 inline-flex items-center gap-0.5">
                ↓ {reviewStats.negativeComparison}{" "}
                <span className="text-slate-600 font-medium ml-1">vs Apr</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch w-full">
        <div className="bg-white rounded-2xl p-5 shadow-3xs flex flex-col justify-between select-none text-left">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight">
            Rating Overview
          </h3>

          <div className="flex-1 flex flex-col justify-center gap-5 mt-3">
            {ratingBreakdown.map((item) => (
              <div
                key={item.stars}
                className="flex items-center gap-4 text-xs font-bold text-slate-500"
              >
                <span className="w-12 shrink-0 text-slate-600">
                  {item.stars} {item.stars === 1 ? "Star" : "Stars"}
                </span>

                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <span className="w-16 text-left text-slate-800 font-bold whitespace-nowrap">
                  {item.count}{" "}
                  <span className="text-slate-600 font-medium text-[11px] ml-1">
                    ({item.percentage}%)
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-5 shadow-3xs flex flex-col justify-between select-none text-left">
          <div className="flex items-center justify-between border-b border-slate-50 pb-3">
            <h3 className="text-sm font-semibold text-slate-800 tracking-tight">
              Rating Trend
            </h3>
            <button
              type="button"
              className="text-[12px] font-medium text-slate-700 border border-slate-200 rounded-xl px-3 py-1.5 bg-white shadow-3xs flex items-center gap-2 hover:bg-slate-50 transition-colors"
            >
              <span>This Month</span>
              <span className="text-slate-400 text-[10px]">▼</span>
            </button>
          </div>

          <div className="flex-1 flex flex-row items-stretch mt-6 mb-2">
            <div className="flex flex-col justify-between text-[11px] font-medium text-slate-400 pr-3 h-[130px] w-6 shrink-0 text-right">
              <span>5</span>
              <span>4</span>
              <span>3</span>
              <span>2</span>
              <span>1</span>
            </div>

            <div className="flex-1 relative flex flex-col justify-between">
              <div className="relative w-full h-[130px]">
                <svg
                  viewBox="0 0 600 130"
                  className="w-full h-[130px] overflow-visible z-10 block"
                >
                  <defs>
                    <linearGradient
                      id="trend-fill-tint-refined"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        stopOpacity="0.10"
                      />
                      <stop
                        offset="100%"
                        stopColor="#10b981"
                        stopOpacity="0.00"
                      />
                    </linearGradient>
                  </defs>

                  <line
                    x1="0"
                    y1="5"
                    x2="600"
                    y2="5"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="36"
                    x2="600"
                    y2="36"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="67"
                    x2="600"
                    y2="67"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="98"
                    x2="600"
                    y2="98"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1="130"
                    x2="600"
                    y2="130"
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />

                  <path
                    d="M 10 75 C 40 78, 60 40, 100 45 C 140 50, 150 36, 180 36 C 210 36, 240 68, 270 68 C 300 68, 330 33, 360 33 C 400 33, 440 60, 470 42 C 500 24, 520 18, 555 18 C 575 18, 585 28, 590 24 L 590 130 L 10 130 Z"
                    fill="url(#trend-fill-tint-refined)"
                  />

                  <path
                    d="M 10 75 C 40 78, 60 40, 100 45 C 140 50, 150 36, 180 36 C 210 36, 240 68, 270 68 C 300 68, 330 33, 360 33 C 400 33, 440 60, 470 42 C 500 24, 520 18, 555 18 C 575 18, 585 28, 590 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="180"
                    cy="36"
                    r="3.5"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.2"
                  />
                  <circle
                    cx="270"
                    cy="68"
                    r="3.5"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.2"
                  />
                  <circle
                    cx="360"
                    cy="33"
                    r="3.5"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.2"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-between items-center text-[10px] font-medium text-slate-400 pt-3 px-1 select-none">
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
      </div>

      <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100/80 pb-3 mb-2 relative gap-2">
            <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 overflow-x-auto max-w-full pb-0.5">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("all");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "all" ? "bg-emerald-50 text-emerald-700 font-bold" : "hover:text-slate-800"}`}
              >
                All Reviews (128)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("course");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "course" ? "bg-emerald-50 text-emerald-700 font-bold" : "hover:text-slate-800"}`}
              >
                Course Reviews (96)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("workshop");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${activeTab === "workshop" ? "bg-emerald-50 text-emerald-700 font-bold" : "hover:text-slate-800"}`}
              >
                Workshop Reviews (32)
              </button>
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                className={`flex items-center gap-1.5 border rounded-xl px-3 py-1.5 text-[12px] font-semibold transition-all ${selectedRatingFilter !== "all" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-white text-slate-600 border-slate-200"}`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>
                  {selectedRatingFilter === "all"
                    ? "Filter"
                    : `${selectedRatingFilter} Stars`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {isFilterDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-100 shadow-xl rounded-xl p-1 z-30 text-[12px] font-medium text-slate-600">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedRatingFilter("all");
                      setIsFilterDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors block"
                  >
                    All Ratings
                  </button>
                  {[5, 4, 3, 2, 1].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setSelectedRatingFilter(num);
                        setIsFilterDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-between"
                    >
                      <span>{num} Stars</span>
                      <div className="flex gap-0.5">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <div className="divide-y divide-slate-200">
              {filteredReviews.length > 0 ? (
                filteredReviews.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 group first:pt-2"
                  >
                    <div className="flex items-center gap-3 w-full md:w-[35%] shrink-0">
                      <div
                        className={`w-9 h-9 rounded-full border font-bold text-[13px] flex items-center justify-center shrink-0 shadow-3xs ${item.avatarBg}`}
                      >
                        {item.avatar}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700 text-[13px] truncate">
                            {item.name}
                          </span>
                          {item.isVerified && (
                            <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-emerald-100/40 shrink-0">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium truncate mt-0.5">
                          {item.targetName}
                        </p>
                        <div className="flex items-center gap-0.5 mt-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className={`w-3 h-3 ${starIndex < item.rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 pr-4">
                      <p className="text-[12.5px] text-slate-700 font-normal leading-normal select-text whitespace-normal line-clamp-2 md:line-clamp-none">
                        {item.comment}
                      </p>
                      <span className="text-[10px] text-slate-600 font-medium block mt-2">
                        {item.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 self-start shrink-0 -pt-3">
                      <button
                        type="button"
                        className="w-8 h-8 text-slate-500 hover:text-slate-600 border-2 border-slate-200/50 rounded-md bg-white shadow-3xs hover:shadow-2xs transition-all flex items-center justify-center cursor-pointer"
                      >
                        <MessageSquareText
                          className="w-4 h-4"
                          strokeWidth={2}
                        />
                      </button>

                      <button
                        type="button"
                        className="w-8 h-8 text-slate-600 hover:text-slate-600  rounded-md bg-white shadow-3xs hover:shadow-2xs transition-all flex items-center justify-center cursor-pointer"
                      >
                        <MoreVertical className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-slate-600 font-medium text-xs">
                  No reviews matching the criteria.
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full border-t border-slate-100/80 mt-2 pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-semibold text-slate-500">
          <span>
            Showing 1 to {filteredReviews.length} of {filteredReviews.length}{" "}
            reviews
          </span>

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
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 1 ? "bg-emerald-600 text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 2 ? "bg-emerald-600 text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              2
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${currentPage === 3 ? "bg-emerald-600 text-white" : "border border-slate-200 hover:bg-slate-50"}`}
            >
              3
            </button>
            <span className="px-1 text-slate-300">...</span>
            <button
              type="button"
              className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50"
            >
              26
            </button>
            <button
              type="button"
              className="w-7 h-7 border border-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-50"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg px-2 py-1 bg-white">
            <span className="text-gray-500">5 / page</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
