const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
  document.location.assign('/login');
});

const cartBtn = document.getElementById('order');
cartBtn.addEventListener('click', () => {
  console.log('im clicked'), document.location.assign('/order');
});

const cartbuttons = document.querySelectorAll('.addtocart');
console.log(cartbuttons);
cartbuttons.forEach((button) => {
  button.addEventListener('click', async () => {
    const isUserLogged= await fetch('/api/login/info', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    window.IsUserLoggedResponse = isUserLogged;
  });
});
