import { useState } from "react";
import Signup from "./Signup";
import RIGHT_BG_SRC from "../../../public/bg.png";
import ARCH_IMG_SRC from "../../../public/institute.jpg";

export function RightPanel() {
  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-start">
      <img
        src={RIGHT_BG_SRC}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover blur-[2px] scale-105"
      />

      <div className="relative z-10 ml-12 lg:ml-20 w-[80%] h-[80%] max-w-lg">
        <div
          className="relative w-[85%] h-[85%] overflow-hidden shadow-xl"
          style={{
            borderRadius: "500px 500px 20px 20px", 
          }}
        >
          <img
            src={ARCH_IMG_SRC}
            alt="Institute"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="absolute bg-white shadow-2xl p-6 rounded-2xl"
          style={{
            top: "18%",
            left: "70%", 
            width: "70%",
            maxWidth: "260px",
            minHeight: "230px",
          }}
        >
          <h3 className="text-[15px] font-bold text-[#5B5772] leading-tight mb-3">
            Indian Institute of Hospitality and Culinary
          </h3>

          <p className="text-[12px] text-[#5B5772] leading-relaxed font-medium font-poppins">
            Delhi Entrepreneur, Established the institute in Siliguri with the
            vision to skill local youth through industry-focused hospitality and
            culinary training, with strong support for overseas placement
            opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthLayout() {
  const [mode, setMode] = useState("login");

  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      <div
        className="
          flex w-full flex-col items-center justify-center
          overflow-y-auto bg-white
          px-5 py-8
          sm:px-8
          md:w-[50%] md:min-w-[380px] md:px-6
          lg:w-[45%] lg:px-8
          xl:w-[50%]
        "
      >
        {mode === "login" ? (
          <Login switchToSignup={() => setMode("signup")} />
        ) : (
          <Signup switchToLogin={() => setMode("login")} />
        )}
      </div>

      <div className="hidden flex-1 md:flex">
        <RightPanel />
      </div>
    </div>
  );
}
