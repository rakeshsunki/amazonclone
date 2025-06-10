import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Cards from "../Cards/Cards";

const HomeCarousel = () => {
  const images = [
    "./bganimation/backg1.jpg",
    "./bganimation/backg2.jpg",
    "./bganimation/backg3.jpg",
    "./bganimation/backg4.jpg",
    "./bganimation/backg5.jpg",
    "./bganimation/backg6.jpg",
    "./bganimation/backg7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Function to reset the auto-rotation timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  // Set up the auto-rotation effect
  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <>
      {/* Fixed top spacer for all header bars - increased for mobile */}
      <div className="w-full h-[7.3rem] md:h-[6rem]"></div>

      {/* Carousel container */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden z-[5]">
        {/* Image slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        >
          <IoIosArrowBack size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
        >
          <IoIosArrowForward size={20} />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Spacer between carousel and cards */}
      <div className="w-full h-12 md:h-16 clear-both"></div>

      {/* Product cards section */}
      <div className="relative z-10 pt-4">
        <Cards />
      </div>
    </>
  );
};

export default HomeCarousel;
