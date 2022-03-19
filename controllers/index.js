const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const homeRoutes = require('./homeRoutes');
//const checkoutRoute = require('./api/checkoutRoute');
const orderRoute = require('./api/orderRoute');

router.use('/', homeRoutes);
router.use('/api', userRoutes);
//router.use('/api', checkoutRoute);
router.use('/api/orderroute', orderRoute);

router.get('/', async (req, res) => {

  res.render('homepage',);
});



module.exports = router;