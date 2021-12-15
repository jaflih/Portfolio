let formData = {
  fullname: '',
  email: '',
  message: '',
};

const form = document.querySelector('form');

if (localStorage.getItem('formData') != null) {
  formData = JSON.parse(localStorage.getItem('formData'));
  form['name'].value = formData.fullname;
  form['email'].value = formData.email;
  form['message'].value = formData.message;
}
console.log(localStorage.getItem('formData'));

form.addEventListener('submit', (event) => {
  formData.fullname = form['name'].value;
  formData.email = form['email'].value;
  formData.message = form['message'].value;
  localStorage.setItem('formData', JSON.stringify(formData));
  event.preventDefault;
});
