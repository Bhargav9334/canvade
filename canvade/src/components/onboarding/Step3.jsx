import { useState } from "react";
import LOGO_SRC from "../../../public/canvade.png";

export default function Step3({ next, back, formData }) {
  const [data, setData] = useState({
    hobbies: "",
    skill: "",
    fitnessInterests: "",
    careerAspire: "",
    goalForLearning: "",
    learningMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const inp =
    "w-full rounded-md border border-gray-200 bg-white px-2.5 py-2 pr-8 text-[12px] text-gray-700 placeholder-gray-300 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_10px_center] bg-no-repeat";
  
 const lbl = "mb-1.5 block text-[11px] font-semibold text-gray-600 capitalize tracking-tight";

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-6 flex justify-center">
        <img
          src={LOGO_SRC}
          alt="Canvade"
          className="h-10 w-auto object-contain"
        />
      </div>

      <div className="mb-6 rounded-xl bg-[#F7F7F8] px-4 py-3 text-[11px] leading-relaxed text-gray-500 shadow-sm">
        <p>
          We use AI only to personalize your experience. You can add necessary
          details now for better recommendations, or skip and update them later.
        </p>
         <button className="mt-1.5 rounded-xl  bg-white px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
          Fill the Details Below
        </button>
      </div>

      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <div>
          <label className={lbl}>Your Hobbies</label>
          <select name="hobbies" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Sports</option>
            <option>Music</option>
            <option>Reading</option>
            <option>Travelling</option>
            <option>Photography</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Interested Skill</label>
          <select name="skill" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Cooking</option>
            <option>Management</option>
            <option>Design</option>
            <option>Coding</option>
            <option>Marketing</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Fitness Interests</label>
          <select
            name="fitnessInterests"
            onChange={handleChange}
            className={inp}
          >
            <option value="">Select</option>
            <option>Yoga</option>
            <option>Gym</option>
            <option>Running</option>
            <option>Swimming</option>
            <option>Cycling</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Career Aspire</label>
          <select name="careerAspire" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Entrepreneur</option>
            <option>Chef</option>
            <option>Manager</option>
            <option>Educator</option>
            <option>Consultant</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Goal for Learning</label>
          <select name="goalForLearning" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Get a Job</option>
            <option>Upskill</option>
            <option>Start a Business</option>
            <option>Personal Growth</option>
            <option>Switch Career</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Learning Mode</label>
          <select name="learningMode" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={back}
          className="flex-1 rounded-xl bg-gray-200 py-2.5 text-[13px] font-medium text-gray-800 transition hover:bg-gray-200 active:scale-95"
        >
          Save and Go to Site
        </button>
        <button
          type="button"
          onClick={() => next(data)}
          className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-[13px] font-medium text-white shadow-md transition hover:bg-emerald-600 active:scale-95"
        >
          Save and Fill Next
        </button>
      </div>
    </div>
  );
}