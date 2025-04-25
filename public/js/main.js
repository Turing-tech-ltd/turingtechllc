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
                    option.value = item.id; // Use `id` as the value
                    option.textContent = item[tableTitle]; // Use the specified property for display text
                    dropdown.appendChild(option);
                });
            })
            .catch((err) => {
                console.error(`Error fetching data for ${dropdownId}:`, err);
            });
    };

    // Populate the dropdowns
    populateDropdown('/experience', 'exp_level', 'experience_level'); // For placement
});