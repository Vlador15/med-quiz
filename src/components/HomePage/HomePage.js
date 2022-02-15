import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HomePage.scss";
import { userData, login } from "../../utils/helper";

function HomePage(props) {
  let [data, setData] = useState({
    name: "",
    phone: "",
    password: "",
    sex: "",
  });
  let [error, setError] = useState("");

  let currentUser = userData();

  const changeData = (e) => {
    if (e.target.value.length < 50)
      setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    validator(() => {
      login(data);
      window.location.assign("/quiz");
    });
  };

  const validator = (callback) => {
    if (!data.name || data.name === "")
      return setError("Вы не заполнили поле: ФИО");
    if (!data.phone || data.phone === "")
      return setError("Вы не заполнили поле: телефон");
    if (!data.password || data.password === "")
      return setError("Вы не заполнили поле: пароль");

    callback();
  };

  const Error = (text) => {
    return <h5 className="form-error">{error}</h5>;
  };

  const isLogin = () => {
    if (!currentUser.isAuth)
      return (
        <div className="information__row">
          <div className="information__title">
            <h3>Заполните данные о себе</h3>
          </div>
          <div className="information__form">
            <input
              type="text"
              className="information__input"
              name="name"
              placeholder="ФИО"
              required
              onChange={(e) => changeData(e)}
            />
            <input
              type="text"
              className="information__input"
              name="phone"
              placeholder="Телефон"
              required
              onChange={(e) => changeData(e)}
            />
            <input
              type="text"
              className="information__input"
              name="password"
              placeholder="Придумайте пароль"
              required
              onChange={(e) => changeData(e)}
            />
            <select name="sex" id="sex" onChange={(e) => changeData(e)}>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>

            <div className="center">
              <button
                to="/quiz"
                onClick={sendData}
                className="information__btn"
              >
                Продолжить
              </button>
            </div>
            {error && <Error />}
          </div>
        </div>
      );
    else
      return (
        <div className="information__row">
          <div className="information__title">
            <h3>Вы уже авторизованы!</h3>
          </div>
          <div className="center">
            <Link to="/quiz" className="information__btn">
              Продолжить
            </Link>
          </div>
        </div>
      );
  };

  return <section className="information">{isLogin()}</section>;
}

export default HomePage;
