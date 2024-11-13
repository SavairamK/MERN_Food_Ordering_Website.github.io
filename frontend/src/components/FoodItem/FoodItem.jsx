import React, { useContext } from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

    // Ensure that required props are defined
    if (!id || !name || !price || !description || !image) {
        console.error('FoodItem: One or more required props are missing or invalid');
        return null;
    }

    // Ensure that cartItems is defined and is an object
    if (!cartItems || typeof cartItems !== 'object') {
        console.error('FoodItem: cartItems is undefined or invalid');
        return null;
    }

    return (
        <>
            <div className="food-item">
                <div className="food-item-image-container">
                    <img src={url + '/images/' + image } alt="" className="food-item-image" />
                    {
                        cartItems[id] === undefined ?
                            <img
                                src={assets.add_icon_white}
                                alt=""
                                className="add"
                                onClick={() => addToCart(id)}
                            />
                            :
                            <div className="food-item-counter">
                                <img
                                    src={assets.remove_icon_red}
                                    alt=""
                                    onClick={() => removeFromCart(id)}
                                />
                                <p>{cartItems[id]}</p>
                                <img
                                    src={assets.add_icon_green}
                                    alt=""
                                    onClick={() => addToCart(id)}
                                />
                            </div>
                    }
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food-item-desc">
                        {description}
                    </p>
                    <p className="food-item-price">
                        &#8377;{price}
                    </p>
                </div>
            </div>
        </>
    )
}

export default FoodItem
