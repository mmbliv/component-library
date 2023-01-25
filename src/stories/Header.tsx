import React from "react";
import { Form } from "./Form";
import { Button } from "./Button";
import "./header.css";
import { BsPerson, BsBasket, BsSearch } from "react-icons/bs";
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
          <BsPerson />
          My profile
        </button>
        <div className="header-btns--basket">
          <BsBasket />
          <p>{itemsNumber} items</p>
          <p className="header-price">${totalPrice}</p>
        </div>
        <button className="header-btns--search">
          <BsSearch />
        </button>
      </div>
    </div>
  </header>
);
