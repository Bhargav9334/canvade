import React from "react";
import {
  Wallet,
  Clock,
  HelpCircle,
  ArrowUpRight,
  Info,
  BookOpen,
  Download,
  Gift,
  Users,
  Share2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const Payments = () => {
  const paymentDetails = [
    {
      id: 1,
      title: "Data Science Fundamentals",
      provider: "ExcelR",
      orderId: "ORD123456",
      amount: "₹12,999",
      date: "20 May 2024",
      time: "10:30 AM",
      status: "Paid",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "UI/UX Design Advanced",
      provider: "DesignTrack",
      orderId: "ORD123457",
      amount: "₹8,999",
      date: "16 May 2024",
      time: "11:20 AM",
      status: "Paid",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Career Guidance Workshop",
      provider: "CANVADE Team",
      orderId: "ORD123458",
      amount: "₹1,999",
      date: "10 May 2024",
      time: "09:15 AM",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      provider: "Intellipaat",
      orderId: "ORD123459",
      amount: "₹6,999",
      date: "05 May 2024",
      time: "02:00 PM",
      status: "Paid",
      image:
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=120&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Python for Data Analysis (Workshop)",
      provider: "UpGrad",
      orderId: "ORD123460",
      amount: "₹1,499",
      date: "02 May 2024",
      time: "04:45 PM",
      status: "Paid",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=120&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="space-y-6 w-full max-w-[1400px] mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Payments & Earnings
        </h1>
        <p className="text-sm text-[#2e5c42] font-medium mt-3">
          Track your payments, invoices and earnings from referrals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full items-stretch">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-center">
          <span className="text-sm font-bold text-slate-900 block mb-6">
            Payment Summary
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 w-full">
            <div className="flex items-center gap-4 pb-4 sm:pb-0 sm:pr-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-black text-gray-900">
                  ₹18,750
                </div>
                <p className="text-xs font-bold text-gray-500">
                  Total Paid
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-6">
              <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-100 text-amber-500 flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-black text-gray-900">
                  ₹2,500
                </div>
                <p className="text-xs font-bold text-gray-500 whitespace-nowrap">
                  Pending Payments
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-black text-gray-900">₹0</div>
                <p className="flex items-center gap-1.5 text-xs font-bold text-gray-500 whitespace-nowrap">
                  Available Earnings
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f4fbf9] border border-emerald-100/60 rounded-2xl p-6 shadow-sm flex justify-between items-center gap-4 relative overflow-hidden min-h-[160px]">
          <div className="space-y-4 z-10 flex-1">
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-gray-900">
                Transaction History
              </h3>
              <p className="text-sm text-[#2e5c42]">
                View all your payment history and invoices.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 w-[130px] py-2.5 border-2 border-[#10b981] text-[#10b981] text-xs font-bold rounded-lg bg-white hover:bg-emerald-50/50 transition-all shadow-sm active:scale-95">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[110px] h-[120px] sm:w-[130px] sm:h-[130px] shrink-0 flex items-end justify-end self-end translate-x-2 translate-y-2">
            <img
              src="/student3.png"
              alt="Payment Card"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900">Payment Details</h2>
      </div>
      <section className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
        <div className="overflow-x-auto -mx-6 ">
          <div className="inline-block min-w-full align-middle px-6">
            <table className="min-w-full divide-y divide-slate-100 bg-slate-50 rounded-2xl ">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="py-3 px-4">Course / Workshop</th>
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Payment Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {paymentDetails.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-sm"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#10b981] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#2e5c42] font-medium mt-2">
                            By {item.provider}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-xs font-semibold text-slate-600 ">
                      {item.orderId}
                    </td>

                    <td className="py-4 px-4 text-xs font-semibold text-slate-900">
                      {item.amount}
                    </td>

                    <td className="py-4 px-4 text-xs font-semibold text-slate-700">
                      <div>{item.date}</div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        {item.time}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-md ${
                          item.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#10b981] hover:bg-emerald-50 hover:border-emerald-100 transition-all shadow-sm">
                          <Info className="w-5 h-5" />
                        </button>

                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#10b981] hover:bg-emerald-50 hover:border-emerald-100 transition-all shadow-sm">
                          <BookOpen className="w-5 h-5" />
                        </button>

                        <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-[#10b981] hover:bg-emerald-50 hover:border-emerald-100 transition-all shadow-sm">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-2 flex flex-col items-center gap-4 border-t border-slate-50">
          <button className="flex items-center gap-1.5 text-[13px] font-medium text-[#10b981] hover:underline  px-4 py-2 transition-all">
            View All Payments <ChevronDown className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              Info
            </span>

            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Course Details
            </span>

            <span className="flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              Invoice
            </span>

            <span className="flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              Download Certificate
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Refer & Earn</h2>
          <p className="text-sm text-[#2e5c42] font-medium mt-3">
            Refer your friends or become our sales partner and earn unlimited
            rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-stretch">
          <div className="bg-[#f7fdfb] border border-emerald-100/60 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm overflow-hidden min-h-[240px]">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 space-y-4 -mt-12">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-emerald-100 text-[#10b981] shadow-sm shrink-0">
                  <Gift className="w-8 h-8" />
                </div>
                <div className=" space-y-2">
                  <span className="text-xs font-bold text-gray-800 block">
                    Refer a Friend
                  </span>
                  <h3 className="text-[14px] font-semi text-[#10b981] leading-tight">
                    Earn without limit!
                  </h3>
                  <span className="text-xs text-gray-500 font-medium block mt-0.5">
                    (T&C Applied)
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-[#10b981] text-sm">✓</span> Share
                  courses with your friends
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10b981] text-sm">✓</span> They enroll
                  and learn
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10b981] text-sm">✓</span> You earn
                  exciting rewards
                </li>
              </ul>

              <button className="flex items-center justify-center gap-2.5 w-[150px] py-3 bg-[#00aa6c] hover:bg-[#00945e] text-white text-[14px] font-semibold rounded-xl shadow-md shadow-emerald-100/50 transition-all active:scale-95">
                Refer Now
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="w-full sm:w-[260px] h-[220px] shrink-0 flex items-end justify-center mx-auto sm:mx-0 self-end -translate-y-4 sm:-translate-y-6">
              <img
                src="/student4.png"
                alt="Refer a Friend Illustration"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          <div className="bg-[#fffbf7] border border-orange-100/60 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-sm overflow-hidden min-h-[240px]">
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-orange-100 text-orange-500 shadow-sm shrink-0">
                  <Users className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-gray-500 block uppercase tracking-wide">
                      Become Our
                    </span>

                    <h3 className="text-base font-extrabold text-[#e07a00] leading-tight">
                      Sales Partner
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-[240px]">
                    Get free training, refer educators and earn without limit!
                  </p>

                  <span className="text-xs text-slate-500  font-medium">
                    (T&C Applied)
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-sm">✓</span> Get free
                  product training
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-sm">✓</span> Refer
                  educators & institutes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500 text-sm">✓</span> Earn
                  attractive commissions
                </li>
              </ul>

              <button className="flex items-center justify-center gap-2.5 w-[150px] py-3 bg-[#f08804] hover:bg-[#d67800] text-white text-[14px] font-semibold rounded-xl shadow-md shadow-emerald-100/50 transition-all active:scale-95">
                Apply Now 
                <Share2 className="w-3.5 h-3.5" />
              </button>

            </div>

            <div className="w-full sm:w-[260px] h-[220px] shrink-0 flex items-end justify-center mx-auto sm:mx-0 self-end -translate-y-4 sm:-translate-y-6">
              <img
                src="/student5.png"
                alt="Refer a Friend Illustration"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-sm font-medium text-[#2e5c42] pt-6 flex items-center justify-center gap-1.5">
          Thank you for being a part of{" "}
          <span className="text-slate-600 tracking-tight font-black">
            CANVADE!
          </span>{" "}
          Keep learning and keep earning. 🚀
        </div>
      </section>
    </div>
  );
};

export default Payments;
