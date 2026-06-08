import React from "react";
import {
  Send,
  Crown,
  Eye,
  Calendar,
  BookOpen,
  Check,
  Map,
  Star,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Percent,
  Users,
  HelpCircle,
  ChevronsRight,
  Wallet,
} from "lucide-react";

const comparisonFeatures = [
  {
    id: 1,
    name: "1. Visibility",
    desc: "Improve your institute discoverability",
    free: "Basic",
    pro: "3X More Visibility",
    icon: Eye,
    color: "text-teal-500 bg-teal-50 border-teal-100",
  },
  {
    id: 2,
    name: "2. Workshops",
    desc: "Organize and promote workshops",
    free: "1 per month",
    pro: "Unlimited Workshops",
    icon: Calendar,
    color: "text-orange-500 bg-orange-50 border-orange-100",
  },
  {
    id: 3,
    name: "3. Course Listing",
    desc: "List your courses on Canvade",
    free: "5 Courses",
    pro: "7 Courses",
    freeSub: "+2 Lifetime (First time joiner)",
    proSub: "+2 Lifetime (First time joiner)",
    icon: BookOpen,
    color: "text-purple-500 bg-purple-50 border-purple-100",
  },
  {
    id: 4,
    name: "4. Map",
    desc: "Show your institute location",
    free: "Only Address",
    pro: "Inbuilt Map with View • Direction • Share",
    icon: Map,
    color: "text-emerald-500 bg-emerald-50 border-emerald-100",
  },
  {
    id: 5,
    name: "5. Reviews & Ratings",
    desc: "Manage reviews and build trust",
    free: "Basic Review & Ratings",
    pro: "Interact with Reviews & Ratings",
    icon: Star,
    color: "text-amber-500 bg-amber-50 border-amber-100",
  },
  {
    id: 6,
    name: "6. Blogs & Press Releases",
    desc: "Share updates and announcements",
    free: "2 per month",
    pro: "30 per month",
    icon: FileText,
    color: "text-blue-500 bg-blue-50 border-blue-100",
  },
  {
    id: 7,
    name: "7. Profile Verification",
    desc: "Show authenticity and trust",
    free: "Basic",
    pro: "Eligible for Tags & Trusted Verification",
    icon: ShieldCheck,
    color: "text-green-500 bg-green-50 border-green-100",
  },
  {
    id: 8,
    name: "8. Enrollment Charges",
    desc: "Platform enrollment fee",
    free: "10%",
    pro: "6%",
    icon: Percent,
    color: "text-orange-400 bg-orange-50 border-orange-100",
  },
  {
    id: 9,
    name: "9. Visitor Details",
    desc: "Know your visitors better",
    free: "Only Enquiry Details",
    pro: "Viewed Leads Details",
    icon: Users,
    color: "text-indigo-500 bg-indigo-50 border-indigo-100",
  },
  {
    id: 10,
    name: "10. Support",
    desc: "Get help whenever you need",
    free: "Basic Support",
    pro: "Priority Support",
    icon: HelpCircle,
    color: "text-sky-500 bg-sky-50 border-sky-100",
  },
  {
    id: 11,
    name: "11. Payment Settlement",
    desc: "Withdrawal settlement time",
    free: "30 – 50 Days",
    pro: "15 – 20 Days",
    icon: Wallet,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

const Promotions = () => {
  return (
    <div className="w-full bg-slate-50/30  min-h-screen pb-16 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full items-stretch">
        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm flex flex-col justify-between min-h-[220px] relative text-left">
          <div className="flex flex-row items-start gap-4 w-full">
            <div className="w-16 h-16 rounded-full bg-[#eefbf7] flex items-center justify-center shrink-0">
              <Send className="w-7 h-7 text-[#1fa485] transform rotate-[-12deg]" />
            </div>

            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                Free Plan
              </h3>
              <p className="text-xs font-medium text-slate-800 mt-0.5">
                Start free and build your presence
              </p>

              <div className="mt-3 mb-4 flex items-baseline gap-1">
                <span className="text-[34px] font-bold text-slate-900 leading-none">
                  ₹0
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  / month
                </span>
              </div>

              <div className="space-y-2 text-xs font-semibold text-slate-600 pl-0.5 mb-5">
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>Perfect for getting started</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>Basic visibility & essential tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>Ideal for small institutes</span>
                </div>
              </div>

              <button className="w-full sm:w-max min-w-[250px] border-2 border-[#1fa485]/80 hover:bg-emerald-50 text-[#1fa485] font-bold py-2 px-6 rounded-lg text-xs transition-all shadow-sm text-center">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-6 border-2 border-[#1fa485] shadow-sm flex flex-col justify-between min-h-[220px] relative text-left">
          <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
            <span className="bg-[#1fa485] text-white text-[10px] font-black tracking-wider uppercase px-4 py-1 rounded-lg shadow-sm">
              Most Popular
            </span>
          </div>

          <div className="flex flex-row items-start gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-[#eefbf7] flex items-center justify-center shrink-0">
              <Crown className="w-7 h-7 text-[#1fa485]" />
            </div>

            <div className="flex-1 flex flex-col items-start">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                Pro Plan
              </h3>
              <p className="text-xs font-medium text-slate-800 mt-0.5">
                Grow faster with premium benefits
              </p>

              <div className="mt-3 mb-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-[34px] font-bold text-slate-900 leading-none">
                    ₹999
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    / month
                  </span>
                </div>
                <p className="text-[10px] font-bold text-slate-800 tracking-wide mt-0.5">
                  Billed yearly
                </p>
              </div>

              <div className="space-y-2 text-xs font-semibold text-slate-600 pl-0.5 mb-5">
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>3X more visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>Advanced tools & analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check
                    className="w-3.5 h-3.5 text-[#1fa485] shrink-0"
                    strokeWidth={3.5}
                  />
                  <span>Better leads & growth</span>
                </div>
              </div>

              <button className="w-full sm:w-max min-w-[250px] border bg-[#1fa485] hover:bg-[#198f73] text-white font-bold py-2 px-6 rounded-lg text-xs transition-all shadow-sm text-center">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[24px] p-5 border border-slate-200 shadow-sm w-full space-y-3 overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1.5 pb-2">
          <h2 className="text-base font-bold text-slate-800 tracking-tight">
            Plan Comparison
          </h2>
          <p className="text-[10px] font-semibold text-slate-800 tracking-wide">
            All plans include dashboard access and basic support
          </p>
        </div>

        <div className="w-full overflow-x-auto rounded-xl border border-slate-200">
          <div className="min-w-[768px]">
            {" "}
            <div className="grid grid-cols-12 bg-gray-100 border-b border-gray-300 items-center text-[13px] font-bold text-gray-700 tracking-tight select-none">
              {/* Features Section */}
              <div className="col-span-5 py-3.5 pl-4 border-r border-gray-300 font-bold">
                Features
              </div>

              <div className="col-span-3 text-center py-3.5 border-r border-gray-300 font-bold">
                Free Plan
                <span className="block text-[10px] font-medium text-gray-700 mt-0.5">
                  ₹0 / month
                </span>
              </div>

              <div className="col-span-4 text-center py-3.5 bg-gray-100 font-bold">
                Pro Plan
                <span className="block text-[10px] font-medium text-gray-700 mt-0.5">
                  ₹999 / month
                </span>
              </div>
            </div>
            <div className="divide-y divide-slate-200">
              {comparisonFeatures.map((row) => {
                const FeatureIcon = row.icon;

                return (
                  <div
                    key={row.id}
                    className="grid grid-cols-12 items-stretch transition-colors hover:bg-slate-50/30"
                  >
                    <div className="col-span-5 flex items-center gap-3 py-1.5 px-3 border-r border-slate-200">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 mt-0.5 scale-90 ${row.color}`}
                      >
                        <FeatureIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-700 leading-tight">
                          {row.name}
                        </h4>
                        <p className="text-[9.5px] font-medium text-slate-600 leading-tight mt-0.5">
                          {row.desc}
                        </p>
                      </div>
                    </div>

                    <div className="col-span-3 text-center flex flex-col items-center justify-center py-1.5 px-2 border-r border-slate-200">
                      <span className="text-xs font-semibold text-slate-600">
                        {row.free}
                      </span>
                      {row.freeSub && (
                        <span className="text-[8.5px] font-bold text-[#1fa485] mt-0.5 bg-emerald-50 px-1.5 py-0.5 rounded leading-tight">
                          {row.freeSub}
                        </span>
                      )}
                    </div>

                    <div className="col-span-4 flex items-center justify-between py-1.5 pl-6 pr-4 bg-gray-100 relative">
                      <div className="flex-1 text-center flex flex-col items-center justify-center">
                        <span className="text-xs font-bold text-[#1fa485] tracking-wide">
                          {row.pro}
                        </span>
                        {row.proSub && (
                          <span className="text-[8.5px] font-bold text-[#1fa485] mt-0.5 bg-emerald-50 px-1.5 py-0.5 rounded leading-tight">
                            {row.proSub}
                          </span>
                        )}
                      </div>

                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1fa485] shrink-0 ml-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f8fa] rounded-[16px] p-4 border border-[#e2edf2] w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4 select-none">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#b2ddce]">
            <Crown className="w-6 h-6 text-[#00875a]" strokeWidth={1.5} />
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-[#1e293b] tracking-tight">
              Need more visibility and advanced tools?
            </h4>
            <p className="text-[12px] font-medium text-[#64748b] mt-0.5">
              Upgrade to Pro and take your institute to the next level.
            </p>
          </div>
        </div>

        <button className="bg-[#00875a] hover:bg-[#00714b] text-white font-bold px-6 py-3 rounded-lg text-xs transition-all shrink-0 shadow-sm flex items-center gap-2">
          Upgrade Now
          <ChevronsRight className="w-4 h-4" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default Promotions;
