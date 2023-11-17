import React from 'react';
import './SuccessPage.css'; // Create a new CSS file for your SuccessPage and import it here
//import bag to print out the bag items
import { useBag } from './BagContext';

//import data.js file to update the quantity of the products
import products from './data';

const SuccessPage = () => {
  /*return (
    <div className="container">
      <div className="content">
        <h1 className='success'>
          <span>O</span>
          <span>R</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
          <br />
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>C</span>
          <span>E</span>
          <span>D</span>
          <br />
          <span>S</span>
          <span>U</span>
          <span>C</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span>L</span>
          <span>Y</span>
        </h1>
      </div>
    </div>
  );*/
  const { bagItems} = useBag();
  /*return (
    <div className="container">
      <div className="content">
        <ul className="bag-list">
          {bagItems.map((item, index) => (
            <li key={index} className="bag-item">
              <div className="bag-item-content">
                <img src={item.imageUrl} alt={item.title} className="bag-item-img" />
                <div className="bag-item-details">
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-paragraph">ID: {item.id}</p>
                  <p className="item-description">{item.description}</p>
                  <p className="item-paragraph">Rating: {item.rating}</p>
                  <p className="item-paragraph">Price: {item.currency} {item.price.toFixed(2)}</p>
                  <p className="item-paragraph">Quantity: {item.quantitys}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );*/

  //update the quantity of the products
  const updateQuantity = (product, newQuantity) => {
    //print the product
    console.log(product);
    const productToUpdate = products.find((item) => item.id === product.id);
    if (productToUpdate) {
      productToUpdate.quantitys = newQuantity;
      //also update the id of the product
      productToUpdate.id = product.id-100;// check this once
    }
    console.log(productToUpdate);
  };

  //update the quantity of the products
  const handleUpdateQuantity = () => {
    bagItems.forEach((item) => {
      //set the new quantity of the product as the remaining quantity after the purchase
      updateQuantity(item, item.quantitys - item.quantity);
    });
  };

  handleUpdateQuantity();

  //clear the bag after the purchase
  const clearBag = () => {
    bagItems.splice(0, bagItems.length);
  };

  clearBag();
};

export default SuccessPage;
