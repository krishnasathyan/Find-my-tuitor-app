document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Signup successful! Now you can login.');
  window.location.href = 'index.html';
});