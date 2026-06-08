import { useState } from "react";
import LOGO_SRC from "../../../public/canvade.png";

export default function Step2({ next, back }) {
  const [data, setData] = useState({
    uniqueId: "",
    age: "",
    gender: "",
    languages: "",
    martialStatus: "",
    qualification: "",
    address: { line1: "", line2: "", city: "", state: "", zip: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const inp =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] text-gray-700 placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100";

  const sel = `${inp} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_12px_center] bg-no-repeat`;

 const lbl = "mb-1.5 block text-[10.5px] font-medium text-gray-600 capitalize tracking-wide";

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-5 flex flex-col items-center">
        <img
          src={LOGO_SRC}
          alt="Canvade"
          className="h-9 w-auto object-contain"
        />
      </div>

      <div className="mb-6 rounded-xl bg-[#F7F7F8] px-4 py-3 text-[11px] leading-relaxed text-gray-500 shadow-sm">
        <p>
          We use AI only to personalize your experience. You save add necessary details now for better recommendations, or skip and update them later.
        </p>
        <button className="mt-1.5 rounded-xl  bg-white px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
          Fill the Details Below
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 md:gap-y-4">
        <div className="col-span-2">
          <label className={lbl}>Unique ID*</label>
          <input
            name="uniqueId"
            placeholder="ANKI453298*"
            onChange={handleChange}
            className={inp}
          />
        </div>

        <div>
          <label className={lbl}>Age*</label>
          <input
            name="age"
            type="date"
            onChange={handleChange}
            className={inp}
          />
        </div>

        <div>
          <label className={lbl}>Gender*</label>
          <select name="gender" onChange={handleChange} className={sel}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Language(s)*</label>
          <select name="languages" onChange={handleChange} className={sel}>
            <option value="">Select Language</option>
            <option>Hindi</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Marital Status*</label>
          <select name="martialStatus" onChange={handleChange} className={sel}>
            <option value="">Select Status</option>
            <option>Single</option>
            <option>Married</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className={lbl}>Address*</label>

          <button
            type="button"
            className="mb-3 flex w-[330] items-center gap-3 rounded-lg border border-gray-100 bg-gray-200 px-4 py-3 text-gray-600 transition hover:bg-gray-50"
          >
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l6-3a2 2 0 011.788 0l6 3A2 2 0 0119 6v9.487a2 2 0 01-1.106 1.789L13 20l-4-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 20V9l4-2v11"
              />
              <circle cx="15" cy="10" r="2" fill="currentColor" />
            </svg>
            <span className="text-[13px] font-medium">
              Select your Address Location
            </span>
          </button>

          <div className="space-y-2.5">
            <input
              name="addr_line1"
              placeholder="Address Line 1"
              onChange={handleChange}
              className={inp}
            />

            <input
              name="addr_line2"
              placeholder="Address Line 2"
              onChange={handleChange}
              className={inp}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="addr_city"
                placeholder="City"
                onChange={handleChange}
                className={inp}
              />
              <input
                name="addr_state"
                placeholder="State"
                onChange={handleChange}
                className={inp}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="addr_zip"
                placeholder="Zip Code"
                onChange={handleChange}
                className={inp}
              />
              <select
                name="qualification"
                onChange={handleChange}
                className={sel}
              >
                <option value="">Qualification</option>
                <option>Graduate</option>
                <option>Post Graduate</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex gap-3">
        <button
          type="button"
          onClick={back}
          className="flex-1 rounded-xl bg-gray-200 py-2.5 text-[12px] font-medium text-gray-800 transition hover:bg-gray-200"
        >
           Save and Go to Site
        </button>
        <button
          type="button"
          onClick={() => next(data)}
          className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-[12px] font-semibold text-white shadow-md hover:bg-emerald-600 transition active:scale-95"
        >
          Save and Fill Next
        </button>
      </div>
    </div>
  );
}
