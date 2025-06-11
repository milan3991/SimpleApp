import { useState } from 'react';
import image1 from '../../assets/laptop1.svg';
import image2 from '../../assets/laptop2.svg';
import image3 from '../../assets/laptop3.svg';
import image4 from '../../assets/laptop4.svg';
import crying from '../../assets/crying.svg';

import StateItem from "./components/StateItems";
import './style.counter.css';
import CartItems from './components/CartItems';

const State = () => {
    const items = [
        {
            id: 1,
            image: image1,
            heading: 'Item 1',
            price: 220,
            subheading: 'Brand new laptop'
        },
        {
            id: 2,
            image: image2,
            heading: 'Item 2',
            price: 320,
            subheading: 'Brand new laptop'
        },
        {
            id: 3,
            image: image3,
            heading: 'Item 3',
            price: 420,
            subheading: 'Brand new laptop'
        },
        {
            id: 4,
            image: image4,
            heading: 'Item 4',
            price: 520,
            subheading: 'Brand new laptop'
        },
    ];

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        const existingItem = cartItems.find((c) => c.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            );
        } else {
            setCartItems((prev) => [...prev, {...item,quantity:1}]);
        }
    };


    const handleRemoveFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };

     const handleIncreaseQuantity = (item) => {
        setCartItems(
            cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
        );
    };

    const handleDecreaseQuantity = (item) => {
        setCartItems(
            cartItems.map((i) =>
                i.id === item.id
                    ? { ...i, quantity: i.quantity - 1 }
                    : i
            ).filter(i => i.quantity > 0)
        );
    };

    //Total price cart items
    const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0)


    return (
        <div className="counter_wrapper">
            <div className='content'>
                <div className='leftside'>
                    <h1>List Items</h1>
                    <div className="list_items">
                        {items.map(item => (
                            <StateItem
                                key={item.id}
                                heading={item.heading}
                                subheading={item.subheading}
                                image={item.image}
                                price={item.price}
                                handleButton={() => handleAddToCart(item)}
                                isInCart={false}
                            />
                        ))}
                    </div>
                </div>
                <div className='ceneterline'></div>
                <div className="rightside">
                    <h1>Cart Items</h1>
                    <div className='cart_items'>
                        {!cartItems.length ? (
                            <div className='noitems'>
                                <h4>No items in cart</h4>
                                <img src={crying} className='crying_image' />
                            </div>
                        ) : (
                            cartItems.map(item => (
                                <CartItems
                                    key={Math.random()}
                                    heading={item.heading}
                                    image={item.image}
                                    price={item.price * item.quantity}
                                    handleButton={() => handleRemoveFromCart(item)}
                                    isInCart={true}
                                    increase={() => handleIncreaseQuantity(item)} 
                                    decrease={() => handleDecreaseQuantity(item)} 
                                    quantity={item.quantity}
                                />
                            ))
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="total-price">
                            <h2>Total: $ {totalPrice.toFixed(2)}</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default State;
