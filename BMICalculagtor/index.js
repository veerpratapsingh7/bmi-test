const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Veer please give me a valid Height ${height}`;
  } else if (isNaN(weight) || weight <= 0 || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Veer please give me a valid Weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
  }

});