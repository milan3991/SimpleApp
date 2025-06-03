import image1 from '../../assets/laptop1.svg';
import image2 from '../../assets/laptop2.svg';
import image3 from '../../assets/laptop3.svg';
import image4 from '../../assets/laptop4.svg';
import crying from '../../assets/crying.svg';


import CounterItem from "./components/CounterItems";
import './style.counter.css'

const Counter = () => {
    let items = [
        {
            id: 1,
            image: image1,
            heading: 'Item 1',
            price: '220$',
            subheading: 'Brand new laptop',
        },
        {
            id: 2,
            image: image2,
            heading: 'Item 2',
            price: '220$',
            subheading: 'Brand new laptop',

        },
        {
            id: 3,
            image: image3,
            heading: 'Item 3',
            price: '220$',
            subheading: 'Brand new laptop',

        },
        {
            id: 4,
            image: image4,
            heading: 'Item 4',
            price: '220$',
            subheading: 'Brand new laptop',

        },

    ];


    return (



        <div className="counter_wrapper">
            <div className='content'>
            <div className='leftside'>
                <h1>List Items</h1>
                <div className="list_items">
                    {items.map((items) => (
                        <CounterItem
                            key={items.id}
                            heading={items.heading}
                            subheading={items.subheading}
                            image={items.image}
                            price={items.price}
                        />
                    ))}

                </div>
            </div>
            <div className='ceneterline'>

            </div>
            <div className="rightside">
                <h1>Cart Items</h1>
                <div className='cart_items'>
                    <div className='noitems'>
                        <h4>No items in cart</h4>
                                    <img src={crying} className='crying_image' />

                    </div>
                </div>
            </div>
        </div>
        </div >
    )

}

export default Counter;