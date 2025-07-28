import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 'alpha',
    title: 'Modern Office Complex',
    image: '/images/house.png',
    details: 'This office complex was completed in 2023 with eco-friendly materials and cutting-edge design.',
    clientName: 'Tech Solutions Ltd.',
    timeline: 'Jan 2023 - Dec 2023',
    budget: '$2.5 Million',
    location: 'Downtown Business District',
    features: 'Energy-efficient design, Smart HVAC, Glass Facade',
    gallery: [
      '/images/helmet.png',
      '/images/helmet.png',
      '/images/helmet.png',
      '/images/helmet.png',
      '/images/helmet.png',
      '/images/logo.png'
    ]
  },
  {
    id: 'beta',
    title: 'Residential Tower Renovation',
    image: './images/house.png',
    details: 'Complete overhaul of a multi-story residential building with modern upgrades.',
    clientName: 'Urban Living Developers',
    timeline: 'Mar 2022 - Nov 2022',
    budget: '$1.8 Million',
    location: 'City Center',
    features: 'Modern interiors, Energy-efficient windows, Enhanced safety features',
    gallery: []
  },
  {
    id: 'gamma',
    title: 'Highway Expansion Phase I',
    image: '/images/project-gamma.jpg',
    details: 'A major highway project enhancing connectivity and reducing traffic congestion.',
    clientName: 'City Infrastructure Dept.',
    timeline: '2021 - 2023',
    budget: '$10 Million',
    location: 'Highway 45 North',
    features: 'Widened lanes, New drainage system, Smart traffic lights',
    gallery: []
  },
  {
    id: 'delta',
    title: 'Industrial Warehouse Construction',
    image: '/images/project-delta.jpg',
    details: 'Large-scale warehouse build optimized for logistics and storage.',
    clientName: 'Global Logistics Co.',
    timeline: 'Aug 2022 - May 2023',
    budget: '$3.2 Million',
    location: 'Industrial Zone B',
    features: 'High-strength flooring, Automated loading docks',
    gallery: []
  },
  {
    id: 'epsilon',
    title: 'Sustainable Housing Development',
    image: '/images/project-epsilon.jpg',
    details: 'Eco-friendly housing units with green building certifications.',
    clientName: 'Green Homes Ltd.',
    timeline: '2022 - Ongoing',
    budget: '$5 Million',
    location: 'EcoPark Residential Area',
    features: 'Solar panels, Rainwater harvesting, Energy-efficient appliances',
    gallery: []
  },
  {
    id: 'zeta',
    title: 'Water Treatment Plant Upgrade',
    image: '/images/project-zeta.jpg',
    details: 'Modernization of a municipal water facility for improved capacity.',
    clientName: 'City Water Authority',
    timeline: '2021 - 2022',
    budget: '$4 Million',
    location: 'Municipal Sector C',
    features: 'New filtration system, Digital monitoring, Increased capacity',
    gallery: []
  }
];

const ProjectDetails = ({ onRequestQuote }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2 className="text-center mt-5 text-light">Project Not Found</h2>;

  return (
    <section className="project-details-section">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/portfolio">Portfolio</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{project.title}</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-center mb-4">{project.title}</h1>

        {/* Hero Image */}
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid rounded mb-4 w-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />

        {/* Project Info */}
        <div className="row mb-4">
          <div className="col-md-8">
            <h4>Project Overview</h4>
            <p>{project.details}</p>
          </div>
          <div className="col-md-4">
            <div className="card card-dark p-3">
              <h5 className="mb-3">Key Details</h5>
              <p><strong>Client:</strong> {project.clientName}</p>
              <p><strong>Timeline:</strong> {project.timeline}</p>
              <p><strong>Budget:</strong> {project.budget}</p>
              <p><strong>Location:</strong> {project.location}</p>
              <p><strong>Features:</strong> {project.features}</p>
            </div>
          </div>
        </div>

            {/* Gallery */}
        {project.gallery.length > 0 && (
        <div className="mb-5">
            <h4 className="mb-3">Project Gallery</h4>
            <div className="row g-3">
            {project.gallery.map((img, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={index}>
                <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                    style={{ height: '180px', objectFit: 'cover', width: '100%' }}
                />
                </div>
            ))}
            </div>
        </div>
        )}


        {/* Buttons */}
        <div className="text-center mt-4">
          <Link to="/portfolio" className="btn btn-outline-light rounded-pill px-4 me-3">
            Back to Portfolio
          </Link>
          <button
            className="btn btn-warning rounded-pill px-4"
            onClick={onRequestQuote}
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
