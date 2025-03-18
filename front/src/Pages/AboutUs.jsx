import React from "react";

const AboutUs = () => {
  return (
    <section className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-6/12 px-4">
            <h2 className="font-semibold text-3xl mb-4">Who We Are?</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Farm Fusion, your ideal destination in the world of
              agriculture and animal production! We are a specialized and
              passionate team providing innovative and comprehensive solutions
              to support farmers and breeders and achieve the highest
              productivity and quality.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <h5 className="text-blue-500">Our Services and Products</h5>
                <ul className="list-none">
                  <li>
                    <i className="bi bi-check-circle text-blue-500 mr-2"></i>
                    Agricultural Production
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-blue-500 mr-2"></i>
                    Animal Production
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-blue-500 mr-2"></i>
                    Agricultural Equipment
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-blue-500 mr-2"></i>
                    Support and Consulting
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <h5 className="text-blue-500">Our Vision</h5>
                <ul className="list-none">
                  <li>
                    <i className="bi bi-bullseye text-blue-500 mr-2"></i>Global
                    Reach
                  </li>
                  <li>
                    <i className="bi bi-bullseye text-blue-500 mr-2"></i>
                    Industry Leadership
                  </li>
                  <li>
                    <i className="bi bi-bullseye text-blue-500 mr-2"></i>
                    Continuous Growth
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#"
              className="btn bg-blue-500 text-white mt-4 px-6 py-2 rounded"
            >
              Learn More
            </a>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <img
              src="/src/assets/pic/farmfusion7-scaled.webp"
              alt="About Us"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-5">
          <div className="w-full md:w-3/12 px-4 mb-4">
            <div className="text-center">
              <i className="bi bi-people text-blue-500 text-4xl mb-2"></i>
              <h2 className="font-bold text-3xl">500+</h2>
              <p className="text-gray-500">Clients</p>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-4 mb-4">
            <div className="text-center">
              <i className="bi bi-briefcase text-blue-500 text-4xl mb-2"></i>
              <h2 className="font-bold text-3xl">1000+</h2>
              <p className="text-gray-500">Projects</p>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-4 mb-4">
            <div className="text-center">
              <i className="bi bi-trophy text-blue-500 text-4xl mb-2"></i>
              <h2 className="font-bold text-3xl">50+</h2>
              <p className="text-gray-500">Awards</p>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-4 mb-4">
            <div className="text-center">
              <i className="bi bi-globe text-blue-500 text-4xl mb-2"></i>
              <h2 className="font-bold text-3xl">20+</h2>
              <p className="text-gray-500">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
