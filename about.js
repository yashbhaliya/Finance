// SERVICES DROPDOWN
const servicesItem = document.querySelector(".services");
const servicesDropdown = document.querySelector(".services-dropdown");
const servicesArrow = servicesItem.querySelector("i");

// CALCULATORS DROPDOWN
const calculatorsItem = document.querySelector(".calculators");
const calculatorsDropdown = document.querySelector(".calculators-dropdown");
const calculatorsArrow = calculatorsItem.querySelector("i");

let servicesTimeout;
let calculatorsTimeout;

// Open Services on hover
servicesItem.addEventListener("mouseenter", function (e) {
    clearTimeout(servicesTimeout);
    clearTimeout(calculatorsTimeout);
    servicesDropdown.classList.add("show");
    servicesArrow.classList.add("rotate");

    // Close calculators if open
    calculatorsDropdown.classList.remove("show");
    calculatorsArrow.classList.remove("rotate");
});

// Close Services on leave
servicesItem.addEventListener("mouseleave", function (e) {
    servicesTimeout = setTimeout(() => {
        servicesDropdown.classList.remove("show");
        servicesArrow.classList.remove("rotate");
    }, 300);
});

// Keep open when entering dropdown
servicesDropdown.addEventListener("mouseenter", function (e) {
    clearTimeout(servicesTimeout);
});

// Close when leaving dropdown
servicesDropdown.addEventListener("mouseleave", function (e) {
    servicesTimeout = setTimeout(() => {
        servicesDropdown.classList.remove("show");
        servicesArrow.classList.remove("rotate");
    }, 300);
});

// Open Calculators on hover
calculatorsItem.addEventListener("mouseenter", function (e) {
    clearTimeout(servicesTimeout);
    clearTimeout(calculatorsTimeout);
    calculatorsDropdown.classList.add("show");
    calculatorsArrow.classList.add("rotate");

    // Close services if open
    servicesDropdown.classList.remove("show");
    servicesArrow.classList.remove("rotate");
});

// Close Calculators on leave
calculatorsItem.addEventListener("mouseleave", function (e) {
    calculatorsTimeout = setTimeout(() => {
        calculatorsDropdown.classList.remove("show");
        calculatorsArrow.classList.remove("rotate");
    }, 300);
});

// Keep open when entering dropdown
calculatorsDropdown.addEventListener("mouseenter", function (e) {
    clearTimeout(calculatorsTimeout);
});

// Close when leaving dropdown
calculatorsDropdown.addEventListener("mouseleave", function (e) {
    calculatorsTimeout = setTimeout(() => {
        calculatorsDropdown.classList.remove("show");
        calculatorsArrow.classList.remove("rotate");
    }, 300);
});

// MOBILE MENU TOGGLE
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-container ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// CLOSE MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-menu');
const navList = document.querySelector('.nav-container ul');

// Open Sidebar
menuToggle.addEventListener('click', () => {
    navList.classList.add('active');
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    navList.classList.remove('active');
});

// Close Sidebar if clicking outside the menu
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
        navList.classList.remove('active');
    }
});

const cards = document.querySelectorAll(".mv-card");

    cards.forEach(card => {
        const icon = card.querySelector(".mv-icon");
        const heading = card.querySelector("h2");
        const paragraph = card.querySelector("p");

        // Initial state
        paragraph.style.display = "none";

        card.addEventListener("mouseenter", () => {
            icon.style.display = "none";
            heading.style.display = "none";
            paragraph.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
            icon.style.display = "flex";
            heading.style.display = "block";
            paragraph.style.display = "none";
        });
    });