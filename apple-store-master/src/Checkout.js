import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';
import Bag from './Bag';
import OrderSummary from './OrderSummary';
import { useBag } from './BagContext';
import UserData from './UserData';
import { Link } from 'react-router-dom'; // Don't forget to import Link

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access paymentMethod from state
  const paymentMethod = location.state?.paymentMethod;

  // Extract total from the useBag hook
  const { total: bagTotal } = useBag();
  const storedUser = JSON.parse(localStorage.getItem('user')) || UserData[0];

  const handleChangeUserInfo = () => {
    navigate('/ChangeUserInfo');
  };

  return (
    <div className="checkout-container">
      <div className="user-info">
        <h3>S H I P P I N G   A D D R E S S </h3>
        <p>{storedUser.name}</p>
        <p>{storedUser.shippingAddress.street}</p>
        <p>{storedUser.shippingAddress.city}</p>
        <p>{storedUser.shippingAddress.state}</p>
        <p>{storedUser.shippingAddress.zip}</p>
        <p>{storedUser.shippingAddress.country}</p>
        <button className="change-buttons change" onClick={handleChangeUserInfo}>
          Change
        </button>
      </div>
      <div className="payment-info">
        <h3>P A Y M E N T  M E T H O D </h3>
        <p>Type: {paymentMethod?.type || storedUser.paymentMethod.type}</p>
        <p>Card Number: {paymentMethod?.cardNumber || storedUser.paymentMethod.cardNumber}</p>
        <p>Expiration Date: {paymentMethod?.expirationDate || storedUser.paymentMethod.expirationDate}</p>
        <p>CVV: {paymentMethod?.cvv || storedUser.paymentMethod.cvv}</p>
        <Link to="/ChangePaymentInfo">
          <button className="change-buttons change">
            Change
          </button>
        </Link>
        <h6>Gift Card</h6>
        <p>Amount: {storedUser.giftCard}</p>
        <p>
          <input type="checkbox" />
          Billing Address same as Shipping Address
        </p>
      </div>
      <OrderSummary total={bagTotal} />
      <Bag />
    </div>
  );
};

export default Checkout;

/*import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';
import Bag from './Bag';
import OrderSummary from './OrderSummary';
import { useBag } from './BagContext';
import UserData from './UserData';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [productToUpdate, setProductToUpdate] = useState(null); // Product to update

  // Access paymentMethod from state
  const paymentMethod = location.state?.paymentMethod;

  // Extract total from the useBag hook
  const { total: bagTotal } = useBag();
  const storedUser = JSON.parse(localStorage.getItem('user')) || UserData[0];

  const handleChangeUserInfo = () => {
    navigate('/ChangeUserInfo');
  };

  // Function to handle placing an order
  const handlePlaceOrder = () => {
    if (productToUpdate) {
      // Update the product quantity in updatedProducts state
      const updatedProduct = { ...productToUpdate };
      updatedProduct.quantity -= 1;
      setUpdatedProducts([...updatedProducts, updatedProduct]);
    }
    // Additional logic for placing an order can be added here.
  };

  // Function to update the CSV file
  const updateCSV = (updatedData) => {
    // Read the CSV file
    Papa.parse('"C://Users//91991//Desktop//products.csv"', {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (result) => {
        const products = result.data;

        // Update product quantities in memory
        updatedData.forEach((updatedProduct) => {
          const productIndex = products.findIndex((product) => product.id === updatedProduct.id);
          if (productIndex !== -1) {
            products[productIndex].quantity = updatedProduct.quantity;
          }
        });

        // Convert the updated data back to CSV format
        const updatedCSV = Papa.unparse(products, {
          header: true,
        });

        // Save the updated CSV file
        saveCSV(updatedCSV);
      },
    });
  };

  // Function to save the updated CSV file
  const saveCSV = (csvData) => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.csv'; // File name
    a.click();
  };

  // Function to update the CSV file on purchase
  const handleUpdateCSVOnPurchase = () => {
    if (updatedProducts.length > 0) {
      updateCSV(updatedProducts);
    }
  };

  return (
    <div className="checkout-container">
      <div className="user-info">
        <h3>S H I P P I N G   A D D R E S S </h3>
        <p>{storedUser.name}</p>
        <p>{storedUser.shippingAddress.street}</p>
        <p>{storedUser.shippingAddress.city}</p>
        <p>{storedUser.shippingAddress.state}</p>
        <p>{storedUser.shippingAddress.zip}</p>
        <p>{storedUser.shippingAddress.country}</p>
        <button className="change-buttons change" onClick={handleChangeUserInfo}>
          Change
        </button>
      </div>
      <div className="payment-info">

      </div>
      <OrderSummary total={bagTotal} />
      <Bag
        setProductToUpdate={setProductToUpdate}
        reduceProductQuantity={handlePlaceOrder}
      />
      <button onClick={handleUpdateCSVOnPurchase}>
        Update CSV on Purchase
      </button>
    </div>
  );
};

export default Checkout;*/