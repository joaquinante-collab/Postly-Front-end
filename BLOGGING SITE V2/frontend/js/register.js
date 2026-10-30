document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email.endsWith('@gmail.com')) {
    alert('Please use a Gmail address');
    return;
  }

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });

  const data = await response.json();

  if (response.ok) {
    alert('User registered successfully!');
    window.location.href = 'login.html';
  } else {
    alert(`Error: ${data.message || 'Registration failed'}`);
  }
});