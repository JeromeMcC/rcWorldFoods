const router = require('express').Router();
const userRoutes = require('./userRoutes');
const basketRoute = require('./basketRoute');

router.use('/users', userRoutes);

module.exports = router;