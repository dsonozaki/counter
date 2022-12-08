import {showForm,hideForm} from './infoBlock.js';
const form = document.querySelector('.counter__form');
const age = form.querySelector('#age');
const height = form.querySelector('#height');
const weight = form.querySelector('#weight');
const submit = form.querySelector('.form__submit-button');
const clear = form.querySelector('.form__reset-button');
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

const pristine = new Pristine(form);

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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  showForm();
});

form.addEventListener('reset',()=>{
  hide(clear);
  hide(submit);
  resetFlags();
  hideForm();
});
