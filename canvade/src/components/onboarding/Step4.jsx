import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO_SRC from "../../../public/canvade.png";

export default function Step4({ next, back, formData }) {
  const navigate = useNavigate();

  const [data, setData] = useState({
    employment: "",
    experience: "",
    designation: "",
    industry: "",
    expectedRole: "",
    expectedSalary: "",
    willingToReskill: "",
    switchDomain: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const finalData = { ...formData, ...data };
    console.log("Final Onboarding Data:", finalData);
    navigate("/home"); 
  };

  const inp = "w-full rounded-md border border-gray-200 bg-white px-2.5 py-1.5 pr-8 text-[12px] text-gray-700 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_10px_center] bg-no-repeat";
  const lbl = "mb-0.5 block text-[11px] font-medium text-gray-600";

  return (
    <div className="w-full">

      <div className="mb-3 flex justify-center">
        <img src={LOGO_SRC} alt="Canvade" className="h-10 w-auto object-contain" />
      </div>

      <div className="mb-3 rounded-xl  bg-[#F7F7F8] px-3 py-2 text-[11px] text-gray-500">
        <p>We use AI only to personalize your experience. You save add necessary details now for better recommendations, or skip and update them later.</p>
        <button className="mt-1.5 rounded-xl bg-white px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
          Fill the Details Below
        </button>
      </div>

      <div className="flex flex-col gap-y-2.5">

        <div>
          <label className={lbl}>Employment Status</label>
          <select name="employment" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Student</option>
            <option>Employed</option>
            <option>Self Employed</option>
            <option>Freelancer</option>
            <option>Unemployed</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Years of Experience</label>
          <select name="experience" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>0-1 years</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5-10 years</option>
            <option>10+ years</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Designation</label>
          <select name="designation" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Intern</option>
            <option>Junior</option>
            <option>Senior</option>
            <option>Manager</option>
            <option>Director</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Industry you are working in</label>
          <select name="industry" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Hospitality</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Retail</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Expected Next Role</label>
          <select name="expectedRole" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Team Lead</option>
            <option>Manager</option>
            <option>Senior Specialist</option>
            <option>Director</option>
            <option>Entrepreneur</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Expected Next Role</label>
          <select name="expectedSalary" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Below 3 LPA</option>
            <option>3–5 LPA</option>
            <option>5–10 LPA</option>
            <option>10–20 LPA</option>
            <option>20+ LPA</option>
          </select>
        </div>

        <div>
          <label className={lbl}>Willingness to reskill or switch field / domain</label>
          <select name="willingToReskill" onChange={handleChange} className={inp}>
            <option value="">Yes/No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label className={lbl}>In which field / domain you want to change your career</label>
          <select name="switchDomain" onChange={handleChange} className={inp}>
            <option value="">Select</option>
            <option>Hospitality</option>
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
            <option>Culinary Arts</option>
          </select>
        </div>

      </div>

      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-emerald-500 py-2.5 text-[13px] font-semibold text-white transition hover:bg-emerald-600"
        >
          Save and Go to Site
        </button>
      </div>

    </div>
  );
}