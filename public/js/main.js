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
});