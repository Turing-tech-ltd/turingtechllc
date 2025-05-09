const toggler = document.getElementById("toggler");
const dropdown = document.getElementById("dropdown");
const header = document.querySelector("header");

toggler.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');

    if (dropdown.classList.contains("active")){
        header.style.backgroundColor = "rgb(26, 26, 26)";
    } else {
        header.style.backgroundColor = "";
    }
});

document.addEventListener("click", () => {
    if (dropdown){
        dropdown.classList.remove("active");
        header.style.backgroundColor = "";
    }
});

// Footer
const year = new Date().getFullYear();
const yearElement = document.getElementById("year");
yearElement.textContent = year;