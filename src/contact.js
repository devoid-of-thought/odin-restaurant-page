
export default function loadContact() {
    const content = document.getElementById("content");
        const locationsData = [
            {
                city: "Warsaw",
                address: "123 Żurawia, Warszawa, PL 00-001",
                phoneNumber: "+48 123 456 789",
            },
            {
            
                city: "Kraków",
                address: "456 Studencka, Kraków, PL 30-001",
                phoneNumber: "+48 987 654 321",
            },
            {
    
                city: "Wrocław",
                address: "789 Jęcznienna, Wrocław, PL 50-001",
                phoneNumber: "+48 555 444 333",
            }
        ];  
    for (const item of locationsData) {
        const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");
        const location = document.createElement("div");
        location.classList.add("location");

        const city = document.createElement("h2");
        city.textContent = item.city;
        location.appendChild(city);

        const address = document.createElement("p");
        address.textContent = `Address: ${item.address}`;
        location.appendChild(address);

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = `Phone: ${item.phoneNumber}`;
        location.appendChild(phoneNumber);

        contactCard.appendChild(location);
        content.appendChild(contactCard);

    }
}