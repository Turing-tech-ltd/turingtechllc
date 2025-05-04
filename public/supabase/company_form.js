import supabaseClient from "./config.js";

const companyForm = document.getElementById("company-form");
const skillsReqDropDown = document.getElementById("skills_req");
const durationDropDown = document.getElementById("duration");
const experienceLevelDropDown = document.getElementById("exp_level");
const workModeDropDown = document.getElementById("work_mode");
const yearsOfExpDropDown = document.getElementById("years_of_exp");

document.addEventListener("DOMContentLoaded", async () => {
    // Fetch skills Required
    const { data: skillsData, error: skillsError } = await supabaseClient
        .from('skills')
        .select("*");

    if (skillsError) {
        console.log(skillsError);
    } else {
        skillsData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.skills_required;
            skillsReqDropDown.appendChild(option);
        });
    }

    // Fetch years of experience
    const { data: expData, error: expError } = await supabaseClient
        .from('years_of_exp')
        .select("*");

    if (expError) {
        console.log(expError);
    } else {
        expData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.years_of_exp;
            yearsOfExpDropDown.appendChild(option);
        });
    }

    // Fetch duration
    const { data: durationData, error: durationError } = await supabaseClient
        .from('duration')
        .select("*");

    if (durationError) {
        console.log(durationError);
    } else {
        durationData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.duration;
            durationDropDown.appendChild(option);
        });
    }

    // Fetch experience
    const { data: experienceData, error: experienceError } = await supabaseClient
        .from('experience_level')
        .select("*");

    if (experienceError) {
        console.log(experienceError);
    } else {
        experienceData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.experience_level;
            experienceLevelDropDown.appendChild(option);
        });
    }

    // Fetch work mode
    const { data: workModeData, error: workModeError } = await supabaseClient
        .from('work_mode')
        .select("*");

    if (workModeError) {
        console.log(workModeError);
    } else {
        workModeData.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.work_mode;
            workModeDropDown.appendChild(option);
        });
    }

    // Post work_mode form data
    companyForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            first_name: companyForm.first_name.value,
            last_name: companyForm.last_name.value,
            email: companyForm.email.value,
            company_name: companyForm.company_name.value,
            job_title: companyForm.job_title.value,
            no_of_skills: companyForm.no_of_skills.value,
            years_of_exp_id: companyForm.years_of_exp_id.value,
            skills_required_id: companyForm.skills_required_id.value,
            other_skills: companyForm.other_skills.value,
            duration_id: companyForm.duration_id.value,
            other_duration: companyForm.other_duration.value,
            experience_level_id: companyForm.experience_level_id.value,
            work_mode_id: companyForm.work_mode_id.value,
            other_work_mode: companyForm.other_work_mode.value,
            comment: companyForm.comment.value,
          };

        const { error } = await supabaseClient
        .from('company_application_test')
        .insert(formData)

        if (!error){
            console.log("Form submitted successfully!");
            companyForm.reset();
            window.location.assign("submit.html");
        } else {
            console.log(error);
        }
    })
});
