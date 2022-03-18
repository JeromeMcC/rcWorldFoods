const router = require('express').Router();
const userRoutes = require('./userRoutes');
//const basketRoute = require('./basketRoute');
const checkoutRoute = require('./checkoutRoute');

router.use('/users', userRoutes);
router.use('./checkout', checkoutRoute);

module.exports = router;