function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = '';
  
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `${user.name} - ${user.email}`;
          resultsList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  const fetchButton = document.getElementById('fetch-button');
  fetchButton.addEventListener('click', fetchData);