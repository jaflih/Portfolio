let formData = {
  fullName: '',
  email: '',
  message: '',
};

const form = document.querySelector('form');

if (localStorage.getItem('formData') != null) {
  formData = JSON.parse(localStorage.getItem('formData'));
  form.name.value = formData.fullName;
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('submit', () => {
  formData.fullName = form.name.value;
  formData.email = form.email.value;
  formData.message = form.message.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
