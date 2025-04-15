// import { AnimatedSection } from "../../components/AnimatedSection";

// export default function PersonalService() {
//   return (
//     <div className="bg-gray-900 text-black">
//       <AnimatedSection title="Personal Reputation Management">
//         <p>
//           Our Personal ORM solutions help individuals control how they appear in
//           search engines, improve visibility for positive content, and manage
//           negative press, social posts, or unwanted personal info.
//         </p>
//       </AnimatedSection>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, UserCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function PersonalService() {
  return (
    <div className=" text-black ">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Personal Reputation Management
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          You deserve control over your story. Whether you're facing damaging
          search results, false accusations, or simply want to protect your
          digital image — our personal ORM solutions give you the power to
          reclaim your reputation.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
              title: "Remove Negative Search Results",
              desc: "We work to de-index harmful articles, outdated content, or misleading information appearing in your search results.",
            },
            {
              icon: <EyeOff className="w-8 h-8 text-indigo-600" />,
              title: "Suppress Unwanted Content",
              desc: "Bury negative content with positive, relevant, and optimized media that showcases your true character and achievements.",
            },
            {
              icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
              title: "Build a Strong Personal Brand",
              desc: "We craft and promote a positive digital presence through custom bios, personal websites, social media, and press.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-blue-200 text-black p-6 rounded-xl shadow-md "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              variants={fadeUp}
            >
              <div className="b-1 border-white transition-transform duration-300 hover:scale-110">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
