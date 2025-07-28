import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HomePage = ({ onRequestQuote }) => {
  return (
    <>
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`${process.env.PUBLIC_URL}/images/house.png`}
              className="d-block w-100"
              alt="Construction Site"
            />
            <div className="carousel-overlay">
              <div className="container text-white text-center">
                <h2 className="display-4 fw-bold">Building Dreams, Constructing Futures</h2>
                <p className="lead">DNC Construction delivers high-quality construction solutions.</p>
                <button
                    className="btn btn-warning btn-lg mt-3 rounded-pill px-4 py-2"
                    onClick={onRequestQuote}
                    >
                    Get a Quote
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/uncomplete.png`}
              className="d-block w-100"
              alt="Architecture"
            />
            <div className="carousel-overlay">
              <div className="container text-white text-center">
                <h2 className="display-4 fw-bold">Innovative Solutions for Every Project</h2>
                <p className="lead">From residential to commercial, we bring your vision to life.</p>
                <button
                    className="btn btn-warning btn-lg mt-3 rounded-pill px-4 py-2"
                    onClick={onRequestQuote}
                    >
                    Request a Quote
                </button>

              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={`${process.env.PUBLIC_URL}/images/neat.png`}
              className="d-block w-100"
              alt="Architecture"
            />
            <div className="carousel-overlay">
              <div className="container text-white text-center">
                <h2 className="display-4 fw-bold">Innovative Solutions for Every Project</h2>
                <p className="lead">From residential to commercial, we bring your vision to life.</p>
                <button
                    className="btn btn-warning btn-lg mt-3 rounded-pill px-4 py-2"
                    onClick={onRequestQuote}
                    >
                    Request a Quote
                </button>

              </div>
            </div>
          </div>
        </div>

        

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Core Values Section */}
      <main className="container my-5">
        <section className="text-center">
          <h3 className="mb-4">Our Core Values</h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="card-body">
                  <i className="fas fa-handshake fa-3x mb-3 text-warning"></i>
                  <h5 className="card-title">Integrity</h5>
                  <p className="card-text">
                    We uphold the highest standards of honesty and ethical conduct.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="card-body">
                  <i className="fas fa-hard-hat fa-3x mb-3 text-warning"></i>
                  <h5 className="card-title">Quality</h5>
                  <p className="card-text">
                    Delivering superior craftsmanship and durable results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100">
                <div className="card-body">
                  <i className="fas fa-users fa-3x mb-3 text-warning"></i>
                  <h5 className="card-title">Collaboration</h5>
                  <p className="card-text">
                    Working together with clients and partners for shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
 
      </main>
              {/* Call to Action */}
      <section className="bg-warning text-dark text-center py-5">
        <div className="container">
          <h2>Ready to Build with Us?</h2>
          <p className="lead">Contact D.N.C CONSTRUCTION today and let's discuss your vision.</p>
          <Link to="/contact" className="btn btn-dark btn-lg rounded-pill mt-3">Get in Touch</Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
