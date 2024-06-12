import Navbar from "./Components/navbar/navbar";
import Shop from './pages/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from "./pages/Categories";
import Info from "./pages/Info";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Partner from "./pages/Partner";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import Reg from "./pages/Reg";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import React, {useContext, useEffect, useState} from 'react';
import AppRouter from "./Components/navbar/AppRouter";
import ProductPage from "./pages/ProductPage";


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Shop/> } />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/partner" element={<Partner/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/Auth/Reg" element={<Reg/>}/>
          <Route path="/ProductPage" element={<ProductPage/>}/>
          <Route path="/Auth/Info" element={<Info/>}/>
        </Routes>
    </BrowserRouter>
  );
});

export default App;
