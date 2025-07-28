import React from 'react';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <section id="cart-page" className="py-5 bg-light flex-grow-1">
      <div className="container">
        <h1 className="text-center text-dark mb-5">Your Shopping Cart ({totalItems} items)</h1>

        {cartItems.length === 0 ? (
          <div className="alert alert-info text-center" role="alert">
            Your cart is empty. <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }} className="alert-link">Start shopping!</a>
          </div>
        ) : (
          <>
            <div className="table-responsive mb-4">
              <table className="table table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-thumbnail me-3"
                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6 className="mb-0 text-dark">{item.name}</h6>
                            <small className="text-secondary">{item.description.substring(0, 50)}...</small>
                          </div>
                        </div>
                      </td>
                      <td className="text-dark">${item.price.toFixed(2)}</td>
                      <td>
                        <div className="input-group input-group-sm" style={{ width: '120px' }}>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-dark fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row justify-content-end">
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-dark">Cart Summary</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Subtotal:
                        <span className="fw-bold">${subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center text-dark">
                        Shipping:
                        <span>Calculated at checkout</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center text-dark fw-bold">
                        Estimated Total:
                        <span>${subtotal.toFixed(2)}</span> {/* For now, total is subtotal */}
                      </li>
                    </ul>
                    <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
                    <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => onNavigate('shop')}>Continue Shopping</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CartPage;
