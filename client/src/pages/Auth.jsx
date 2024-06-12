import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {INFO_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login} from "../http/userAPI";
import {registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './auth.css'

function Auth(){
    return (
    <div className='main-containerkak'>
      <div className='frame-1kik'>
        <form>
        <span className='first-namebek'>Email Adress*</span>
        <div className='rectanglebek' />
        <span className='email-addressbek'>Password*</span>
        <div className='rectangle-2bek' />
        <NavLink to={INFO_ROUTE}>
        <button className='rectangle-buttonbek'>
          <span className='send-nowbek'>Log In</span>
        </button>
        </NavLink>
        </form>
        <span className='become-partnerbekhu'>Log In</span>
        <div className='frame-5bek'>
          <div className='vectorok' />
        </div>
        <button className='rectangle-buttonbek'>
        <NavLink className='send-nowbek' to={REGISTRATION_ROUTE}>Create Account</NavLink>
      </button>
      </div>
      
      <div className='frame-6ok' />
    </div>
    );
}

export default Auth;