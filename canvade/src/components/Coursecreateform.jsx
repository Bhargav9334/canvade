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
  AlertCircle,
} from "lucide-react";
import {
  showSuccess,
  showError,
  showWarning,
  showInfo,
} from "../utils/toast";

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

// ── Validation functions ─────────────────────────────────────────────────────

function validateStep1(data) {
  const errors = {};
  if (!data.code.trim()) errors.code = "Course Code is required";
  if (!data.title.trim()) errors.title = "Course Title is required";
  if (!data.about.trim()) errors.about = "About the Course is required";
  if (!data.duration) errors.duration = "Course Duration is required";
  if (!data.minQual) errors.minQual = "Minimum Qualification is required";
  if (!data.priorQual.trim()) errors.priorQual = "Prior Knowledge Required is required";
  if (!data.language.trim()) errors.language = "Course Language is required";
  const filledLocations = data.locations.filter((l) => l.trim());
  if (filledLocations.length === 0) errors.locations = "At least 1 location is required";
  if (!data.level.trim()) errors.level = "Course Level is required";
  if (!data.difficulty) errors.difficulty = "Course Difficulty is required";
  if (!data.certification) errors.certification = "Certification Type is required";
  if (!data.materials) errors.materials = "Supporting Materials selection is required";
  if (!data.placement) errors.placement = "Placement Assistance selection is required";
  if (data.accreditation.length === 0) errors.accreditation = "Select at least 1 accreditation";
  const filledOutcomes = data.outcomes.filter((o) => o.trim());
  if (filledOutcomes.length < 4) errors.outcomes = "At least 4 learning outcomes are required";
  const filledJobs = data.jobs.filter((j) => j.trim());
  if (filledJobs.length < 1) errors.jobs = "At least 1 career path is required";
  if (!data.keywords.trim()) errors.keywords = "Keywords are required";
  return errors;
}

function validateStep2(data) {
  const errors = {};
  if (!data.actualPrice || isNaN(Number(data.actualPrice)) || Number(data.actualPrice) < 0)
    errors.actualPrice = "Actual Price is required";
  if (!data.discount && data.discount !== 0 && data.discount !== "0")
    errors.discount = "Discount is required (enter 0 if no discount)";
  else if (isNaN(Number(data.discount)) || Number(data.discount) < 0 || Number(data.discount) > 100)
    errors.discount = "Discount must be between 0 and 100";
  if (!data.currentPrice && data.currentPrice !== 0 && data.currentPrice !== "0")
    errors.currentPrice = "Current Price is required";
  else if (isNaN(Number(data.currentPrice)) || Number(data.currentPrice) < 0)
    errors.currentPrice = "Current Price must be a valid number";
  const emptyBreaks = data.priceBreaks.filter((b) => !b.reason.trim() || !b.price);
  if (emptyBreaks.length > 0) errors.priceBreaks = "All price break reason and amount are required";
  else {
    const invalidBreaks = data.priceBreaks.filter((b) => isNaN(Number(b.price)));
    if (invalidBreaks.length > 0) errors.priceBreaks = "All price break amounts must be valid numbers";
  }
  const emptyExpenses = data.expenses.filter((e) => !e.reason.trim() || !e.amount);
  if (emptyExpenses.length > 0) errors.expenses = "All expense reason and amount are required";
  else {
    const invalidExpenses = data.expenses.filter((e) => isNaN(Number(e.amount)));
    if (invalidExpenses.length > 0) errors.expenses = "Expense amounts must be valid numbers";
  }
  const emptyScholarships = data.scholarships.filter((s) => !s.trim());
  if (emptyScholarships.length > 0) errors.scholarships = "All scholarship fields must be filled";
  return errors;
}

function validateStep3(data) {
  const errors = {};
  const hasEmpty = data.curriculum.some(
    (sec) => !sec.heading.trim() || sec.modules.some((m) => !m.name.trim())
  );
  if (hasEmpty) errors.curriculum = "All section headings and module names are required";
  return errors;
}

function validateStep4(data) {
  const errors = {};
  const invalid = data.batches.some(
    (b) => !b.seats || isNaN(Number(b.seats)) || Number(b.seats) <= 0 || b.days.length === 0 || !b.time
  );
  if (invalid) errors.batches = "Each batch needs valid seats (number > 0), at least one day, and a time";
  return errors;
}

// Upload step validation
// uploadData shape: { thumbnail: File|null, images: File[], previewVideo: File|null, documents: File[], materials: File[] }
function validateStep5(data) {
  const errors = {};

  // Thumbnail: required, max 1 MB
  if (!data.thumbnail) {
    errors.thumbnail = "Thumbnail is required";
  } else if (data.thumbnail.size > 1 * 1024 * 1024) {
    errors.thumbnail = "Thumbnail must be under 1 MB";
  }

  // Course images: required (at least 1), up to 5, each max 1 MB
  if (!data.images || data.images.length === 0) {
    errors.images = "At least 1 course image is required";
  } else if (data.images.length > 5) {
    errors.images = "Maximum 5 course images allowed";
  } else {
    const oversized = data.images.some((f) => f.size > 1 * 1024 * 1024);
    if (oversized) errors.images = "Each course image must be under 1 MB";
  }

  // Preview video: optional — no validation

  // Institute documents: at least 1 required
  if (!data.documents || data.documents.length === 0) {
    errors.documents = "At least one institute document is required";
  }

  // Student materials: required, PDF only
  if (!data.materials || data.materials.length === 0) {
    errors.materials = "At least one student material (PDF) is required";
  } else {
    const nonPdf = data.materials.some(
      (f) => f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")
    );
    if (nonPdf) errors.materials = "Only PDF files are allowed for student materials";
  }

  return errors;
}

function validateStep6(data) {
  const errors = {};
  const hasEmpty = data.faqs.some((f) => !f.question.trim() || !f.answer.trim());
  if (hasEmpty) errors.faqs = "All FAQ questions and answers are required";
  return errors;
}

function getStepErrors(stepIndex, stepData, uploadData) {
  switch (stepIndex) {
    case 0: return validateStep1(stepData[0]);
    case 1: return validateStep2(stepData[1]);
    case 2: return validateStep3(stepData[2]);
    case 3: return validateStep4(stepData[3]);
    case 4: return validateStep5(uploadData);
    case 5: return validateStep6(stepData[5]);
    default: return {};
  }
}

function isStepComplete(stepIndex, stepData, uploadData) {
  return Object.keys(getStepErrors(stepIndex, stepData, uploadData)).length === 0;
}

// ── Reusable primitives ──────────────────────────────────────────────────────

const Label = ({ children, required }) => (
  <label className="block text-[12px] font-medium text-gray-500 uppercase tracking-wide mb-1.5">
    {children}{required && <span className="text-emerald-500 ml-0.5">*</span>}
  </label>
);

const FieldError = ({ msg }) =>
  msg ? (
    <p className="mt-1 flex items-center gap-1 text-[11px] text-red-500">
      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {msg}
    </p>
  ) : null;

const Input = ({ className = "", error, ...props }) => (
  <input
    className={`w-full border rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all bg-white ${
      error
        ? "border-red-400 focus:border-red-400 focus:ring-red-50"
        : "border-gray-200 focus:border-emerald-400 focus:ring-emerald-50"
    } ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", error, ...props }) => (
  <textarea
    className={`w-full border rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all bg-white resize-none ${
      error
        ? "border-red-400 focus:border-red-400 focus:ring-red-50"
        : "border-gray-200 focus:border-emerald-400 focus:ring-emerald-50"
    } ${className}`}
    {...props}
  />
);

const Select = ({ children, className = "", error, ...props }) => (
  <select
    className={`w-full border rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 focus:outline-none focus:ring-2 transition-all bg-white ${
      error
        ? "border-red-400 focus:border-red-400 focus:ring-red-50"
        : "border-gray-200 focus:border-emerald-400 focus:ring-emerald-50"
    } ${className}`}
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

function Step1({ data, setData, fieldErrors, submitted }) {
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
            <Input
              placeholder="e.g. CS-2024-001"
              value={data.code}
              error={submitted && fieldErrors.code}
              onChange={(e) => setData((p) => ({ ...p, code: e.target.value }))}
            />
            <FieldError msg={submitted && fieldErrors.code} />
          </div>
          <div>
            <Label required>Course Title</Label>
            <Input
              placeholder="Enter course title"
              value={data.title}
              error={submitted && fieldErrors.title}
              onChange={(e) => setData((p) => ({ ...p, title: e.target.value }))}
            />
            <FieldError msg={submitted && fieldErrors.title} />
          </div>
        </div>
        <div className="mt-4">
          <Label required>About the Course</Label>
          <Textarea rows={4} placeholder="Describe what this course is about..." value={data.about} error={submitted && fieldErrors.about} onChange={(e) => setData((p) => ({ ...p, about: e.target.value }))} />
          <FieldError msg={submitted && fieldErrors.about} />
        </div>
      </Card>

      <Card>
        <SectionTitle>Duration & Qualification</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label required>Course Duration</Label>
            <Select
              value={data.duration}
              error={submitted && fieldErrors.duration}
              onChange={(e) => setData((p) => ({ ...p, duration: e.target.value }))}
            >
              <option value="">Select duration</option>
              {["0–3 months", "3–6 months", "6–12 months", "1–2 years", "2–4 years"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </Select>
            <FieldError msg={submitted && fieldErrors.duration} />
          </div>
          <div>
            <Label required>Minimum Qualification</Label>
            <Select
              value={data.minQual}
              error={submitted && fieldErrors.minQual}
              onChange={(e) => setData((p) => ({ ...p, minQual: e.target.value }))}
            >
              <option value="">Select qualification</option>
              {["No Education", "K-5", "K-10", "K-12", "Undergraduate", "Graduate", "Post Graduate", "Masters", "Doctoral"].map((q) => (
                <option key={q}>{q}</option>
              ))}
            </Select>
            <FieldError msg={submitted && fieldErrors.minQual} />
          </div>
        </div>
        <div className="mt-4">
          <Label required>Prior Knowledge Required</Label>
          <Textarea rows={2} placeholder="Describe any prior knowledge or skills needed..." value={data.priorQual} error={submitted && fieldErrors.priorQual} onChange={(e) => setData((p) => ({ ...p, priorQual: e.target.value }))} />
          <FieldError msg={submitted && fieldErrors.priorQual} />
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
            <Label required>Course Language</Label>
            <Input placeholder="e.g. English, Hindi" value={data.language} error={submitted && fieldErrors.language} onChange={(e) => setData((p) => ({ ...p, language: e.target.value }))} />
            <FieldError msg={submitted && fieldErrors.language} />
          </div>
        </div>

        <div className="mt-4">
          <Label required>Course Locations</Label>
          {submitted && fieldErrors.locations && <FieldError msg={fieldErrors.locations} />}
          {data.locations.map((loc, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <Input placeholder={`Location ${i + 1}`} value={loc} error={submitted && fieldErrors.locations && !loc.trim()} onChange={(e) => update("locations", i, e.target.value)} />
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
            <Label required>Course Level</Label>
            <Input placeholder="e.g. Intermediate" value={data.level} error={submitted && fieldErrors.level} onChange={(e) => setData((p) => ({ ...p, level: e.target.value }))} />
            <FieldError msg={submitted && fieldErrors.level} />
          </div>
          <div>
            <Label required>Course Difficulty</Label>
            <Select value={data.difficulty} error={submitted && fieldErrors.difficulty} onChange={(e) => setData((p) => ({ ...p, difficulty: e.target.value }))}>
              <option value="">Select difficulty</option>
              {["Beginner", "Intermediate", "Advanced"].map((d) => <option key={d}>{d}</option>)}
            </Select>
            <FieldError msg={submitted && fieldErrors.difficulty} />
          </div>
          <div>
            <Label required>Certification Type</Label>
            <Select value={data.certification} error={submitted && fieldErrors.certification} onChange={(e) => setData((p) => ({ ...p, certification: e.target.value }))}>
              <option value="">Select type</option>
              {["Degree", "Diploma", "Certificate of Completion", "Certificate of Participation"].map((c) => <option key={c}>{c}</option>)}
            </Select>
            <FieldError msg={submitted && fieldErrors.certification} />
          </div>
          <div>
            <Label required>Supporting Materials</Label>
            <Select value={data.materials} error={submitted && fieldErrors.materials} onChange={(e) => setData((p) => ({ ...p, materials: e.target.value }))}>
              <option value="">Select</option>
              <option>Provided</option>
              <option>Not Provided</option>
            </Select>
            <FieldError msg={submitted && fieldErrors.materials} />
          </div>
          <div>
            <Label required>Placement Assistance</Label>
            <Select value={data.placement} error={submitted && fieldErrors.placement} onChange={(e) => setData((p) => ({ ...p, placement: e.target.value }))}>
              <option value="">Select</option>
              <option>Guaranteed</option>
              <option>Connection</option>
              <option>No</option>
            </Select>
            <FieldError msg={submitted && fieldErrors.placement} />
          </div>
        </div>

        <div className="mt-4">
          <Label required>Accreditation</Label>
          {submitted && fieldErrors.accreditation && <FieldError msg={fieldErrors.accreditation} />}
          <div className="flex flex-wrap gap-2 mt-1">
            {ACCREDITATION_OPTIONS.map((opt) => {
              const active = data.accreditation.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleAcc(opt)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all ${active ? "bg-emerald-500 text-white border-emerald-500" : submitted && fieldErrors.accreditation ? "bg-white text-red-500 border-red-300 hover:border-red-400" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}
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
        {submitted && fieldErrors.outcomes && <FieldError msg={fieldErrors.outcomes} />}
        {data.outcomes.map((out, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input
              placeholder={`Outcome ${i + 1} — What will students achieve?`}
              value={out}
              error={submitted && fieldErrors.outcomes && !out.trim()}
              onChange={(e) => update("outcomes", i, e.target.value)}
            />
            {data.outcomes.length > 1 && <RemoveButton onClick={() => remove("outcomes", i)} />}
          </div>
        ))}
        {data.outcomes.length < 10 && (
          <AddButton onClick={() => add("outcomes")} label="Add Learning Outcome" />
        )}
      </Card>

      <Card>
        <SectionTitle>Career Path</SectionTitle>
        {submitted && fieldErrors.jobs && <FieldError msg={fieldErrors.jobs} />}
        {data.jobs.map((job, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input
              placeholder={`Job role / career path ${i + 1}`}
              value={job}
              error={submitted && fieldErrors.jobs && !job.trim()}
              onChange={(e) => update("jobs", i, e.target.value)}
            />
            {data.jobs.length > 1 && <RemoveButton onClick={() => remove("jobs", i)} />}
          </div>
        ))}
        <AddButton onClick={() => add("jobs")} label="Add Career Path" />
      </Card>

      <Card>
        <SectionTitle>Keywords</SectionTitle>
        <Textarea rows={2} placeholder="Enter keywords separated by commas (e.g. Python, Data Science, Machine Learning)" value={data.keywords} error={submitted && fieldErrors.keywords} onChange={(e) => setData((p) => ({ ...p, keywords: e.target.value }))} />
        <FieldError msg={submitted && fieldErrors.keywords} />
      </Card>
    </div>
  );
}

function Step2({ data, setData, fieldErrors, submitted }) {
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
            <Input
              type="number"
              placeholder="0"
              value={data.actualPrice}
              error={submitted && fieldErrors.actualPrice}
              onChange={(e) => setData((p) => ({ ...p, actualPrice: e.target.value }))}
            />
            <FieldError msg={submitted && fieldErrors.actualPrice} />
          </div>
          <div>
            <Label required>Discount (%)</Label>
            <Input
              type="number"
              placeholder="0"
              value={data.discount}
              error={submitted && fieldErrors.discount}
              onChange={(e) => setData((p) => ({ ...p, discount: e.target.value }))}
            />
            <FieldError msg={submitted && fieldErrors.discount} />
          </div>
          <div>
            <Label required>Current Price (₹)</Label>
            <Input
              type="number"
              placeholder="Enter current price"
              value={data.currentPrice}
              error={submitted && fieldErrors.currentPrice}
              onChange={(e) => setData((p) => ({ ...p, currentPrice: e.target.value }))}
            />
            <FieldError msg={submitted && fieldErrors.currentPrice} />
          </div>
        </div>
      </Card>

      <Card>
        <SectionTitle>Price Breakdown</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">Explain what's included in the price</p>
        {submitted && fieldErrors.priceBreaks && <FieldError msg={fieldErrors.priceBreaks} />}
        {data.priceBreaks.map((b, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder="Reason (e.g. Lab fees)" value={b.reason} error={submitted && fieldErrors.priceBreaks && !b.reason.trim()} onChange={(e) => updatePriceBreak(i, "reason", e.target.value)} />
            <Input
              placeholder="₹ Amount"
              className="w-32"
              type="number"
              value={b.price}
              error={submitted && fieldErrors.priceBreaks && !b.price}
              onChange={(e) => updatePriceBreak(i, "price", e.target.value)}
            />
            {data.priceBreaks.length > 1 && <RemoveButton onClick={() => removePriceBreak(i)} />}
          </div>
        ))}
        <AddButton onClick={addPriceBreak} label="Add Price Break" />
      </Card>

      <Card>
        <SectionTitle>Extra Course Expenses</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">Any additional costs the student may incur (e.g. Study materials, Domain, Projects, Certificate)</p>
        {submitted && fieldErrors.expenses && <FieldError msg={fieldErrors.expenses} />}
        {data.expenses.map((exp, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder="Reason (e.g. Study materials)" value={exp.reason} error={submitted && fieldErrors.expenses && !exp.reason.trim()} onChange={(e) => updateExpense(i, "reason", e.target.value)} />
            <Input
              placeholder="Amount or number"
              type="number"
              value={exp.amount}
              error={submitted && fieldErrors.expenses && !exp.amount}
              onChange={(e) => updateExpense(i, "amount", e.target.value)}
            />
            {data.expenses.length > 1 && <RemoveButton onClick={() => removeExpense(i)} />}
          </div>
        ))}
        <AddButton onClick={addExpense} label="Add Expense" />
      </Card>

      <Card>
        <SectionTitle>Scholarships</SectionTitle>
        {submitted && fieldErrors.scholarships && <FieldError msg={fieldErrors.scholarships} />}
        {data.scholarships.map((s, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <Input placeholder={`Scholarship ${i + 1}`} value={s} error={submitted && fieldErrors.scholarships && !s.trim()} onChange={(e) => updateScholarship(i, e.target.value)} />
            {data.scholarships.length > 1 && <RemoveButton onClick={() => removeScholarship(i)} />}
          </div>
        ))}
        <AddButton onClick={addScholarship} label="Add Scholarship" />
      </Card>
    </div>
  );
}

function Step3({ data, setData, fieldErrors, submitted }) {
  const addHeading = () => setData((p) => ({ ...p, curriculum: [...p.curriculum, { heading: "", duration: "", modules: [{ name: "", description: "" }] }] }));
  const removeHeading = (i) => setData((p) => ({ ...p, curriculum: p.curriculum.filter((_, j) => j !== i) }));
  const updateHeading = (i, key, val) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === i ? { ...h, [key]: val } : h) }));
  const addModule = (i) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === i ? { ...h, modules: [...h.modules, { name: "", description: "" }] } : h) }));
  const removeModule = (hi, mi) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === hi ? { ...h, modules: h.modules.filter((_, k) => k !== mi) } : h) }));
  const updateModule = (hi, mi, key, val) => setData((p) => ({ ...p, curriculum: p.curriculum.map((h, j) => j === hi ? { ...h, modules: h.modules.map((m, k) => k === mi ? { ...m, [key]: val } : m) } : h) }));

  return (
    <div className="space-y-5">
      {submitted && fieldErrors.curriculum && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
          <FieldError msg={fieldErrors.curriculum} />
        </div>
      )}
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
              <Input
                placeholder="e.g. Introduction to Python"
                value={section.heading}
                error={submitted && fieldErrors.curriculum && !section.heading.trim()}
                onChange={(e) => updateHeading(i, "heading", e.target.value)}
              />
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
                  <Input
                    placeholder={`Module ${mi + 1} name`}
                    value={mod.name}
                    error={submitted && fieldErrors.curriculum && !mod.name.trim()}
                    onChange={(e) => updateModule(i, mi, "name", e.target.value)}
                  />
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

function Step4({ data, setData, fieldErrors, submitted }) {
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
      {submitted && fieldErrors.batches && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
          <FieldError msg={fieldErrors.batches} />
        </div>
      )}
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
              <Input
                type="number"
                placeholder="e.g. 30"
                value={batch.seats}
                error={submitted && fieldErrors.batches && (!batch.seats || isNaN(Number(batch.seats)) || Number(batch.seats) <= 0)}
                onChange={(e) => updateBatch(i, "seats", e.target.value)}
              />
            </div>
            <div>
              <Label>Batch Time</Label>
              <Input
                type="time"
                value={batch.time}
                error={submitted && fieldErrors.batches && !batch.time}
                onChange={(e) => updateBatch(i, "time", e.target.value)}
              />
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
                  className={`w-12 h-10 rounded-lg text-[12px] font-medium border transition-all ${batch.days.includes(day) ? "bg-emerald-500 text-white border-emerald-500" : submitted && fieldErrors.batches && batch.days.length === 0 ? "bg-white text-red-400 border-red-300" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"}`}
                >
                  {day}
                </button>
              ))}
            </div>
            {submitted && fieldErrors.batches && batch.days.length === 0 && (
              <FieldError msg="Select at least one day" />
            )}
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

// ── Upload Box with external state control ───────────────────────────────────

function UploadBox({ label, hint, multiple, accept, required, files, onFilesChange, error }) {
  const handleChange = (e) => {
    const selected = Array.from(e.target.files);
    onFilesChange(multiple ? (prev) => [...prev, ...selected] : selected);
    // reset input so same file can be re-selected if removed
    e.target.value = "";
  };
  const remove = (i) => onFilesChange((prev) => prev.filter((_, j) => j !== i));

  return (
    <div className="mb-4">
      <Label required={required}>{label}</Label>
      {hint && <p className="text-[11px] text-gray-400 mb-2">{hint}</p>}
      <label className={`flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-xl cursor-pointer transition-all ${error ? "border-red-300 hover:border-red-400 bg-red-50/30" : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"}`}>
        <Upload className={`w-5 h-5 mb-1 ${error ? "text-red-400" : "text-gray-400"}`} />
        <span className={`text-[12px] ${error ? "text-red-500" : "text-gray-500"}`}>
          Click to upload{multiple ? " (multiple)" : ""}
        </span>
        <input type="file" className="hidden" multiple={multiple} accept={accept} onChange={handleChange} />
      </label>
      {error && <FieldError msg={error} />}
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

function Step5({ data, setData, fieldErrors, submitted }) {
  const setField = (key) => (updater) =>
    setData((prev) => ({
      ...prev,
      [key]: typeof updater === "function" ? updater(prev[key]) : updater,
    }));

  return (
    <div className="space-y-5">
      <Card>
        <SectionTitle>Course Thumbnail & Images</SectionTitle>
        <UploadBox
          label="Thumbnail"
          hint="Required · 1280 × 720 px · max 1 MB"
          accept="image/*"
          required
          files={data.thumbnail ? [data.thumbnail] : []}
          onFilesChange={(updater) => {
            const result = typeof updater === "function" ? updater(data.thumbnail ? [data.thumbnail] : []) : updater;
            setData((prev) => ({ ...prev, thumbnail: result[result.length - 1] || null }));
          }}
          error={submitted && fieldErrors.thumbnail}
        />
        <UploadBox
          label="Course Images"
          hint="Required · up to 5 images · max 1 MB each"
          multiple
          accept="image/*"
          required
          files={data.images}
          onFilesChange={setField("images")}
          error={submitted && fieldErrors.images}
        />
      </Card>
      <Card>
        <SectionTitle>Course Video</SectionTitle>
        <UploadBox
          label="Preview Video"
          hint="Optional"
          accept="video/*"
          files={data.previewVideo ? [data.previewVideo] : []}
          onFilesChange={(updater) => {
            const result = typeof updater === "function" ? updater(data.previewVideo ? [data.previewVideo] : []) : updater;
            setData((prev) => ({ ...prev, previewVideo: result[result.length - 1] || null }));
          }}
        />
      </Card>
      <Card>
        <SectionTitle>Institute Supporting Documents</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">e.g. Module curriculum, certificates</p>
        <UploadBox
          label="Documents"
          hint="Required · at least one document"
          multiple
          accept=".pdf,.doc,.docx"
          required
          files={data.documents}
          onFilesChange={setField("documents")}
          error={submitted && fieldErrors.documents}
        />
      </Card>
      <Card>
        <SectionTitle>Student Supporting Materials</SectionTitle>
        <p className="text-[11px] text-gray-400 mb-3">PDF files only</p>
        <UploadBox
          label="Materials"
          hint="PDF only"
          multiple
          accept=".pdf"
          files={data.materials}
          onFilesChange={setField("materials")}
          error={submitted && fieldErrors.materials}
        />
      </Card>
    </div>
  );
}

function Step6({ data, setData, fieldErrors, submitted }) {
  const addFaq = () => setData((p) => ({ ...p, faqs: [...p.faqs, { question: "", answer: "" }] }));
  const removeFaq = (i) => setData((p) => ({ ...p, faqs: p.faqs.filter((_, j) => j !== i) }));
  const updateFaq = (i, key, val) => setData((p) => ({ ...p, faqs: p.faqs.map((f, j) => j === i ? { ...f, [key]: val } : f) }));

  return (
    <div className="space-y-4">
      {submitted && fieldErrors.faqs && (
        <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
          <FieldError msg={fieldErrors.faqs} />
        </div>
      )}
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
              <Input
                placeholder="Enter frequently asked question"
                value={faq.question}
                error={submitted && fieldErrors.faqs && !faq.question.trim()}
                onChange={(e) => updateFaq(i, "question", e.target.value)}
              />
            </div>
            <div>
              <Label>Answer</Label>
              <Textarea
                rows={3}
                placeholder="Enter the answer"
                value={faq.answer}
                error={submitted && fieldErrors.faqs && !faq.answer.trim()}
                onChange={(e) => updateFaq(i, "answer", e.target.value)}
              />
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
  const [loading, setLoading] = useState(false);

  // visitedSteps tracks which steps have actually been visited (user landed on them)
  // submittedSteps tracks which steps had "Next" pressed (validation triggered)
  const [visitedSteps, setVisitedSteps] = useState({ 0: true }); // step 1 visited by default
  const [submittedSteps, setSubmittedSteps] = useState({});

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

  // Upload data lives here — step5 reads/writes this
  const [uploadData, setUploadData] = useState({
    thumbnail: null,
    images: [],
    previewVideo: null,
    documents: [],
    materials: [],
  });

  const [step6, setStep6] = useState({
    faqs: [{ question: "", answer: "" }],
  });

  const allStepData = [step1, step2, step3, step4, null, step6];

  const getErrors = (idx) => getStepErrors(idx, allStepData, uploadData);
  const stepComplete = (idx) => isStepComplete(idx, allStepData, uploadData);

  // Determine the visual state of each step tab
  // Rules:
  // - active: currently on this step
  // - complete (green check): was submitted (Next pressed) AND has no errors
  // - error (red X): was submitted (Next pressed) AND has errors
  //   OR: was skipped (jumped past without visiting — not visited but steps before it were submitted)
  // - neutral: visited but not yet submitted
  //
  // "Skipped" means: user jumped from step A directly to step C (via indicator),
  //   so step B was never visited. We show it as red.
  // When going back, skipped steps that were never submitted become neutral again
  //   (no submitted entry for them).
  
  const getTabState = (stepId) => {
    const idx = stepId - 1;
    const isActive = step === stepId;
    const wasSubmitted = !!submittedSteps[idx];
    const wasVisited = !!visitedSteps[idx];

    if (isActive) return "active";

    if (wasSubmitted) {
      return stepComplete(idx) ? "complete" : "error";
    }

    // Not submitted. Was it skipped?
    // A step is "skipped" if: it was never visited, but some later step was visited
    // (meaning user jumped over it)
    if (!wasVisited) {
      // Check if any step with higher index was visited
      const anyLaterVisited = Object.keys(visitedSteps).some(
        (k) => Number(k) > idx && visitedSteps[k]
      );
      if (anyLaterVisited) return "error"; // skipped over → show red
    }

    return "neutral";
  };

  const handleIndicatorClick = (targetStepId) => {
    const currentIdx = step - 1;
    const targetIdx = targetStepId - 1;

    if (targetStepId === step) return;

    if (targetStepId > step) {
      // Going FORWARD: mark all skipped steps (current up to target-1) as submitted
      // so they show red if invalid
      const newSubmitted = { ...submittedSteps };
      for (let i = currentIdx; i < targetIdx; i++) {
        newSubmitted[i] = true;
      }
      setSubmittedSteps(newSubmitted);
    } else {
      // Going BACKWARD: remove submitted state for target step and everything after it
      // so they revert to neutral
      const newSubmitted = { ...submittedSteps };
      for (let i = targetIdx; i < STEPS.length; i++) {
        delete newSubmitted[i];
      }
      setSubmittedSteps(newSubmitted);
      // Also clear visited for steps after target so skipped-red logic resets
      const newVisited = { ...visitedSteps };
      for (let i = targetIdx + 1; i < STEPS.length; i++) {
        delete newVisited[i];
      }
      setVisitedSteps(newVisited);
    }

    setVisitedSteps((prev) => ({ ...prev, [targetIdx]: true }));
    setStep(targetStepId);
  };

  const handleNext = () => {
    const currentIdx = step - 1;
    setSubmittedSteps((prev) => ({ ...prev, [currentIdx]: true }));

    const errors = getErrors(currentIdx);
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      showError(firstError);
      return;
    }

    const nextStep = step + 1;
    setVisitedSteps((prev) => ({ ...prev, [nextStep - 1]: true }));
    setStep(nextStep);
  };

  const handlePrev = () => {
    const prevStep = Math.max(1, step - 1);
    const prevIdx = prevStep - 1;

    // Remove submitted state for prevStep and everything after it
    setSubmittedSteps((prev) => {
      const next = { ...prev };
      for (let i = prevIdx; i < STEPS.length; i++) delete next[i];
      return next;
    });
    // Clear visited for steps after prevStep so they go neutral
    setVisitedSteps((prev) => {
      const next = { ...prev };
      for (let i = prevIdx + 1; i < STEPS.length; i++) delete next[i];
      return next;
    });

    setStep(prevStep);
  };

  const handlePublishCourse = async () => {
  const allSubmitted = {};
  STEPS.forEach((_, idx) => {
    allSubmitted[idx] = true;
  });

  setSubmittedSteps(allSubmitted);

  for (let idx = 0; idx < STEPS.length; idx++) {
    const errors = getErrors(idx);

    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];

      showError(
        `Step ${idx + 1} (${STEPS[idx].label}): ${firstError}`
      );

      setVisitedSteps((prev) => ({
        ...prev,
        [idx]: true,
      }));

      setStep(idx + 1);
      return;
    }
  }

  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    const payload = {
      basicDetails: {
        courseCode: step1.code,
        courseTitle: step1.title,
        aboutCourse: step1.about,
        duration: step1.duration,
        minimumQualification: step1.minQual,
        priorQualificationNeed: step1.priorQual,
        locations: step1.locations.filter(Boolean),
        learningMode: step1.mode,
        learningOutcomes: step1.outcomes.filter(Boolean),

        courseInformation: {
          language: step1.language,
          courseLevel: step1.level,
          accreditation: step1.accreditation,
          difficulty: step1.difficulty,
          certification: step1.certification,
          supportingMaterials: step1.materials,
          placementAssistance: step1.placement,
        },

        careerPaths: step1.jobs.filter(Boolean),

        keywords: step1.keywords
          .split(",")
          .map((k) => k.trim())
          .filter(Boolean),
      },

      priceDetails: {
        actualPrice: Number(step2.actualPrice || 0),
        discount: Number(step2.discount || 0),
        currentPrice: Number(step2.currentPrice || 0),

        priceBreakReasons: step2.priceBreaks.map(
          (item) => ({
            reason: item.reason,
            price: Number(item.price || 0),
          })
        ),

        courseExpenses: step2.expenses.map(
          (item) => ({
            reason: item.reason,
            expense: Number(item.amount || 0),
          })
        ),

        scholarships:
          step2.scholarships.filter(Boolean),
      },

      curriculumDetails: step3.curriculum,

      batchPlan: step4.batches.map(
        (batch, index) => ({
          batchName: `Batch ${index + 1}`,
          openSeats: Number(batch.seats || 0),
          batchDays: batch.days,
          batchTime: batch.time,
        })
      ),

      faqs: step6.faqs,
    };

    const formData = new FormData();

    // JSON DATA
    formData.append(
      "basicDetails",
      JSON.stringify(payload.basicDetails)
    );

    formData.append(
      "priceDetails",
      JSON.stringify(payload.priceDetails)
    );

    formData.append(
      "curriculumDetails",
      JSON.stringify(payload.curriculumDetails)
    );

    formData.append(
      "batchPlan",
      JSON.stringify(payload.batchPlan)
    );

    formData.append(
      "faqs",
      JSON.stringify(payload.faqs)
    );

    // THUMBNAIL
    if (uploadData.thumbnail) {
      formData.append(
        "thumbnail",
        uploadData.thumbnail
      );
    }

    // IMAGES
    uploadData.images.forEach((file) => {
      formData.append("images", file);
    });

    // VIDEO
    if (uploadData.previewVideo) {
      formData.append(
        "video",
        uploadData.previewVideo
      );
    }

    // DOCUMENTS
    uploadData.documents.forEach((file) => {
      formData.append("documents", file);
    });

    // STUDENT MATERIALS
    uploadData.materials.forEach((file) => {
      formData.append("materials", file);
    });

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/courses/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Course creation failed"
      );
    }

    showSuccess("Course Created Successfully");

    // Reset Form
    setStep(1);
    setSubmittedSteps({});
    setVisitedSteps({ 0: true });

    setStep1({
      code: "",
      title: "",
      about: "",
      duration: "",
      minQual: "",
      priorQual: "",
      locations: [""],
      mode: "Onsite",
      language: "",
      level: "",
      difficulty: "",
      certification: "",
      materials: "",
      placement: "",
      accreditation: [],
      outcomes: ["", "", "", ""],
      jobs: [""],
      keywords: "",
    });

    setStep2({
      actualPrice: "",
      discount: "",
      currentPrice: "",
      priceBreaks: [
        {
          reason: "",
          price: "",
        },
      ],
      expenses: [
        {
          reason: "",
          amount: "",
        },
      ],
      scholarships: [""],
    });

    setStep3({
      curriculum: [
        {
          heading: "",
          duration: "",
          modules: [
            {
              name: "",
              description: "",
            },
          ],
        },
      ],
    });

    setStep4({
      batches: [
        {
          seats: "",
          days: [],
          time: "",
        },
      ],
    });

    setUploadData({
      thumbnail: null,
      images: [],
      previewVideo: null,
      documents: [],
      materials: [],
    });

    setStep6({
      faqs: [
        {
          question: "",
          answer: "",
        },
      ],
    });
  } catch (error) {
    console.error(error);
    showError(
      error.message || "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};

  const renderStep = () => {
    const currentIdx = step - 1;
    const fe = submittedSteps[currentIdx] ? getErrors(currentIdx) : {};
    const submitted = !!submittedSteps[currentIdx];

    switch (step) {
      case 1: return <Step1 data={step1} setData={setStep1} fieldErrors={fe} submitted={submitted} />;
      case 2: return <Step2 data={step2} setData={setStep2} fieldErrors={fe} submitted={submitted} />;
      case 3: return <Step3 data={step3} setData={setStep3} fieldErrors={fe} submitted={submitted} />;
      case 4: return <Step4 data={step4} setData={setStep4} fieldErrors={fe} submitted={submitted} />;
      case 5: return <Step5 data={uploadData} setData={setUploadData} fieldErrors={fe} submitted={submitted} />;
      case 6: return <Step6 data={step6} setData={setStep6} fieldErrors={fe} submitted={submitted} />;
      default: return null;
    }
  };

  return (
    <div className="w-full">

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
            const tabState = getTabState(s.id);

            const baseClass = "flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-medium transition-all whitespace-nowrap";
            let stateClass = "";

            switch (tabState) {
              case "active":
                stateClass = "bg-emerald-500 text-white shadow-sm";
                break;
              case "complete":
                stateClass = "text-emerald-600 bg-emerald-50";
                break;
              case "error":
                stateClass = "text-red-600 bg-red-50";
                break;
              default: // neutral
                stateClass = "text-gray-500 hover:bg-gray-50";
            }

            const showCheck = tabState === "complete";
            const showX = tabState === "error";
            const showIcon = !showCheck && !showX;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleIndicatorClick(s.id)}
                className={`${baseClass} ${stateClass}`}
              >
                {showCheck ? (
                  <Check className="w-3.5 h-3.5" />
                ) : showX ? (
                  <X className="w-3.5 h-3.5" />
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
          onClick={handlePrev}
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
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-[13px] font-medium hover:bg-emerald-600 transition-all shadow-sm active:scale-95"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handlePublishCourse}
            disabled={loading}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-[13px] font-medium transition-all shadow-sm ${
              loading ? "bg-gray-400 cursor-not-allowed pointer-events-none" : "bg-emerald-500 hover:bg-emerald-600 active:scale-95"
            }`}
          >
            <Check className="w-4 h-4" />
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Publishing...
              </>
            ) : (
              "Publish Course"
            )}
          </button>
        )}
      </div>
    </div>
  );
}