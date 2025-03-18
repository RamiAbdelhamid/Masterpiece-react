import React from "react";
import "../CSS/Reviwes.css"
const Reviews = () => {
  return (
    <div className="container3">
      <div className="container__left">
        <h1>Read what our customers love about us</h1>
        <p>
          Over 200 companies from diverse sectors consult us to enhance the user
          experience of their products and services.
        </p>
        <p>
          We have helped companies increase their customer base and generate
          multifold revenue with our service.
        </p>
        <a href="19-About.html">
          <button>Read our success stories</button>
        </a>
      </div>
      <div className="container__right">
        <div className="card">
          <img src="/src/assets/pic/User-Icon.jpg" alt="user" />
          <div className="card__content">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <div className="card__details">
              <p>
                We had a great time collaborating with the Filament team. They
                have my high recommendation!
              </p>
              <h4>- Marnus Stephen</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/src/assets/pic/User-Icon.jpg" alt="user" />
          <div className="card__content">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <div className="card__details">
              <p>
                The team drastically improved our product's user experience &
                increased our business outreach.
              </p>
              <h4>- Andrew Jettpace</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/src/assets/pic/User-Icon.jpg" alt="user" />
          <div className="card__content">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <div className="card__details">
              <p>
                I absolutely loved working with the Filament team. Complete
                experts at what they do!
              </p>
              <h4>- Stacy Stone</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
