import React from 'react'
import Navbar from "../components/Navbar";
import HomeHero from "../components/Home/HomeHero";
import RecommendedCourses from "../components/Home/RecommendedCourses";
import UnderstandCanvade from "../components/Home/UnderstandCanvade";
import CollegeTrustLogos from "../components/Home/CollegeTrustLogos";
import CourseCategories from '../components/Home/CourseCategories';
import InstituteRecommendation from '../components/Home/InstituteRecommendation';
import WorkshopsRegistration from '../components/Home/WorkshopsRegistration';
import NewsletterSection from '../components/Home/NewsletterSection';
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white ">
    
      <Navbar />

      <main className="flex-grow">
        <HomeHero />
        <RecommendedCourses />
        <UnderstandCanvade />
        <CollegeTrustLogos />
        <CourseCategories />
        <InstituteRecommendation />
        <WorkshopsRegistration />
        <NewsletterSection />
      </main>

      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}