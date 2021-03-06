const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//router.get('/login', async (req, res) => {

router.post('/user/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,


      },

    });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      console.log('incorrect email or password, please try again');
    } else {
      const isPasswordCorrect = userData.checkPassword(req.body.password);


      if (isPasswordCorrect === true) {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.save();

        res.status(200).json('i hope i can finish this');
      } else {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        console.log('incorrect email or password, please try again');
      }
    }
  } catch (err) {
    res.status(400).json('where am i');
    console.log(req.body);
    console.log(err.message);
    console.log(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    res.status(404).end();
  }
});

router.get('/login', (req,) => {
  console.log(req);
});

router.get('/login/info', (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    res.status(200).json({ login_status: true });
  } else {
    res.status(200).json({ login_status: false });
  }
});


module.exports = router;
