document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login');
    const signUpBtn = document.getElementById('signUp');
    const loginContainer = document.getElementById('login-container');
    const signUpContainer = document.getElementById('signup-container');
    const userPreferencesForm = document.getElementById('userPrefernces');
    const resultsDiv = document.getElementById('results');
  
    // Show login form
    loginBtn.addEventListener('click', function() {
      loginContainer.style.display = 'block';
      signUpContainer.style.display = 'none';
      userPreferencesForm.style.display = 'none';
      resultsDiv.style.display = 'none';
    });
  
    // Show signup form
    signUpBtn.addEventListener('click', function() {
      signUpContainer.style.display = 'block';
      loginContainer.style.display = 'none';
      userPreferencesForm.style.display = 'none';
      resultsDiv.style.display = 'none';
    });
  
    // Submit user preferences form
    userPreferencesForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const location = document.getElementById('location').value;
      const workType = document.getElementById('work_type').value;
      const salaryRange = document.getElementById('salary_range').value;
      const workRemotely = document.getElementById('work_remotely').checked;
  
      // Here you can process the form data (e.g., send it to a server, perform a search, etc.)
      // For demonstration purposes, let's just display the preferences in the results div
      resultsDiv.innerHTML = `
        <h2>User Preferences:</h2>
        <p>Location: ${location}</p>
        <p>Work Type: ${workType}</p>
        <p>Salary Range: ${salaryRange}</p>
        <p>Work Remotely: ${workRemotely ? 'Yes' : 'No'}</p>
      `;
  
      // Show the results div
      resultsDiv.style.display = 'block';
      loginContainer.style.display = 'none';
      signUpContainer.style.display = 'none';
    });
  });