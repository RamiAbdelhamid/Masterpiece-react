import React, { useState } from 'react';

function Carousel() {
  // الحالة لتحديد الشريحة الحالية
  const [currentSlide, setCurrentSlide] = useState(1);


  const goToSlide = (slideId) => {
    setCurrentSlide(slideId);
  };

  return (
    <div>
      {/* Carousel */}
      <div className="carousel w-full">
        {/* الشريحة الثانية أصبحت في المرتبة الأولى */}
        {currentSlide === 2 && (
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/src/assets/pic/new headsection.jpg"
              className="w-full h-[600px] object-cover"
            />
            {/* النص فوق الصورة */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h1 className="text-8xl font-bold drop-shadow-lg">
                Welcome to our website
              </h1>
              <button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Shop Now
              </button>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={() => goToSlide(3)} className="btn btn-circle">
                ❮
              </button>
              <button onClick={() => goToSlide(1)} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        )}

        {/* الشريحة الأولى أصبحت الثانية الآن */}
        {currentSlide === 1 && (
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/src/assets/pic/pexels-munkhbayar-dambajav-176526124-11122221.jpg"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={() => goToSlide(2)} className="btn btn-circle">
                ❮
              </button>
              <button onClick={() => goToSlide(3)} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        )}

        {/* الشريحة الثالثة */}
        {currentSlide === 3 && (
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/src/assets/pic/HEADDD.webp"
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={() => goToSlide(1)} className="btn btn-circle">
                ❮
              </button>
              <button onClick={() => goToSlide(2)} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel;
