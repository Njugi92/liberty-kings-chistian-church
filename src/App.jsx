import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactRow from "./components/ContactRow";
import Header from "./components/Header";
import Hero from "./components/Hero"; // Import the Hero component
import MissionSection from "./components/MissionSection"; // Import the MissionSection component
import KeyActivitiesSection from "./components/KeyActivitiesSection";
import JoinUsSection from "./components/JoinUsSection";
import GallerySection from "./components/GallerySection";
import ContributionSection from "./components/ContributionSection";
import Footer from "./components/Footer";
import DonatePage from "./pages/DonatePage";
import OurLocationPage from "./pages/OurLocationPage";
import EventsPage from "./pages/EventsPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import LiveWebCastPage from "./pages/LiveWebCastPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Navbar />
      <ContactRow />
      <Header />
      <div>
        {/* Define Routes for different pages */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> {/* Home page */}
                <MissionSection /> {/* Mission Section */}
                <KeyActivitiesSection />
                <GallerySection />
                <ContributionSection />
                <JoinUsSection />
              </>
            }
          />
          <Route
            path="/donate"
            element={
              <>
                <DonatePage /> {/* Donate page */}
              </>
            }
          />
          <Route
            path="/our-location"
            element={<OurLocationPage />} // Our Location page
          />
          <Route
            path="/events"
            element={<EventsPage />} // Events page route
          />
          <Route path="/get-in-touch" element={<GetInTouchPage />} />
          <Route
            path="/live-web-cast"
            element={<LiveWebCastPage />} // Events page route
          />
          <Route
            path="/blog"
            element={<BlogPage />} // Events page route
          />
          {/* Add routes for other pages like Events, LiveWebCast, Blog, etc. */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
