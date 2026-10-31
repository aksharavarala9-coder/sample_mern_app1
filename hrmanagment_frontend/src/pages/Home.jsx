
import { Link } from "react-router-dom";

import nature1 from "../assets/nature1.jpg";
import nature2 from "../assets/nature2.jpg";
import nature3 from "../assets/nature3.jpg";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      <section className="home-heading">
        <h1>Welcome to Our Website</h1>

        <p>
          A simple and efficient platform for managing
          employees and workplace activities.
        </p>

        <Link to="/about" className="home-button">
          Explore More
        </Link>
      </section>

      <section className="container home-carousel">

        <div
          id="natureCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#natureCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>

            <button
              type="button"
              data-bs-target="#natureCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>

            <button
              type="button"
              data-bs-target="#natureCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src={nature1}
                className="d-block w-100"
                alt="Nature 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src={nature2}
                className="d-block w-100"
                alt="Nature 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src={nature3}
                className="d-block w-100"
                alt="Nature 3"
              />
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#natureCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#natureCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </section>

    </main>
  );
}

export default Home;
