import { useState } from 'react';
import image1 from '../../assets/laptop1.svg';
import image2 from '../../assets/laptop2.svg';
import image3 from '../../assets/laptop3.svg';
import image4 from '../../assets/laptop4.svg';
import crying from '../../assets/crying.svg';

import StateItem from "./components/StateItems";
import './style.counter.css';

const State = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: image1,
            heading: 'Item 1',
            price: '220$',
            subheading: 'Brand new laptop'
        },
        {
            id: 2,
            image: image2,
            heading: 'Item 2',
            price: '220$',
            subheading: 'Brand new laptop'
        },
        {
            id: 3,
            image: image3,
            heading: 'Item 3',
            price: '220$',
            subheading: 'Brand new laptop'
        },
        {
            id: 4,
            image: image4,
            heading: 'Item 4',
            price: '220$',
            subheading: 'Brand new laptop'
        },
    ]);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const handleRemoveFromCart = (item) => {
        setCartItems(cartItems.filter(i => i.id !== item.id));
    };

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
                                <StateItem
                                    key={item.id}
                                    heading={item.heading}
                                    image={item.image}
                                    price={item.price}
                                    handleButton={() => handleRemoveFromCart(item)}
                                    isInCart={true}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;
