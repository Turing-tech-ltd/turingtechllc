const skillsDropDown = document.getElementById("skills_req");
const durationDropDown = document.getElementById("duration");
const skillTextArea = document.querySelector(".skill_req");
const durationTextArea = document.querySelector(".duration");

document.addEventListener("DOMContentLoaded", () => {
    skillsDropDown.addEventListener("change", (e) => {
        if (e.target.value === "18"){
            skillTextArea.style.display = "block";
        } else {
            skillTextArea.style.display = "none";
        }
    })

    durationDropDown.addEventListener("change", (e) => {
        if (e.target.value === "4"){
            durationTextArea.style.display = "block";
        } else {
            durationTextArea.style.display = "none";
        }
    })
});