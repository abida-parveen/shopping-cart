import React from "react";
import "./navbar.css";
import logo from "../../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import CartDropdown from "../../common/cart/CartDropdown";
import CartIcon from "../../common/cart/CartIcon";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <div className="navbar_container">
      <div className="container nav">
        <Link to="/" className="nav_anchor">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav_items_container">
          <CartIcon />
          {props.hidden && <CartDropdown />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Navbar);
