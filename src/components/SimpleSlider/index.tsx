import { useEffect, useRef, useState } from "react";
import { intrvuspaceP, screeningspaceP } from "../../assets/images";

const images = [ screeningspaceP,intrvuspaceP];

function SimpleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<any>(null);
  const delay = 2000;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, delay);

    return () => resetTimeout();
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0); // Reset to the first slide
    } else if (currentIndex === -1) {
      setCurrentIndex(images.length - 1); // Reset to the last slide
    }
  };

  return (
    <div className=" " style={{ width: "100%", height: "100%", padding: "0" }}>
      <div
        className="carousel"
        onMouseEnter={resetTimeout}
        onMouseLeave={() =>
          (timeoutRef.current = setTimeout(() => {
            goToNext();
          }, delay))
        }
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="carousel-inner"
          style={{
            display: "flex",
            transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
            transform: `translateX(-${(currentIndex + 1) * 100}%)`,
            height: "100%",
            opacity:'0.8'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Clone the last slide */}
          <img
            src={images[images.length - 1]}
            alt={`Slide ${images.length - 1}`}
            style={{
              flexShrink: 0,
              width: "100%",
              height: "100%",
            }}
          />
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx}`}
              style={{
                flexShrink: 0,
                width: "100%",
                height: "100%",
              }}
            />
          ))}
          {/* Clone the first slide */}
          <img
            src={images[0]}
            alt={`Slide 0`}
            style={{
              flexShrink: 0,
              width: "100%",
              height: "100%",
            }}
          />
          
        </div>
        <div style={{ boxShadow: "rgba(0, 0, 0, 1.7) 0px -50px 26px -28px inset" }} className="absolute bottom-0 p-2 w-full flex  justify-between items-center">
        <div>
        Things I’ve Worked On
        </div>
        {/* <ArrowRight fillColour="#fff"/> */}

        </div>


        {/* Left Arrow */}
        {/* <button
          onClick={goToPrevious}
          style={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          ‹
        </button> */}

        {/* Right Arrow */}
        {/* <button
          onClick={goToNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "16px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          ›
        </button> */}
      </div>
    </div>
  );
}

export { SimpleSlider };

