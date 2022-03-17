const router = require('express').Router();

router.post('/', (req, res) => {});
    // post items to basket

router.get('/', (req, res) => {
    // get products for homepage
    console.log('here....')
});

router.get('/', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

router.delete('/:id', (req, res) => {
    // delete products from basket
});

module.exports = router;

// delete product from baskets
// basket route
// grocery list
// logins
// post items to basket 