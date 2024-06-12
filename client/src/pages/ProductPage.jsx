import * as React from "react";
import heart from './../images/icons/arcticons--heart.svg'
import categ from './../images/Catergory card.svg'

function Thumbnail({ src, alt }) {
  return <img src={src} alt={alt} className="thumbnail-img" loading="lazy" />;
}

function PriceDisplay({ originalPrice, salePrice }) {
  return (
    <div className="price-container">
      <div className="original-price">{originalPrice}</div>
      <div className="sale-price">{salePrice}</div>
    </div>
  );
}

function QuantitySelector() {
  return (
    <div className="quantity-selector">
      <button className="quantity-btn" aria-label="Decrease quantity">-</button>
      <div className="quantity-text">1</div>
      <button className="quantity-btn" aria-label="Increase quantity">+</button>
    </div>
  );
}

export default function ProductPage() {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          background-color: #f9f9f9;
          padding-left: 30px;
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 20px;
          }
        }
        .content-wrapper {
          margin-top: 30px;
          width: 1168px;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            margin-top: 40px;
          }
        }
        .product-layout {
          display: flex;
        }
        @media (max-width: 991px) {
          .product-layout {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
        }
        @media (max-width: 991px) {
          .left-column,
          .right-column {
            width: 100%;
          }
        }

        .right-column {
            
        }

        .main-img-container {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .main-img-container {
            max-width: 100%;
            margin-top: 30px;
          }
        }
        .main-img {
          aspect-ratio: 0.97;
          object-fit: auto;
          object-position: center;
          width: 70%;
        }
        @media (max-width: 991px) {
          .main-img {
            max-width: 100%;
          }
        }
        .thumbnail-wrapper {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          padding: 0 1px;
        }
        .thumbnail-img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 12.8%;
        }
        .meta-info-container {
            margin-right: 50px;

        }

        @media (max-width: 991px) {
          .meta-info-container {
            max-width: 100%;
            margin-top: 30px;
          }
        }

        h2 {
          font-family: 'Inter'; 
          font-weight: 100;
        }

        .product-title {
          color: #222;
          margin-top: 30px;
          font: 500 20px/140% Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .product-description {
          margin-top: 30px;
          color: #797979;
          font: 400 14px/28px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .price-container {
          display: flex;
          margin-top: 30px;
          padding-right: 80px;
          gap: 7px;
          font-weight: 500;
          white-space: nowrap;
        }

        .heart {
          padding-bottom: 3px;
          width: 35px;
        }

        .original-price {
          text-decoration: line-through;
          align-self: start;
          margin-top: 8px;
          color: #797979;
          font: 14px/143% Inter, sans-serif;
        }
        .sale-price {
          color: var(--price-color, #ef8f00);
          font: 24px/133% Inter, sans-serif;
        }
        .action-container {
          border-radius: 3px;
          display: flex;
          margin-top: 30px;
          gap: 10px;
        }

        .pod {
          padding-top: 35px;
          display: flex;
          gap: 30px;
        }

        .podimg {
          width: 14%;
        }
        .quantity-selector,
        .add-to-cart-button {
          display: flex;
          align-items: center;
          border: 4px solid #fff;
          background-color: #f6f6f6;
        }
        .quantity-text {
          color: #222;
        }
        .quantity-btn {
          font-family: Inter, sans-serif;
        }
        .add-to-cart-button {
          font-weight: 650;
          font-family: Inter, sans-serif;
          background-color: var(--main, #ffb321);
          border-radius: 6px;
          padding: 15px 60px;
        }
        @media (max-width: 991px) {
          .add-to-cart-button {
            padding: 0 20px;
          }
        }
        @media (max-width: 991px) {
          .price-container {
            flex-wrap: wrap;
            padding-right: 20px;
            white-space: initial;
          }
          .original-price,
          .sale-price {
            white-space: initial;
          }
          .product-description {
            max-width: 100%;
            padding-right: 20px;
          }
          .action-container {
            max-width: 100%;
            flex-wrap: wrap;
          }
          .quantity-selector,
          .add-to-cart-button {
            padding: 0 20px;
          }
        }
      `}</style>
      <section className="container">
        <article className="content-wrapper">
          <div className="product-layout">
            <div className="left-column">
              <div className="main-img-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c47d7158ab303a76c703b19fa147d529562fce4ea69491ed13048acec6cac4e?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
                  alt="Samsung Galaxy Z Fold3 5G"
                  className="main-img"
                />
                <div className="thumbnail-wrapper">
                  {Array(5)
                    .fill("https://cdn.builder.io/api/v1/image/assets/TEMP/561f3063225d5dd4d4aa0788dd96e12ca548117dbeb217a020ce0364679d35f4?apiKey=145a614dc8264552af1ec45aa2fef7a9&")
                    .map((src, index) => (
                      <Thumbnail key={index} src={src} alt={`Thumbnail ${index + 1}`} />
                    ))}
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="meta-info-container">
                <h2>Petrel plugin</h2>
                <h3 className="product-title">
                  Samsung Galaxy Z Fold3 5G 3 colors in 512GB
                </h3>
                <PriceDisplay originalPrice="$9.99" salePrice="$6.99" />
                <p className="product-description">
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>
                <div className="action-container">
                    <img
                        loading="lazy"
                        src={heart}
                        className="heart"
                        alt="User"
                    />
                  <QuantitySelector />
                  <button className="add-to-cart-button">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pod">
            <img
                loading="lazy"
                src={categ}
                className="podimg"
                alt="cat"
            />
            <img
                loading="lazy"
                src={categ}
                className="podimg"
                alt="cat"
            />
            <img
                loading="lazy"
                src={categ}
                className="podimg"
                alt="cat"
            />
            <img
                loading="lazy"
                src={categ}
                className="podimg"
                alt="cat"
            />
          </div>
        </article>
      </section>
    </>
  );
}
