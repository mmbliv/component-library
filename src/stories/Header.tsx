import React from "react";
import { Form } from "./Form.js";
import "./header.css";
import search from "./assets/search-icon.png";
import bag from "./assets/bag_3.png";
import profile from "./assets/profile_close_2.png";
type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  itemsNumber?: number;
  totalPrice?: number;
  language?: { [key: number]: string };
  currency?: { [key: number]: string };
}

export const Header = ({
  user,
  itemsNumber = 0,
  totalPrice = 0.0,
  language = { "1": "EN", "2": "CN" },
  currency = {
    "1": "USD",
    "2": "RMB",
  },
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div className="header-options">
        <Form options={language} type="selectInput" />
        <Form options={currency} type="selectInput" />
      </div>
      <div className="header-btns">
        <button className="header-btns--profile">
          <img src={profile} alt="" />
          My profile
        </button>
        <div className="header-btns--basket">
          <img src={bag} alt="" />
          <p>{itemsNumber} items</p>
          <p className="header-price">${totalPrice}</p>
        </div>
        <button className="header-btns--search">
          <img src={search} alt="" />
        </button>
      </div>
    </div>
  </header>
);
// import { Button } from "./Button";
// import { Form } from "./Form";
// import { Header } from "./Header";
// import { Page } from "./Page.js";
// import { Product } from "./Product";
// import { ProductOverlay } from "./ProductOverlay";

// export { Button, Form, Header, Page, Product, ProductOverlay };
