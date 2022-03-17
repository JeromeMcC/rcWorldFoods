
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const Sequelize = require("sequelize"); 
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');

const sequelize = new Sequelize(process.env.DB_name, process.env.DB_user, process.env.DB_password, {
  dialect: "mysql",
  storage: "./session.mysql",
});

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
  secret: "S",
  cookie: {
      maxAge: 86400,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
  },
  resave: false,
  saveUnititialized: true,
  store: new SequelizeStore({
      db: sequelize,
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/index'));

app.use(routes);

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});