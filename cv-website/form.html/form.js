document.getElementById('cvForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    skills: this.skills.value,
    experience: this.experience.value,
    education: this.education.value,
  };

  localStorage.setItem('cvData', JSON.stringify(data));
  window.location.href = "templates/template1-custom.html"; // bạn có thể chọn template khác ở đây
});