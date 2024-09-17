import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false">
      My Favourite Foods
    </h1>
    <img alt="random" src={img + "?grayscale"} />
    <ul>
      <li>
        <img
          className="food-img"
          src="https://th.bing.com/th/id/R.e3961acff30cba07a8ca1841d6ba4373?rik=ahWZ0Ts5oLINfw&pid=ImgRaw&r=0g"
          alt="Bacon"
        />
        Bacon{" "}
      </li>
      <li>
        <img
          className="food-img"
          src="https://th.bing.com/th/id/OIP.Aj57GU0krO2ryZlNOunXpAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain"
          alt="Jamon"
        />
        Jamon
      </li>
      <li>
        <img
          className="food-img"
          src="https://th.bing.com/th/id/OIP.lEDV8E43DZfmAvRXhGLJvQHaJ4?rs=1&pid=ImgDetMain"
          alt="Noodles"
        />
        Noodles
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
