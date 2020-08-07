import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <div>
      <table>
        <thead>
          <tr>
            <th>nombre</th>
            <th>apellido</th>
            <th>correo</th>
            <th> celular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos Daniel</td>
            <td>Bernal</td>
            <td>carlos22205@gmail.com</td>
            <td>3216893165</td>
          </tr>
          <tr>
            <td>Juan Pablo</td>
            <td>Holguín</td>
            <td>holgincorreaj27@gmail.com </td>
            <td>3227654178</td>
          </tr>
          <tr>
            <td>Jhosep</td>
            <td>Ramirez</td>
            <td>THEGAMERHD4K@gmail.com</td>
            <td>3128764868</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>,

  rootElement
);
