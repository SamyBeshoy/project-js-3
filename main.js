"use strict";
document.title = "Project 2";
document.body.style.cssText = "font-family: Arial, Helvetica, sans-serif; height: 100vh; background-image: linear-gradient(211deg, rgb(138, 209, 255), rgb(60, 201, 157), rgb(152, 255, 234));";
let description = document.createElement("h3");
let d_text = document.createTextNode("Description Is : When You Enter The Website You Automatically Make Focus On Input One When You Go Out From Input One You Automatically Focus On Input Two When You Go Out From Input Two Automatically Focus On Input Three")
description.appendChild(d_text);
document.body.appendChild(description)
let form = document.createElement("form");
form.style.cssText = "display: flex; flex-direction: column; align-items: center;" ;
let one = document.createElement("input");
one.setAttribute("placeholder", "Input One");
one.style.cssText = "margin: 1em; padding: 1em; width: 30em;";
one.setAttribute("type", "text")
let two = document.createElement("input");
two.setAttribute("placeholder", "Input Two");
two.style.cssText = "margin: 1em; padding: 1em; width: 30em;";
two.setAttribute("type", "text")
let three = document.createElement("input");
three.setAttribute("placeholder", "Input Three");
three.style.cssText = "margin: 1em; padding: 1em; width: 30em;";
three.setAttribute("type", "text")
form.appendChild(one);
form.appendChild(two);
form.appendChild(three);
document.body.appendChild(form);
window.onload = function () {
    one.focus();
}
one.onblur = function () {
    two.focus();
}
two.onblur = function () {
    three.focus();
}
let footer = document.createElement("div");
footer.innerHTML = "Copyright 2023 © by beshoy samy";
footer.style.cssText = "position: absolute ;bottom: 0; margin-left: 1em;";
document.body.appendChild(footer);