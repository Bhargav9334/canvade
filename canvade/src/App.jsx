import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import AuthLayout from "./components/Auth/AuthLayout";
import OnboardingLayout from "./components/onboarding/OnboardingLayout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AboutPage from "./pages/AboutPage";
import HelpCenter from "./pages/HelpCenter";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ChatPage from "./pages/ChatPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from './pages/NotFound';
import Notifications from "./pages/Notifications";
import UpdatesPage from "./pages/UpdatesPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CompareCourses from "./pages/CompareCourses";
import CourseView from './pages/CourseView';
import InstituteView from "./pages/InstituteView";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
// import CountdownPage from "./components/CountdownPage"; 

function App() {
  
  // Countdown logic ko abhi ke liye band kar diya hai
  // const [isLocked, setIsLocked] = useState(false);

  // useEffect(() => {
  //   const targetDate = new Date("July 1, 2026 00:00:00").getTime();
    
  //   const checkTime = () => {
  //     const now = new Date().getTime();
  //     if (now >= targetDate) {
  //       setIsLocked(false);
  //     } else {
  //       setIsLocked(true);
  //     }
  //   };

  //   checkTime();
  //   const interval = setInterval(checkTime, 60000); 

  //   return () => clearInterval(interval);
  // }, []);

  // if (isLocked) {
  //   return <CountdownPage />;
  // }


 return (
    <BrowserRouter>
      <ScrollToTop /> 
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<OnboardingLayout initialFlow="login" />} />
            <Route path="/signup" element={<OnboardingLayout initialFlow="signup" />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/compare-courses" element={<CompareCourses />} />
            <Route path="/courseview" element={<CourseView />} />
            <Route path="/instituteview" element={<InstituteView />} />
            
        
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* सभी 404/गलत पाथ्स को संभालने वाले वाइल्डकार्ड (*) रूट्स हमेशा अंत में होने चाहिए */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;