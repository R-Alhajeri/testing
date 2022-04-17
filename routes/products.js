const express = require('express');
const router = express.Router();
const Product = require('/web_dev/Mongoose_Express/models/productModel');

const categories = ["dairy", "vegetable", "fruit" , "meat"];





router.route('/')
  
  .get(async (req, res) => { 
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('index', {products , category});
  } else { 
    const products = await Product.find({});
    res.render('index', {products , category:"All"});
  }
  })
  
  .post(async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect('/');
});



router.get('/new', (req, res) => { 
  res.render('new', {categories});

});



router.route('/:id')
  .get( async (req, res) => { 
  const { id } = req.params;
  const product = await Product.findById(id);
  
  res.render('show', {product});
  })
  .put(async (req, res) => {
  const { id } = req.params;
  const product = await  Product.findByIdAndUpdate(id, req.body, {runValidators: true , new: true});
  console.log(req.body);
   res.redirect(`/${product._id}`);
  })
  .delete(async (req, res) => { 
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/');
});



router.get('/:id/edit', async (req, res) => { 
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render(`edit`, {product , categories});
});




module.exports = router;
