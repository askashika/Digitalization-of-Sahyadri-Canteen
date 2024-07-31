import React, { useState } from 'react';
import axios from 'axios';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle, Button, Form, FormGroup } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/lunch.jpg';
import DinnerImg from '../utils/img/dinner.jpg';
import DessertImg from '../utils/img/dessert.jpg';

const breakfast = [
    { id: 1, name: 'Dosa', description: 'Dosas are served hot...', price: 0.53 },
    { id: 2, name: 'Idli-Vada', description: 'Idli, Vadai, Sambar...', price: 0.59 },
    { id: 3, name: 'Sajjige Bajil', description: 'Avalakki Uppitu...', price: 0.65 }
];
const lunch = [
    { id: 1, name: 'Mini Meal', description: 'Mini Meals is a common...', price: 0.71 },
    { id: 2, name: 'Kebab Rice', description: 'Literally means white rice...', price: 1.43 },
    { id: 3, name: 'Biriyani', description: 'Biryani, a flavourful rice dish...', price: 1.79 }
];
const dinner = [
    { id: 1, name: 'Paneer Rice', description: 'Lorem ipsum dolor sit amet...', price: 1.43 },
    { id: 2, name: 'Egg Chilli', description: 'Lorem ipsum dolor sit amet...', price: 0.59 },
    { id: 3, name: 'Chicken Curry', description: 'Lorem ipsum dolor sit amet...', price: 0.95 }
];
const dessert = [
    { id: 1, name: 'Payasa', description: 'Lorem ipsum dolor sit amet...', price: 0.53 },
    { id: 2, name: 'Sheera', description: 'Lorem ipsum dolor sit amet...', price: 0.41 },
    { id: 3, name: 'Vegan Pancakes', description: 'Flour, sugar, baking powder...', price: 0.31 }
];
function Menu() {
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const handleAddToCart = (item, quantity) => {
        const newItem = { ...item, quantity: Number(quantity) };
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        let newCart;
        if (existingItem) {
            newCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + newItem.quantity }
                    : cartItem
            );
        } else {
            newCart = [...cart, newItem];
        }

        setCart(newCart);
        calculateTotalCost(newCart);
    };

    const handleRemoveFromCart = (itemId) => {
        const newCart = cart.filter(cartItem => cartItem.id !== itemId);
        setCart(newCart);
        calculateTotalCost(newCart);
    };

    const handleResetCart = () => {
        setCart([]);
        setTotalCost(0);
    };

    const calculateTotalCost = (cart) => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalCost(total.toFixed(2));
    };

    const handleOrderNow = async () => {
        try {
          const response = await axios.post('http://localhost:3001/admin/orders', {
            customerName: 'Guest',  // Change this if you have a way to get the user's name
            foodItems: cart.map(item => ({
              foodName: item.name,
              numberOfItems: item.quantity,
              cost: item.price
            })),
            orderTime: new Date().toLocaleTimeString(),
            totalCost: totalCost
          });
          alert('Order placed successfully');
          handleResetCart();
        } catch (error) {
          console.error('There was an error placing the order!', error);
        }
      };
      

    const renderItems = (items, imgSrc, sectionTitle) => (
        <div className={`${sectionTitle.toLowerCase()} my-5`}>
            <div className='container'>
                <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>{sectionTitle}</h2>
                <div className='image-container'>
                    {items.map((item) => (
                        <div key={item.id} className='d-flex flex-column align-items-center'>
                            <Card className='border-0'>
                                <CardBody>
                                    <img src={imgSrc} alt={item.name} className='img-fluid mb-2' />
                                    <CardTitle className='text-center fs-3'>{item.name}</CardTitle>
                                    <CardText className='text-center fs-5'>{item.description}</CardText>
                                    <CardText className='text-center fs-3 fw-bold text-success'>${item.price.toFixed(2)}</CardText>
                                    <Form className='d-flex flex-column align-items-center'>
                                        <FormGroup className='d-flex align-items-center'>
                                            <Form.Label htmlFor={`quantity-${item.id}`} className='me-2'>Qty:</Form.Label>
                                            <Form.Control type='number' id={`quantity-${item.id}`} name='quantity' min='1' defaultValue='1' className='me-2' />
                                        </FormGroup>
                                        <Button onClick={() => handleAddToCart(item, document.getElementById(`quantity-${item.id}`).value)}>Add to Cart</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className='menu-page'>
            <header className='header'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            {renderItems(breakfast, BreakfastImg, 'Breakfast')}
            {renderItems(lunch, LunchImg, 'Lunch')}
            {renderItems(dinner, DinnerImg, 'Dinner')}
            {renderItems(dessert, DessertImg, 'Dessert')}

            <div className='order-summary'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Order Summary</h2>
                    <ul className='list-group'>
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                    <div>
                                        <span>{item.name}</span>
                                        <span className='badge bg-success ms-2'>{item.quantity} x ${item.price.toFixed(2)}</span>
                                    </div>
                                    <Button variant='danger' onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                </li>
                            ))
                        ) : (
                            <li className='list-group-item'>Your cart is empty</li>
                        )}
                    </ul>
                    <div className='text-center mt-4'>
                        <h3 className='text-success'>Total: ${totalCost}</h3>
                        <Button variant='success' className='mt-3' onClick={handleOrderNow}>Order Online Now</Button>
                        <Button variant='secondary' className='mt-3 ms-2' onClick={handleResetCart}>Reset Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
