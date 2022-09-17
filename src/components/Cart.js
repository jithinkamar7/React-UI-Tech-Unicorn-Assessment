import React from 'react';
import popularProducts from '../data';

export default function Cart(props) {
    const { products, onAdd } = props;
    return (
      <main >
        <h2>Products</h2>
        <div >
          {products.map((product) => (
            <popularProducts key={product.id} product={product} onAdd={onAdd}></popularProducts>
          ))}
        </div>
      </main>
    );
  }