const router = require('express').Router();
const { Product, User, Order } = require('../models');

//router.post('/', (req, res) => {

//});
// post items to basket

router.get('/', async (req, res) => {
  const productData = await Product.findAll({});
  // get products for homepage

  const products = productData.map((product) =>
    product.get({
      plain: true,
    })
  );

  res.render('homepage', {
    products,
  });

  console.log('you are in');
});
//router.get('/checkout', (req, res) => {});
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/order', async (req, res) => {
  try {
    const orderData = await Order.findAll();
    const products = orderData.map((mes) => mes.get({ plain: true }));
    res.render('order', { products });
  } catch (err) {
    res.status(500).send(err.mes);
  }
});
// const orderData = Order.findAll({
//   where: {
//     orderID: Order.id
//   }
// });

// // get products for homepage

// const orders = orderData.map((order) =>
//   order.get({
//     plain: true,
//   })
// );

//router.delete('/:id', (req, res) => {
// delete products from basket
//});

// res.render('homepage');
//});

module.exports = router;

