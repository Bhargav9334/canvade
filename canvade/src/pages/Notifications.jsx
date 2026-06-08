import React from "react";
import {
  MessageSquare,
  User,
  Banknote,
  Compass,
  PlusSquare,
  BookOpen,
  Flame,
  Star,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotificationItem = ({ icon: Icon, title, description, isPromotion }) => (
  <div
    className={`flex items-start gap-4 p-4 rounded-2xl mb-3 transition-all cursor-pointer hover:shadow-md ${isPromotion ? "bg-[#FFF9E5]" : "bg-[#F4F7F9]"}`}
  >
    <div className="p-2.5 bg-white rounded-lg shadow-sm flex items-center justify-center">
      <Icon size={20} className="text-[#059669]" strokeWidth={2.5} />
    </div>
    <div className="flex-1">
      <h3 className="text-[15px] font-bold text-[#1F2937] leading-tight">
        {title}
      </h3>
      <p className="text-[14px] text-[#6B7280] mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const NotificationsPage = () => {
  const notifications = [
    {
      icon: MessageSquare,
      title: "Enquiry Response",
      description:
        "ABC Institute replied to your enquiry about Data Science Course",
      isPromotion: false,
    },
    {
      icon: User,
      title: "Batch Starting Soon",
      description:
        "Your shortlisted course starts in 2 days. Secure your seat before admissions close.",
      isPromotion: false,
    },
    {
      icon: Banknote,
      title: "Promotion: Price Drop",
      description:
        "Price dropped for Digital Marketing Course. Save ₹5,000 if you enroll today.",
      isPromotion: true,
    },
    {
      icon: Compass,
      title: "Recommendation",
      description:
        "New courses matching your interest in Web Development. Explore trending options curated for you.",
      isPromotion: false,
    },
    {
      icon: PlusSquare,
      title: "Promotion: New academy in Moti Nagar, New Delhi",
      description:
        "Checkout the this new martial arts academy in moti nagar. Get physically fit better than you ever were. Checkout our page.",
      isPromotion: true,
    },
    {
      icon: MessageSquare,
      title: "Contact Attempt",
      description: "XYZ Institute tried to contact you.",
      isPromotion: false,
    },
    {
      icon: BookOpen,
      title: "High Demand Alert",
      description:
        "ABC Institute replied to your enquiry about Data Science Course",
      isPromotion: false,
    },
    {
      icon: Flame,
      title: "Enrollment Success",
      description:
        "Seats filling fast for UI/UX Design Course. Only a few spots remaining.",
      isPromotion: false,
    },
    {
      icon: Star,
      title: "Review Reminder",
      description:
        "Share your experience for Graphic Design Course. Help other students make better decisions.",
      isPromotion: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow w-full px-5 md:px-10 lg:px-20 mt-20 mb-10">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-[6px] h-9 bg-[#FBBF24] rounded-full"></div>
          <h1 className="text-3xl font-bold text-[#068467]">Notifications</h1>
        </div>

        <div className="max-w-full">
          {notifications.map((notif, index) => (
            <NotificationItem key={index} {...notif} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
