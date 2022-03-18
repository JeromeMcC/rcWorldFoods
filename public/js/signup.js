const signupFormHandler = async (event) => {
  event.preventDefault();

  // const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const lastName = document.querySelector('#last-singup').value.trim();
  const firstName = document.querySelector('#first-singup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const street = document.querySelector('#street-singup').value.trim();
  const city = document.querySelector('#city-singup').value.trim();
  const state = document.querySelector('#state-singup').value.trim();
  const zip = document.querySelector('#zip-singup').value.trim();
  const country = document.querySelector('#country-singup').value.trim();

  if (
    email &&
    password &&
    lastName &&
    firstName &&
    street &&
    city &&
    state &&
    zip &&
    country
  ) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        lastName,
        firstName,
        street,
        city,
        state,
        zip,
        country,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', signupFormHandler);
