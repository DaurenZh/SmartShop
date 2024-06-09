import * as React from "react";
import './Favorites.css'

function Favorites() {
  const products = [
    { id: 1, name: "EasyFaults", price: "$38", img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&", img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&" },
    { id: 2, name: "EasyFaults", price: "$38", img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/578f45a92c1f649b693915bfc9047856faac8bf127a0047a09189c240e18fa06?apiKey=145a614dc8264552af1ec45aa2fef7a9&", img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&" },
    { id: 3, name: "EasyFaults", price: "$38", img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/f95c9f338767583544f2d04f5dfaf76f88c96b1dde769036c2008e31b8939e22?apiKey=145a614dc8264552af1ec45aa2fef7a9&", img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6a8b1b020a3c3365138ffa9e5b9a533333430e6650343858eb83bd62e9c82b7?apiKey=145a614dc8264552af1ec45aa2fef7a9&" },
  ];
  
  return (
    <>
      <section className="wishlist">
        <header className="headersk">
          <div className="header-titlesk">Your Wishlist</div>
        </header>
        <main className="main-contentsk">
          <div className="table-headersk">
            <div className="table-columnsk">Product</div>
            <div className="table-columnsk">Price</div>
          </div>
          {products.map((product) => (
            <div key={product.id} className="table-rowsk">
              <div className="product-infosk">
                <figure className="product-imagessk">
                  <img src={product.img1} alt={`Image of ${product.name}`} className="product-img1sk" />
                  <img src={product.img2} alt="" className="product-img2sk" />
                </figure>
                <figcaption className="product-namesk">{product.name}</figcaption>
              </div>
              <div className="product-pricesk">{product.price}</div>
              <button className="add-to-cartsk">Add to Cart</button>
              <button className="wishlist-removesk">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee7894fbb4525e93bc4d5c14bbb50d6c52b12220cb22da8f1179603aafb70301?apiKey=145a614dc8264552af1ec45aa2fef7a9&" alt="Remove from wishlist" className="remove-icon" />
              </button>
            </div>
          ))}
        </main>
        <footer className="footersk">
          <button className="clear-wishlistsk">Clear Wishlist</button>
          <button className="add-all-to-cartsk">Add to Cart all</button>
        </footer>
      </section>
    </>
  );
}

export default Favorites;