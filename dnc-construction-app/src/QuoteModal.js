import React from 'react';

const QuoteModal = ({ show, onClose, formData, onInputChange, onSubmit }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show"
        id="quoteModal"
        tabIndex="-1"
        aria-labelledby="quoteModalLabel"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="quoteModalLabel">
                Get a Free Quote
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white" // Added btn-close-white class here
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="service" className="form-label">
                    Service Needed
                  </label>
                  <select
                    className="form-select"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={onInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Remodeling">Remodeling</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={onInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default QuoteModal;
