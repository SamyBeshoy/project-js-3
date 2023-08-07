document.title = "project-js-3";
document.body.style.cssText = `height: 100vh; padding: 0; margin: 0; font-family: fantasy;`;
let parent = document.createElement("div");
parent.style.cssText = `display: flex; height: 100%; justify-content: center; background-color: #a5ffa8;`;
let div = document.createElement("div");
div.style.cssText = `display: flex; align-items: center; font-size: 40px;`;
div.innerHTML = "30";
parent.appendChild(div);
document.body.appendChild(parent);
function negative () {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(hand);
        this.close();
        window.close();
    }
}

let hand = setInterval(negative, 1000);
