import React from 'react';

const ServicesPage = ({ onRequestQuote }) => {
  const services = [
    {
      title: "Steel Fixing",
      //icon: "fas fa-tools",
      icon: "./images/steelfixing.jpg",
      description: "Precision steel reinforcement for concrete foundations and structures, ensuring long-term durability."
    },
    {
      title: "Shuttering",
      icon: "fas fa-hard-hat",
      description: "High-quality formwork for concrete molding with safety and structural integrity at the forefront."
    },
    {
      title: "Roofing",
      icon: "fas fa-house-damage",
      description: "Durable and weather-resistant roofing solutions tailored to your project and environment."
    },
    {
      title: "Plastering",
      icon: "fas fa-fill-drip",
      description: "Smooth and consistent finishes for both interior and exterior walls, using modern techniques."
    },
    {
      title: "Plumbing",
      icon: "fas fa-faucet",
      description: "Expert water system installation, maintenance, and repairs for residential and commercial projects."
    },
    {
      title: "Electrical",
      icon: "fas fa-bolt",
      description: "Safe, certified electrical work from wiring and fittings to energy-efficient installations."
    },
    {
      title: "Brick Laying",
      icon: "fas fa-border-all",
      description: "Accurate and aesthetic brickwork that combines functionality with timeless craftsmanship."
    },
    {
      title: "Tiling",
      icon: "fas fa-th-large",
      description: "Stylish and durable tiling options with precision application for floors, walls, and surfaces."
    },
    {
      title: "Concrete Beams",
      icon: "fas fa-cubes",
      description: "Strong and reliable beam construction that forms the backbone of solid structural frameworks."
    }
  ];

  return (
    <section id="services" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <h2 className="text-center text-dark mb-4 display-5 fw-bold">Our Services</h2>
        <p className="text-secondary text-center mb-5 lead">
          At DNC Construction, we deliver top-tier construction and engineering solutions tailored to your needs. Our expert team ensures each project is completed with precision, safety, and unmatched craftsmanship.
        </p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="card h-100 border-0 shadow-sm rounded-lg text-center p-4">
               <div className="mb-3">
                    {service.icon.includes('/images/') ? (
                        <img
                        src={service.icon}
                        alt={service.title}
                        className="img-fluid rounded"
                        style={{ maxHeight: '80px', objectFit: 'contain' }}
                        />
                    ) : (
                        <i className={service.icon}></i>
                    )}
                </div>
                <h5 className="text-dark mb-2 fw-bold">{service.title}</h5>
                <p className="text-secondary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="lead text-secondary">
            Need something specific? Contact us for custom service solutions!
          </p>
          <a
            href="#"
            className="btn btn-warning rounded-pill px-5 py-2"
            onClick={(e) => {
              e.preventDefault();
              onRequestQuote(); // ✅ This now works properly
            }}
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
