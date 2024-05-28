import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './auth.css'

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
    <div className='main-containerkak'>
      <div className='frame-1kik'>
        <form>
        <span className='first-namebek'>Email Adress*</span>
        <div className='rectanglebek' />
        <span className='email-addressbek'>Password*</span>
        <div className='rectangle-2bek' />
        <button className='rectangle-buttonbek'>
          <span className='send-nowbek'>Log In</span>
        </button>
        </form>
        <span className='become-partnerbekhu'>Log In</span>
        <div className='frame-5bek'>
          <div className='vectorok' />
        </div>
      </div>
      
      <div className='frame-6ok' />
    </div>
    );
});

export default Auth;