import supabaseClient from "./config.js";

const remoteForm = document.getElementById("remote-form");
const languageDropDown = document.getElementById("language");
const languageProficiencyDropDown = document.getElementById("proficiency");
const skillsDropDown = document.getElementById("skills");

document.addEventListener("DOMContentLoaded", async () => {
    // Fetch language
    const { data: languageData, error: languageError } = await supabaseClient
        .from('preferred_language')
        .select("*");

    if (languageError) {
        console.log(languageError);
    } else {
        languageData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.language;
            languageDropDown.appendChild(option);
        });
    }

    // Fetch language proficiency
    const { data: proficiencyData, error: proficiencyError } = await supabaseClient
        .from('proficiency_level')
        .select("*");

    if (proficiencyError) {
        console.log(proficiencyError);
    } else {
        proficiencyData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.proficiency_level;
            languageProficiencyDropDown.appendChild(option);
        });
    }

    // Fetch skills
    const { data: skillData, error: skillError } = await supabaseClient
        .from('job_skill')
        .select("*");

    if (skillError) {
        console.log(skillError);
    } else {
        skillData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.skill;
            skillsDropDown.appendChild(option);
        });
    }

    remoteForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            first_name: remoteForm.first_name.value,
            last_name: remoteForm.last_name.value,
            email: remoteForm.email.value,
            linkedin_profile: remoteForm.linkedin_profile.value,
            language_id: remoteForm.language_id.value,
            proficiency_id: remoteForm.proficiency_id.value,
            skills_id: remoteForm.skills_id.value,
          };
          console.log(formData);

        const { error } = await supabaseClient
        .from('remote_application_test')
        .insert(formData)

        if (!error){
            console.log("Form submitted successfully!");
            remoteForm.reset();
            window.location.assign("submit.html");
        } else {
            console.log(error);
        }
    })
});
