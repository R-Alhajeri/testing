const mongoose = require("mongoose");
const Product = require('./models/product');

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
  
// const p = new Product({
//     name: 'bannana',
//     price: 1.99,
//     category:"fruit"
// });

// p.save()
//     .then((p) => {
//         console.log(p);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const seedProducts = [
    {
    name: 'bannana',
    price: 1.99,
    category:"fruit"
},
    {
    name: 'apple',
    price: 2.99,
    category:"fruit"
    },
    {
    name: 'lettes',
    price: 1.00,
    category:"vegetable"
    },
    {
    name: 'milk',
    price: 3.99,
    category:"dairy"
}
];

// Product.insertMany(seedProducts);