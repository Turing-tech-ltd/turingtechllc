import supabaseClient from "./config.js";
console.log(supabaseClient);

const trainingForm = document.getElementById("training-form");
const qualificationDropDown = document.getElementById("qualification");
const countryDropDown = document.getElementById("country");

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
});
