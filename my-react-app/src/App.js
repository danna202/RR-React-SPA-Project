import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const Product = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    // Add more products here
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <Product name={product.name} description={product.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;