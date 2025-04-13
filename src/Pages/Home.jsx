import React, { useState } from "react";
import { motion } from "framer-motion";

import background from "../components/assets/background.mp4";
import { Phone } from "lucide-react";
import PersonalService from "./Personal";
import ReputationCard from "./ReputationCard";
import Content from "./content";

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="bg-black">
      <div className=" min-h-screen ">
        {!videoEnded && (
          <video
            src={background}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full min-h-screen"
          />
        )}

        {videoEnded && (
          <div className="absolute top-0 left-0 mt-28 w-full min-h-screen flex items-center justify-center bg-black  text-white text-xl">
            <section className="text-white py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  Take Control of Your Online Reputation
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
                  Proven strategies to manage, repair, and protect your personal
                  or business presence online.
                </p>
                <div className="mt-8">
                  <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl text-white font-semibold transition-transform duration-300 hover:scale-110">
                    Get Started
                  </button>
                </div>
                <div className=" mt-20 flex items-center gap-20 justify-center">
                  <div className="flex flex-col gap-5">
                    <p className="font-bold">Talk to an Expert</p>
                    <button className="flex justify-center items-center bg-white rounded-full p-2 text-black font-bold transition-transform duration-300 hover:scale-110">
                      <Phone className="h-4" /> 877-657-2643
                    </button>
                  </div>
                  <p>or</p>
                  <div className="flex flex-col gap-5">
                    <p className="flex flex-col">
                      <small className="mb-0">Schedule a</small>
                      <span className="font-bold">Free Consultation</span>
                    </p>
                    <button className="bg-white rounded-full p-2 text-black font-bold transition-transform duration-300 hover:scale-110">
                      Book a Time
                    </button>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        )}
      </div>
      <PersonalService />
      <ReputationCard />
      <Content />
    </div>
  );
};

export default Home;
