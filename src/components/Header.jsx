import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a href="/" className="text-decoration-none text-body pe-3">
                <i className="bi bi-telephone me-2"></i>+012 345 6789
              </a>
              <span className="text-body">|</span>
              <a href="/" className="text-decoration-none text-body px-3">
                <i className="bi bi-envelope me-2"></i>info@example.com
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a href="/" className="text-body px-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-body px-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-body px-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/" className="text-body px-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="text-body ps-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
