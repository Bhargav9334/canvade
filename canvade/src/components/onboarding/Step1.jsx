import LOGO_SRC from "../../../public/canvade.png";
import { ChevronRight, GraduationCap, Presentation } from "lucide-react";

export default function Step1({ next, onSignupClick }) {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex flex-col items-center">
        <img src={LOGO_SRC} alt="Canvade" className="h-12 w-auto object-contain" />
      </div>

      <div className="flex flex-col gap-y-4">
        <button
          onClick={() => next({ role: "student", flow: "login" })}
          className="group flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-100 p-4 transition hover:bg-emerald-200 hover:shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg  p-2 text-emerald-600 shadow-sm transition-transform group-hover:scale-110">
              <GraduationCap size={24} />
            </div>
            <div className="text-left">
              <span className="text-[14px] font-bold text-gray-700">Login as Student</span>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-600 group-hover:text-emerald-600 transition-colors" />
        </button>

        <button
          onClick={() => next({ role: "educator", flow: "login" })}
          className="group flex items-center justify-between rounded-xl border border-orange-200 bg-orange-100 p-4 transition hover:bg-orange-200 hover:shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-lg  p-2 text-orange-500 shadow-sm transition-transform group-hover:scale-110">
              <Presentation size={24} />
            </div>
            <div className="text-left">
              <span className="text-[14px] font-bold text-gray-700">Login as Educator</span>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-600 group-hover:text-orange-600 transition-colors" />
        </button>
      </div>

      <p className="mt-8 text-center text-[12px] text-gray-500">
        New here?{" "}
        <span 
          onClick={onSignupClick} 
          className="cursor-pointer font-bold text-emerald-600 hover:underline"
        >
          Sign up now
        </span>
      </p>
    </div>
  );
}