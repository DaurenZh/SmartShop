import * as React from "react";
import './Basket.css'
const CartItem = ({ src1, src2, itemName, itemPrice }) => (

  <div className="cart-itemka">
    <div className="item-infoka">
      <div className="image-wrapperka">
        <img loading="lazy" src={src1} className="imgka" alt={`${itemName} Image`} />
        <img loading="lazy" src={src2} className="imgka" alt={`${itemName} Image`} />
      </div>
      <p className="item-nameka">{itemName}</p>
    </div>
    <p className="item-priceka">{itemPrice}</p>
    <div className="quantity-selectka">
      <div className="quantity-controlska">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
    <p className="item-totalka">{itemPrice}</p>
    <div className="remove-buttonka">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee7894fbb4525e93bc4d5c14bbb50d6c52b12220cb22da8f1179603aafb70301?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
        className="remove-iconka"
        alt="Remove item"
      />
    </div>
  </div>
);

const Cart = () => {
    const items = [
      {
        src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        itemName: "Easy Faults",
        itemPrice: "$38",
      },
      {
        src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        itemName: "Easy Faults",
        itemPrice: "$38",
      },
      {
        src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&",
        itemName: "Easy Faults",
        itemPrice: "$38",
      },
    ];
  
    return (
      <>
        <header className="headersk">
          <div className="header-titlesk">Your Cart</div>
        </header>
        <section className="cartka">
          <div className="cart-items-container">
            <header className="cart-headerka">
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </header>
            {items.map((item) => (
              <CartItem
                key={item.itemName}
                src1={item.src1}
                src2={item.src2}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
              />
            ))}
          </div>
          <section className="summary-container">
            <div className="total-amount">
              <p className="total-text">Total</p>
              <p className="total-price">$365</p>
            </div>
            <form className="discount-form">
              <input
                className="discount-input"
                type="text"
                id="discountCode"
                placeholder="Discount code"
                aria-label="Discount code"
              />
            </form>
            <button className="checkout-button">Proceed to Checkout</button>
          </section>
        </section>
      </>
    );
  }
  
  export default Cart;
  