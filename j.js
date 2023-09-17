const form = document.querySelector('form');
//this space will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(evnt){
  evnt.preventDefault()

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')

 if(height === '' || height < 0 || isNaN(height)){
   results.innerHTML = `Please give a valid height ${height}`;
 } else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`;
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //show the result
  // results.innerHTML = `<span>${bmi}</span>`;

  if(bmi < 18.6){
    results.innerHTML = `${bmi} <br/> Under Weight`;
  }
  else if(bmi <= 18.6 || bmi <= 24.9){
    results.innerHTML = `${bmi} <br/> Normal Range`;
  }
  else if(bmi > 24.9){
    results.innerHTML = `${bmi} <br/> Overweight`;
  }
}
})