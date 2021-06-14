import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
// components
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import ProductScreen from './components/Screens/ProductScreen/ProductScreen';
import ProductsScreen from './components/Screens/ProductsScreen/ProductsScreen';
import CartScreen from './components/Screens/CartScreen/CartScreen';
import SigninScreen from './components/Screens/SigninScreen/SigninScreen';
import AboutUsScreen from './components/Screens/AboutUsScreen/AboutUsScreen';
import TestimonialsScreen from './components/Screens/TestimonialsScreen/TestimonialsScreen';
import RegisterScreen from './components/Screens/RegisterScreen/RegisterScreen';
import ShippingScreen from './components/Screens/ShippingScreen/ShippingScreen';
import PaymentScreen from './components/Screens/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './components/Screens/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './components/Screens/OrderScreen/OrderScreen';
import Sidebar from './components/Sidebar/Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from  './actions/userActions';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(false);
  }

  const openMenu = () => {
    if (document.querySelector(".sidebar").classList.contains("open")) {
      document.querySelector(".sidebar").classList.remove("open");
    }
    else {
      document.querySelector(".sidebar").classList.add("open");
    }
  }

  return (
    <BrowserRouter>

    <div className="grid-container">
    <header className="header">
      <div className="header-links left">
        <Link onClick={openMenu}>
          SHOP &#9661;
        </Link>
        <Link to="/aboutus">ABOUT US</Link>
        <Link to="/testimonials">TESTIMONIALS</Link>
      </div>
      <div className="brand">
        <Link to="/">LEVELUP</Link>
      </div>
      <div className="header-links">
        {
          userInfo ? 
          <Link to="/profile">{userInfo.name.toUpperCase()}</Link> :
          <Link to="/signin">SIGN IN</Link>
        }
        <Link to="/cart">CART</Link>
        {
          userInfo && userInfo.isAdmin ? 
          <Link to="/products">ADMIN</Link> : ''
        }
        {
          userInfo ? 
          <Link to="/" onClick={handleLogout}>LOGOUT</Link> : ''
        }
      </div>
    </header>
    <aside className="sidebar">
        <Sidebar />
    </aside>
    <main className="main">
          <div className="content">
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/aboutus" component={AboutUsScreen} />
            <Route path="/testimonials" component={TestimonialsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>

        </main>
        <footer className="footer">
          All rights reserved &copy; 2021
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
