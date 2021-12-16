window.onload = () => {
  let formData = {
    name: '',
    email: '',
    message: '',
  };

  if (localStorage.getItem('formData') != null) {
    const form = document.querySelector('form');
    formData = JSON.parse(localStorage.getItem('formData'));
    form.name.value = formData.name;
    form.email.value = formData.email;
    form.message.value = formData.message;
  }

  document.querySelectorAll('input, textarea').forEach((element) => element.addEventListener('input', function save() {
    formData[this.id] = this.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  }));
};
