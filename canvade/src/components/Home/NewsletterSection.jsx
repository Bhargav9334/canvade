import React from "react";
import { BadgeCheck, MoreVertical, CalendarDays } from "lucide-react";

const COURSE_DATA = [
  {
    id: 1,
    anim: "anim-left",
    title:
      "DMA academy students won the state mix martial arts championship held at Delhi",
    institution: "DMA - Delhi Martial Arts Academy ",
    image: "get.png",
  },
];

export default function NewsletterSection() {
  return (
    <section className="px-2 md:px-16 py-12 bg-white ">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center w-full max-w-[1100px] mx-auto mb-10 px-2">
          <h2 className="text-[24px] md:text-[42px] font-light text-[#333] mb-4 tracking-tight">
            Stay Updated with <span className="text-[#008566]">What's Happening</span>{" "}
            in <span className="text-[#008566]">Education</span>
          </h2>
          <p className="text-[#555] text-[14px] md:text-[15.5px] leading-[1.6] max-w-[920px] mx-auto">
            Discover the latest announcements, student achievements, workshops, admissions, events, press releases, and institute updates from across the CANVADE network. Follow the institutions and categories you care about and stay informed about opportunities that could shape your future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {COURSE_DATA.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl group cursor-pointer"
            >
              <div className="p-2 pb-0">
                <div className="relative h-44 md:h-45 w-full overflow-hidden rounded-t-[8px] rounded-bl-[16px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-2 -left-0.5 translate-y-1/4 w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white z-10">
                    <img
                      src="workshop.png"
                      alt="Logo"
                      className="w-full h-full mx-auto p-0.5 object-cover rounded-full scale-200 "
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 bg-white pl-2 pt-0 rounded-tl-lg flex items-center gap-2 h-8">
                    <span className="bg-[#FFC107] text-[10px] text-white px-2 py-0.5 rounded-md uppercase">
                      Event
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2 pt-3">
                <div className="inline-flex items-center gap-1 bg-[#f1f5f9] px-3.5 py-1 rounded-[6px] mb-2">
                  <span className="text-[10px] font-medium text-[#2563eb] uppercase tracking-tight">
                    {item.institution}
                  </span>
                  <BadgeCheck className="w-4 h-4 text-white fill-[#3b82f6]" />
                </div>

                <h3 className="text-[16px] md:text-[14px] font-medium text-gray-900 leading-[24px] mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-[13px] font-medium">24 May'2026</span>
                  </div>

                  <button className="text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
