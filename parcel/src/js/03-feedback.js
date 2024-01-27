
import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('[name="email"]');
const messageInput = feedbackForm.querySelector('[name="message"]');

feedbackForm.addEventListener('input', throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

window.addEventListener('load', () => {
  const savedForm = localStorage.getItem('feedback-form-state');
  if (savedForm) {
    const parsedForm = JSON.parse(savedForm);
    emailInput.value = parsedForm.email || '';
    messageInput.value = parsedForm.message || '';
  }
});


feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
});

