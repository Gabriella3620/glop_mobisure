import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout2} from './components/Layout';
import Home from './components/Home';
import Car from './components/Car';
import AddEditCar from './components/AddEditCar';
import NoPage from './components/NoPage';
import AddEditVehicle from "./components/AddEditVehicle";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


/*
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<Home />} />

          <Route path="car" element={<Car />} />
          <Route path="vehicle" element={<AddEditVehicle />} />
          <Route path="cars/add" element={<AddEditCar />} />
          <Route path="cars/edit/:id" element={<AddEditCar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; */

// Layout Component
const Layout = ({ children }) => {
  return (
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <a className="navbar-brand" href="#">Mobisure</a>
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
                  <a className="nav-link active" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Véhicules</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Dynamic Content */}
        <main className="py-4 bg-light">{children}</main>

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

const App = () => {
  return (
      <Layout>
        {/* Hero Section */}
        <header className="bg-light py-5 text-dark shadow-sm">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Assurez vos véhicules, aujourd'hui</h1>
            <p className="lead text-muted">Get the best insurance plans for your vehicles at unbeatable rates. Protect your car, scooter, or bike effortlessly.</p>
            <a href="#cta" className="btn btn-primary btn-lg">Get a Quote Now</a>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card shadow-sm p-4">
                  <i className="bi bi-speedometer2 display-4 text-primary"></i>
                  <h5 className="mt-3">Fast Processing</h5>
                  <p className="text-muted">Quick and hassle-free claim settlements.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm p-4">
                  <i className="bi bi-shield-lock-fill display-4 text-primary"></i>
                  <h5 className="mt-3">Comprehensive Coverage</h5>
                  <p className="text-muted">Covering damages, theft, and third-party liabilities.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm p-4">
                  <i className="bi bi-piggy-bank-fill display-4 text-primary"></i>
                  <h5 className="mt-3">Affordable Plans</h5>
                  <p className="text-muted">Plans that fit every budget without compromise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section id="cta" className="bg-primary text-white py-5">
          <div className="container text-center">
            <h2 className="fw-bold">Ready to Insure Your Vehicle?</h2>
            <p className="lead">Don't wait for the unexpected. Get insured and drive with peace of mind.</p>
            <a href="#" className="btn btn-light btn-lg mt-3">Get Your Free Quote</a>
          </div>
        </section>
      </Layout>
  );
};
export default App;