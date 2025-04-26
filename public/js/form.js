const getStartedBtn = document.getElementById("get_started");
const closeFormBtn = document.querySelectorAll(".close_btn_form");
const companyFormContainer = document.getElementById("company-form");
const trainingFormContainer = document.getElementById("training-form");
const innerHeroContainer = document.getElementById("hero-inner");
const companyBtn = document.getElementById("business");
const remoteFormContainer = document.getElementById("remote-form");


document.addEventListener("DOMContentLoaded", () => {
    /* getStartedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.style.display = "flex";
    }); */

    getStartedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        /* innerHeroContainer.innerHTML = `
            <h2>Choose your path</h2>
            <div class="path_button">
                <button id="training">training</button>
                <button id="remote">remote work</button>
                <button id="company">company</button>
            </div>
        ` */

        innerHeroContainer.innerHTML = `
            <div class="path_button">
                <div>
                    <input type="radio" name="path" id="training" value="training">
                    <label for="training">Are you applying to be trained</label>
                </div>
                <div>
                    <input type="radio" name="path" id="placement" value="placement">
                    <label for="placement">Are you looking for remote work?</label>
                </div>
                <div>
                    <input type="radio" name="path" id="company" value="company">
                    <label for="companies">Companies</label>
                </div>
            </div>
        `

    // Use the 'change' event for radio buttons
    innerHeroContainer.addEventListener("change", (e) => {
        if (e.target.name === "path") {
            // Hide all forms first
            companyFormContainer.style.display = "none";
            trainingFormContainer.style.display = "none";

            // Show the appropriate form based on the selected radio button
            if (e.target.id === "company") {
                companyFormContainer.style.display = "flex";
            } else if (e.target.id === "training") {
                trainingFormContainer.style.display = "flex";
            } else if (e.target.id === "placement") {
                remoteFormContainer.style.display = "flex";
            }
        }
    });
});

    closeFormBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            companyFormContainer.style.display = "none";
            trainingFormContainer.style.display = "none";
            remoteFormContainer.style.display = "none";
        })
    })

   
});