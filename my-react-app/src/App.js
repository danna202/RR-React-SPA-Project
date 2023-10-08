import React from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';  // Import the Product component
import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <Product 
                name={product.name} 
                description={product.description} 
                price={product.price} 
                imageUrl={product.imageUrl} 
                products={products} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
