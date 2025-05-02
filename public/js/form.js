const getStartedBtn = document.getElementById("get_started");
const closeFormBtn = document.querySelectorAll(".close_btn_form");
const refreshBtn = document.querySelectorAll(".refresh-btn");
const companyFormContainer = document.getElementById("company-form");
const trainingFormContainer = document.getElementById("training-form");
const innerHeroContainer = document.getElementById("hero-inner");
const companyBtn = document.getElementById("business");
const remoteFormContainer = document.getElementById("remote-form");
const options = document.querySelector(".path");
const closeOptionBtn = document.getElementById("closeBtn");
const contentWrapper = document.querySelector(".top_wrapper");


document.addEventListener("DOMContentLoaded", () => {
    getStartedBtn.addEventListener("click", (e) => {
        e.preventDefault();
        options.style.display = "flex";
        innerHeroContainer.style.display = "none";

        // Use the 'change' event for radio buttons
        options.addEventListener("change", (e) => {
            if (e.target.name === "path") {
                // Hide all forms first
                companyFormContainer.style.display = "none";
                trainingFormContainer.style.display = "none";
                remoteFormContainer.style.display = "none";

                // Show the appropriate form based on the selected radio button
                if (e.target.id === "company") {
                    companyFormContainer.style.display = "flex";
                } else if (e.target.id === "training") {
                    trainingFormContainer.style.display = "flex";
                } else if (e.target.id === "placement") {
                    remoteFormContainer.style.display = "flex";
                }

                options.style.display = "none"; // Hide options when a form is displayed
                contentWrapper.classList.add("blurred"); // Add blur effect
            }
        });
    });

    closeOptionBtn.addEventListener("click", () => {
        if (options) {
            options.style.display = "none";
            innerHeroContainer.style.display = "flex";
        }
    });

    closeFormBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            companyFormContainer.style.display = "none";
            trainingFormContainer.style.display = "none";
            remoteFormContainer.style.display = "none";
            contentWrapper.classList.remove("blurred"); // Remove blur effect

            options.style.display = "flex"; // Show options when a form is closed
        });
    });

    refreshBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            companyFormContainer.reset();
            remoteFormContainer.reset();
            trainingFormContainer.reset();
        })
    })
});