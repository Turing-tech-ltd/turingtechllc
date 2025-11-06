const instagramButtons = document.querySelectorAll(".instagram");
const linkedinButtons = document.querySelectorAll(".linkedin");
const tiktokButtons = document.querySelectorAll(".tiktok");
const facebookButtons = document.querySelectorAll(".facebook");
const twitterButtons = document.querySelectorAll(".twitter");

instagramButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://www.instagram.com/turingtechacademy/", "_blank");
    });
});

linkedinButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://www.linkedin.com/company/turingtechllc", "_blank");
    });
});

facebookButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://web.facebook.com/turingtechacademy/", "_blank");
    });
});

tiktokButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://www.tiktok.com/@turingtechllc", "_blank");
    });
});

twitterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        window.open("https://x.com/turingtechllc", "_blank");
    });
});