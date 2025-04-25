const getStartedBtn = document.getElementById("get_started");
const closeFormBtn = document.getElementById("close_btn_form");
const formContainer = document.getElementById("form");

getStartedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.style.display = "flex";
});

closeFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.style.display = "none";
})