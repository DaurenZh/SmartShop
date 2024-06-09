import * as React from "react";

function ImageBlock({ src, alt, label }) {
  return (
    <div className={`image-blockok ${label === "Personal info" ? "personal-info" : ""}`}>
      <div className="image-wrapperok">
        <img loading="lazy" src={src} alt={alt} className="imageok" />
      </div>
      <div className="image-labelok">{label}</div>
    </div>
  );
}

const CustomInput = ({ label, id, type = "text", required = false }) => (
  <div className="input-wrapper">
    <label htmlFor={id} className="input-label">
      {label} {required && "*"}
    </label>
    <input type={type} id={id} className="input-field" aria-required={required} />
  </div>
);

const CustomImage = ({ src, alt }) => (
  <div className="img-wrapper">
    <img loading="lazy" src={src} alt={alt} className="profile-img" />
  </div>
);

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

        .personal-info {
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
            <div className="form-container">
        <div className="form-wrapper">
          <section className="form-content">
            <form className="user-form">
              <div className="user-info">
                <CustomInput label="Name" id="name" />
                <CustomInput label="Company" id="company" />
              </div>
              <div className="user-details">
                <CustomInput label="Email" id="email" type="email" required />
                <CustomInput label="Phone Number" id="phone" type="tel" />
              </div>
              <CustomInput label="Country" id="country" />
            </form>

            <aside className="profile-section">
              <CustomImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/29f24f0586d5d776045adb0acdf8697307cd5865ca3051dbba05ef53db3d8eab?apiKey=145a614dc8264552af1ec45aa2fef7a9&" alt="User profile picture" />
              <button className="update-btn">Update Profile</button>
            </aside>
          </section>
        </div>
      </div>
      <style jsx>{`
        .form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(239, 239, 239, 1);
          border-radius: 3px;
          background-color: #fff;
          padding: 30px 10px;
        }
        @media (max-width: 991px) {
          .form-container {
            padding: 0 20px;
          }
        }
        .form-wrapper {
          width: 100%;
          max-width: 797px;
        }
        @media (max-width: 991px) {
          .form-wrapper {
            max-width: 100%;
          }
        }
        .form-content {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .form-content {
            flex-direction: column;
            gap: 0;
          }
        }
        .user-form {
          display: flex;
          flex-direction: column;
          width: 74%;
          line-height: normal;
        }
        @media (max-width: 991px) {
          .user-form {
            width: 100%;
          }
        }
        .user-info,
        .user-details {
          display: flex;
          flex-grow: 1;
          gap: 12px;
          font-size: 13px;
          color: #797979;
          font-weight: 400;
          text-transform: capitalize;
          line-height: 150%;
          padding: 4px 0 80px;
        }
        @media (max-width: 991px) {
          .user-info,
          .user-details {
            flex-wrap: wrap;
            gap: 20px;
          }
        }
        .input-wrapper {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 10px 0;
        }
        .input-label {
          font-family: Inter, sans-serif;
        }
        .input-field {
          border: 1px solid rgba(239, 239, 239, 1);
          background-color: #fff;
          margin-top: 15px;
          height: 50px;
          padding: 4px 8px;
          border-radius: 3px;
        }
        .profile-section {
          display: flex;
          flex-direction: column;
          width: 26%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .profile-section {
            width: 100%;
            margin-top: 30px;
          }
        }
        .img-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-img {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 198px;
          border-radius: 50%;
        }
        .update-btn {
          display: flex;
          justify-content: center;
          background-color: var(--main, #ffb321);
          color: var(--text-color, #000);
          text-align: center;
          padding: 15px 47px;
          font: 600 15px / 133% Inter, -apple-system, Roboto, Helvetica, sans-serif;
          margin-top: 53px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .update-btn {
            margin-top: 40px;
            padding: 15px 20px;
          }
        }
      `}</style>
    </>
  );
}
