import { useState } from "react";
import {
  ShieldCheck,
  Calendar,
  Monitor,
  Star,
  Clock,
  User,
  Mail,
  Phone,
  Trash2,
  RefreshCcw,
  ArrowRight,
  Heart,
  Lock,
  CheckCircle2,
  Headphones,
  MapPin,
  Tag,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CheckoutPage() {
  const [coupon, setCoupon] = useState("");

  return (
    <>
      <div
        className="checkout-root min-h-screen bg-white"
      >
        <Navbar />

        <main className="max-w-[1700px] pt-28 px-3 sm:px-4 md:px-8 lg:px-12">

          <div className="mobile-header-stack flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1
                className="text-3xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Review Your Selection
              </h1>
              <p className="text-gray-500 font-medium">
                You're one step away from securing your seat.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl flex items-center gap-3 mobile-full">
              <div className="bg-white p-2 rounded-lg text-emerald-600 shadow-sm shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-emerald-900">
                  Your data is 100% secure
                </p>
                <p className="text-[11px] text-emerald-700">
                  We use encrypted and secure payment
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex-grow space-y-6 min-w-">

              <div className="bg-white rounded-2xl border border-gray-100 p-10 mobile-section-p shadow-sm">
                <h2 className="text-[18px] font-bold text-gray-800 mb-6">
                  1. Course in Cart
                </h2>

                <div className="flex flex-col gap-6 mb-8">

                  <div className="mobile-course-row flex flex-col md:flex-row gap-6">
                    <div className="relative mobile-img-full w-full md:w-64 h-44 rounded-2xl overflow-hidden shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
                        alt="Course"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                        Bestseller
                      </span>
                      <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-gray-700 hover:text-red-500 border-0">
                        <Heart size={16} />
                      </button>
                    </div>

                    <div className="flex-grow min-w-0">
                      <span className="text-emerald-600 bg-emerald-50 text-[11px] font-bold px-3 py-1 rounded-md mb-3 inline-block">
                        Professional Certificate
                      </span>
                      <h3 className="text-[22px] xs-text-xl font-bold text-gray-900 leading-tight mb-2">
                        Full Stack Web Development Bootcamp
                      </h3>
                      <div className="flex flex-col gap-y-3.5">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-gray-800 text-[16px] leading-tight">
                            Masai School
                          </p>
                          <CheckCircle2
                            size={16}
                            className="text-blue-500 fill-blue-100"
                          />
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-600 shrink-0" />
                          <span className="text-[16px] font-medium">
                            Bangalore, Karnataka
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-icon-grid grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-50">
                    {[
                      { icon: <Clock size={20} />,    label: "Duration",       value: "6 Months"     },
                      { icon: <Monitor size={20} />,  label: "Mode",           value: "Online"        },
                     // { icon: <Calendar size={20} />, label: "Batch Starts",   value: "15 Jun, 2024" },
                      { icon: <Star size={20} />,     label: "(1,245 Reviews)", value: "4.6"          },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="p-3 bg-gray-200 rounded-full text-gray-700 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="mobile-icon-val text-[16px] font-bold text-gray-900">
                            {item.value}
                          </p>
                          <p className="mobile-icon-lbl text-[14px] text-gray-400 font-bold">
                            {item.label}
                          </p>
                        </div>
                        {i < 3 && (
                          <div className="hidden md:block ml-auto h-8 border-r border-gray-100" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 border border-emerald-100/60 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg text-emerald-600 shadow-sm shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-gray-800">
                        High Demand Course
                      </p>
                      <p className="text-[14px] text-gray-500">
                        12,450+ students have already enrolled
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-bold text-emerald-700 shrink-0">
                    Limited Seats Left!
                  </span>
                </div>

              {/*<div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-red-500 font-bold text-sm hover:opacity-80 border-0 bg-transparent">
                    <Trash2 size={16} /> Remove
                  </button>
                  <button className="flex items-center gap-2 text-emerald-700 font-bold text-sm hover:opacity-80 border-0 bg-transparent">
                    <RefreshCcw size={16} /> Change Batch
                  </button>
                </div>*/}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm">
                <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
                  <h2 className="text-[18px] font-bold text-gray-800">
                    2. Student Details
                  </h2>
                  <button className="text-emerald-700 font-bold text-sm hover:opacity-80 border-0 bg-transparent">
                    Login to auto-fill your details
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-700 block">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="text"
                        defaultValue="Ananya Sharma"
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none text-sm font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-700 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="email"
                        defaultValue="ananya.sharma@example.com"
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none text-sm font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-700 block">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      />
                      <input
                        type="text"
                        defaultValue="+91 98765 43210"
                        className="w-full bg-gray-50/70 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 outline-none text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100/60 flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <p className="text-[12px] text-emerald-800 font-medium">
                    We will use these details for enrollment and communication.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm">
                <h2 className="text-[18px] font-bold text-gray-800 mb-6">
                  3. Why students trust Canvade
                </h2>
                <div className="mobile-trust-grid grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <ShieldCheck size={24} />,
                      title: "Verified Institutes",
                      desc: "All our partners are verified and trusted",
                    },
                    {
                      icon: <Lock size={24} />,
                      title: "Secure Payments",
                      desc: "100% secure payments with multiple options",
                    },
                    {
                      icon: <Headphones size={24} />,
                      title: "24/7 Support",
                      desc: "We're here to help you anytime",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[18px] font-bold text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-[14px] text-gray-500 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    

            <div className="mobile-sidebar-full tablet-sidebar-full w-full lg:w-[400px] shrink-0 space-y-6">
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm">
                <p className="text-[14px] font-bold text-gray-800 mb-4">
                  Have a coupon code?
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm min-w-0"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                  <button className="bg-white border border-emerald-600 text-emerald-600 font-bold px-5 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-colors shrink-0">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mobile-order-sum tablet-order-sum bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm w-full">
                <h3 className="text-[20px] font-bold text-gray-900 mb-8">
                  Order Summary
                </h3>

                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-[16px] font-bold text-gray-900 leading-tight">
                      Full Stack Web Development Bootcamp
                    </p>
                    <p className="text-[14px] text-slate-500 mt-1">
                      Masai School
                    </p>
                  </div>
                  <span className="text-[16px] font-bold text-gray-900 shrink-0">
                    ₹ 49,999
                  </span>
                </div>

                <div className="border-t border-gray-50 pt-6 space-y-4 border-b pb-6 mb-6">
                  {[
                    { label: "Course Fee",                    value: "₹ 49,999", color: "text-gray-900"    },
                    { label: "Discount (Limited Time Offer)", value: "- ₹ 5,000", color: "text-emerald-600" },
                    //{ label: "Platform Fee",                  value: "₹ 499",     color: "text-gray-900"    },
                    //{ label: "GST (18%)",                     value: "₹ 8,099",   color: "text-gray-900"    },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between text-[15px]">
                      <span
                        className={
                          i === 1
                            ? "text-emerald-600 font-medium"
                            : "text-gray-600 font-medium"
                        }
                      >
                        {row.label}
                      </span>
                      <span className={`${row.color} font-bold`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-1">
                  <span className="text-[18px] font-bold text-gray-900">
                    Total Payable
                  </span>
                  <span className="mobile-total-amt text-[24px] font-black text-gray-900">
                    ₹ 44,999
                  </span>
                </div>
                <p className="text-[13px] text-slate-400 mb-8">
                  Inclusive of all taxes
                </p>

                <div className="mobile-saving-wrap bg-emerald-50/50 border border-emerald-100/50 p-3 rounded-xl flex items-center justify-center gap-2 mb-6">
                  <div className="bg-emerald-500 text-white rounded-md p-1 shrink-0">
                    <Tag size={14} fill="currentColor" />
                  </div>
                  <p className="mobile-saving-text text-[14px] font-bold text-emerald-800">
                    You Save ₹ 5,000{" "}
                    <span className="font-medium text-emerald-700">
                      on this order
                    </span>
                  </p>
                </div>

                <button className="mobile-enroll-btn w-full bg-[#008560] hover:bg-[#006e52] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] text-[16px] mb-4">
                  Proceed to Enroll <ArrowRight size={20} />
                </button>

                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <ShieldCheck size={18} className="text-emerald-600" />
                  <span className="text-[13px] font-semibold">
                    SSL Secured Payment
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm flex items-center justify-between gap-4">
                <div>
                  <p className="text-[14px] font-bold text-gray-800">
                    EMI Options Available
                  </p>
                  <p className="text-[12px] text-gray-400 mb-2">
                    No cost EMI starting from
                  </p>
                  <p className="text-[22px] font-bold text-gray-900">
                    ₹ 2,233{" "}
                    <span className="text-sm font-medium text-gray-400">
                      /month
                    </span>
                  </p>
                  <button className="text-emerald-700 font-bold text-[13px] mt-2 flex items-center gap-1 border-0 bg-transparent">
                    View Plans <ArrowRight size={14} />
                  </button>
                </div>
                <div className="mobile-emi-icon w-16 h-16 shrink-0 opacity-20 flex items-center justify-center">
                  <Calendar size={48} className="text-gray-400" />
                </div>
              </div>

              

              <div className="bg-white rounded-2xl border border-gray-100 p-6 mobile-section-p shadow-sm">
                <p className="text-[12px] font-bold text-gray-400 uppercase mb-4 tracking-widest">
                  We Accept
                </p>
                <div className="mobile-pay-gap flex flex-wrap items-center gap-6 py-4">
                  <img
                    src="/visa.png"
                    className="h-4 w-auto object-contain transition-opacity"
                    alt="Visa"
                  />
                  <img
                    src="/mastercard.png"
                    className="h-6 w-auto transition-opacity"
                    alt="Mastercard"
                  />
                  <img
                    src="/UPI.png"
                    className="h-5 w-auto transition-opacity"
                    alt="UPI"
                  />
                  <img
                    src="/rupay.png"
                    className="h-5 w-auto transition-opacity"
                    alt="RuPay"
                  />
                  <img
                    src="/paytm.png"
                    className="h-4 w-auto transition-opacity"
                    alt="Paytm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-not-ready mt-12 bg-emerald-50/40 border border-emerald-100/60 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              {/*
              <h4 className="text-[18px] font-bold text-gray-800">
                Not ready to enroll yet?
              </h4>
              <p className="text-gray-500 text-sm mt-1">
                Save this course for later and continue learning.
              </p>
            </div>
            <button className="mobile-save-btn bg-white border border-emerald-600 text-emerald-600 font-bold px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-emerald-50 transition-colors shrink-0">
              <Heart size={18} /> Save for Later
            </button>
          </div>*/}

          <div className="mobile-bottom-sec mt-8 bg-white border border-gray-100 rounded-2xl p-8 mobile-section-p flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">

            <div className="mobile-border-none flex items-center gap-5 md:border-r border-gray-100 md:pr-12 w-full md:w-auto">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-[18px] font-bold text-gray-800 leading-tight">
                  Your Future is Safe with Canvade
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Join thousands of students who are building better careers
                </p>
              </div>
            </div>

            <div className="mobile-bottom-right flex items-center justify-between md:justify-end gap-10 w-full md:w-auto flex-grow md:flex-grow-0">
              <div className="shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900 leading-none">
                    4.7/5
                  </span>
                  <Star className="text-amber-400 fill-amber-400" size={20} />
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1.5">
                  Based on 25,000+ reviews
                </p>
              </div>

              <div className="flex -space-x-3 shrink-0">
                {[11, 12, 13].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    className="mobile-avatar-w w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    alt="user"
                  />
                ))}
                <div className="mobile-avatar-w w-12 h-12 rounded-full bg-gray-50 border-4 border-white flex items-center justify-center text-[11px] font-extrabold text-gray-600 shadow-sm">
                  +25K
                </div>
              </div>
            </div>
          </div>
        </div></div></main>
        <Footer />
      </div>
    </>
  );
}