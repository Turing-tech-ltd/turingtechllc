// Frequently asked Qs

const accordian = document.querySelectorAll(".accordian");

accordian.forEach(accordian => {
    accordian.addEventListener("click", event => {
        accordian.classList.toggle("active");
    });
});