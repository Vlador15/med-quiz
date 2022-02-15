import React from "react";
import { Link } from "react-router-dom";

import { userData, logout } from "../../utils/helper";
import Menu from "../../utils/menus/menus";

import "./Header.scss";

function Header(props) {
  let currentUser = userData();

  const isLogin = () => {
    if (currentUser.isAuth)
      return (
        <div className="header__links">
          <Link to="/" className="header__link link">
            {currentUser.name.split(/\s+/)[0]}{" "}
            {currentUser.name.split(/\s+/)[1]}
          </Link>
          <Link to="/" className="header__link link">
            Информация
          </Link>
          <Link to="/" onClick={() => logout()} className="header__link link">
            Выйти
          </Link>
        </div>
      );
    else
      return (
        <div className="header__links">
          <Link to="/" className="header__link link">
            Главная
          </Link>
          <Link to="/" className="header__link link">
            Информация
          </Link>
        </div>
      );
  };

  let menuLines = [];
  if (currentUser.isAuth) {
    menuLines = [
      {
        url: "/",
        title: `${currentUser.name.split(/\s+/)[0] || ""} ${
          currentUser.name.split(/\s+/)[1] || ""
        }`,
      },
      {
        url: "/",
        title: `Информация`,
      },
      {
        url: "/",
        title: `Выйти`,
        onClick: logout,
      },
    ];
  } else {
    menuLines = [
      {
        url: "/",
        title: `Главная`,
      },
      {
        url: "/",
        title: `Информация`,
        onClick: logout,
      },
    ];
  }

  return (
    <header className="header">
      <div className="header__row container">
        <div className="header__logo">
          <h1>Logo</h1>
        </div>
        {isLogin()}
        <Menu lines={menuLines} title="Меню" />
      </div>
    </header>
  );
}

export default Header;
