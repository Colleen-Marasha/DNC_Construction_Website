import React from 'react';

const testimonials = [
  {
    name: 'Emily R.',
    title: 'Marketing Lead',
    image: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
    text: 'DNC Construction exceeded our expectations. Their professionalism and commitment to quality are unmatched.',
  },
  {
    name: 'Jason M',
    title: 'Product Manager',
    image: 'https://i.pravatar.cc/100?img=11',
    rating: 5,
    text: 'From roofing to plastering, every detail was handled with care. The team is reliable and trustworthy.',
  },
  {
    name: 'Sara D',
    title: 'Freelancer',
    image: 'https://i.pravatar.cc/100?img=32',
    rating: 5,
    text: 'Their concrete work and finishing touches were top-notch. Highly recommend them for any civil work.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center text-golden fw-bold mb-5">What Our Clients Say</h2>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="bg-secondary bg-opacity-10 p-4 rounded-4 shadow-sm h-100">
                
                {/* Header (image and name/title) */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="mb-0 text-white">{testimonial.name}</h5>
                    <small className="text-light">{testimonial.title}</small>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-2" style={{ color: '#FFD700' }}>
                  {'★'.repeat(testimonial.rating)}
                </div>

                {/* Testimonial text */}
                <p className="text-light mb-0">{testimonial.text}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
