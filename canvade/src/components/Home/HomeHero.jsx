import { useState, useEffect } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Globe,
  Youtube,
  MessageCircle,
} from "lucide-react";

const BG_IMAGES = ["/students.jpg", "/students1.jpg", "/students2.jpg"];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return width;
}

export default function HomeHero() {
  const [visible, setVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  const [fadingIn, setFadingIn] = useState(false);
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (BG_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setFadingIn(true);
      setTimeout(() => {
        setCurrentBg((p) => (p + 1) % BG_IMAGES.length);
        setFadingIn(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const inp =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-[12px] md:text-[13px] text-gray-600 placeholder-gray-400 placeholder:text-[12px] md:placeholder:text-[14px] outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";
  const lbl =
    "mb-1 block text-[12px] font-bold md:text-[14px] font-inter text-black";
  const sel = inp + " appearance-none bg-white pr-10";

  const socialIcons = [
    { icon: <Instagram size={16} />, key: "ig" },
    { icon: <Facebook size={16} />, key: "fb" },
    { icon: <Linkedin size={16} />, key: "li" },
    { icon: <Twitter size={16} />, key: "x" },
    { icon: <Globe size={16} />, key: "gl" },
    { icon: <Youtube size={16} />, key: "yt" },
    { icon: <MessageCircle size={16} />, key: "wa" },
  ];

  const ChevronDown = () => (
    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <svg
        className="h-4 w-4 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const SocialBar = () => (
    <div
      style={{
        position: "absolute",
        left: "-15px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        backgroundColor: "rgba(0,0,0,0.8)",
        padding: "10px 5px",
        borderRadius: "999px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {socialIcons.map((item) => (
        <button
          key={item.key}
          className="flex items-center justify-center text-white/90 transition hover:text-emerald-400 hover:scale-110 p-1.5"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );

  const HeroText = () => (
    <div className="font-heading">
      <h1
        style={{
          fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "50px",
          fontWeight: 400,
          lineHeight: 1,
          color: "white",
          marginBottom: "0.8rem",
          letterSpacing: "-0.02em",
        }}
      >
        Find Courses
        <br />& Institutes
      </h1>

      <div style={{ marginTop: "10px", marginBottom: "0.8rem" }}>
        <span style={{ position: "relative", display: "inline-block" }}>
          <span
            style={{
              position: "relative",
              display: "inline-block",
              padding: isMobile ? "4px 12px" : "6px 18px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 80' preserveAspectRatio='none'%3E%3Cpath d='M10,40 Q15,10 50,15 T100,20 T150,12 T200,18 T250,15 T290,25 L285,60 Q270,75 230,70 T180,65 T130,72 T80,68 T30,75 T10,55 Z' fill='white'/%3E%3C/svg%3E")`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                transform: "scale(1.1, 1.2)",
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 10,
                fontSize: isMobile ? "1.6rem" : "48px",
                fontWeight: 400,
                color: "#facc15",
                lineHeight: 1,
              }}
            >
              Worldwide
            </span>
          </span>
        </span>
      </div>

      <p
        style={{
          color: "#FFFFFF",
          fontSize: "16px",
          lineHeight: "25px",
          weight: 400,
          style: "Regular",
          letterSpacing: "0%",
        }}
      >
        Discover courses and institutes that match your interests
        <br />
        and career goals.Compare programs and choose the right path -
        <br />
        academic, professional, or skill-based - all in one place.
      </p>
    </div>
  );

  return (
    <>
      <div
        className="relative mx-auto pt-6"
        style={{
          maxWidth: "1700px",
          marginTop: isMobile ? "4.5rem" : "5.5rem",
          paddingLeft: isMobile ? "16px" : isTablet ? "32px" : "48px",
          paddingRight: isMobile ? "16px" : isTablet ? "32px" : "48px",
          position: "relative",
        }}
      >
        {!isMobile && !isTablet && <SocialBar />}

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: isMobile ? "0.75rem" : "2rem",
            marginLeft: "0",
            height: (isMobile || isTablet) ? "auto" : "580px",
            minHeight: (isMobile || isTablet) ? "unset" : "580px",
            maxHeight: (isMobile || isTablet) ? "none" : "580px",
            boxShadow: "none",
          }}
        >
          <img
            src={BG_IMAGES[currentBg]}
            alt="Hero Background"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: fadingIn ? 0 : 1,
              transition: "opacity 0.8s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.85) 0%, rgba(4, 120, 87, 0.75) 100%)",
            }}
          />

          {isMobile && <SocialBar />}

          {(isMobile || isTablet) ? (
            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: isMobile ? "3rem 1.5rem 2.5rem 45px" : "3rem 2.5rem 3rem 2.5rem",
                animation: "fadeUp 0.6s ease forwards",
              }}
            >
              <HeroText />

              <div className="bg-white rounded-2xl p-5 md:p-8 shadow-xl mt-6 md:max-w-2xl md:mx-auto">
                <div className="mb-4">
                  <label className={lbl}>Programs & Institutions</label>
                  <input
                    type="text"
                    placeholder="Type Course and Institutions you want to enroll"
                    className={inp}
                  />
                </div>

                <div className="mb-4">
                  <label className={lbl}>Location</label>
                  <input
                    type="text"
                    placeholder="eg. India, Delhi, New Delhi, Connaught Place - 110001"
                    className={inp}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className={lbl}>Search For</label>
                    <div className="relative">
                      <select className={sel} defaultValue="">
                        <option value="" disabled>
                          eg. Institutes
                        </option>
                        <option>Institutes</option>
                        <option>Schools</option>
                        <option>Academies</option>
                        <option>Colleges</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                  <div>
                    <label className={lbl}>Fee Range</label>
                    <div className="relative">
                      <select className={sel} defaultValue="">
                        <option value="" disabled>
                          eg. 0 – 5000
                        </option>
                        <option>0 – 5000</option>
                        <option>5000 – 20000</option>
                        <option>20000 – 40000</option>
                        <option>40000 – 80000</option>
                        <option>80000 – 200000</option>
                        <option>200000 – 400000</option>
                        <option>400000+</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <label className={lbl}>Learning Mode</label>
                    <div className="relative">
                      <select className={sel} defaultValue="">
                        <option value="" disabled>
                          eg. Hybrid
                        </option>
                        <option>Hybrid</option>
                        <option>Onsite</option>
                        <option>Online</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                  <div>
                    <label className={lbl}>Duration</label>
                    <div className="relative">
                      <select className={sel} defaultValue="">
                        <option value="" disabled>
                          eg. 0 – 6 Months
                        </option>
                        <option>0 – 6 Months</option>
                        <option>6 – 12 Months</option>
                        <option>1 – 2 year</option>
                        <option>2+ Years</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                <button className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm transition-all">
                  Search Now
                </button>

                <p className="text-[#FF0000] text-[12px]  leading-tight text-center mt-3">
                  * Select the relevant filters to refine your search. This will
                  help you see more accurate and personalized results.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div
                style={{
                  position: "absolute",
                  left: isTablet ? "2rem" : "4rem",
                  top: "45%",
                  transform: visible
                    ? "translate(0,-50%)"
                    : "translate(-20px,-50%)",
                  opacity: visible ? 1 : 0,
                  transition: "all 0.8s ease-out",
                  width: isTablet ? "40%" : "38%",
                  zIndex: 10,
                }}
              >
                <HeroText />
              </div>

              <div
                style={{
                  position: "absolute",
                  right: isTablet ? "20px" : "50px",
                  bottom: isTablet ? "-20px" : "-30px",
                  transform: visible ? "translate(0,0)" : "translate(20px,0)",
                  opacity: visible ? 1 : 0,
                  transition: "all 0.8s ease-out",
                  width: isTablet ? "60%" : "800px",
                  zIndex: 10,
                }}
              >
                <div
                  className="bg-white shadow-2xl p-8 lg:p-10"
                  style={{
                    borderTopLeftRadius: "2.5rem",
                    borderTopRightRadius: "2.5rem",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    minHeight: "500px",
                  }}
                >
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className={lbl}>Programs & Institutions</label>
                      <input
                        type="text"
                        placeholder="Type Course and Institutions you want to enroll"
                        className={inp}
                      />
                    </div>

                    <div>
                      <label className={lbl}>Location</label>
                      <input
                        type="text"
                        placeholder="eg. India, Delhi, New Delhi, Connaught Place - 110001"
                        className={inp}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={lbl}>Search For</label>
                        <div className="relative">
                          <select className={sel} defaultValue="">
                            <option value="" disabled>
                              eg. Institutes
                            </option>
                            <option>Institutes</option>
                            <option>Schools</option>
                            <option>Academies</option>
                            <option>Colleges</option>
                          </select>
                          <ChevronDown />
                        </div>
                      </div>
                      <div>
                        <label className={lbl}>Fee Range</label>
                        <div className="relative">
                          <select className={sel} defaultValue="">
                            <option value="" disabled>
                              eg. 0 – 5000
                            </option>
                            <option>0 – 5000</option>
                            <option>5000 – 20000</option>
                            <option>20000 -  40000</option>
                            <option>40000 – 80000</option>
                            <option>80000 – 200000</option>
                            <option>200000 – 400000</option>
                            <option>400000+</option>
                          </select>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className={lbl}>Learning Mode</label>
                        <div className="relative">
                          <select className={sel} defaultValue="">
                            <option value="" disabled>
                              eg. Hybrid
                            </option>
                            <option>Hybrid</option>
                            <option>Online</option>
                            <option>Onsite</option>
                          </select>
                          <ChevronDown />
                        </div>
                      </div>
                      <div>
                        <label className={lbl}>Duration</label>
                        <div className="relative">
                          <select className={sel} defaultValue="">
                            <option value="" disabled>
                              eg. 0 – 6 Months
                            </option>
                            <option>0 – 6 Months</option>
                            <option>6 – 12 Months</option>
                            <option>1 – 2 Years</option>
                            <option>2+ Years</option>
                          </select>
                          <ChevronDown />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
                      <button className="w-full md:w-auto bg-[#E5E7EB] hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm transition-all">
                        Search
                      </button>
                      <p className="text-[#FF0000] text-[13px] md:text-[11px] leading-tight text-center md:text-left">
                        * Select the relevant filters to refine your search.
                        This will help you see more accurate and personalized
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
