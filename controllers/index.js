const router = require('express').Router();

const groceries = [{
  "id": 1,
  "product": "Shiratamako - Rice Flour",
  "price": "$1.15",
  "product_image": "http://dummyimage.com/174x100.png/cc0000/ffffff"
}, {
  "id": 2,
  "product": "Onions - Red",
  "price": "$6.70",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 3,
  "product": "Brandy - Orange, Mc Guiness",
  "price": "$9.32",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 4,
  "product": "Table Cloth 62x120 Colour",
  "price": "$9.03",
  "product_image": "http://dummyimage.com/174x100.png/ff4444/ffffff"
}, {
  "id": 5,
  "product": "Blouse / Shirt / Sweater",
  "price": "$8.76",
  "product_image": "http://dummyimage.com/174x100.png/cc0000/ffffff"
}, {
  "id": 6,
  "product": "Bread - Hot Dog Buns",
  "price": "$1.18",
  "product_image": "http://dummyimage.com/174x100.png/ff4444/ffffff"
}, {
  "id": 7,
  "product": "Eggplant - Asian",
  "price": "$1.34",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 8,
  "product": "Lettuce - California Mix",
  "price": "$5.95",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 9,
  "product": "Wonton Wrappers",
  "price": "$1.50",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 10,
  "product": "Pop - Club Soda Can",
  "price": "$4.01",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 2,
  "product": "Onions - Red",
  "price": "$6.70",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 3,
  "product": "Brandy - Orange, Mc Guiness",
  "price": "$9.32",
  "product_image": "http://dummyimage.com/174x100.png/dddddd/000000"
}, {
  "id": 4,
  "product": "Table Cloth 62x120 Colour",
  "price": "$9.03",
  "product_image": "http://dummyimage.com/198x100.png/ff4444/ffffff"
}, {
  "id": 5,
  "product": "Blouse / Shirt / Sweater",
  "price": "$8.76",
  "product_image": "http://dummyimage.com/138x100.png/cc0000/ffffff"
}]

// const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
  
    res.render('homepage', {groceries});
  });


module.exports = router;