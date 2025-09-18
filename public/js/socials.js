const instagramButtons = document.querySelectorAll(".instagram");
const linkedinButtons = document.querySelectorAll(".linkedin");
// const tiktokButtons = document.querySelectorAll(".tiktok");
const facebookButtons = document.querySelectorAll(".facebook");

instagramButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://www.instagram.com/turingtechacademy/", "_blank");
    });
});

linkedinButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("http://linkedin.com/company/turing-tech-hub", "_blank");
    });
});

facebookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://web.facebook.com/profile.php?id=61565730746371", "_blank");
    });
});