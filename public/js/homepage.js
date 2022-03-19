const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', () => {
  document.location.assign('/login');
});


const cartBtn = document.getElementById('order');
cartBtn.addEventListener('click', () => {
  console.log('im clicked'),
  document.location.assign('/order');
});


//const addtoCart= document.getElementById('addtocart');