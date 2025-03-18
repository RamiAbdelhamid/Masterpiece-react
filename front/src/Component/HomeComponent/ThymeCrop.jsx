import React from "react";

const ThymeCrop = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 bg-gray-100">
      {/* صورة */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/src/assets/pic/زعتر.jpg"
          alt="Thyme Crop"
          className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
        />
      </div>

      {/* النص والمحتوى */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500">
          Our Thyme Crop
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Discover the goodness and creativity of nature with our harvest of
          authentic local thyme carefully grown in an ideal natural environment.
          Our thyme is distinguished by its fragrant aroma and strong flavor
          that adds an exceptional touch to your recipes.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          It is grown using sustainable agricultural methods that ensure high
          quality and complete purity, making it the perfect choice for cooking,
          herbal tea, or traditional medicinal uses.
        </p>

        {/* زر */}
        <div className="mt-8">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThymeCrop;
