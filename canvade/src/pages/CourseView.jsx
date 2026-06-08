import React, { useState, useRef, useEffect } from "react";
import {
  Star,
  Clock,
  MapPin,
  BookOpen,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Phone,
  MessageSquare,
  Heart,
  ArrowLeftRight,
  GraduationCap,
  Award,
  Briefcase,
  Globe,
  Calendar,
  Users,
  Flame,
  Building2,
  Languages,
  ShieldCheck,
  UserCheck,
  ExternalLink,
  BadgeCheck,
  Play,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TABS = [
  "Overview",
  "Curriculum",
  "Fees & Scholarships",
  "Faculty",
  "Reviews",
  "FAQs",
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "UGC Approved" },
  { icon: BookOpen, label: "Industry-Relevant Curriculum" },
  { icon: Users, label: "Experienced Faculty" },
  { icon: Briefcase, label: "Placement Assistance" },
  { icon: Briefcase, label: "Placement Assistance" },
  { icon: Globe, label: "Flexible Learning Options" },
];

const LEARN_ITEMS = [
  "Advanced research methodologies in psychology",
  "Theories of human behavior and development",
  "Critical analysis and academic writing",
  "Data analysis and statistical tools",
  "Ethical practices in psychological research",
  "Application of research in real-world scenarios",
];

const CURRICULUM = [
  { year: "Year 1", title: "Foundation & Core Concepts", modules: 8 },
  { year: "Year 2", title: "Advanced Research Methods", modules: 7 },
  { year: "Year 3", title: "Specialization & Electives", modules: 9 },
  { year: "Year 4", title: "Research & Dissertation", modules: 6 },
];

const FACULTY = [
  {
    name: "Dr. Amit Verma",
    degree: "PhD in Psychology, Delhi University",
    exp: "10+ Years Exp.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Neha Sharma",
    degree: "PhD in Behavioral Sciences, JNU",
    exp: "8+ Years Exp.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Rohan Mehta",
    degree: "PhD in Clinical Psychology, AIIMS",
    exp: "12+ Years Exp.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
  },
];

const REVIEWS = [
  {
    name: "Priya S.",
    rating: 5,
    text: "Exceptional program! The faculty is world-class and the curriculum is very well structured.",
    date: "Jan 2024",
  },
  {
    name: "Arjun M.",
    rating: 4,
    text: "Great learning experience. The online and onsite blend works perfectly for working professionals.",
    date: "Dec 2023",
  },
  {
    name: "Sneha K.",
    rating: 5,
    text: "The research guidance and dissertation support are outstanding. Highly recommend this program.",
    date: "Nov 2023",
  },
];

const FAQS = [
  {
    q: "What is the eligibility criteria for this PhD program?",
    a: "Applicants must have completed their Post Graduation (Masters degree) in a relevant field with a minimum of 55% marks from a recognized university.",
  },
  {
    q: "Is this program available in online mode?",
    a: "Yes, the program is available in both Onsite and Online modes to accommodate students from different locations.",
  },
  {
    q: "What is the fee structure and are scholarships available?",
    a: "The total fee is ₹2,90,000 with a 15% discount currently available. Merit-based and need-based scholarships are also offered.",
  },
  {
    q: "How is the dissertation process handled?",
    a: "Students are assigned a dedicated research guide in Year 3. The dissertation spans Year 3-4 with regular review sessions and academic support.",
  },
];

const FEES = [
  {
    label: "Application Fee",
    amount: "₹ 2,000",
    note: "One-time, non-refundable",
  },
  { label: "Year 1 Tuition", amount: "₹ 75,000", note: "Per academic year" },
  { label: "Year 2 Tuition", amount: "₹ 75,000", note: "Per academic year" },
  { label: "Year 3 Tuition", amount: "₹ 70,000", note: "Includes electives" },
  { label: "Year 4 Tuition", amount: "₹ 68,000", note: "Dissertation year" },
  {
    label: "Total Fee",
    amount: "₹ 2,90,000",
    note: "After 15% scholarship",
    highlight: true,
  },
];

const SCHOLARSHIPS = [
  {
    title: "Merit Scholarship",
    desc: "Up to 25% fee waiver for students with >80% in Post Graduation",
    deadline: "30 Jun 2024",
  },
  {
    title: "Need-Based Grant",
    desc: "Full or partial fee support for economically weaker sections",
    deadline: "15 Jul 2024",
  },
  {
    title: "Research Fellowship",
    desc: "Monthly stipend of ₹15,000 for selected PhD scholars",
    deadline: "1 Aug 2024",
  },
];

const GALLERY_SLIDES = [
  {
    bg: "from-[#0d1b2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "E-LEARNING",
    sub: "NOW MASTER",
    accent: "teal",
  },
  {
    bg: "from-[#0d1b2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "RESEARCH",
    sub: "DEEP DIVE",
    accent: "blue",
  },
  {
    bg: "from-[#12082a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "PSYCHOLOGY",
    sub: "EXPLORE",
    accent: "purple",
  },
  {
    bg: "from-[#0d1b2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "BEHAVIOR",
    sub: "UNDERSTAND",
    accent: "teal",
  },
  {
    bg: "from-[#0d1b2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "DOCTORATE",
    sub: "ACHIEVE MORE",
    accent: "blue",
  },
  {
    bg: "from-[#0a2218] via-[#0d1b2a] to-[#0d1b2a]",
    label: "RESEARCH",
    sub: "NEW CLASSES",
    accent: "green",
  },
  {
    bg: "from-[#0d1b2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "FACULTY",
    sub: "EXPERT TEAM",
    accent: "teal",
  },
  {
    bg: "from-[#1a0d2a] via-[#0d1b2a] to-[#0d1b2a]",
    label: "CAMPUS",
    sub: "12+ CITIES",
    accent: "purple",
  },
];

const ACCENT_COLORS = {
  teal: {
    text: "text-teal-400",
    ring: "border-teal-400",
    bg: "from-teal-400 to-emerald-500",
  },
  blue: {
    text: "text-blue-400",
    ring: "border-blue-400",
    bg: "from-blue-400 to-cyan-500",
  },
  purple: {
    text: "text-purple-400",
    ring: "border-purple-400",
    bg: "from-purple-400 to-violet-500",
  },
  green: {
    text: "text-green-400",
    ring: "border-green-400",
    bg: "from-green-400 to-teal-500",
  },
};

const COURSE_INFO = [
  { icon: GraduationCap, label: "Course Level", val: "Doctorate (PhD)" },
  { icon: Clock, label: "Duration", val: "4 Year" },
  { icon: BookOpen, label: "Mode", val: "Onsite & Online" },
  { icon: BadgeCheck, label: "Eligibility", val: "Post Graduation" },
  { icon: Languages, label: "Language", val: "English" },
  { icon: Calendar, label: "Batch Starts", val: "July 2024" },
  { icon: ShieldCheck, label: "Accreditation", val: "UGC Approved" },
];

function StarRow({ rating, size = 14 }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= Math.round(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }
        />
      ))}
    </span>
  );
}

export default function CourseView() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCurr, setExpandedCurr] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [shortlisted, setShortlisted] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const tabBarRef = useRef(null);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((p) => (p + 1) % GALLERY_SLIDES.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  const prevSlide = () =>
    setCurrentSlide(
      (p) => (p - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length,
    );
  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % GALLERY_SLIDES.length);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const el = tabBarRef.current?.querySelector(`[data-tab="${tab}"]`);
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                About the Course
              </h3>
              <p
                className={`text-gray-600 text-sm leading-relaxed ${!showFullAbout ? "line-clamp-4" : ""}`}
              >
                The PhD in Human Behavior and Psychological Research is designed
                for individuals passionate about understanding human behavior
                through advanced research and academic inquiry. This program
                blends philosophy, psychology, and research methodologies to
                prepare scholars and practitioners for leadership roles in
                academia, research, and policy making. Students will engage in
                rigorous coursework, independent research, and collaborative
                projects that bridge theoretical frameworks with applied
                practice in real-world settings across multiple disciplines and
                sectors.
              </p>
              <button
                onClick={() => setShowFullAbout((v) => !v)}
                className="text-emerald-600 font-semibold text-sm flex items-center gap-1 mt-3 hover:underline"
              >
                {showFullAbout ? "Show Less" : "Read More"}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showFullAbout ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3 p-3">
                    <Icon className="text-emerald-600 shrink-0" size={22} />
                    <span className="text-sm font-semibold text-slate-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                What You'll Learn
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {LEARN_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle
                      size={18}
                      className="text-emerald-600 mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Curriculum Overview
              </h3>
              <div className="space-y-2.5">
                {CURRICULUM.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      handleTabClick("Curriculum");
                      setExpandedCurr(idx);
                    }}
                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200/60 cursor-pointer transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-800 pr-2 line-clamp-1">
                      {item.year} – {item.title}
                    </span>
                    <ChevronRight
                      size={17}
                      className="text-slate-900 group-hover:text-emerald-600 transition-colors shrink-0"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Top Faculty
                </h3>
                <button
                  onClick={() => handleTabClick && handleTabClick("Faculty")}
                  className="text-emerald-700 font-semibold text-sm hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {FACULTY.map((f, i) => (
                  <div
                    key={i}
                    className="border border-gray-200/70 rounded-2xl p-5 text-center bg-white flex flex-col items-center justify-between shadow-sm"
                  >
                    <div className="w-20 h-20 rounded-full mb-3 overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>

                    <div className="flex-grow flex flex-col items-center">
                      <h4 className="font-bold text-[15px] text-slate-900 leading-tight">
                        {f.name}
                      </h4>
                      <p className="text-sm text-gray-700 mt-2 line-clamp-2 min-h-[32px] max-w-[180px] leading-relaxed">
                        {f.degree}
                      </p>
                    </div>

                    <div className="mt-4 w-full">
                      <span className="inline-block text-[11px] font-medium text-gray-600 bg-[#f3f4f6] px-3.5 py-1.5 rounded-full">
                        {f.exp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Curriculum":
        return (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                Curriculum Overview
              </h3>
              <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                4 Years · 30 Modules
              </span>
            </div>
            <div className="space-y-2.5">
              {CURRICULUM.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedCurr(expandedCurr === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mr-2">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                        {item.year}
                      </span>
                      <span className="text-sm font-semibold text-slate-800 line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-gray-400 hidden sm:block">
                        {item.modules} Modules
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform ${expandedCurr === idx ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  {expandedCurr === idx && (
                    <div className="p-4 border-t border-gray-100 bg-white">
                      <ul className="space-y-2">
                        {Array.from({ length: item.modules }, (_, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span className="line-clamp-1">
                              Module {i + 1}: {item.title} — Topic {i + 1}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case "Fees & Scholarships":
        return (
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Fee Structure
              </h3>
              <div className="divide-y divide-gray-100">
                {FEES.map((fee, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 ${fee.highlight ? "bg-emerald-50 -mx-5 px-5 rounded-xl mt-1" : ""}`}
                  >
                    <div className="mr-2">
                      <p
                        className={`text-sm font-semibold ${fee.highlight ? "text-emerald-800" : "text-slate-700"}`}
                      >
                        {fee.label}
                      </p>
                      <p className="text-xs text-gray-400">{fee.note}</p>
                    </div>
                    <span
                      className={`font-bold shrink-0 ${fee.highlight ? "text-emerald-700 text-base" : "text-slate-800 text-sm"}`}
                    >
                      {fee.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Scholarships Available
              </h3>
              <div className="space-y-3">
                {SCHOLARSHIPS.map((s, i) => (
                  <div
                    key={i}
                    className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex items-start gap-3"
                  >
                    <Award
                      className="text-emerald-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {s.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                      <p className="text-xs text-emerald-600 font-semibold mt-1.5 flex items-center gap-1">
                        <Calendar size={12} /> Deadline: {s.deadline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Faculty":
        return (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-bold text-slate-900">Top Faculty</h3>
              <button className="text-emerald-600 font-semibold text-sm hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {FACULTY.map((f, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-2xl p-5 text-center bg-white shadow-sm flex flex-col items-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-full mb-3 border-2 border-white shadow flex items-center justify-center">
                    <UserCheck size={28} className="text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-800">{f.name}</h4>
                  <p className="text-xs text-gray-400 mt-1 min-h-[32px] leading-relaxed">
                    {f.degree}
                  </p>
                  <span className="mt-3 text-[11px] font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {f.exp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case "Reviews":
        return (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row items-center gap-6 pb-4 border-b border-gray-100">
              <div className="text-center shrink-0">
                <p className="text-4xl font-black text-slate-900">4.8</p>
                <StarRow rating={4.8} size={16} />
                <p className="text-xs text-gray-400 mt-1">128 Reviews</p>
              </div>
              <div className="flex-1 w-full space-y-1.5">
                {[5, 4, 3, 2, 1].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-2">{s}</span>
                    <Star
                      size={10}
                      className="text-amber-400 fill-amber-400 shrink-0"
                    />
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{
                          width:
                            s === 5
                              ? "72%"
                              : s === 4
                                ? "18%"
                                : s === 3
                                  ? "6%"
                                  : "2%",
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-6 text-right">
                      {s === 5
                        ? "92"
                        : s === 4
                          ? "23"
                          : s === 3
                            ? "8"
                            : s === 2
                              ? "3"
                              : "2"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                        {r.name[0]}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {r.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <StarRow rating={r.rating} size={12} />
                      <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Frequently Asked Questions
            </h3>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                >
                  <span className="text-sm font-semibold text-slate-800 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 shrink-0 transition-transform ${expandedFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="p-4 border-t border-gray-100 bg-white">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const slide = GALLERY_SLIDES[currentSlide];
  const accent = ACCENT_COLORS[slide.accent];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased pt-16 font-[Poppins]">
      <Navbar />

      <div className="mt-3 sm:mt-6 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.04)]">
        <div className="w-full py-2.5 px-4 md:px-8 lg:px-16">
          <div className="max-w-[1700px] mx-auto text-xs sm:text-sm text-green-700 flex items-center gap-1 sm:gap-1.5 flex-wrap">
            {["Home", "Courses", "Psychology"].map((crumb) => (
              <React.Fragment key={crumb}>
                <span className="font-semibold text-green-700 hover:text-emerald-600 cursor-pointer transition-colors">
                  {crumb}
                </span>
                <ChevronRight size={11} className="text-green-700 shrink-0" />
              </React.Fragment>
            ))}
            <span className="text-gray-800 font-semibold line-clamp-1 max-w-xs sm:max-w-none">
              Philosophy of Doctorate in Human Behavior
            </span>
          </div>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div
              className={`relative bg-gradient-to-br ${slide.bg} rounded-xl sm:rounded-2xl overflow-hidden
                         w-full lg:w-[42%] shrink-0 aspect-video lg:min-h-[45vh]
                         flex flex-col justify-between p-4 group select-none`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/60 z-0" />
              <div
                className={`absolute top-4 right-4 w-32 h-32 rounded-full border-2 ${accent.ring} opacity-20`}
              />
              <div
                className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-2 ${accent.ring} opacity-10`}
              />

              <div
                className="z-10 bg-teal-500/25 border border-teal-400/40 text-teal-300
                              text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full w-max"
              >
                NEW CLASSES
              </div>

              <div className="z-10 flex flex-col items-center justify-center text-center my-auto py-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${accent.bg} rounded-full border-2 ${accent.ring}
                                 mb-3 flex items-center justify-center shadow-lg cursor-pointer
                                 hover:scale-105 transition-transform`}
                >
                  <Play size={20} className="text-white fill-white ml-0.5" />
                </div>
                <h4
                  className={`text-white font-black text-xl sm:text-2xl md:text-3xl tracking-tight drop-shadow-lg ${accent.text}`}
                  style={{ WebwebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                >
                  {slide.label}
                </h4>
                <p
                  className={`${accent.text} text-xs font-bold tracking-[0.25em] uppercase mt-1`}
                >
                  {slide.sub}
                </p>
              </div>

              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between z-10">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white
                             flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white
                             flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="z-10 self-start bg-black/60 text-white text-xs px-2.5 py-1 rounded-md font-medium">
                {currentSlide + 1} / {GALLERY_SLIDES.length}
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {GALLERY_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${i === currentSlide ? `bg-teal-400 w-5` : "bg-white/35 w-1.5"}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-4 min-w-0">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5
                                   rounded-full border border-emerald-200 flex items-center gap-1.5"
                  >
                    <Award size={13} /> Student's Choice
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Star size={16} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-slate-700">
                      4.8
                    </span>
                    <span className="text-gray-600 text-sm">(128 Reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm sm:text-[16px] mb-2 flex-wrap">
                  <span>ICAI - The Institute of Chartered Accountants</span>
                  <CheckCircle
                    size={14}
                    className="fill-blue-600 text-white shrink-0"
                  />
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-snug mb-4 max-w-[700px]">
                  Philosophy of Doctorate in Human Behavior and Psychological
                  Research
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-center gap-2">
                    <Clock size={22} className="text-gray-700 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">
                        4 Year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={22} className="text-gray-700 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">
                        Onsite &amp; Online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <MapPin size={22} className="text-gray-700 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">
                        Moti Nagar, New Delhi
                        <span className="text-blue-600 font-semibold text-xs ml-1.5 cursor-pointer hover:underline">
                          (12 More)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1700px] w-full mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 w-full min-w-0 space-y-5">
            <div
              ref={tabBarRef}
              className="sticky top-14 md:top-[60px] z-20 bg-white border-b border-gray-200
                         overflow-x-auto flex gap-1 sm:gap-4 md:gap-6 lg:gap-10 -mx-4 px-4"
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  data-tab={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`flex-shrink-0 px-2 sm:px-3 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap
                             border-b-2 transition-all ${
                               activeTab === tab
                                 ? "border-emerald-600 text-emerald-600"
                                 : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
                             }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {renderTabContent()}

            <div className="lg:hidden mt-5 space-y-4 w-full">
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <h4 className="font-semibold text-base text-slate-900 mb-3">
                  Course Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COURSE_INFO.map(({ icon: Icon, label, val }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                    >
                      <Icon size={18} className="text-gray-600 shrink-0" />
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                          {label}
                        </p>
                        <p className="text-xs font-semibold text-slate-800">
                          {val}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <h4 className="font-semibold text-base text-slate-900 mb-3">
                  Institute Information
                </h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm mt-3">
                    <img
                      src="/workshop.png"
                      alt="Institute Logo"
                      className="w-full h-full object-cover object-center scale-125 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      ICAI - The Institute of Chartered Accountants
                    </p>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                      <Star size={11} fill="currentColor" />
                      <span className="font-bold">4.6/5</span>
                      <span className="text-gray-400 font-normal ml-1">
                        (256 Reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs border-t border-gray-100 pt-3 mb-3">
                  {[
                    { label: "Established", val: "1949" },
                    { label: "Campus", val: "12+ Cities" },
                    { label: "Students Enrolled", val: "25,000+" },
                    { label: "Website", val: "www.icai.edu.in", link: true },
                  ].map(({ label, val, link }, i) => (
                    <div key={i}>
                      <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                        {label}
                      </p>
                      {link ? (
                        <a
                          href="#"
                          className="font-semibold text-emerald-600 underline"
                        >
                          {val}
                        </a>
                      ) : (
                        <p className="font-semibold text-slate-700">{val}</p>
                      )}
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 border border-emerald-500 text-emerald-600 text-xs font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                  View Institute Profile →
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <h4 className="font-bold text-base text-slate-900 mb-1">
                  Need Help?
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  We're here to help you choose the right course.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="tel:18001234567"
                    className="flex-1 flex flex-col items-center justify-center py-2.5 border border-emerald-500 text-emerald-600 font-bold rounded-xl text-xs hover:bg-emerald-50 transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Phone size={14} /> 1800-123-4567
                    </span>
                    <span className="text-[9px] text-gray-400 font-normal mt-0.5">
                      Mon–Sat (10AM–6PM)
                    </span>
                  </a>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl text-xs hover:bg-emerald-100 transition-colors">
                    <MessageSquare size={14} /> Chat with Counsellor
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside
            className="hidden lg:block w-[300px] xl:w-[320px] shrink-0 sticky top-[72px]
                       max-h-[calc(100vh-80px)] overflow-y-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-md">
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl font-bold text-slate-900">
                      ₹ 2,90,000
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-medium line-through text-gray-600">
                      ₹ 3,40,000
                    </span>
                    <span className="text-sm font-semibold text-emerald-500 px-1">
                      (15% Off)
                    </span>
                  </div>
                </div>
                <button className="w-full h-[50px] py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-colors shadow-sm mb-2.5 text-sm tracking-wide">
                  Enquire Now
                </button>
                <p className="text-center text-xs text-gray-600 mb-4">
                  Get free counselling &amp; guidance
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setShortlisted((v) => !v)}
                    className="flex items-center justify-center gap-2 py-2.5 border-2 border-emerald-300 rounded-xl text-sm font-semibold text-emerald-600 transition-all hover:bg-emerald-50"
                  >
                    <Heart
                      size={15}
                      fill={shortlisted ? "currentColor" : "none"}
                    />
                    Shortlist
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 border-2 border-emerald-300 rounded-xl text-sm font-semibold text-emerald-600 transition-all hover:bg-emerald-50">
                    <ArrowLeftRight size={15} /> Compare
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-orange-600 font-medium">
                  <Flame
                    size={15}
                    className="fill-orange-500 text-orange-500"
                  />
                  <span className="text-gray-800 font-semibold">
                    235 students enquired this week
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h4 className="font-semibold text-[18px] text-slate-900 mb-4 tracking-normal">
                  Course Information
                </h4>
                <div className="space-y-0.5">
                  {COURSE_INFO.map(({ icon: Icon, label, val }, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-2 text-gray-400">
                        <Icon
                          size={18}
                          className="text-gray-700 stroke-[2.5]"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                          {label}
                        </span>
                      </div>
                      <span className="font-semibold text-slate-800 text-sm">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <h4 className="font-semibold text-[18px] text-slate-900 mb-4">
                  Institute Information
                </h4>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full shrink-0 overflow-hidden border border-gray-200 shadow-sm mt-4">
                    <img
                      src="/workshop.png"
                      alt="Institute Logo"
                      className="w-full h-full object-cover object-center scale-125 rounded-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-[14px] text-slate-900 flex-wrap mt-2">
                      <span>ICAI - The Institute of Chartered Accountants</span>
                      <CheckCircle
                        size={18}
                        className="fill-blue-600 text-white shrink-0 relative -top-6 ml-44"
                      />
                    </div>
                    <div className="flex items-center text-amber-400 font-bold text-xs relative -top-2">
                      <Star size={13} fill="currentColor" /> 4.6/5
                      <span className="text-gray-500 font-medium ml-1">
                        (256 Reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-3 mb-4">
                  {[
                    { icon: Calendar, label: "Established", val: "1949" },
                    { icon: Building2, label: "Campus", val: "12+ Cities" },
                    { icon: Users, label: "Students Enrolled", val: "25,000+" },
                    {
                      icon: ExternalLink,
                      label: "Website",
                      val: "www.icai.edu.in",
                      link: true,
                    },
                  ].map(({ icon: Icon, label, val, link }, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-semi"
                    >
                      <span className="text-gray-600 flex items-center gap-1.5">
                        <Icon size={22} className="text-gray-700" /> {label}
                      </span>
                      {link ? (
                        <a
                          href="#"
                          className="text-emerald-600 font-semibold  text-xs"
                        >
                          {val}
                        </a>
                      ) : (
                        <span className="font-semibold text-slate-800">
                          {val}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-sm font-semibold rounded-xl transition-colors">
                  View Institute Profile →
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
                <h4 className="font-bold text-[18px] text-slate-900">
                  Need Help?
                </h4>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  We're here to help you choose the right course.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:18001234567"
                    className="flex flex-col items-center justify-center w-full py-3 border-2 border-emerald-500 text-emerald-600 font-bold rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone size={16} /> 1800-123-4567
                    </span>
                    <span className="text-[11px] text-gray-700 font-normal mt-0.5">
                      Mon - Sat (10 AM - 6 PM)
                    </span>
                  </a>
                  <button className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-emerald-500 text-emerald-700 font-bold rounded-xl text-sm hover:bg-emerald-50 transition-colors">
                    <MessageSquare size={16} /> Chat with Counsellor
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="rounded-xl sm:rounded-2xl bg-white border border-gray-100 z-40 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] w-full px-4 py-4 mt-6 md:mt-8">
          <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                ₹ 2,90,000
              </span>
              <span className="text-xs line-through text-gray-400 font-medium">
                ₹ 3,40,000
              </span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                15% Off
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setShortlisted((v) => !v)}
                className={`p-2.5 border rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  shortlisted
                    ? "border-red-200 text-red-500 bg-red-50"
                    : "border-slate-200 text-slate-700 bg-white hover:bg-gray-50"
                }`}
              >
                <Heart size={14} fill={shortlisted ? "currentColor" : "none"} />
                <span className="hidden sm:inline">Shortlist</span>
              </button>
              <button className="p-2.5 border border-slate-200 bg-white text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-gray-50 transition-all">
                <ArrowLeftRight size={14} />
                <span className="hidden sm:inline">Compare</span>
              </button>
              <button className="flex-1 sm:flex-none px-5 py-2.5 bg-[#007965] hover:bg-[#006252] text-white font-bold rounded-xl text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
