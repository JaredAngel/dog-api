function getDogImage() {
    const options = {method: 'GET'};
    fetch('https://dog.ceo/api/breeds/image/random', options)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
  function displayResults(responseJson) {
    console.log(responseJson);
    // replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    // display the results section
    $('.results').removeClass('hidden');
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });