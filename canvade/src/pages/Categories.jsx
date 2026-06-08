import React from "react";
import {
  GraduationCap,
  Building2,
  School,
  UserCheck,
  Compass,
  FileText,
  Palette,
  Code,
  Briefcase,
  BarChart3,
  Megaphone,
  Coins,
  BookOpen,
  Languages,
  Monitor,
  Cpu,
  HeartPulse,
  Scale,
  Milestone,
  Film,
  Camera,
  Music,
  Activity,
  Trophy,
  Dumbbell,
  Flower2,
  Brain,
  Smile,
  Scissors,
  Shirt,
  Hotel,
  Plane,
  CalendarDays,
  Mic2,
  Users2,
  Lightbulb,
  Rocket,
  LineChart,
  ShoppingBag,
  PenTool,
  ShieldAlert,
  Boxes,
  Bot,
  CandlestickChart,
  Leaf,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LEARNING_TYPES = [
  {
    icon: School,
    title: "Academy",
    desc: "Explore coaching academies and training centers.",
    color: "emerald",
  },
  {
    icon: Building2,
    title: "Institutes",
    desc: "Discover professional institutes and centers.",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Colleges",
    desc: "Find top colleges across streams and locations.",
    color: "purple",
  },
  {
    icon: UserCheck,
    title: "Schools",
    desc: "Learn from independent teachers and experts.",
    color: "orange",
  },
  {
    icon: School,
    title: "Universities",
    desc: "Explore recognized universities worldwide.",
    color: "rose",
  },
];

const CATEGORIES = [
  {
    id: 1,
    label: "Government Exams",
    icon: FileText,
    bg: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    id: 2,
    label: "School Education",
    icon: School,
    bg: "from-blue-500/10 to-indigo-500/5",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    label: "Engineering",
    icon: Cpu,
    bg: "from-purple-500/10 to-indigo-500/5",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    label: "Information Technology",
    icon: Monitor,
    bg: "from-blue-500/10 to-sky-500/5",
    iconColor: "text-blue-500",
  },
  {
    id: 5,
    label: "Software Development",
    icon: Code,
    bg: "from-indigo-500/10 to-blue-500/5",
    iconColor: "text-indigo-600",
  },
  {
    id: 6,
    label: "Data Science",
    icon: BarChart3,
    bg: "from-teal-500/10 to-cyan-500/5",
    iconColor: "text-teal-600",
  },
  {
    id: 7,
    label: "Artificial Intelligence",
    icon: Bot,
    bg: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-600",
  },
  {
    id: 8,
    label: "Cyber Security",
    icon: ShieldAlert,
    bg: "from-red-500/10 to-orange-500/5",
    iconColor: "text-red-600",
  },
  {
    id: 9,
    label: "Cloud Computing",
    icon: Boxes,
    bg: "from-sky-500/10 to-cyan-500/5",
    iconColor: "text-sky-600",
  },
  {
    id: 10,
    label: "Business Management",
    icon: Briefcase,
    bg: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-600",
  },
  {
    id: 11,
    label: "Finance",
    icon: Coins,
    bg: "from-green-500/10 to-emerald-500/5",
    iconColor: "text-green-600",
  },
  {
    id: 12,
    label: "Accounting",
    icon: CandlestickChart,
    bg: "from-lime-500/10 to-green-500/5",
    iconColor: "text-lime-600",
  },
  {
    id: 13,
    label: "Digital Marketing",
    icon: Megaphone,
    bg: "from-rose-500/10 to-orange-500/5",
    iconColor: "text-rose-600",
  },
  {
    id: 14,
    label: "Sales",
    icon: ShoppingBag,
    bg: "from-orange-500/10 to-yellow-500/5",
    iconColor: "text-orange-500",
  },
  {
    id: 15,
    label: "Entrepreneurship",
    icon: Rocket,
    bg: "from-blue-500/10 to-indigo-500/5",
    iconColor: "text-blue-600",
  },
  {
    id: 16,
    label: "Design",
    icon: Palette,
    bg: "from-purple-500/10 to-pink-500/5",
    iconColor: "text-purple-600",
  },
  {
    id: 17,
    label: "Graphic Design",
    icon: PenTool,
    bg: "from-fuchsia-500/10 to-pink-500/5",
    iconColor: "text-fuchsia-600",
  },
  {
    id: 18,
    label: "UI/UX Design",
    icon: Compass,
    bg: "from-indigo-500/10 to-violet-500/5",
    iconColor: "text-indigo-600",
  },
  {
    id: 19,
    label: "Animation",
    icon: Film,
    bg: "from-pink-500/10 to-rose-500/5",
    iconColor: "text-pink-600",
  },
  {
    id: 20,
    label: "Video Editing",
    icon: Camera,
    bg: "from-red-500/10 to-pink-500/5",
    iconColor: "text-red-500",
  },
  {
    id: 21,
    label: "Healthcare",
    icon: HeartPulse,
    bg: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    id: 22,
    label: "Medical",
    icon: UserCheck,
    bg: "from-green-500/10 to-emerald-500/5",
    iconColor: "text-green-600",
  },
  {
    id: 23,
    label: "Nursing",
    icon: UserCheck,
    bg: "from-cyan-500/10 to-blue-500/5",
    iconColor: "text-cyan-600",
  },
  {
    id: 24,
    label: "Pharmacy",
    icon: HeartPulse,
    bg: "from-teal-500/10 to-green-500/5",
    iconColor: "text-teal-600",
  },
  {
    id: 25,
    label: "Law",
    icon: Scale,
    bg: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-600",
  },
  {
    id: 26,
    label: "Architecture",
    icon: Milestone,
    bg: "from-cyan-500/10 to-blue-500/5",
    iconColor: "text-cyan-600",
  },
  {
    id: 27,
    label: "Interior Design",
    icon: Building2,
    bg: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-600",
  },
  {
    id: 28,
    label: "Teaching",
    icon: BookOpen,
    bg: "from-indigo-500/10 to-purple-500/5",
    iconColor: "text-indigo-600",
  },
  {
    id: 29,
    label: "Languages",
    icon: Languages,
    bg: "from-orange-500/10 to-rose-500/5",
    iconColor: "text-orange-500",
  },
  {
    id: 30,
    label: "Public Speaking",
    icon: Mic2,
    bg: "from-purple-500/10 to-pink-500/5",
    iconColor: "text-purple-600",
  },
  {
    id: 31,
    label: "Personality Development",
    icon: Users2,
    bg: "from-green-500/10 to-emerald-500/5",
    iconColor: "text-green-600",
  },
  {
    id: 32,
    label: "Hospitality",
    icon: Hotel,
    bg: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    id: 33,
    label: "Aviation",
    icon: Plane,
    bg: "from-sky-500/10 to-cyan-500/5",
    iconColor: "text-sky-600",
  },
  {
    id: 34,
    label: "Travel & Tourism",
    icon: Compass,
    bg: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-500",
  },
  {
    id: 35,
    label: "Event Management",
    icon: CalendarDays,
    bg: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-500",
  },
  {
    id: 36,
    label: "Fashion Design",
    icon: Scissors,
    bg: "from-purple-500/10 to-violet-500/5",
    iconColor: "text-purple-500",
  },
  {
    id: 37,
    label: "Beauty & Wellness",
    icon: Smile,
    bg: "from-rose-500/10 to-pink-500/5",
    iconColor: "text-rose-500",
  },
  {
    id: 38,
    label: "Photography",
    icon: Camera,
    bg: "from-green-500/10 to-teal-500/5",
    iconColor: "text-green-600",
  },
  {
    id: 39,
    label: "Music & Performing Arts",
    icon: Music,
    bg: "from-pink-500/10 to-rose-500/5",
    iconColor: "text-pink-500",
  },
  {
    id: 40,
    label: "Sports & Fitness",
    icon: Trophy,
    bg: "from-emerald-500/10 to-green-500/5",
    iconColor: "text-emerald-600",
  },
];

const VALUES = [
  {
    icon: Compass,
    title: "Wide Range of Options",
    desc: "Choose from thousands of institutes and educators.",
  },
  {
    icon: ShieldAlert,
    title: "Trusted & Verified",
    desc: "All listings are verified for quality and authenticity.",
  },
  {
    icon: Lightbulb,
    title: "Learn Your Way",
    desc: "Find the perfect learning path that fits your goals.",
  },
  {
    icon: Users2,
    title: "Grow Your Future",
    desc: "Start learning today and build a better tomorrow.",
  },
];

const COLOR_MAPS = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    circle: "border-emerald-200 hover:bg-emerald-50",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    circle: "border-blue-200 hover:bg-blue-50",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    circle: "border-purple-200 hover:bg-purple-50",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    circle: "border-orange-200 hover:bg-orange-50",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-600",
    circle: "border-rose-200 hover:bg-rose-50",
  },
};

export default function CategorySearch() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.10),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc)] text-slate-800 antialiased pt-16 font-[Poppins]">
      <Navbar />

      <section className="text-center max-w-[900px] mx-auto px-4 pt-12 pb-10 space-y-3.5">
        <p className="text-[#00dfa2] text-xs sm:text-sm font-medium ">
          Learn. Grow. Succeed.
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#111c24] tracking-tight leading-tight">
  Find the Right Learning
  <span className="inline-block ml-2"></span>
  <br className="hidden sm:block" />
  for{" "}
  <span className="text-[#00dfa2] relative inline-block">
    You
  </span>
</h1>
        <p className="text-gray-700 text-xs sm:text-sm md:text-base font-normal max-w-[650px] mx-auto leading-relaxed">
          Discover the best academies, institutes, colleges, online educators
          and universities all in one place.
        </p>
      </section>

      <div className="w-full max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 space-y-16 pb-16">
        <section className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            {/*<div className="flex items-center">
              <div className="w-8 h-[2px] bg-[#28d7b5] rounded-full"></div>
              <ArrowRight size={14} className="text-[#28d7b5]" />
            </div>*/}

            <h2 className="text-base sm:text-xl font-medium text-slate-900 tracking-tight">
              Find Your Nearest
            </h2>

            {/*<div className="flex items-center ">
             <ArrowRight size={14} className="text-[#28d7b5] rotate-180" />
              <div className="w-8 h-[2px] bg-[#28d7b5] rounded-full"></div>
            </div>*/}
          </div>

          <div className="flex flex-wrap justify-center gap-5 w-full">
            {LEARNING_TYPES.map((type, i) => {
              const Icon = type.icon;
              const mapped = COLOR_MAPS[type.color];
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center justify-between text-center group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all cursor-pointer w-full sm:w-[45%] md:w-[30%] lg:w-[18%] max-w-[240px] min-h-[255px]"
                >
                  <div className="flex flex-col items-center space-y-4 w-full">
                    <div
                      className={`w-16 h-16 rounded-full ${mapped.bg} ${mapped.text} flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs`}
                    >
                      <Icon size={32} className="stroke-[2.5]" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-medium text-base text-slate-900 tracking-tight">
                        {type.title}
                      </h3>
                      <p className="text-gray-500 text-[11px] leading-relaxed max-w-[170px] mx-auto font-medium">
                        {type.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    className={`w-10 h-10 rounded-full border-2 ${mapped.circle} ${mapped.text} flex items-center justify-center mt-5 transition-colors shrink-0`}
                  >
                    <ArrowRight size={18} className="stroke-[3]" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section className="space-y-6 text-center">
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-4">
              {/*<div className="flex items-center ">
                <div className="w-8 h-[2px] bg-[#28d7b5] rounded-full"></div>
                <ArrowRight size={16} className="text-[#28d7b5]" />
              </div>*/}

              <h2 className="text-lg sm:text-2xl font-medium text-slate-900 tracking-tight">
                Find 40 In-demand categories
              </h2>

             {/* <div className="flex items-center ">
                <ArrowRight size={16} className="text-[#28d7b5] rotate-180 " />
                <div className="w-8 h-[2px] bg-[#28d7b5] rounded-full"></div>
              </div>*/}
            </div>

            <p className="text-[14px] text-gray-500 font-medium">
              Find the right learning path for your goals
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3.5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-white border border-gray-100/70 rounded-xl p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col items-center text-center justify-center space-y-2.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all cursor-pointer border-b-2 hover:border-b-[#007965] min-h-[115px] group"
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.bg} ${cat.iconColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                  >
                    <Icon size={28} className="stroke-[2]" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight tracking-tight line-clamp-2 px-0.5">
                    {cat.id}. {cat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full  pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="flex items-start gap-4 p-2">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0
  ${
    i === 0
      ? "bg-emerald-50 text-emerald-500 border border-emerald-100"
      : i === 1
        ? "bg-blue-50 text-blue-500 border border-blue-100"
        : i === 2
          ? "bg-orange-50 text-orange-500 border border-orange-100"
          : "bg-purple-50 text-purple-500 border border-purple-100"
  }`}
                  >
                    <Icon size={24} className="stroke-[2.4]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-[12px] text-gray-500 font-medium leading-relaxed max-w-[220px]">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
