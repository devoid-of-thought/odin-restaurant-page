import "./styles.css";
import loadHome from "./main_page.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.getElementById("content");

loadHome();
const wipeContent = () => {
    content.textContent = "";
}
 
const navContainer = document.querySelector("nav");

navContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("header-link")) {
        const clickedId = event.target.id;
        console.log(clickedId);
        
        wipeContent();

        switch(clickedId) {
            case "home-button":
                loadHome();
                break;
            case "menu-button":
                loadMenu();
                break;
            case "delivery-button":
                break;
            case "about-us-button":
                break;
            case "our-cheese-button":
                break;
            case "contact-button":
                loadContact();
                break;
        }
    }
});
