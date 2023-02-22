//chapter 1 and 2
//create index file and use cdn ,import css and script in index file
//npm init,import react and react-dom using npm instead of cdn
//use create.element and createroot and root.render
import react from "react";
import reactDom from "react-dom";

const heading1 = react.createElement("h1",{id:"heading1"},"heading1")
const heading2 = react.createElement("h2",{id:"heading1"},"heading2")
const containerDiv = react.createElement("div",{id:"containerDiv"}, [heading1,heading2])

const root = reactDom.createRoot(document.getElementById("root"));
root.render(containerDiv)