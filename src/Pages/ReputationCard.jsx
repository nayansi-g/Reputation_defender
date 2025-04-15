import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import reputationCard from "../components/assets/graphic_report-card.svg";

export default function ReputationCard() {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center px-32 gap-8">
      {/* Left content sliding in from the left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 text-center  md:text-left"
      >
        <h1 className="text-3xl md:text-5xl text-black font-extrabold">
          Free Reputation <br /> Report Card
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto text-gray-400">
          <ul className="ml-10 list-disc">
            <li>Find out how others see you online</li>
            <li>Entirely free, results provided instantly</li>
          </ul>
        </p>
        <div className=" mt-10 flex items-center text-xl justify-between">
          <div className="flex flex-col gap-5 text-black">
            <p className="font-bold">Talk to an Expert</p>
            <button className="flex justify-center items-center bg-white rounded-full p-2 text-black font-bold transition-transform duration-300 hover:scale-110">
              <Phone className="h-4" /> 877-657-2643
            </button>
          </div>
          <p className="text-black">or</p>
          <div className="flex flex-col gap-5 ">
            <p className="flex flex-col text-black">
              <small className="mb-0">Get your free</small>
              <span className="font-bold">Reputation Report Card</span>
            </p>
            <button className="bg-yellow-400 rounded-full py-2 text-black font-bold transition-transform duration-300 hover:scale-110">
              Start Your Scan
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right image sliding in from the right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={reputationCard}
          alt="Oasis"
          className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </motion.div>
    </div>
  );
}
