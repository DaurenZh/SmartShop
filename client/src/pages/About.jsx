import React from 'react';
import './about.css'
import { NavLink } from "react-router-dom";
import { CONTACTS_ROUTE } from ".//../utils/consts";

function About() {
  return (
    <>
      <section className="about-section">
        <h1>About Us</h1>
      </section>
      <article className="about-content">
          <div className="about-columns">
            <figure className="image-column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb2bd9fa075e54a19dce7bae16bed5b2438f9a8b95ab06cc26c86b05b7dfd60e?apiKey=145a614dc8264552af1ec45aa2fef7a9&"
                alt="E-commerce business illustration"
                className="about-image"
              />
            </figure>
            <div className="text-column">
              <div className="content-wrapper">
                <h2 className="content-title">What is e-commerce business?</h2>
                <p className="content-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries but
                  also the on leap into electronic typesetting.
                </p>
                <div className="features-list">
                  <p className="feature-item">Slim body with metal cover</p>
                  <p className="feature-item">
                    Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </p>
                  <p className="feature-item">8GB DDR4 RAM and fast 512GB PCIe SSD</p>
                  <p className="feature-item">
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard
                  </p>
                </div>
                <NavLink href="#contacts" to={CONTACTS_ROUTE}>
                  <button className="contact-button" tabindex="0">
                      Contact Us
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </article>
    </>
  );
}

export default About;