import React from "react";
import './Shop.css'
import categ from './../images/Catergory card.svg'
import { NavLink } from "react-router-dom";
import { PRODUCT_ROUTE } from "./../utils/consts";

function Shop() {
  return (
    <>
      <section className="popular-sales"> 
        <h2 className="headingbek">Popular Sales</h2> 
        <div className="view-more-containerbek"> 
          <button className="view-morebek">View More</button> 
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/365c896af0c331c3bac4d78633897473db8dc6de805a186777e0d9ce2e74017e?apiKey=145a614dc8264552af1ec45aa2fef7a9&" className="arrow-iconbek" alt="" /> 
        </div> 
      </section> 
      <div className="popularbek">
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolyhan"
              alt="cat"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolyhan"
              alt="cat"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolyhan"
              alt="cat"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolyhan"
              alt="cat"
            />
          </NavLink>
      </div>
      <header className="headerbek">
        <h1 className="titlebek">Categories</h1>
      </header>
      <div className="popularbek">
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolybek"
              alt="eg"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolybek"
              alt="eg"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolybek"
              alt="eg"
            />
          </NavLink>
          <NavLink to={PRODUCT_ROUTE}>
            <img
              loading="lazy"
              src={categ}
              className="canopolybek"
              alt="eg"
            />
          </NavLink>
        </div>
    </>
  )
}

export default Shop;
