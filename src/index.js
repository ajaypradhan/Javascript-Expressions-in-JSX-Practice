//Create a react app from scratch.
const React = require("react");
const ReactDOM = require("react-dom");
//It should display 2 paragraph HTML elements.

const name = "Ajay Pradhan";
const date = new Date();
const year = date.getFullYear();

ReactDOM.render(
  <div>
    <h1>Created by {name}</h1>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
