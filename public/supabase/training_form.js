import supabaseClient from "./config.js";

const trainingForm = document.getElementById("training-form");
const qualificationDropDown = document.getElementById("qualification");
const countryDropDown = document.getElementById("country");
const programDropDown = document.getElementById("program");
const referralDropDown = document.getElementById("referral");
const userTypeDropDown = document.getElementById("user-type");

document.addEventListener("DOMContentLoaded", async () => {
    // Fetch qualifications
    const { data: qualificationData, error: qualificationError } = await supabaseClient
        .from('qualification')
        .select("*");

    if (qualificationError) {
        console.log(qualificationError);
    } else {
        qualificationData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.qualification;
            qualificationDropDown.appendChild(option);
        });
    }

    // Fetch countries
    const { data: countryData, error: countryError } = await supabaseClient
        .from('country')
        .select("*");

    if (countryError) {
        console.log(countryError);
    } else {
        countryData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.country_name;
            countryDropDown.appendChild(option);
        });
    }

    // Fetch programs
    const { data: programData, error: programError } = await supabaseClient
        .from('program')
        .select("*");

    if (programError) {
        console.log(programError);
    } else {
        programData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.programs;
            programDropDown.appendChild(option);
        });
    }

    // Fetch referrals
    const { data: referralData, error: referralError } = await supabaseClient
        .from('referral_source')
        .select("*");

    if (referralError) {
        console.log(referralError);
    } else {
        referralData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.referral_source;
            referralDropDown.appendChild(option);
        });
    }

    // Fetch user-type
    const { data: userTypeData, error: userTypeError } = await supabaseClient
        .from('user_type')
        .select("*");

    if (userTypeError) {
        console.log(userTypeError);
    } else {
        userTypeData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.user_type;
            userTypeDropDown.appendChild(option);
        });
    }

    // Post training form data
    trainingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            first_name: trainingForm.first_name.value,
            last_name: trainingForm.last_name.value,
            email: trainingForm.email.value,
            phone_number: trainingForm.phone_number.value,
            qualification_id: trainingForm.qualification_id.value,
            country_id: trainingForm.country_id.value,
            program_id: trainingForm.program_id.value,
            referral_source_id: trainingForm.referral_source_id.value,
            user_type_id: trainingForm.user_type_id.value,
            comments: trainingForm.comments.value,
          };

        const { error } = await supabaseClient
        .from('training_application')
        .insert(formData)

        if (!error){
            console.log("Form submitted successfully!");
            trainingForm.reset();
            window.location.assign("submit.html");
        } else {
            console.log(error);
        }
    })
});
