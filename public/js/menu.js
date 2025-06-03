const toggler = document.getElementById("toggler");
const dropdown = document.getElementById("dropdown");
const header = document.querySelector("header");

function updateHeaderStyles() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const isPastDeviceHeight = scrollPosition > window.innerHeight;
    const isDropdownActive = dropdown.classList.contains("active");

    if (isPastDeviceHeight) {
        header.style.backgroundColor = "rgb(26, 26, 26)";
        header.style.borderBottom = "1px solid rgba(246, 246, 246, 0.1)";
    } else {
        header.style.backgroundColor = isDropdownActive ? "rgb(26, 26, 26)" : "";
        header.style.borderBottom = "";
    }
}

toggler.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
    updateHeaderStyles(); // Ensure background updates immediately
});

document.addEventListener("click", () => {
    if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        updateHeaderStyles(); // Update again based on current scroll position
    }
});

window.addEventListener("scroll", updateHeaderStyles);



// Footer
const year = new Date().getFullYear();
const yearElement = document.getElementById("year");
yearElement.textContent = year;