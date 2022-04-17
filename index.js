const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const methodOverride = require('method-override');

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((succ) => {
    console.log("Mongo Connected");
  })
  .catch((err) => {
    console.log("ohh nooooooo mongo  error !!!!");
    console.log(err);
  });


  app.set('views', path.join(__dirname, 'views'));

const productsRouter = require('./routes/products');

app.use('/products',productsRouter);


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));


app.listen(3000, () => { 
    console.log("Listening at port 3000!");
})

