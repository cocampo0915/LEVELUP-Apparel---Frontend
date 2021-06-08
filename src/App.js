import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import ProductsScreen from './components/Screens/ProductsScreen/ProductsScreen';
import AboutUsScreen from './components/Screens/AboutUsScreen/AboutUsScreen';
import CartScreen from './components/Screens/CartScreen/CartScreen';
import TestimonialsScreen from './components/Screens/TestimonialsScreen/TestimonialsScreen';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen';
import ProductScreen from './components/Screens/ProductScreen/ProductScreen';
import RegisterScreen from './components/Screens/RegisterScreen/RegisterScreen';
import SigninScreen from './components/Screens/SigninScreen/SigninScreen';
import PlaceOrderScreen from './components/Screens/PlaceOrderScreen/PlaceOrderScreen';
import PaymentScreen from './components/Screens/PaymentScreen/PaymentScreen';
import ShippingScreen from './components/Screens/ShippingScreen/ShippingScreen';
import Sidebar from './components/Sidebar/Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from  './actions/userActions';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, isAdmin } = userSignin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(false);
  }

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
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
          <Link to="/profile">{userInfo.name}</Link> :
          <Link to="/signin">SIGN IN</Link>
        }
        <a href="cart">CART</a>
        {
          userInfo ? 
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
