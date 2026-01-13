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

// Close footer dropdowns when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".footer-calculators")) {
        footerCalculatorsDropdown.classList.remove("show");
        footerCalculatorsArrow.classList.remove("rotate");
    }
});

// FOOTER CALCULATORS DROPDOWN
const footerCalculatorsItem = document.querySelector(".footer-calculators > a");
const footerCalculatorsDropdown = document.querySelector(".footer-calculators-dropdown");
const footerCalculatorsArrow = footerCalculatorsItem.querySelector("i");

// Toggle Footer Calculators
footerCalculatorsItem.addEventListener("click", function (e) {
    e.preventDefault();

    footerCalculatorsDropdown.classList.toggle("show");
    footerCalculatorsArrow.classList.toggle("rotate");
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

const amountRange = document.getElementById("amountRange");
const amountInput = document.getElementById("amountInput");

const rateRange = document.getElementById("rateRange");
const rateInput = document.getElementById("rateInput");

const tenureRange = document.getElementById("tenureRange");
const tenureInput = document.getElementById("tenureInput");

const emiEl = document.getElementById("emi");
const interestEl = document.getElementById("interest");
const totalEl = document.getElementById("total");

/* SYNC RANGE & INPUT */
function sync(range, input) {
    range.addEventListener("input", () => {
        input.value = range.value;
        calculateEMI();
    });

    input.addEventListener("input", () => {
        range.value = input.value;
        calculateEMI();
    });
}

sync(amountRange, amountInput);
sync(rateRange, rateInput);
sync(tenureRange, tenureInput);

/* EMI CALCULATION */
function calculateEMI() {
    let P = parseFloat(amountInput.value);
    let annualRate = parseFloat(rateInput.value);
    let years = parseFloat(tenureInput.value);

    if (!P || !annualRate || !years) {
        emiEl.innerText = "₹0";
        interestEl.innerText = "₹0";
        totalEl.innerText = "₹0";
        return;
    }

    let R = annualRate / 12 / 100;   // Monthly interest rate
    let N = years * 12;              // Total months

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    let totalPayment = EMI * N;
    let totalInterest = totalPayment - P;

    emiEl.innerText = formatINR(EMI);
    interestEl.innerText = formatINR(totalInterest);
    totalEl.innerText = formatINR(totalPayment);
}

/* INR FORMAT */
function formatINR(amount) {
    return "₹" + Math.round(amount).toLocaleString("en-IN");
}

/* INITIAL CALCULATION */
calculateEMI();
