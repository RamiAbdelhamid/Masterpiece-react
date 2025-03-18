import React from "react";

const ChickenSection = () => {
  return (
    <div className=" py-12 px-6">
      {/* صورة الهيدر */}
      <div className="w-full">
        <img
          src="/src/assets/pic/ch.png"
          alt="Broiler Farming"
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* النص والمحتوى */}
      <div className="mt-10 max-w-screen-lg mx-auto">
        <p className="text-xl font-semibold text-gray-800 leading-relaxed">
          We offer you the best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            broiler farming solutions
          </span>{" "}
          that guarantee you high productivity and unmatched quality! We take
          care of every detail to ensure the health of the poultry and their
          rapid growth, using the best types of vaccines and vitamins that have
          been carefully selected to strengthen immunity and promote healthy
          growth.
        </p>

        <h3 className="mt-6 text-2xl font-bold text-orange-600">
          Why choose our services?
        </h3>
        <ul className="mt-4 text-lg text-gray-700 list-disc pl-6 space-y-3">
          <li>
            🌱 <b>Integrated care:</b> Balanced feeding & comprehensive
            vaccination programs.
          </li>
          <li>
            💊 <b>Advanced vitamins:</b> Fortified products ensure rapid growth
            & excellent performance.
          </li>
          <li>
            📈 <b>High productivity:</b> Optimal care leads to better meat
            quality & weight gain.
          </li>
          <li>
            🏡 <b>Healthy environment:</b> Clean & well-maintained poultry
            farming conditions.
          </li>
        </ul>
      </div>

      {/* صور إضافية */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        <div className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/src/assets/pic/نجارة.jpeg"
            alt="Wood Shavings"
            className="w-full rounded-lg"
          />
        </div>
        <div className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/src/assets/pic/صيصان.png"
            alt="Chicks"
            className="w-full rounded-lg"
          />
        </div>
        <div className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img
            src="/src/assets/pic/جاج 30.jpg"
            alt="Broiler Chicken"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChickenSection;
