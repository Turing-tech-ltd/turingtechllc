document.addEventListener('DOMContentLoaded', () => {
    // Function to populate a dropdown
    const populateDropdown = async (route, dropdownId, tableTitle) => {
        await fetch(route)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const dropdown = document.getElementById(dropdownId);
                data.forEach((item) => {
                    const option = document.createElement('option');
                    option.value = item.id;
                    option.textContent = item[tableTitle]; 
                    dropdown.appendChild(option);
                });
            })
            .catch((err) => {
                console.error(`Error fetching data for ${dropdownId}:`, err);
            });
    };

    // Populate the dropdowns
    populateDropdown('/experience', 'exp_level', 'experience_level'); // For placement
    populateDropdown('/skills', 'skills_req', 'skills_required'); // For skills required
    populateDropdown('/duration', 'duration', 'duration'); // For duration
    populateDropdown('/qualification', 'qualification', 'qualification'); // For educational qualification
    populateDropdown('/country', 'country', 'country_name'); // For country
    populateDropdown('/program', 'program', 'programs'); // For program
    populateDropdown('/referral', 'referral', 'referral_source'); // For referral
    populateDropdown('/level', 'user-type', 'user_type'); // For referral
    populateDropdown('/language', 'language', 'language'); // For language
    populateDropdown('/proficiency', 'proficiency', 'proficiency_level'); // For language
    populateDropdown('/techskills', 'skills', 'skill'); // For language
});