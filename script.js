const h2 = document.createElement("h2");
let user = window.prompt("What is your name?");
h2.textContent = `Hello, ${user}`;
document.querySelector("body").appendChild(h2);

