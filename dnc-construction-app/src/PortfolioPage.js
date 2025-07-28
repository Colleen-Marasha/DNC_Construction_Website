import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <section id="portfolio-page" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <h2 className="text-center mb-5 text-dark">Our Project Portfolio</h2>
        <p className="text-center lead mb-4 text-secondary">
          Explore a selection of our completed projects, showcasing our commitment to quality and innovation across various sectors.
        </p>
        <div className="row">
          {/* Project Item 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Alpha" className="card-img-top" alt="Project Alpha" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Modern Office Complex</h5>
                <p className="card-text text-secondary">A sleek, energy-efficient office building completed in downtown.</p>
                <Link to="/project/alpha" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* Project Item 2 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Beta" className="card-img-top" alt="Project Beta" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Residential Tower Renovation</h5>
                <p className="card-text text-secondary">Complete overhaul of a multi-story residential building, enhancing living spaces.</p>
                <Link to="/project/beta" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* Project Item 3 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Gamma" className="card-img-top" alt="Project Gamma" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Highway Expansion Phase I</h5>
                <p className="card-text text-secondary">Critical infrastructure project improving connectivity and traffic flow.</p>
                <Link to="/project/gamma" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* Project Item 4 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Delta" className="card-img-top" alt="Project Delta" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Industrial Warehouse Construction</h5>
                <p className="card-text text-secondary">Large-scale warehouse build, optimized for logistics and storage.</p>
                <Link to="/project/delta" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* Project Item 5 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Epsilon" className="card-img-top" alt="Project Epsilon" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Sustainable Housing Development</h5>
                <p className="card-text text-secondary">Eco-friendly housing units with green building certifications.</p>
                <Link to="/project/epsilon" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          {/* Project Item 6 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="https://placehold.co/600x400/FFD700/000000?text=Project+Zeta" className="card-img-top" alt="Project Zeta" />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">Water Treatment Plant Upgrade</h5>
                <p className="card-text text-secondary">Modernization of a municipal water facility for improved capacity.</p>
                <Link to="/project/zeta" className="btn btn-link text-primary-blue">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
