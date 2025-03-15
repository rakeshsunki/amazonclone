import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
const AutoSlider = () => {
  const images = [
    "./bganimation/backg1.jpg",
    "./bganimation/backg2.jpg",
    "./bganimation/backg3.jpg",
    "./bganimation/backg4.jpg",
    "./bganimation/backg5.jpg",
    "./bganimation/backg6.jpg",
    "./bganimation/backg7.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-screen overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <Cards />
    </>
  );
};

export default AutoSlider;
