// Initialize EmailJS
emailjs.init({
    publicKey: "E6s9Q-IIhuM5Fy1yc",
});

// Copy Email Button
const copyButton = document.getElementById("copyEmail");

if (copyButton) {
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText("lhssanolamide@gmail.com");
        alert("Email copied successfully!");
    });
}

// Order Form
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        message: document.getElementById("description").value,
        title: "New Client Order"
    };

    emailjs.send(
        "service_2qqoeud",
        "template_cidm084",
        params
    )
    .then(() => {
        alert("✅ Order sent successfully!");

        orderForm.reset();
    })
    .catch((error) => {
        alert("❌ Failed to send order.");

        console.log(error);
    });
});// Back to Top Button

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});// =========================
// Scroll Animation
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
