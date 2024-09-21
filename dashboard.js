// Sample data for demonstration
const userData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Student', registrationDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Student', registrationDate: '2024-02-20' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin', registrationDate: '2024-03-05' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Instructor', registrationDate: '2024-04-12' },

];

// Function to populate the table with data
function populateTable() {
    const tableBody = document.getElementById('userTableBody');

    userData.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
           <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.registrationDate}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Call the function to populate the table on page load
document.addEventListener('DOMContentLoaded', populateTable);
