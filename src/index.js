import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const p=React.createElement("p" , {} , "Created by using React Property");

const p1=document.createElement("p");

console.log(p);

console.log(p1);

// ReactDOM.createRoot(document.getElementById("root")).render(p);
// ReactDOM.createRoot(document.getElementById("root")).render(<h1>hello</h1>);
ReactDOM.createRoot(document.getElementById("root")).render(<App  />);