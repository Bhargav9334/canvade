import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LOGO_SRC from "../../../public/canvade.png";

// ─── shared style tokens ───────────────────────────────────────────────────
const inp =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] text-gray-700 placeholder-gray-500 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100";

const sel = `${inp} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_12px_center] bg-no-repeat`;

const lbl = "mb-1.5 block text-[10.5px] font-medium text-gray-600 capitalize tracking-wide";

const InfoBanner = () => (
  <div className="mb-6 rounded-xl bg-[#F7F7F8] px-4 py-3 text-[11px] leading-relaxed text-gray-500 shadow-sm">
    <p>
      We use AI only to personalize your experience. You can add necessary
      details now for better recommendations, or skip and update them later.
    </p>
    <button className="mt-1.5 rounded-xl bg-white px-2.5 py-0.5 text-[10px] font-semibold text-gray-600">
      Fill the Details Below
    </button>
  </div>
);

// ─── Sub-step A: Personal Details ─────────────────────────────────────────
function PersonalDetails({ data, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-3.5 md:gap-y-4">
      <div className="col-span-2">
        <label className={lbl}>Unique ID*</label>
        <input
          name="uniqueId"
          placeholder="ANKI453298*"
          value={data.uniqueId}
          onChange={onChange}
          className={inp}
        />
      </div>

      <div>
        <label className={lbl}>Date of Birth*</label>
        <input
          name="dob"
          type="date"
          value={data.dob}
          onChange={onChange}
          className={inp}
        />
      </div>

      <div>
        <label className={lbl}>Gender*</label>
        <select name="gender" value={data.gender} onChange={onChange} className={sel}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label className={lbl}>Language(s)*</label>
        <select name="languages" value={data.languages} onChange={onChange} className={sel}>
          <option value="">Select Language</option>
          <option>Hindi</option>
          <option>English</option>
        </select>
      </div>

      <div>
        <label className={lbl}>Marital Status*</label>
        <select name="maritalStatus" value={data.maritalStatus} onChange={onChange} className={sel}>
          <option value="">Select Status</option>
          <option>Single</option>
          <option>Married</option>
        </select>
      </div>

      <div className="col-span-2">
        <label className={lbl}>Address*</label>

        <button
          type="button"
          className="mb-3 flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-gray-200 px-4 py-3 text-gray-600 transition hover:bg-gray-50"
        >
          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l6-3a2 2 0 011.788 0l6 3A2 2 0 0119 6v9.487a2 2 0 01-1.106 1.789L13 20l-4-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20V9l4-2v11" />
            <circle cx="15" cy="10" r="2" fill="currentColor" />
          </svg>
          <span className="text-[13px] font-medium">Select your Address Location</span>
        </button>

        <div className="space-y-2.5">
          <input name="addr_line1" placeholder="Address Line 1" value={data.addr_line1} onChange={onChange} className={inp} />
          <input name="addr_line2" placeholder="Address Line 2" value={data.addr_line2} onChange={onChange} className={inp} />
          <div className="grid grid-cols-2 gap-4">
            <input name="addr_city" placeholder="City" value={data.addr_city} onChange={onChange} className={inp} />
            <input name="addr_state" placeholder="State" value={data.addr_state} onChange={onChange} className={inp} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input name="addr_zip" placeholder="Zip Code" value={data.addr_zip} onChange={onChange} className={inp} />
            <select name="qualification" value={data.qualification} onChange={onChange} className={sel}>
              <option value="">Qualification</option>
              <option>Graduate</option>
              <option>Post Graduate</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-step B: Interests ─────────────────────────────────────────────────
const sel3 = "w-full rounded-md border border-gray-200 bg-white px-2.5 py-2 pr-8 text-[12px] text-gray-700 placeholder-gray-300 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_10px_center] bg-no-repeat";
const lbl3 = "mb-1.5 block text-[11px] font-semibold text-gray-600 capitalize tracking-tight";

function Interests({ data, onChange }) {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-5">
      <div>
        <label className={lbl3}>Your Hobbies</label>
        <select name="hobbies" value={data.hobbies} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Sports</option>
          <option>Music</option>
          <option>Reading</option>
          <option>Travelling</option>
          <option>Photography</option>
        </select>
      </div>

      <div>
        <label className={lbl3}>Interested Skill</label>
        <select name="skill" value={data.skill} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Cooking</option>
          <option>Management</option>
          <option>Design</option>
          <option>Coding</option>
          <option>Marketing</option>
        </select>
      </div>

      <div>
        <label className={lbl3}>Fitness Interests</label>
        <select name="fitnessInterests" value={data.fitnessInterests} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Yoga</option>
          <option>Gym</option>
          <option>Running</option>
          <option>Swimming</option>
          <option>Cycling</option>
        </select>
      </div>

      <div>
        <label className={lbl3}>Career Aspire</label>
        <select name="careerAspire" value={data.careerAspire} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Entrepreneur</option>
          <option>Chef</option>
          <option>Manager</option>
          <option>Educator</option>
          <option>Consultant</option>
        </select>
      </div>

      <div>
        <label className={lbl3}>Goal for Learning</label>
        <select name="goalForLearning" value={data.goalForLearning} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Get a Job</option>
          <option>Upskill</option>
          <option>Start a Business</option>
          <option>Personal Growth</option>
          <option>Switch Career</option>
        </select>
      </div>

      <div>
        <label className={lbl3}>Learning Mode</label>
        <select name="learningMode" value={data.learningMode} onChange={onChange} className={sel3}>
          <option value="">Select</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Hybrid</option>
        </select>
      </div>
    </div>
  );
}

// ─── Sub-step C: Career Details ────────────────────────────────────────────
const inp4 = "w-full rounded-md border border-gray-200 bg-white px-2.5 py-1.5 pr-8 text-[12px] text-gray-700 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-100 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:14px_14px] bg-[right_10px_center] bg-no-repeat";
const lbl4 = "mb-0.5 block text-[11px] font-medium text-gray-600";

function CareerDetails({ data, onChange }) {
  return (
    <div className="flex flex-col gap-y-2.5">
      <div>
        <label className={lbl4}>Employment Status</label>
        <select name="employment" value={data.employment} onChange={onChange} className={inp4}>
          <option value="">Select</option>
          <option>Student</option>
          <option>Employed</option>
          <option>Self Employed</option>
          <option>Freelancer</option>
          <option>Unemployed</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>Years of Experience</label>
        <select name="experience" value={data.experience} onChange={onChange} className={inp4}>
          <option value="">Select</option>
          <option value="0">0-1 years</option>
          <option value="1">1-3 years</option>
          <option value="3">3-5 years</option>
          <option value="5">5-10 years</option>
          <option value="10">10+ years</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>Designation</label>
        <select name="designation" value={data.designation} onChange={onChange} className={inp4}>
          <option value="">Select</option>
          <option>Intern</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Manager</option>
          <option>Director</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>Industry you are working in</label>
        <select name="industry" value={data.industry} onChange={onChange} className={inp4}>
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
        <label className={lbl4}>Expected Next Role</label>
        <select name="expectedRole" value={data.expectedRole} onChange={onChange} className={inp4}>
          <option value="">Select</option>
          <option>Team Lead</option>
          <option>Manager</option>
          <option>Senior Specialist</option>
          <option>Director</option>
          <option>Entrepreneur</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>Expected Salary</label>
        <select name="expectedSalary" value={data.expectedSalary} onChange={onChange} className={inp4}>
          <option value="">Select</option>
          <option>Below 3 LPA</option>
          <option>3–5 LPA</option>
          <option>5–10 LPA</option>
          <option>10–20 LPA</option>
          <option>20+ LPA</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>Willingness to reskill or switch field / domain</label>
        <select name="willingToReskill" value={data.willingToReskill} onChange={onChange} className={inp4}>
          <option value="">Yes/No</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className={lbl4}>In which field / domain you want to change your career</label>
        <select name="switchDomain" value={data.switchDomain} onChange={onChange} className={inp4}>
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
  );
}

// ─── Main merged component ─────────────────────────────────────────────────
export default function OnboardingSteps({ back: backToAuth, parentFormData }) {
  const navigate = useNavigate();

  const [subStep, setSubStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    // Personal
    uniqueId: "", dob: "", gender: "", languages: "", maritalStatus: "",
    addr_line1: "", addr_line2: "", addr_city: "", addr_state: "", addr_zip: "",
    qualification: "",
    // Interests
    hobbies: "", skill: "", fitnessInterests: "", careerAspire: "",
    goalForLearning: "", learningMode: "",
    // Career
    employment: "", experience: "", designation: "", industry: "",
    expectedRole: "", expectedSalary: "", willingToReskill: "", switchDomain: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const payload = {

        email: "admin@gmail.com" ,//parentFormData?.email || "",
        password: "123456", //parentFormData?.password || "",
        displayName: parentFormData?.displayName || "",

        dob: formData.dob,
        gender: formData.gender,
        languages: formData.languages ? [formData.languages] : [],
        maritalStatus: formData.maritalStatus,

        addressLine1: formData.addr_line1,
        addressLine2: formData.addr_line2,
        city: formData.addr_city,
        state: formData.addr_state,
        zipCode: formData.addr_zip,

        hobbies: formData.hobbies ? [formData.hobbies] : [],
        interestedSkill: formData.skill,
        fitnessInterests: formData.fitnessInterests,
        careerAspire: formData.careerAspire,
        goalForLearning: formData.goalForLearning,
        learningMode: formData.learningMode,

        qualification: formData.qualification,

        employmentStatus: formData.employment,
        yearsOfExperience: formData.experience,
        designation: formData.designation,
        industry: formData.industry,
        expectedNextRole: formData.expectedRole,
        expectedSalary: formData.expectedSalary,
        willingnessToReskill: formData.willingToReskill === "yes",
        careerChangeDomain: formData.switchDomain,
      };

      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logoHeights = ["h-9", "h-10", "h-10"];

  return (
    <div className="w-full animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Logo */}
      <div className="mb-5 flex flex-col items-center">
        <img
          src={LOGO_SRC}
          alt="Canvade"
          className={`${logoHeights[subStep]} w-auto object-contain`}
        />
      </div>

      <InfoBanner />

      {/* Sub-step content */}
      {subStep === 0 && <PersonalDetails data={formData} onChange={handleChange} />}
      {subStep === 1 && <Interests data={formData} onChange={handleChange} />}
      {subStep === 2 && <CareerDetails data={formData} onChange={handleChange} />}

      {/* Error message */}
      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-[11px] text-red-600 border border-red-100">
          {error}
        </p>
      )}

      {/* Action buttons */}
      <div className={`flex gap-3 ${subStep === 2 ? "mt-4" : "mt-7"}`}>
        <button
          type="button"
          onClick={() => {
            if (subStep === 0) {
              if (backToAuth) backToAuth();
            } else {
              setSubStep((s) => s - 1);
            }
          }}
          disabled={loading}
          className="flex-1 rounded-xl bg-gray-200 py-2.5 text-[12px] font-medium text-gray-800 transition hover:bg-gray-300 disabled:opacity-50"
        >
          {subStep === 0 ? "Save and Go to Site" : "Back"}
        </button>

        {subStep < 2 ? (
          <button
            type="button"
            onClick={() => setSubStep((s) => s + 1)}
            className="flex-1 rounded-xl bg-emerald-500 py-2.5 text-[12px] font-semibold text-white shadow-md hover:bg-emerald-600 transition active:scale-95"
          >
            Save and Fill Next
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 rounded-lg bg-emerald-500 py-2.5 text-[13px] font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Saving..." : "Save and Go to Site"}
          </button>
        )}
      </div>
    </div>
  );
}