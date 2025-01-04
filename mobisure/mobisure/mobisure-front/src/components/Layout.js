import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Mobisure Moins de CO2</Nav.Link>
              <Nav.Link as={Link} to="/vehicle">Véhicule</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

// Layout Component
export const Layout2 = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">MyBrand</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Dynamic Content */}
            <Outlet />

            {/* Footer */}
            <footer className="bg-primary text-white py-4">
                <div className="container text-center">
                    <p>&copy; 2025 MyBrand. All Rights Reserved.</p>
                    <div>
                        <a href="#" className="text-white mx-2">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-white mx-2">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-white mx-2">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};



