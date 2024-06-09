import * as React from "react";

function ImageBlock({ src, alt, label }) {
  return (
    <div className={`image-blockok ${label === "License" ? "license-border" : ""}`}>
      <div className="image-wrapperok">
        <img loading="lazy" src={src} alt={alt} className="imageok" />
      </div>
      <div className="image-labelok">{label}</div>
    </div>
  );
}

function Product({ img1Src, img2Src, productName, quantity, used, actionText }) {
  return (
    <section className="product-sectionqw">
      <div className="product-wrapperqw">
        <div className="image-containerqw">
          <figure className="image-figureqw">
            <img src={img1Src} alt={productName} className="main-imageqw" />
            <img src={img2Src} alt="" className="secondary-imageqw" />
          </figure>
          <div className="product-nameqw">{productName}</div>
        </div>
        <div className="product-infoqw product-quantityqw">{quantity}</div>
        <div className="product-infoqw product-usedqw">{used}</div>
        <button className="product-actionqw">{actionText}</button>
      </div>
    </section>
  );
}

function UserInfo({ username, hwid, activationDate, expirationDate }) {
  return (
    <div className="user-infoqw">
      <div className="user-info-headingqw">
        <span>Username</span>
        <span>HWID</span>
        <span>Activation Date</span>
        <span>Expiration Date</span>
      </div>
      <div className="user-info-contentqw">
        <span>{username}</span>
        <span>{hwid}</span>
        <span>{activationDate}</span>
        <span>{expirationDate}</span>
      </div>
    </div>
  );
}


export default function MyComponent() {
  const imageBlocks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d1f8ca0f1468c80a20cda12236fe44625115dd889193f5daf60d0c1b9a93136?apiKey=145a614dc8264552af1ec45aa2fef7a9&", alt: "User profile picture", label: "Personal info" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb367809d1b4c15131e92e10bd50ab0f2b41c880b29cc2cb1c8ed667837e2a03?apiKey=145a614dc8264552af1ec45aa2fef7a9&", alt: "License image", label: "License" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcd144a36c3c8fa8c152e41918b9161f161c81664bcf68c3249a531d340a8b94?apiKey=145a614dc8264552af1ec45aa2fef7a9&", alt: "Activate license image", label: "Activate license" },
  ];

  return (
    <>
      <main className="main-containerok">
        <section className="content-sectionok">
          {imageBlocks.map((block, index) => (
            <ImageBlock key={index} src={block.src} alt={block.alt} label={block.label} />
          ))}
        </section>
      </main>
      <style jsx>{`
        .main-containerok {
          justify-content: center;
          align-items: center;
          background-color: #f9f9f9;
          display: flex;
          padding: 10px 60px;
        }

        @media (max-width: 991px) {
          .main-containerok {
            padding: 0 20px;
          }
        }

        .content-sectionok {
          display: flex;
          gap: 10px;
        }

        @media (max-width: 991px) {
          .content-sectionok {
            flex-wrap: wrap;
          }
        }

        .image-blockok {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f9f9f9;
          padding: 10px;
        }

        .license-border {
          border-bottom: 1px solid rgba(255, 168, 0, 1);
        }

        .image-wrapperok {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .imageok {
          aspect-ratio: 1;
          object-fit: cover;
          width: 20px;
          fill: #000;
        }

        .image-labelok {
          color: #000;
          font: 400 15px/90% Inter, sans-serif;
          margin-left: 10px;
        }
      `}</style>
             <header className="headerqw">
        <h1 className="header-titleqw">Product</h1>
        <nav className="header-navqw">
          <a href="#" className="nav-linkqw">All</a>
          <a href="#" className="nav-linkqw">Used</a>
          <a href="#" className="nav-linkqw">Action</a>
        </nav>
      </header>
      <main>
        <Product
          img1Src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          img2Src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7634267d8d1a54c6399b7c84130e95972365743c36707b8d634d7e95f20947f?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          productName="iPhone 12 Pro Max 128GB"
          quantity="5"
          used="2"
          actionText="Purchase licenses"
        />
        <UserInfo
          username="David"
          hwid="FDHABWJFDS1234"
          activationDate="12.07.2023"
          expirationDate="12.09.2023"
        />
        <Product
          img1Src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          img2Src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7634267d8d1a54c6399b7c84130e95972365743c36707b8d634d7e95f20947f?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          productName="iPhone 12 Pro Max 128GB"
          quantity="5"
          used="2"
          actionText="Purchase licenses"
        />
        <UserInfo
          username="David"
          hwid="FDHABWJFDS1234"
          activationDate="12.07.2023"
          expirationDate="12.09.2023"
        />
        <Product
          img1Src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa5f468bed91fb66e614265f9cbe8358e6a724ea0d9ea2ff930a87a0f987a440?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          img2Src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7634267d8d1a54c6399b7c84130e95972365743c36707b8d634d7e95f20947f?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
          productName="iPhone 12 Pro Max 128GB"
          quantity="5"
          used="2"
          actionText="Purchase licenses"
        />
      </main>
      <style jsx>{`
        .headerqw {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 40px;
          background-color: #f6f6f6;
          border-bottom: 1px solid rgba(229, 231, 235, 1);
        }
        .header-titleqw {
          font-size: 20px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .header-navqw {
          display: flex;
          gap: 20px;
        }
        .nav-linkqw {
          text-decoration: none;
          color: #000;
          font-weight: 500;
        }
        .product-sectionqw {
          padding: 17px 40px;
          border-bottom: 1px solid rgba(229, 231, 235, 1);
        }
        .product-wrapperqw {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .image-containerqw {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .image-figureqw {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 78px;
        }
        .main-imageqw,
        .secondary-imageqw {
          width: 100%;
          height: auto;
        }
        .secondary-imageqw {
          aspect-ratio: 1;
          object-fit: contain;
        }
        .product-nameqw {
          text-align: center;
          font-size: 15px;
          margin-top: 10px;
        }
        .product-infoqw {
          text-align: center;
          font-size: 15px;
          margin: auto 0;
        }
        .product-actionqw {
          padding: 11px 60px;
          background-color: #ffbb38;
          border: none;
          cursor: pointer;
          font-size: 15px;
          border-radius: 3px;
        }
        .user-infoqw {
          background-color: #f6f6f6;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .user-info-headingqw,
        .user-info-contentqw {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
