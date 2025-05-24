import React, { useEffect, useState } from "react";

function Carousel({ item = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // ganti slide tiap 3 detik

    return () => clearInterval(interval);
  }, [currentIndex, item.length]);

  const handlePrev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? item.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLast = currentIndex === item.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!item.length) {
    return;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg h-64">
      {item.map(({ id, image }, index) => (
        <div key={id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`} data-carousel-item={index === currentIndex ? "active" : ""}>
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain bg-white" />
        </div>
      ))}

      {/* Tombol Prev */}
      <button onClick={handlePrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2" data-carousel-prev>
        ❮
      </button>

      {/* Tombol Next */}
      <button onClick={handleNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2" data-carousel-next>
        ❯
      </button>
    </div>
  );
}

export default Carousel;
