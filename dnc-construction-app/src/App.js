import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import QuoteModal from './QuoteModal';
import PortfolioPage from './PortfolioPage';
import BlogPage from './BlogPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import ShoppingPage from './ShoppingPage';
import CartPage from './CartPage';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import TestimonialsSection from './TestimonialsSection';
import ProjectDetails from './ProjectDetails';

const App = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [message, setMessage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const companyName = "DNC Construction";
  const logoSrc = "./images/logo.png";

  // ✅ Cart functionality
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(ci => ci.id === item.id);
      if (existing) {
        return prevItems.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    showMessage(`${item.name} added to cart!`, "success");
  };

  const updateCartItemQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeCartItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData({ ...quoteFormData, [name]: value });
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    showMessage("Quote submitted (demo mode).", "success");
    setQuoteFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setShowQuoteModal(false);
  };

  const showMessage = (msg, type) => {
    setMessage({ text: msg, type: type });
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <Router>
      {message && (
        <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage(null)} aria-label="Close"></button>
        </div>
      )}

      <Header
        logoSrc={logoSrc}
        companyName={companyName}
        cartItemCount={cartItems.length}
      />

      <Routes>
        <Route path="/" element={<HomePage onRequestQuote={() => setShowQuoteModal(true)} />} />
        <Route path="/services" element={<ServicesPage onRequestQuote={() => setShowQuoteModal(true)} />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<ShoppingPage addToCart={addToCart} showMessage={showMessage} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateQuantity={updateCartItemQuantity}
              onRemoveItem={removeCartItem}
            />
          }
        />
      </Routes>

      <div className="help-desk-icon">
        <a href="#"><img src="./images/question.png" alt="Help Desk" /></a>
      </div>

      <Footer logoSrc={logoSrc} companyName={companyName} />

      <QuoteModal
        show={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        formData={quoteFormData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmitQuote}
      />
    </Router>
  );
};

export default App;
