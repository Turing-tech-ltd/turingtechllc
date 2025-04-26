const getStartedBtn = document.getElementById("get_started");
const closeFormBtn = document.getElementById("close_btn_form");
const formContainer = document.getElementById("form");
const innerHeroContainer = document.getElementById("hero-inner");
const companyBtn = document.getElementById("business");



document.addEventListener("DOMContentLoaded", () => {
    /* getStartedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.style.display = "flex";
    }); */

    getStartedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        innerHeroContainer.innerHTML = `
            <h2>Choose your path</h2>
            <div class="path_button">
                <button id="training">training</button>
                <button id="remote">remote work</button>
                <button id="company">company</button>
            </div>
        `

        // Event delegation for dynamically added buttons
        innerHeroContainer.addEventListener("click", (e) => {
            if (e.target.id === "company") {
                formContainer.style.display = "flex";
            }
        });
    });

    closeFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.style.display = "none";
    });

   
});