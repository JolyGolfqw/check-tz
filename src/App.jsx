import React from "react";
import Arrow from "./assets/Union.svg";
import ButtonImg from "./assets/Group 3457.svg";
import Vector from "./assets/Vector.svg";
import "./App.css";

const App = () => {
  const sum = 820.95;
  const [integerPart, decimalPart] = sum.toFixed(2).split(".");
  const cashBox = "Касса #1";

  const date = new Date();
  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div className="app">
      <div className="subtotal">
        <div className="date">{formattedDate} {cashBox}</div>
        <div className="subtotal-check">
          <div className="text-price">
            <span>Стоимость покупок</span>
            <div className="price">
              {integerPart}<span>,{decimalPart}</span>₽
            </div>
            <div className="text">
              <span className="first-word">Приложите</span>
              <span className="second-line">или прокатайте карту</span>
            </div>
          </div>
        </div>
        <button className="arrow">
          <img src={Arrow} alt="" />
        </button>
      </div>
      <div className="buttons">
        <button className="go-back">
          <img src={ButtonImg} alt="" />
        </button>
        <button className="employee-call">
          <img src={Vector} alt="" /> Вызов сотрудника
        </button>
      </div>
    </div>
  );
};

export default App;
