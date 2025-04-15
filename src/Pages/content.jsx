import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import reputationCard from "../components/assets/graphic_report-card.svg";
import contentImg1 from "../components/assets/contentImg1.jpg";
import contentImg2 from "../components/assets/contentImg2.jpg";
import contentImg3 from "../components/assets/contentImg3.jpg";
import contentImg4 from "../components/assets/contentImg4.jpg";
import contentImg5 from "../components/assets/contentImg5.jpg";

const Content = () => {
  return (
    <div className="flex flex-col px-40 gap-10">
      <div className="bg-gray-950 h-60 rounded-3xl transition-transform duration-300 hover:scale-110">
        <div className="flex flex-col text-3xl font-sans text-black p-5 justify-center items-center">
          <p>You deserve to be represented</p>
          <p>fairly and accurately online</p>
        </div>
        <div className="flex flex-col font-serif justify-center text-black items-center">
          <p className="font-serif">
            No matter what threats you face online, ReputationDefender can help.
          </p>
          <p>
            We have solutions to protect your privacy, correct misleading search
          </p>
          <p>results, and more.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col md:flex-row justify-center gap-48">
          {/* Left content sliding in from the left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center  md:text-left"
          >
            <h1 className="text-2xl mb-8 md:text-4xl text-black ">
              Online Content <br /> Suppression
            </h1>
            <small className="mt-7 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
              <p>Control what shows up when</p>
              <p>people search for you or your</p>
              <p>business in Google.</p>
            </small>
            <button className="text-black rounded-full mt-6 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </motion.div>

          {/* Right image sliding in from the right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={contentImg1}
              alt="Oasis"
              className="rounded-xl w-72 h-96 shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row  justify-center  gap-20">
          {/* Left content sliding in from the left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={contentImg2}
              alt="Oasis"
              className="rounded-xl shadow-lg w-72 h-96 transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          {/* Right image sliding in from the right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className=" w-full md:w-1/2 text-center mt-7 md:text-left"
          >
            <h1 className="text-2xl  md:text-4xl text-black ">
              Concierge Digital Security
            </h1>

            <p className="text-gray-400 mt-7">
              Protect you and your family’s personal information across the
              internet.
            </p>

            <button className="text-black rounded-full mt-6 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row  justify-center  gap-48">
          {/* Left content sliding in from the left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" w-full md:w-1/2 text-center mt-7 md:text-left"
          >
            <h1 className="text-2xl  md:text-4xl text-black ">
              Online reviews
            </h1>
            <small className=" mx-auto mt-7 flex flex-col text-gray-400">
              <p>Recruit loyal customers to sing your</p>
              <p>company’s praises through online reviews.</p>
            </small>
            <button className="text-black rounded-full mt-6 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </motion.div>

          {/* Right image sliding in from the right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={contentImg3}
              alt="Oasis"
              className="rounded-xl w-72 h-96 shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col mt-10 justify-center  gap-10">
        <div className="flex flex-col justify-center items-center text-3xl font-semibold">
          <h1 className="text-black">Additional solutions for</h1>
          <h1 className="text-black">executives and businesses</h1>
        </div>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-20">
          {/* Left content sliding in from the left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center  md:text-left"
          >
            <div className="flex flex-col items-center md:items-start justify-start">
              <h1 className="text-2xl  md:text-4xl text-black ml-20 ">
                Corporate Privacy
              </h1>
              <small className="mt-5 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
                <p>Reduce the risk of social engineering</p>
                <p>attacks against your company’s</p>
                <p>personnel.</p>
              </small>
              <button className="text-black w-32 rounded-full mt-6 mb-6 ml-10 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
                Learn More..
              </button>
              <img
                src={contentImg4}
                alt="Oasis"
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right image sliding in from the right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-2xl md:text-4xl text-black text-center ml-20 ">
                VIP services
              </h1>
              <small className="mt-7 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
                <p>Custom, high-touch solutions for</p>
                <p>situations that require extra care and</p>
                <p>attention.</p>
              </small>
              <button className="text-black w-32 ml-10 mb-6 rounded-full mt-6 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
                Learn More..
              </button>
              <img
                src={contentImg5}
                alt="Oasis"
                className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-950 h-60 rounded-3xl mt-10 mb-10 transition-transform duration-300 hover:scale-110">
        <div className="flex flex-col mt-10 justify-center gap-7 text-black items-center">
          <h1 className="text-3xl ">Need assistance? Talk to an expert.</h1>
          <p className="font-serif text-gray-400">
            Free, confidential, and without obligation.
          </p>
          <div className="flex gap-5">
            <button className=" flex justify-center items-center bg-yellow-500 rounded-full p-2 text-black font-bold transition-transform duration-300 hover:scale-110">
              <Phone className="h-4" /> 877-657-2643
            </button>
            <p>Or</p>
            <button className=" flex justify-center items-center bg-yellow-500 rounded-full p-2 text-black font-bold transition-transform duration-300 hover:scale-110">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
      <div class=" flex flex-col gap-3 justify-center items-center aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
        <h1 className="text-black text-4xl font-semibold">National TV Add</h1>
        <iframe
          width="600"
          height="400"
          src="https://www.youtube.com/embed/nKyedVfeNcw?si=gAG9qpd50Xyhaj3j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-gray-950 flex flex-col justify-center items-center p-3 mb-20 text-black  rounded-3xl ">
        <div className="text-4xl mt-10 text-semibold">
          Solutions tailored to your needs
        </div>
        <div className="flex gap-20 mt-10 justify-between">
          <p className=" flex flex-col  justify-start">
            <h1 className="text-2xl  md:text-4xl text-black">Individuals</h1>
            <small className="mt-5 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
              <p>Protect your professional reputation. Safeguard</p>
              <p>your family’s privacy.</p>
            </small>
            <button className="text-black w-32 rounded-full mt-6 mb-3 ml-10 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </p>
          <p>
            <h1 className="text-2xl mb-5  md:text-4xl text-black  ">
              Small businesses
            </h1>
            <small className="mt-5 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
              <p>Make sure your customers find the right</p>
              <p>information about your business online.</p>
            </small>
            <button className="text-black w-32 rounded-full mt-6 mb-3 ml-10 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </p>
        </div>
        <div className="flex gap-20 mt-10">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl mb-5 md:text-4xl text-black  ">
              Executives
            </h1>
            <small className="mt-5 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
              <p>Project the right image to the world. Protect your</p>
              <p>family from privacy and safety threats.</p>
            </small>
            <button className="text-black w-32 rounded-full mt-6 mb-3 ml-10 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </div>
          <p>
            {" "}
            <h1 className="text-2xl mb-5  md:text-4xl text-black  ">
              Large companies
            </h1>
            <small className="mt-5 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
              <p>Boost the effectiveness of your messaging.</p>
              <p>Reduce the effectiveness of hacking attacks.</p>
            </small>
            <button className="text-black w-32 rounded-full mt-6 mb-3 ml-10 bg-blue-700 p-3 transition-transform duration-300 hover:scale-110">
              Learn More..
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
