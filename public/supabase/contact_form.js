import supabaseClient from "./config.js";

const contactForm = document.getElementById("contact-form");

document.addEventListener("DOMContentLoaded", async () => {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            first_name: contactForm.first_name.value,
            last_name: contactForm.last_name.value,
            email: contactForm.email.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value,
          };

        const { error } = await supabaseClient
        .from('contact_form')
        .insert(formData)

        if (!error){
            console.log("Form submitted successfully!");
            contactForm.reset();
            window.location.assign("thank-you.html");
        } else {
            console.log(error);
        }
    })
});
