document.addEventListener('DOMContentLoaded', () => {
    const calorieForm = document.getElementById('calorie-form');
    const logList = document.getElementById('log-list');
    
    // Load existing calorie log from localStorage
    const existingLog = JSON.parse(localStorage.getItem('calorieLog')) || [];
    existingLog.forEach(logEntry => {
        addLogEntry(logEntry.foodItem, logEntry.calories);
    });

    if (calorieForm) {
        calorieForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const foodItem = document.getElementById('food-item').value.trim();
            const calories = parseInt(document.getElementById('calories').value.trim(), 10);
            
            // Input validation
            if (foodItem === '' || isNaN(calories) || calories <= 0) {
                alert('Please enter a valid food item and calorie amount.');
                return;
            }

            // Add to the log
            addLogEntry(foodItem, calories);
            calorieForm.reset(); // Reset the form fields
        });
    }

    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            // Basic validation
            if (username === '' || password === '') {
                alert('Please fill in both fields.');
                return;
            }

            // Simulate successful sign-in (replace with actual authentication logic)
            alert('Sign In successful!');
            // You can redirect to another page or perform additional actions here
        });
    }

    function addLogEntry(foodItem, calories) {
        const listItem = document.createElement('li');
        listItem.textContent = `${foodItem}: ${calories} calories`;
        logList.appendChild(listItem);
        
        // Save to localStorage
        existingLog.push({ foodItem, calories });
        localStorage.setItem('calorieLog', JSON.stringify(existingLog));
    }
});
