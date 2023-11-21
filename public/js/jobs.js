const jobFormHandler = async (event) => {
    event.preventDefault();
    
      const city_category = document.querySelector('#city_category').value;
      const state_category = document.querySelector('#state_category').value;
      const job_type = document.querySelector('#job_type').value;
      const annual_salary_from = document.querySelector('#salary_range_from').value;
      const annual_salary_to = document.querySelector('#salary_range_to').value;
      // const isFullRemote = document.querySelector('#work_remotely').value;

    
      if (city_category && state_category && job_type && annual_salary_from && annual_salary_to) {
  
          document.location.replace(`/api/jobs?city_category=${city_category}&state_category=${state_category}&job_type=${job_type}&annual_salary_from=${annual_salary_from}&annual_salary_to=${annual_salary_to}`);
 
      }
  };
    
    
  document.querySelector('#job_form').addEventListener('submit', jobFormHandler);