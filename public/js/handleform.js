const skillsDropDown = document.getElementById("skills_req");
const durationDropDown = document.getElementById("duration");
const skillTextArea = document.querySelector(".skill_req");
const durationTextArea = document.querySelector(".duration");
const durationContainer = document.getElementById("duration_container");
const experienceContainer = document.getElementById("experience_container");



document.addEventListener("DOMContentLoaded", () => {
    // Show duration container when a skill is selected
    skillsDropDown.addEventListener("change", (e) => {
        if (e.target.value) {
            durationContainer.style.display = "block"; // Show duration container
        } else {
            durationContainer.style.display = "none"; // Hide duration container
            experienceContainer.style.display = "none"; // Reset experience container
        }

        // Show or hide the skill text area based on specific value
        if (e.target.value === "18") {
            skillTextArea.style.display = "block";
        } else {
            skillTextArea.style.display = "none";
        }
    });

    // Show experience container when a duration is selected
    durationDropDown.addEventListener("change", (e) => {
        if (e.target.value) {
            experienceContainer.style.display = "block"; // Show experience container
        } else {
            experienceContainer.style.display = "none"; // Hide experience container
        }

        // Show or hide the duration text area based on specific value
        if (e.target.value === "4") {
            durationTextArea.style.display = "block";
        } else {
            durationTextArea.style.display = "none";
        }
    });
});