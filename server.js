
const express = require('express');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store)


const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
  secret: "",
  cookie: {
      maxAge: 8400,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
  },
  resave: false,
  saveUnititialized: true,
  store: new SequelizeStore({
      db: Sequelize,
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/index'));


app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });