const info = document.querySelector('.counter__result');
const form = document.querySelector('.counter__form');
const age = form.querySelector('#age');
const height = form.querySelector('#height');
const weight = form.querySelector('#weight');
const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMinimal = document.querySelector('#calories-minimal');
const caloriesMaximal = document.querySelector('#calories-maximal');

const gender = form.elements['gender'];
const activity = form.elements['activity'];

const calculate = () => {
  let weightNorm = 10 * parseInt(weight.value,10) + 6.25 * parseInt(height.value,10) - 5 * parseInt(age.value,10);
  if (gender.value === 'male') {
    weightNorm += 5;
  } else {
    weightNorm -= 161;
  }
  switch (activity.value) {
    case 'min':
      weightNorm *= 1.2;
      break;
    case 'low':
      weightNorm *= 1.375;
      break;
    case 'medium':
      weightNorm *= 1.55;
      break;
    case 'high':
      weightNorm *= 1.725;
      break;
    case 'max':
      weightNorm *= 1.9;
      break;
  }
  caloriesNorm.textContent=weightNorm.toFixed(3).toString();
  caloriesMaximal.textContent= (1.15*weightNorm).toFixed(3).toString();
  caloriesMinimal.textContent=(0.85*weightNorm).toFixed(3).toString();
};

export const showForm = () => {
  if (info.classList.contains('counter__result--hidden')) {
    info.classList.remove('counter__result--hidden');
  }
  calculate();
};

export const hideForm = () => {
  info.classList.add('counter__result--hidden');
};


