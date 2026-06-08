import React from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Active Batches', value: '8', sub: 'Running now', icon: Calendar, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  { label: 'Total Students', value: '320', sub: 'In batches', icon: Users, color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { label: 'Upcoming', value: '3', sub: 'Starting soon', icon: Clock, color: 'text-amber-600 bg-amber-50 border-amber-100' },
  { label: 'Completed', value: '14', sub: 'This year', icon: CheckCircle, color: 'text-purple-600 bg-purple-50 border-purple-100' },
];

const batches = [
  { name: 'Data Science — Batch 5', students: 45, start: '01 Jun 2025', end: '31 Aug 2025', days: 'Mon, Wed, Fri', time: '06:00 PM', status: 'Active' },
  { name: 'UI/UX Design — Batch 3', students: 30, start: '10 Jun 2025', end: '10 Oct 2025', days: 'Tue, Thu, Sat', time: '07:00 PM', status: 'Upcoming' },
  { name: 'Digital Marketing — Batch 7', students: 38, start: '15 May 2025', end: '15 Jul 2025', days: 'Mon–Fri', time: '08:00 AM', status: 'Active' },
  { name: 'Python Workshop — Jun', students: 20, start: '20 Jun 2025', end: '25 Jun 2025', days: 'Sat, Sun', time: '10:00 AM', status: 'Upcoming' },
];

const BatchPlanner = () => {
  return (
    <div className="space-y-6">
     
    </div>
  );
};

export default BatchPlanner;