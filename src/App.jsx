import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Scroll to the section based on the hash in the URL
const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return null;
};

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToHashElement /> {/* Add this to handle scroll on hash change */}
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Routes>
                    <Route path="/" element={
                        <>
                            <section id="hero">
                                <HeroSection />
                            </section>
                            <section id="features">
                                <FeatureSection />
                            </section>
                            <section id="workflow">
                                <Workflow />
                            </section>
                            <section id="pricing">
                                <Pricing />
                            </section>
                            <section id="testimonials">
                                <Testimonials />
                            </section>
                            <Footer />
                        </>
                    } />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
