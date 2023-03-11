import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[name="email"]');
const textareaRef = document.querySelector('textarea[name="message"]');

const savedMessage = localStorage.getItem(STORAGE_KEY);
const savedFormMessage = JSON.parse(savedMessage);
const formData = savedMessage ? JSON.parse(savedMessage) : {};

formRef.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

const handleGetValue = () => {
  if (savedMessage) {
    emailRef.value = savedFormMessage.email || '';
    textareaRef.value = savedFormMessage.message || '';
  }
};

formRef.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);
});

handleGetValue();
