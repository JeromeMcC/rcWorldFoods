const router = require('express').Router();
const { Product, User } = require('../models');

router.post('/', (req, res) => {});
// post items to basket

router.get('/', async (req, res) => {
  const productData = await Product.findAll({});
  // get products for homepage

const products = productData.map((product) => product.get({ plain: true }));

res.render('homepage', { products });

console.log('you in');
});
//router.get('/checkout', (req, res) => {});

//router.get('/', (req, res) => {});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//router.get('/basket', (req,res) => {});


//router.delete('/:id', (req, res) => {
// delete products from basket
//});

module.exports = router;

// delete product from baskets
// basket route
// grocery list
// logins
// post items to basket

// retrieve data for homepage
// some post method
