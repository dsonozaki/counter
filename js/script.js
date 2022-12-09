import {showForm,hideForm} from './infoBlock.js';
const script = document.querySelector('.counter__form');
const age = script.querySelector('#age');
const height = script.querySelector('#height');
const weight = script.querySelector('#weight');
const submit = script.querySelector('.form__submit-button');
const clear = script.querySelector('.form__reset-button');
let ageCorrect = false;
let heightCorrect = false;
let weightCorrect = false;

const show = (button) => {
  button.disabled=false;
};

const hide = (button) => {
  button.disabled=true;
};

const resetFlags = () => {
  ageCorrect = false;
  heightCorrect = false;
  weightCorrect = false;
};

const validate = () => {
  if (ageCorrect || heightCorrect || weightCorrect) {
    show(clear);
  } else {
    hide(clear);
    hide(submit);
    return;
  }
  if (ageCorrect && heightCorrect && weightCorrect) {
    show(submit);
  } else {
    hide(submit);
  }
};

const pristine = new Pristine(script);

const checkAge = () => {
  ageCorrect = pristine.validate(age);
  validate();
};

const checkHeight = () => {
  heightCorrect = pristine.validate(height);
  validate();
};

const checkWeight = () => {
  weightCorrect =  pristine.validate(weight);
  validate();
};


age.addEventListener('input', ()=> {
  checkAge();
}
);

height.addEventListener('input', ()=>
  checkHeight()
);

weight.addEventListener('input', ()=>
  checkWeight()
);

script.addEventListener('submit', (evt) => {
  evt.preventDefault();
  showForm();
});

script.addEventListener('reset',()=>{
  hide(clear);
  hide(submit);
  resetFlags();
  hideForm();
});
