import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { abilities } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import GlowCard from "../components/GlowCard";

const ServiceCard = ({ index, title, icon, desc }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <motion.div
      variants={!isMobile ? fadeIn("right", "spring", index * 0.5, 0.75) : {}}
      className="w-full sm:w-[45%] lg:w-[30%]"
    >
      <GlowCard card={{ showStars: false }}>
        <Tilt
          options={{
            max: 25,
            scale: 1.02,
            speed: 400,
            disable: isMobile,
          }}
          className="bg-[#1d1d1d] rounded-xl shadow-md p-0 w-full h-full"
          style={{ height: "100%" }}
        >
          <div
            className="rounded-xl p-5 h-full flex flex-col justify-between"
            style={{ height: "100%" }}
          >
            <div className="w-12 h-12 mx-auto mb-3">
              <img
                src={icon}
                alt={title}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            {/* ...no stars here... */}
            <h3 className="text-white text-lg font-semibold text-center">
              {title}
            </h3>
            <p className="text-white text-sm mt-2 text-center">{desc}</p>
          </div>
        </Tilt>
      </GlowCard>
    </motion.div>
  );
};

const FeatureCards = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} text-center`}>
          My <span className="text-blue-500">Skills</span>
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          What I Can Do
        </h2>
      </motion.div> */}

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {abilities.map((ability, index) => (
          <ServiceCard
            key={ability.title}
            index={index}
            title={ability.title}
            icon={ability.imgPath}
            desc={ability.desc}
          />
        ))}
      </div>
    </>
  );
};

export default FeatureCards;
