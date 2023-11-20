const jobFormHandler = async (event) => {
    event.preventDefault();
    
      const city_category = document.querySelector('#city_category').value;
      const state_category = document.querySelector('#state_category').value;
      const job_type = document.querySelector('#job_type').value;
      const annual_salary_from = document.querySelector('#salary_range_from').value;
      const annual_salary_to = document.querySelector('#salary_range_to').value;
      // const isFullRemote = document.querySelector('#work_remotely').value;

    
      if (city_category && state_category && job_type && annual_salary_from && annual_salary_to) {
  
        const response = await fetch('/api/jobs', {
          method: 'POST',
          body: JSON.stringify({ city_category, state_category, job_type, annual_salary_from, annual_salary_to }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/api/jobs');
        } else {
          alert(response.statusText);
        }
      }
  };
    
    
  document.querySelector('#job_form').addEventListener('submit', jobFormHandler);