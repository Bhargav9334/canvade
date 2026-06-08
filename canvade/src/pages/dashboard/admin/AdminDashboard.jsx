import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import AdminSidebar from './AdminSidebar';
import Analytics from './pages/Analytics';
import Promotions from './pages/Promotions';
import LeadsEnquiries from './pages/LeadsEnquiries';
import CoursesWorkshops from './pages/CoursesWorkshops';
import CourseCreateForm from '../../../components/Coursecreateform';
import RevenuePayments from './pages/RevenuePayments';
import ProfileVerification from './pages/ProfileVerification';
import ReviewsRatings from './pages/ReviewsRatings';
import BatchPlanner from './pages/BatchPlanner';
import BlogsPress from './pages/BlogsPress';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleSetActiveTab = (tab) => {
    if (tab !== 'courses') {
      setShowCreateForm(false);
    }
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    if (activeTab === 'courses' && showCreateForm) {
      return <CourseCreateForm onCancel={() => setShowCreateForm(false)} />;
    }

    switch (activeTab) {
      case 'analytics':
        return <Analytics />;
      case 'promotions':
        return <Promotions />;
      case 'leads':
        return <LeadsEnquiries />;
      case 'courses':
        return <CoursesWorkshops onCreateCourse={() => setShowCreateForm(true)} />;
      case 'payments':
        return <RevenuePayments />;
      case 'profile':
        return <ProfileVerification />;
      case 'reviews':
        return <ReviewsRatings />;
      case 'batches':
        return <BatchPlanner />;
      case 'blogs':
        return <BlogsPress />;
      default:
        return <Analytics />;
    }
  };

  return (
    <DashboardLayout
      sidebar={
        <AdminSidebar 
          activeTab={activeTab} 
          setActiveTab={handleSetActiveTab} 
        />
      }
    >
      <div className="w-full h-full">
        {renderTabContent()}
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;