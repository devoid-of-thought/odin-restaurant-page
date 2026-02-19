
import img1 from "./images/ctrlaltdck-cheese-4072040_1280.jpg";
import img2 from "./images/jhenning-cheese-8437668_1280.jpg";
import img3 from "./images/davidvives90-cheese-8274861_1280.jpg";

export default function loadHome() {
    const content = document.getElementById("content");
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.classList.add("welcome-message");
    welcomeMessage.textContent = "Welcome to our restaurant!";
    mainContent.appendChild(welcomeMessage);

    const leftContent = document.createElement("div");
    leftContent.classList.add("left-content");
    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        leftContent.appendChild(paragraph);
    }
    mainContent.appendChild(leftContent);

    const locations = document.createElement("div");
    locations.classList.add("locations");

    const locationsData = [
        {
            city: "Warsaw",
            address: "123 Żurawia, Warszawa, PL 00-001",
            image: img1,
        },
        {
        
            city: "Kraków",
            address: "456 Studencka, Kraków, PL 30-001",
            image: img2,
        },
        {

            city: "Wrocław",
            address: "789 Jęcznienna, Wrocław, PL 50-001",
            image: img3,
        }
    ];  
    for (const item of locationsData) {
        const location = document.createElement("div");
        location.classList.add("location");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = `${item.city} location`;
        imageContainer.appendChild(image);
        location.appendChild(imageContainer);

        const locationInfo = document.createElement("div");
        locationInfo.classList.add("text-container");
        const city = document.createElement("h2");
        city.textContent = item.city;
        const address = document.createElement("p");
        address.textContent = item.address;
        locationInfo.appendChild(city);
        locationInfo.appendChild(address);
        location.appendChild(locationInfo);

        locations.appendChild(location);
    }

    mainContent.appendChild(locations);
    content.appendChild(mainContent);
}