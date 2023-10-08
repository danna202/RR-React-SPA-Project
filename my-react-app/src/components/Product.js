import React from 'react';

const Product = ({ name, description, price, imageUrl, products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-3">
          <div className="card">
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

  