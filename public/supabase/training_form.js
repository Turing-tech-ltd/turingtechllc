import supabaseClient from "./config.js";
console.log(supabaseClient);

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

    trainingForm.addEventListener("submit", async () => {

        const formData = {
            name: trainingForm.name.value,
            email: trainingForm.email.value,
            course: trainingForm.course.value,
          };
          console.log(formData);

        const { error } = await supabase
        .from('countries')
        .insert({ id: 1, name: 'Mordor' })
    })
});
