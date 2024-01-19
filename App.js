import React from 'react'
import ReactDOM from 'react-dom/client';
/* 
<div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
     <div id="child1">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> 

ReactElement(Object) => HTML(Browser understand)
*/


const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement('h1', {}, "I'm a h1 tag"),
        React.createElement('h2', {}, "I'm a h2 tag"),
        ]),
        React.createElement("div", {id:"child1"}, [
            React.createElement('h1', {}, "I'm a h1 tag"),
            React.createElement('h2', {}, "I'm a h2 tag"),
            ])
])

//JSX

console.log(parent)     //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)



// const heading = React.createElement("h1", {id: "heading"}, "Namaste React By React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);