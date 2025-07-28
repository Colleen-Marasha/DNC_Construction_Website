import React from 'react';
import TestimonialsSection from './TestimonialsSection';

const AboutUsPage = () => {
  return (
    <section id="about-us-page" className="py-5 bg-dark text-white">
      <div className="container">
        {/* Hero Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-golden">Who We Are</h1>
          <p className="lead text-secondary">D.N.C Civil Engineering & Construction</p>
          <hr className="border-light w-25 mx-auto" />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            {/* Company Overview */}
            <p className="text-secondary fs-5 text-center mb-4">
              At <span className="fw-bold text-golden">DNC Construction</span>, we believe in building more than structures —
              we build trust, communities, and a better tomorrow. With decades of combined experience and a forward-thinking approach,
              we're redefining how construction gets done.
            </p>

            {/* Mission & Vision Section */}
            <div className="row text-center mt-5">
              <div className="col-md-6 mb-4">
                <div className="p-4 border border-light rounded bg-secondary bg-opacity-10 h-100 shadow-sm">
                  <h4 className="text-golden fw-bold">Our Mission</h4>
                  <p className="text-light">
                    Deliver sustainable, innovative, and quality construction solutions that exceed expectations and empower communities.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="p-4 border border-light rounded bg-secondary bg-opacity-10 h-100 shadow-sm">
                  <h4 className="text-golden fw-bold">Our Vision</h4>
                  <p className="text-light">
                    To be the most trusted and visionary construction partner across Zimbabwe.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-5">
              <h3 className="text-golden fw-bold text-center mb-3">Why Choose Us?</h3>
              <ul className="list-unstyled text-secondary fs-5">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-golden me-2"></i>
                  <strong>Experienced Team:</strong> Decades of field-tested experience across diverse projects.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-golden me-2"></i>
                  <strong>Modern Solutions:</strong> We use cutting-edge tools and sustainable methods.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-golden me-2"></i>
                  <strong>Unmatched Quality:</strong> Meticulous craftsmanship and lasting results.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-golden me-2"></i>
                  <strong>Safety First:</strong> We adhere to the highest safety standards.
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-golden me-2"></i>
                  <strong>Client-Focused:</strong> Your success is our priority.
                </li>
              </ul>
            </div>

            {/* Team Image */}
            <div className="text-center mt-5">
              <img
                src="https://placehold.co/900x500/FFD700/000000?text=Our+Team+in+Action"
                alt="DNC Construction Team"
                className="img-fluid rounded shadow-lg"
              />
              <p className="text-secondary mt-3">Our field team delivering quality on-site.</p>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </section>
  );
};

export default AboutUsPage;
