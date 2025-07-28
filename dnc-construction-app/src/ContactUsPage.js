import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState(null); // State for showing success/error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);

    // In a real application, you would send this data to a backend (e.g., Firebase Firestore, or an API endpoint)
    // For now, we'll simulate success.
    showMessage("Your message has been sent successfully!", "success");

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    // Note: File uploads (if re-introduced) would require a backend service (e.g., Firebase Storage + Firestore/Cloud Functions)
    // and cannot be directly handled by a client-side React form submission without server-side processing.
  };

  const showMessage = (msg, type) => {
    setMessage({ text: msg, type: type });
    setTimeout(() => {
      setMessage(null);
    }, 5000); // Message disappears after 5 seconds
  };

  return (
    <section id="contact-us-page" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <header className="mb-5">
          <h1 className="text-center text-dark">Get in Touch</h1>
          <p className="lead text-center text-secondary">We'd love to hear about your project and provide a detailed quotation.</p>
        </header>

        {message && (
          <div className={`alert alert-${message.type} alert-dismissible fade show mb-4`} role="alert">
            {message.text}
            <button type="button" className="btn-close" onClick={() => setMessage(null)} aria-label="Close"></button>
          </div>
        )}

        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="text-dark">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-dark">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-dark">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-dark">Phone Number (Optional)</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label text-dark">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              {/* File upload input is omitted for client-side only React.
                  If needed, it requires server-side handling or cloud storage integration. */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-dark">Your Message / Project Details</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <small className="form-text text-muted mt-2">
              Note: File uploads and direct email sending require server-side processing. This form currently logs data to the console.
            </small>
          </div>

          <div className="col-lg-6 mb-4">
            <h2 className="text-dark">For more information contact:</h2>
            <p className="text-secondary"><i className="fas fa-map-marker-alt text-primary me-2"></i> Mbizo, Kwekwe, Zimbabwe</p>
            <p className="text-secondary"><i className="fas fa-phone text-primary me-2"></i> +263 77 338 9306</p>
            <p className="text-secondary"><i className="fas fa-phone text-primary me-2"></i> +263 78 213 5436</p>
            <p className="text-secondary"><i className="fas fa-envelope text-primary me-2"></i> info@dncconstruction.com</p>

            <h3 className="mt-4 text-dark">Find Us on the Map</h3>
            <div className="embed-responsive embed-responsive-16by9" style={{ height: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.493979848524!2d29.8392134!3d-18.91845475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19273df013143c01%3A0x6b7b2520379860b7!2sMbizo%2C%20Kwekwe!5e0!3m2!1sen!2szw!4v1716474668222!5m2!1sen!2szw"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Mbizo, Kwekwe"
              ></iframe>
            </div>
            <small className="form-text text-muted mt-2">
              Please replace the `src` URL in the iframe with your actual Google Maps embed code for your specific location.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
