import React from 'react';

const ShoppingPage = ({ addToCart, showMessage }) => {
  const products = [
    {
      id: 1,
      name: "Heavy Duty Safety Helmet",
      image: "./images/helmet.png",
      price: 45.0,
      description: "Essential head protection for any construction site, meeting all safety standards."
    },
    {
      id: 2,
      name: "Industrial Work Gloves (Pair)",
      image: "./images/gloves.png",
      price: 25.5,
      description: "Durable and comfortable gloves for heavy-duty tasks, offering superior grip."
    },
    {
      id: 3,
      name: "High-Visibility Safety Vest",
      image: "./images/orangeVest.png",
      price: 18.75,
      description: "Ensure visibility on site with this bright, reflective safety vest."
    },
    {
      id: 4,
      name: "Steel-Toe Work Boots",
      image: "./images/boots.png",
      price: 120.0,
      description: "Robust steel-toe boots providing maximum foot protection and comfort."
    },
    {
      id: 5,
      name: "Professional Tool Belt",
      image: "./images/Belt.png",
      price: 65.0,
      description: "Organize your tools efficiently with this multi-pocket, heavy-duty tool belt."
    },
    {
      id: 6,
      name: "Safety Goggles (Anti-Fog)",
      image: "./images/Goggles.png",
      price: 12.99,
      description: "Clear vision and protection from debris with anti-fog safety goggles."
    },
    {
      id: 7,
      name: "Heavy Drill Worksuit with many pockets",
      image: "./images/worksuit.png",
      price: 96.99,
      description: "Durable wear, very comfortable  and protects skin from debris and machinery related tear."
    }
  ];

  const handleAddToCartClick = (product) => {
    addToCart(product); // ✅ Correctly using prop
    showMessage(`${product.name} added to cart!`, "success");
  };

  return (
    <section id="shopping-page" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="text-dark display-4 fw-bold">Quality Gear for Every Build</h1>
          <p className="lead text-secondary">Equip your team with the best tools and safety gear from DNC Construction.</p>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map(product => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-dark mb-2">{product.name}</h5>
                  <p className="card-text text-secondary flex-grow-1">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-4 fw-bold text-primary">${product.price.toFixed(2)}</span>
                    <button
                      className="btn btn-golden btn-sm rounded-pill px-4"
                      onClick={() => handleAddToCartClick(product)}
                    >
                      Add to Cart <i className="fas fa-shopping-cart ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="https://wa.me/c/263717218357" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-outline-dark btn-lg">View All Products</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingPage;
