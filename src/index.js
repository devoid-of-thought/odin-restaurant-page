import "./styles.css";
import loadHome from "./main_page";

loadHome();
 
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  loadHome();
});

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    loadMenu();
});

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
    loadContact();
});