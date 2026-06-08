import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Upload,
  BookOpen,
  DollarSign,
  Layout,
  Calendar,
  FileUp,
  HelpCircle,
  Check,
  X,
} from "lucide-react";

const STEPS = [
  { id: 1, label: "Basic Details", icon: BookOpen },
  { id: 2, label: "Price Details", icon: DollarSign },
  { id: 3, label: "Curriculum", icon: Layout },
  { id: 4, label: "Batch Plan", icon: Calendar },
  { id: 5, label: "Upload Materials", icon: FileUp },
  { id: 6, label: "FAQs", icon: HelpCircle },
];

const ACCREDITATION_OPTIONS = [
  "UGC Recognized", "AICTE Approved", "NAAC Accredited", "NSDC Certified",
  "Skill India Aligned", "Government Recognized", "Industry Recognized",
  "ISO Certified", "Internationally Accredited", "Certification Included",
  "Placement Assistance Available", "Internship Included",
  "Authorized Training Partner", "Authorized Examination Centre",
  "University Affiliated", "Corporate Certified Program",
];

const BATCH_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ── Reusable primitives ──────────────────────────────────────────────────────

const Label = ({ children, required }) => (
  <label className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-1.5">
    {children}{required && <span className="text-emerald-500 ml-0.5">*</span>}
  </label>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all bg-white ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all bg-white resize-none ${className}`}
    {...props}
  />
);

const Select = ({ children, className = "", ...props }) => (
  <select
    className={`w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all bg-white ${className}`}
    {...props}
  >
    {children}
  </select>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-[15px] font-medium text-gray-800 mb-4 pb-2 border-b border-gray-100">
    {children}
  </h3>
);

const AddButton = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-600 hover:text-emerald-700 transition-colors mt-2"
  >
    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
      <Plus className="w-3 h-3" />
    </div>
    {label}
  </button>
);

const RemoveButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0"
  >
    <Trash2 className="w-3.5 h-3.5" />
  </button>
);

// ── Steps ────────────────────────────────────────────────────────────────────

function Step1({ data, setData }) {
  const add = (key) => setData((p) => ({ ...p, [key]: [...p[key], ""] }));
  const remove = (key, i) => setData((p) => ({ ...p, [key]: p[key].filter((_, j) => j !== i) }));
  const update = (key, i, val) => setData((p) => ({ ...p, [key]: p[key].map((v, j) => j === i ? val : v) }));
  const toggleAcc = (val) => setData((p) => ({
    ...p,
    accreditation: p.accreditation.includes(val)
      ? p.accreditation.filter((v) => v !== val)
      : [...p.accreditation, val],
  }));

  return (
    <div className="space-y-5">
      <Card>
        <SectionTitle>Course Identity</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label required>Course Code</Label>
            <Input placeholder="e.g. CS-2024-001" value={data.code} onChange={(e) => setData((p) => ({ ...p, code: e.target.value }))} />
          </div>
          <div>
            <Label required>Course Title</Label>
            <Input placeholder="Enter course title" value={data.title} onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))} />
          </div>
        </div>
        <div className="mt-4">
          <Label>About the Course</Label>
          <Textarea rows={4} placeholder="Describe what this course is about..." value={data.about} onChange={(e) => setData((p) => ({ ...p, about: e.target.value }))} />
        </div>
      </Card>

      <Card>
        <SectionTitle>Duration & Qualification</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label required>Course Duration</Label>
            <Select value={data.duration} onChange={(e) => setData((p) => ({ ...p, duration: e.target.value }))}>
              <option value="">Select duration</option>
              {["0–3 months", "3–6 months", "6–12 months", "1–2 years", "2–4 years"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </Select>
          </div>
          <div>
            <Label required>Minimum Qualification</Label>
            <Select value={data.minQual} onChange={(e) => setData((p) => ({ ...p, minQual: e.target.value }))}>
              <option value="">Select qualification</option>
              {["No Education", "K-5", "K-10", "K-12", "Undergraduate", "Graduate", "Post Graduate", "Masters", "Doctoral"].map((q) => (
                <option key={q}>{q}</option>
              ))}
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Label>Prior Knowledge Required</Label>
          <Textarea rows={2} placeholder="Describe any prior knowledge or skills needed..." value={data.priorQual} onChange={(e) => setData((p) => ({ ...p, priorQual: e.target.value }))} />
        </div>
      </Card>

      <Card>
        <SectionTitle>Delivery</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Learning Mode</Label>
            <div className="flex gap-2 mt-1">
              {["Onsite", "Online", "Hybrid"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setData((p) => ({ ...p, mode: m }))}
                  className={`flex-1 py-2.5 rounded-lg text-[12px] font-medium border transition-all ${data.mode === m ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label>Course Language</Label>
            <Input placeholder="e.g. English, Hindi" value={data.language} onChange={(e) => setData((p) => ({ ...p, language: e.target.value }))} />
          </div>
        </div>

        <div className="mt-4">
          <Label>Course Locations</Label>
          {data.locations.map((loc, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input placeholder={`Location ${i + 1}`} value={loc} onChange={(e) => update("locations", i, e.target.value)} />
              {data.locations.length > 1 && <RemoveButton onClick={() => remove("locations", i)} />}
            </div>
          ))}
          <AddButton onClick={() => add("locations")} label="Add Location" />
        </div>
      </Card>

      <Card>
        <SectionTitle>Course Information</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label>Course Level</Label>
            <Input placeholder="e.g. Intermediate" value={data.level} onChange={(e) => setData((p) => ({ ...p, level: e.target.value }))} />
          </div>
          <div>
            <Label>Course Difficulty</Label>
            <Select value={data.difficulty} onChange={(e) => setData((p) => ({ ...p, difficulty: e.target.value }))}>
              <option value="">Select difficulty</option>
              {["Beginner", "Intermediate", "Advanced"].map((d) => <option key={d}>{d}</option>)}
            </Select>
          </div>
          <div>
            <Label>Certification Type</Label>
            <Select value={data.certification} onChange={(e) => setData((p) => ({ ...p, certification: e.target.value }))}>
              <option value="">Select type</option>
              {["Degree", "Diploma", "Certificate of Completion", "Certificate of Participation"].map((c) => <option key={c}>{c}</option>)}
            </Select>
          </div>
          <div>
            <Label>Supporting Materials</Label>
            <Select value={data.materials} onChange={(e) => setData((p) => ({ ...p, materials: e.target.value }))}>
              <option value="">Select</option>
              <option>Provided</option>
              <option>Not Provided</option>
            </Select>
          </div>
          <div>
            <Label>Placement Assistance</Label>
            <Select value={data.placement} onChange={(e) => setData((p) => ({ ...p, placement: e.target.value }))}>
              <option value="">Select</option>
              <option>Guaranteed</option>
              <option>Connection</option>
              <option>No</option>
            </Select>
          </div>
        </div>

        <div className="mt-4">
          <Label>Accreditation</Label>
          <div className="flex flex-wrap gap-2 mt-1">
            {ACCREDITATION_OPTIONS.map((opt) => {
              const active = data.accreditation.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleAcc(opt)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all ${active ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}
                >
                  {active && <Check className="w-3 h-3 inline mr-1" />}
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </Card>

      <Card>
        <SectionTitle>Learning Outcomes</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">Add 4 to 10 learning outcomes</p>
        {data.outcomes.map((out, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder={`Outcome ${i + 1} — What will students achieve?`} value={out} onChange={(e) => update("outcomes", i, e.target.value)} />
            {data.outcomes.length > 1 && <RemoveButton onClick={() => remove("outcomes", i)} />}
          </div>
        ))}
        {data.outcomes.length < 10 && (
          <AddButton onClick={() => add("outcomes")} label="Add Learning Outcome" />
        )}
      </Card>

      <Card>
        <SectionTitle>Career Path</SectionTitle>
        {data.jobs.map((job, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder={`Job role / career path ${i + 1}`} value={job} onChange={(e) => update("jobs", i, e.target.value)} />
            {data.jobs.length > 1 && <RemoveButton onClick={() => remove("jobs", i)} />}
          </div>
        ))}
        <AddButton onClick={() => add("jobs")} label="Add Career Path" />
      </Card>

      <Card>
        <SectionTitle>Keywords</SectionTitle>
        <Textarea rows={2} placeholder="Enter keywords separated by commas (e.g. Python, Data Science, Machine Learning)" value={data.keywords} onChange={(e) => setData((p) => ({ ...p, keywords: e.target.value }))} />
      </Card>
    </div>
  );
}

function Step2({ data, setData }) {
  const addExpense = () => setData((p) => ({ ...p, expenses: [...p.expenses, { reason: "", amount: "" }] }));
  const removeExpense = (i) => setData((p) => ({ ...p, expenses: p.expenses.filter((_, j) => j !== i) }));
  const updateExpense = (i, key, val) => setData((p) => ({ ...p, expenses: p.expenses.map((e, j) => j === i ? { ...e, [key]: val } : e) }));
  const addScholarship = () => setData((p) => ({ ...p, scholarships: [...p.scholarships, ""] }));
  const removeScholarship = (i) => setData((p) => ({ ...p, scholarships: p.scholarships.filter((_, j) => j !== i) }));
  const updateScholarship = (i, val) => setData((p) => ({ ...p, scholarships: p.scholarships.map((s, j) => j === i ? val : s) }));
  const addPriceBreak = () => setData((p) => ({ ...p, priceBreaks: [...p.priceBreaks, { reason: "", price: "" }] }));
  const removePriceBreak = (i) => setData((p) => ({ ...p, priceBreaks: p.priceBreaks.filter((_, j) => j !== i) }));
  const updatePriceBreak = (i, key, val) => setData((p) => ({ ...p, priceBreaks: p.priceBreaks.map((b, j) => j === i ? { ...b, [key]: val } : b) }));

  return (
    <div className="space-y-5">
      <Card>
        <SectionTitle>Pricing</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label required>Actual Price (₹)</Label>
            <Input type="number" placeholder="0" value={data.actualPrice} onChange={(e) => setData((p) => ({ ...p, actualPrice: e.target.value }))} />
          </div>
          <div>
            <Label>Discount (%)</Label>
            <Input type="number" placeholder="0" value={data.discount} onChange={(e) => setData((p) => ({ ...p, discount: e.target.value }))} />
          </div>
          <div>
            <Label>Current Price (₹)</Label>
            <Input type="number" placeholder="Auto-calculated" value={data.currentPrice} onChange={(e) => setData((p) => ({ ...p, currentPrice: e.target.value }))} />
          </div>
        </div>
      </Card>

      <Card>
        <SectionTitle>Price Breakdown</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">Explain what's included in the price</p>
        {data.priceBreaks.map((b, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder="Reason (e.g. Lab fees)" value={b.reason} onChange={(e) => updatePriceBreak(i, "reason", e.target.value)} />
            <Input placeholder="₹ Amount" className="w-32" value={b.price} onChange={(e) => updatePriceBreak(i, "price", e.target.value)} />
            {data.priceBreaks.length > 1 && <RemoveButton onClick={() => removePriceBreak(i)} />}
          </div>
        ))}
        <AddButton onClick={addPriceBreak} label="Add Price Break" />
      </Card>

      <Card>
        <SectionTitle>Extra Course Expenses</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">Any additional costs the student may incur (e.g. Study materials, Domain, Projects, Certificate)</p>
        {data.expenses.map((exp, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder="Reason (e.g. Study materials)" value={exp.reason} onChange={(e) => updateExpense(i, "reason", e.target.value)} />
            <Input placeholder="Amount or 'Depends on student'" value={exp.amount} onChange={(e) => updateExpense(i, "amount", e.target.value)} />
            {data.expenses.length > 1 && <RemoveButton onClick={() => removeExpense(i)} />}
          </div>
        ))}
        <AddButton onClick={addExpense} label="Add Expense" />
      </Card>

      <Card>
        <SectionTitle>Scholarships</SectionTitle>
        {data.scholarships.map((s, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder={`Scholarship ${i + 1}`} value={s} onChange={(e) => updateScholarship(i, e.target.value)} />
            {data.scholarships.length > 1 && <RemoveButton onClick={() => removeScholarship(i)} />}
          </div>
        ))}
        <AddButton onClick={addScholarship} label="Add Scholarship" />
      </Card>
    </div>
  );
}

function Step3({ data, setData }) {
  const addHeading = () => setData((p) => ({ ...p, curriculum: [...p.curriculum, { heading: "", duration: "", modules: [{ name: "", description: "" }] }] }));
  const removeHeading = (i) => setData((p) => ({ ...p, curriculum: p.curriculum.filter((_, j) => j !== i) }));
  const updateHeading = (i, key, val) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === i ? { ...h, [key]: val } : h) }));
  const addModule = (i) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === i ? { ...h, modules: [...h.modules, { name: "", description: "" }] } : h) }));
  const removeModule = (hi, mi) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === hi ? { ...h, modules: h.modules.filter((_, k) => k !== mi) } : h) }));
  const updateModule = (hi, mi, key, val) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === hi ? { ...h, modules: h.modules.map((m, k) => k === mi ? { ...m, [key]: val } : m) } : h) }));

  return (
    <div className="space-y-5">
      {data.curriculum.map((section, i) => (
        <Card key={i}>
          <div className="flex items-start justify-between mb-4">
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Section {i + 1}</span>
            {data.curriculum.length > 1 && (
              <button type="button" onClick={() => removeHeading(i)} className="text-[11px] text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Remove Section
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="md:col-span-2">
              <Label>Section Heading</Label>
              <Input placeholder="e.g. Introduction to Python" value={section.heading} onChange={(e) => updateHeading(i, "heading", e.target.value)} />
            </div>
            <div>
              <Label>Duration</Label>
              <Input placeholder="e.g. 2 weeks" value={section.duration} onChange={(e) => updateHeading(i, "duration", e.target.value)} />
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-100">
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide mb-2">Modules</p>
            {section.modules.map((mod, mi) => (
              <div key={mi} className="bg-[#f8fafc] rounded-xl p-3 mb-2">
                <div className="flex gap-2 mb-2">
                  <Input placeholder={`Module ${mi + 1} name`} value={mod.name} onChange={(e) => updateModule(i, mi, "name", e.target.value)} />
                  {section.modules.length > 1 && <RemoveButton onClick={() => removeModule(i, mi)} />}
                </div>
                <Input placeholder="Short description (optional)" value={mod.description} onChange={(e) => updateModule(i, mi, "description", e.target.value)} />
              </div>
            ))}
            <AddButton onClick={() => addModule(i)} label="Add Module" />
          </div>
        </Card>
      ))}
      <button
        type="button"
        onClick={addHeading}
        className="w-full py-3 border-2 border-dashed border-emerald-200 rounded-2xl text-[13px] font-medium text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add Section
      </button>
    </div>
  );
}

function Step4({ data, setData }) {
  const addBatch = () => setData((p) => ({ ...p, batches: [...p.batches, { seats: "", days: [], time: "" }] }));
  const removeBatch = (i) => setData((p) => ({ ...p, batches: p.batches.filter((_, j) => j !== i) }));
  const updateBatch = (i, key, val) => setData((p) => ({ ...p, batches: p.batches.map((b, j) => j === i ? { ...b, [key]: val } : b) }));
  const toggleDay = (i, day) => {
    const batch = data.batches[i];
    const days = batch.days.includes(day) ? batch.days.filter((d) => d !== day) : [...batch.days, day];
    updateBatch(i, "days", days);
  };

  return (
    <div className="space-y-5">
      {data.batches.map((batch, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-medium text-gray-800">Batch {i + 1}</span>
            {data.batches.length > 1 && (
              <button type="button" onClick={() => removeBatch(i)} className="text-[11px] text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Open Seats</Label>
              <Input type="number" placeholder="e.g. 30" value={batch.seats} onChange={(e) => updateBatch(i, "seats", e.target.value)} />
            </div>
            <div>
              <Label>Batch Time</Label>
              <Input type="time" value={batch.time} onChange={(e) => updateBatch(i, "time", e.target.value)} />
            </div>
          </div>
          <div className="mt-4">
            <Label>Batch Days</Label>
            <div className="flex gap-2 flex-wrap mt-1">
              {BATCH_DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(i, day)}
                  className={`w-12 h-10 rounded-lg text-[12px] font-medium border transition-all ${batch.days.includes(day) ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </Card>
      ))}
      <button
        type="button"
        onClick={addBatch}
        className="w-full py-3 border-2 border-dashed border-emerald-200 rounded-2xl text-[13px] font-medium text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add Batch
      </button>
    </div>
  );
}

function UploadBox({ label, hint, multiple, accept }) {
  const [files, setFiles] = useState([]);
  const handleChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => (multiple ? [...prev, ...selected] : selected));
  };
  const remove = (i) => setFiles((prev) => prev.filter((_, j) => j !== i));

  return (
    <div className="mb-4">
      <Label>{label}</Label>
      {hint && <p className="text-[11px] text-gray-400 mb-2">{hint}</p>}
      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-emerald-300 hover:bg-emerald-50/50 transition-all">
        <Upload className="w-5 h-5 text-gray-400 mb-1" />
        <span className="text-[12px] text-gray-500">Click to upload{multiple ? " (multiple)" : ""}</span>
        <input type="file" className="hidden" multiple={multiple} accept={accept} onChange={handleChange} />
      </label>
      {files.length > 0 && (
        <div className="mt-2 space-y-1.5">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between bg-[#f8fafc] px-3 py-2 rounded-lg text-[12px] text-gray-700">
              <span className="truncate">{f.name}</span>
              <button type="button" onClick={() => remove(i)} className="ml-2 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Step5() {
  return (
    <div className="space-y-5">
      <Card>
        <SectionTitle>Course Thumbnail & Images</SectionTitle>
        <UploadBox label="Thumbnail" hint="1280 × 720 px, max 1 MB" accept="image/*" />
        <UploadBox label="Course Images (up to 5)" hint="1280 × 720 px, max 1 MB each" multiple accept="image/*" />
      </Card>
      <Card>
        <SectionTitle>Course Video</SectionTitle>
        <UploadBox label="Preview Video (optional)" accept="video/*" />
      </Card>
      <Card>
        <SectionTitle>Institute Supporting Documents</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">e.g. Module curriculum, certificates</p>
        <UploadBox label="Documents" multiple accept=".pdf,.doc,.docx" />
      </Card>
      <Card>
        <SectionTitle>Student Supporting Materials</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">e.g. Notes, books, vouchers</p>
        <UploadBox label="Materials" multiple accept=".pdf,.doc,.docx,.zip" />
      </Card>
    </div>
  );
}

function Step6({ data, setData }) {
  const addFaq = () => setData((p) => ({ ...p, faqs: [...p.faqs, { question: "", answer: "" }] }));
  const removeFaq = (i) => setData((p) => ({ ...p, faqs: p.faqs.filter((_, j) => j !== i) }));
  const updateFaq = (i, key, val) => setData((p) => ({ ...p, faqs: p.faqs.map((f, j) => j === i ? { ...f, [key]: val } : f) }));

  return (
    <div className="space-y-4">
      {data.faqs.map((faq, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">FAQ {i + 1}</span>
            {data.faqs.length > 1 && (
              <button type="button" onClick={() => removeFaq(i)} className="text-[11px] text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors">
                <Trash2 className="w-3.5 h-3.5" /> Remove
              </button>
            )}
          </div>
          <div className="space-y-3">
            <div>
              <Label>Question</Label>
              <Input placeholder="Enter frequently asked question" value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} />
            </div>
            <div>
              <Label>Answer</Label>
              <Textarea rows={3} placeholder="Enter the answer" value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} />
            </div>
          </div>
        </Card>
      ))}
      <button
        type="button"
        onClick={addFaq}
        className="w-full py-3 border-2 border-dashed border-emerald-200 rounded-2xl text-[13px] font-medium text-emerald-600 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" /> Add FAQ
      </button>
    </div>
  );
}

// ── Main Form ─────────────────────────────────────────────────────────────────

export default function CourseCreateForm({ onCancel }) {
  const [step, setStep] = useState(1);

  const [step1, setStep1] = useState({
    code: "", title: "", about: "", duration: "", minQual: "", priorQual: "",
    locations: [""], mode: "Onsite", language: "", level: "", difficulty: "",
    certification: "", materials: "", placement: "", accreditation: [],
    outcomes: ["", "", "", ""], jobs: [""], keywords: "",
  });

  const [step2, setStep2] = useState({
    actualPrice: "", discount: "", currentPrice: "",
    priceBreaks: [{ reason: "", price: "" }],
    expenses: [{ reason: "", amount: "" }],
    scholarships: [""],
  });

  const [step3, setStep3] = useState({
    curriculum: [{ heading: "", duration: "", modules: [{ name: "", description: "" }] }],
  });

  const [step4, setStep4] = useState({
    batches: [{ seats: "", days: [], time: "" }],
  });

  const [step6, setStep6] = useState({
    faqs: [{ question: "", answer: "" }],
  });

  const stepData = [step1, step2, step3, step4, null, step6];
  const stepSetters = [setStep1, setStep2, setStep3, setStep4, null, setStep6];

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1 data={step1} setData={setStep1} />;
      case 2: return <Step2 data={step2} setData={setStep2} />;
      case 3: return <Step3 data={step3} setData={setStep3} />;
      case 4: return <Step4 data={step4} setData={setStep4} />;
      case 5: return <Step5 />;
      case 6: return <Step6 data={step6} setData={setStep6} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 md:px-8 lg:px-12 py-10">
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <div className="mb-8">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Courses
          </button>
        )}
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-gray-800 tracking-tight mb-1">
            Create a <span className="text-emerald-600">New Course</span>
          </h1>
          <p className="text-gray-500 text-sm">Fill in the details below to publish your course listing.</p>
        </div>
      </div>

        {/* Step indicator */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-3 mb-6 overflow-x-auto">
          <div className="flex gap-1 min-w-max md:min-w-0">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const active = step === s.id;
              const done = step > s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStep(s.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-medium transition-all whitespace-nowrap ${
                    active
                      ? "bg-emerald-500 text-white shadow-sm"
                      : done
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {done ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Icon className="w-3.5 h-3.5" />
                  )}
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.id}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step content */}
        <div className="mb-6">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((p) => Math.max(1, p - 1))}
            disabled={step === 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-[13px] font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <span className="text-[12px] text-gray-400 font-medium">
            Step {step} of {STEPS.length}
          </span>

          {step < STEPS.length ? (
            <button
              type="button"
              onClick={() => setStep((p) => Math.min(STEPS.length, p + 1))}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-[13px] font-medium hover:bg-emerald-600 transition-all shadow-sm active:scale-95"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-[13px] font-medium hover:bg-emerald-600 transition-all shadow-sm active:scale-95"
            >
              <Check className="w-4 h-4" /> Publish Course
            </button>
          )}
        </div>
      </div>
    </div>
  );
}