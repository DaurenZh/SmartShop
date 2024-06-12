import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './Reg.css'


const Reg = () => {
    return (
    <div className='main-containerkak'>
      <div className='frame-1kik'>
      <form>
        <span className='first-namebek'>Frist Name*</span>
          <input className='rectanglebek' />
          <span className='email-addressbek'>Email Address*</span>
          <input className='rectangle-2bek' />
          <span className='email-addressbek'>Phone*</span>
          <input className='rectangle-2bek' />
          <span className='email-addressbek'>Country*</span>
          <input className='rectangle-2bek' />
      </form>
      <button className='rectangle-buttonbek'>
        <span className='send-nowbek'>Create Account</span>
      </button>
      <span className='become-partnerbekhuda'>Create Account</span>
      <div className='frame-5bek'>
        <div className='vectorok' />
      </div>
      
    </div>
      
    <div className='frame-6ok' />
    </div>
    );
};

export default Reg;