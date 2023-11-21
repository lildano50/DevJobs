const addJob = async (event) => {
    event.preventDefault();
 
 
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        // const job_name = document.querySelector(`#${id}`).value;
        // const company = document.querySelector('#company').value;
        // const jobUrl = document.querySelector('.url').value;

        
        
        const response = await fetch(`/api/jobs/${id}`, {
        method: 'GET'
        },
      );
      console.log(response);
  
      if (response.ok) {
        document.location.replace('/profile');
        alert('Job added to your profile!')
      } else {
        alert('Failed to add job');
      }
    }
  };

  document.querySelector('#add-job').addEventListener('click', addJob);