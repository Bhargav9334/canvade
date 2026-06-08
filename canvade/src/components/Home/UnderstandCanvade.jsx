import React from "react";

const REEL_DATA = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    offset: "",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
    offset: "lg:-mt-10",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    offset: "",
  },
];

export default function UnderstandCanvade() {
  return (
    <section className="px-6 md:px-10 py-10 bg-white select-none">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-20 relative z-20">          <h2 className="text-2xl md:text-4xl font-heading font-medium text-gray-800 mb-6 tracking-tight">
            Understand{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald-600">CANVADE</span>
            </span>{" "}
            in Seconds
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed -mt-3">
            Watch quick reels to see how Canvade helps you discover courses,
            compare institutes, and choose the right path - all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {REEL_DATA.map((reel) => (
            <div key={reel.id} className={`group ${reel.offset}`}>
              <div className="relative aspect-[9/13] rounded-[50px] overflow-hidden shadow-2xl border-[6px] border-white transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:shadow-xl bg-gray-50 cursor-pointer isolate transform-gpu will-change-transform">
                <img
                  src={reel.img}
                  alt="Learning Reel"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 transform-gpu"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/85">
                    <svg
                      className="w-8 h-8 text-white fill-current ml-1 drop-shadow-md"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">
                  What is Canvade
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
