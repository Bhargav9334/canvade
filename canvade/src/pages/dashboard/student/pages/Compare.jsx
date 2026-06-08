import React, { useState } from 'react';
import {
  X, Star, Clock, Laptop, BarChart2, IndianRupee,
  Percent, CreditCard, Calendar, CheckCircle2,
  Briefcase, ShieldCheck, HelpCircle, FileText
} from 'lucide-react';

const Compare = () => {
  const [showCourse1, setShowCourse1] = useState(true);
  const [showCourse2, setShowCourse2] = useState(true);

  const features = [
    { label: 'Duration',          icon: Clock,         course1: '6 Months',                      course2: '4 Months' },
    { label: 'Mode',              icon: Laptop,        course1: 'Online (Live + Recorded)',       course2: 'Online (Live + Recorded)' },
    { label: 'Level',             icon: BarChart2,     course1: 'Beginner to Advanced',           course2: 'Beginner to Intermediate' },
    { label: 'Course Fee',        icon: IndianRupee,   course1: '₹ 1,50,000',                    course2: '₹ 95,000' },
    { label: 'Discount',          icon: Percent,       course1: '- ₹ 20,000',                    course2: '- ₹ 10,000',              isDiscount: true },
    { label: 'Final Price',       icon: IndianRupee,   course1: '₹ 1,30,000',                    course2: '₹ 85,000',                isBoldPrice: true },
    { label: 'EMI Options',       icon: CreditCard,    course1: '₹ 4,333/month',                 course2: '₹ 3,167/month' },
    { label: 'Next Batch',        icon: Calendar,      course1: '25 May 2025',                    course2: '10 June 2025' },
    { label: 'Certificate',       icon: CheckCircle2,  course1: 'Industry Recognized Certificate',course2: 'Industry Recognized Certificate', isCertRow: true },
    { label: 'Placement Support', icon: Briefcase,     course1: 'Placement Assistance',           course2: 'Career Guidance',         isVerifiedText: true },
    { label: 'Course Highlights', icon: Star,          isList: true,
      course1: ['12+ Industry Projects', 'Live Mentorship', 'Placement Assistance'],
      course2: ['8+ Real World Projects', 'Portfolio Development', 'Career Guidance'] },
    { label: 'Syllabus',          icon: FileText,      course1: 'View Syllabus',                  course2: 'View Syllabus',           isLink: true },
    { label: 'Student Rating',    icon: Star,          course1: '4.6',                            course2: '4.7',                     isRatingRow: true, reviews1: '(1,245)', reviews2: '(980)' },
  ];

  const getGridClass = () => {
    if (showCourse1 && showCourse2) return 'grid grid-cols-3';
    if (showCourse1 || showCourse2) return 'grid grid-cols-2';
    return 'grid grid-cols-1';
  };

  const renderCell = (row, courseKey, reviewKey) => {
    if (row.isList) return (
      <ul className="list-disc list-inside space-y-1 text-slate-950 font-medium text-xs">
        {row[courseKey].map((li, i) => <li key={i}>{li}</li>)}
      </ul>
    );
    if (row.isDiscount) return <span className="text-emerald-600 font-medium text-xs">{row[courseKey]}</span>;
    if (row.isBoldPrice) return <span className="text-slate-950 font-medium text-sm">{row[courseKey]}</span>;
    if (row.isLink) return <button className="text-[#10b981] font-medium text-xs hover:underline">{row[courseKey]}</button>;
    if (row.isVerifiedText) return (
      <div className="flex items-center gap-1.5 text-slate-950 font-medium text-xs">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50 stroke-[2.5] shrink-0" />
        <span>Yes</span>
      </div>
    );
    if (row.isCertRow) return (
      <div className="flex items-center gap-1.5 text-slate-950 font-medium text-xs">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-50 stroke-[2.5] shrink-0" />
        <span>{row[courseKey]}</span>
      </div>
    );
    if (row.isRatingRow) return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-slate-950">{row[courseKey]}</span>
        <div className="flex items-center gap-0.5 text-amber-500">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
        </div>
        <span className="text-[11px] text-slate-900 font-medium">{row[reviewKey]}</span>
      </div>
    );
    return <span className="text-slate-950 font-medium text-xs">{row[courseKey]}</span>;
  };

  return (
    <section className="space-y-6 w-full max-w-[1400px] mx-auto p-2">

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <div style={{ minWidth: showCourse1 && showCourse2 ? '620px' : '400px' }}>

            <div className={`${getGridClass()} border-b border-slate-200 items-stretch`}>
              <div className="p-6 flex items-center bg-white">
                <h2 className="text-base font-medium text-slate-900 tracking-tight">Course Details</h2>
              </div>

              {showCourse1 && (
                <div className="p-6 border-l border-slate-200 flex items-start gap-4 relative bg-white">
                  <button
                    onClick={() => setShowCourse1(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-rose-600 transition-colors p-1 hover:bg-slate-50 rounded-lg"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=80"
                    alt="Data Science"
                    className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="space-y-2 pt-1">
                    <h3 className="text-sm font-medium text-slate-950 leading-snug max-w-[180px]">Data Science Professional Course</h3>
                    <p className="text-xs text-slate-900 font-medium">Imarticus Learning</p>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>4.6</span>
                      <span className="text-slate-900 font-medium">(1,245 Reviews)</span>
                    </div>
                    <div className="pt-0.5">
                      <span className="inline-block text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">Online</span>
                    </div>
                  </div>
                </div>
              )}

              {showCourse2 && (
                <div className="p-6 border-l border-slate-200 flex items-start gap-4 relative bg-white">
                  <button
                    onClick={() => setShowCourse2(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-rose-600 transition-colors p-1 hover:bg-slate-50 rounded-lg"
                  >
                    <X className="w-4 h-4 stroke-[2.5]" />
                  </button>
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=80"
                    alt="UI/UX Design"
                    className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="space-y-2 pt-1">
                    <h3 className="text-sm font-medium text-slate-950 leading-snug max-w-[180px]">UI/UX Design Masterclass</h3>
                    <p className="text-xs text-slate-900 font-medium">DesignLab</p>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>4.7</span>
                      <span className="text-slate-900 font-medium">(980 Reviews)</span>
                    </div>
                    <div className="pt-0.5">
                      <span className="inline-block text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">Online</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="divide-y divide-slate-200 bg-white">
              {features.map((row, idx) => {
                const RowIcon = row.icon;
                return (
                  <div key={idx} className={`${getGridClass()} items-stretch hover:bg-slate-50/40 transition-colors`}>
                    <div className="p-4 px-6 flex items-center gap-3 text-slate-900 font-medium text-[14px] bg-slate-50">
                      <RowIcon className="w-5 h-5 text-slate-700 stroke-[2.5] shrink-0" />
                      <span>{row.label}</span>
                    </div>

                    {showCourse1 && (
                      <div className="p-4 px-6 border-l border-slate-200 bg-white flex items-center">
                        {renderCell(row, 'course1', 'reviews1')}
                      </div>
                    )}

                    {showCourse2 && (
                      <div className="p-4 px-6 border-l border-slate-200 bg-white flex items-center">
                        {renderCell(row, 'course2', 'reviews2')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {(!showCourse1 && !showCourse2) && (
        <div className="text-center py-4">
          <button
            onClick={() => { setShowCourse1(true); setShowCourse2(true); }}
            className="px-5 py-2 bg-[#10b981] text-white text-xs font-medium rounded-xl hover:bg-emerald-600 transition-all shadow-sm"
          >
            Reset Comparison
          </button>
        </div>
      )}

      <div className="bg-[#f4fbf9] border border-emerald-200 rounded-xl py-3 px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium text-slate-900">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          <span>All institutes are verified</span>
        </div>
        <span className="text-slate-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          <span>100% Secure Payment</span>
        </div>
        <span className="text-slate-300 hidden sm:inline">•</span>
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default Compare;
