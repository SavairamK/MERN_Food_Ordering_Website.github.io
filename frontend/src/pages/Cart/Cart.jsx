import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {
            food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div className="cart-items-title cart-items-item">
                      <img src={url + "/images/" + item.image} alt="" className="" />
                      <p>{item.name}</p>
                      <p>&#8377;{item.price}</p>
                      <p>{cartItems[item._id]} Qty.</p>
                      <p>&#8377;{item.price * cartItems[item._id]}</p>
                      <p onClick={() => removeFromCart(item._id)} className='cross'>Remove X</p>
                    </div>
                    <hr />
                  </>
                )
              }
            })
          }
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="">
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#8377;{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>&#8377;{getTotalCartAmount() === 0 ? 0 : 35}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377;{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 35}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="cart-promo-code">
            <div className="">
              <p>If you have a promo code, enter it here.</p>
              <div className="cart-promo-code-input">
                <input type="text" placeholder='Enter PromoCode' />
                <button>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
