document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Display entered data on the page
    const displayDataElement = document.getElementById('displayData');
    displayDataElement.innerHTML = `
        <h3>Entered Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
  
    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
