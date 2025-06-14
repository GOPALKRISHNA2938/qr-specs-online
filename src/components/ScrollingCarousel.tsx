
import React from 'react';

const ScrollingCarousel = () => {
  const eyewearImages = [
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80",
    "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80",
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=80",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&q=80",
    "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=400&q=80",
    "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
    "https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?w=400&q=80",
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 py-8">
      <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
        {/* First set of images */}
        {eyewearImages.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-4 group cursor-pointer"
          >
            <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <img
                src={image}
                alt={`Eyewear ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {eyewearImages.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-4 group cursor-pointer"
          >
            <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <img
                src={image}
                alt={`Eyewear ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingCarousel;
