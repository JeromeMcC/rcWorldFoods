const router = require('express').router();
const { User, Order } = require('../../');
const withAuth = require('../../utils/auth');

// retrieve items from certain databse by id
// user.findOne or user.findAll
router.post('/:id', withAuth, (req, res) => {
    try {
        Order.findAll({
        })
        res.status(200).json(newOrder);
    } catch (err) {
        res.status(400).json(err);
    }

    // Product.findAll({
    //     where: order
});

router.post('/:id', withAuth, (req, res) => {
    try {
        User.findOne({
            include: order
        })
        res.status(200).json(newOrder);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    // delete products from basket
    try {
        const productData = await Order.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!productData) {
            res.status(404).json({ message: 'No product found with that id.' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
