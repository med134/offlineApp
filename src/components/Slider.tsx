import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/djcnq7nmj/image/upload/v1738346337/images_wcbav1.jpg",
  "https://res.cloudinary.com/djcnq7nmj/image/upload/v1738346336/pompiers_q7azzi.jpg",
  "https://res.cloudinary.com/djcnq7nmj/image/upload/v1738346270/concours-protection-civile_milxwi.webp",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[720px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          width="100%"
          height="500px"
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Smooth transition duration
        />
      </AnimatePresence>
    </div>
  );
};

export default Slider;
