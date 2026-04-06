document.addEventListener('DOMContentLoaded', () => {

  // Login Form Logic
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const role = document.querySelector('input[name="role"]:checked').value;
      const email = document.getElementById('loginEmail').value;
      
      // Simulate API call and login check
      const btn = loginForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Authenticating...';
      btn.style.opacity = '0.7';

      setTimeout(() => {
        // Redirect based on selected role
        if (role === 'admin') {
          window.location.href = 'admin-dashboard.html';
        } else {
          window.location.href = 'employee-dashboard.html';
        }
      }, 1000);
    });
  }

  // Signup Form Logic
  const signupForm = document.getElementById('signupForm');
  const errorMsg = document.getElementById('signupError');
  
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorMsg.style.display = 'none';

      const pwd = document.getElementById('signupPassword').value;
      const confirmPwd = document.getElementById('signupConfirm').value;

      // Validation
      if (pwd !== confirmPwd) {
        errorMsg.innerText = "Passwords do not match.";
        errorMsg.style.display = 'block';
        return;
      }

      if (pwd.length < 6) {
        errorMsg.innerText = "Password must be at least 6 characters.";
        errorMsg.style.display = 'block';
        return;
      }

      // Simulate API call
      const btn = signupForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Creating Account...';
      btn.style.opacity = '0.7';

      setTimeout(() => {
        alert("Account created successfully! Redirecting to login...");
        window.location.href = 'login.html';
      }, 1500);
    });
  }

});
