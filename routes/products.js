const express = require('express');
const router = express.Router();
const Product = require('/web_dev/testing/models/productModel');

const categories = ["dairy", "vegetable", "fruit" , "meat"];





router.get('/', async (req, res) => { 
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('index', {products , category});
  } else { 
    const products = await Product.find({});
    res.render('index', {products , category:"All"});
  }
 
  
});

router.get('/new', (req, res) => { 
  res.render('new', {categories});

});


router.post('/', async (req , res )=> {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect('/');
});
router.get('/:id', async (req,res) => { 
  const { id } = req.params;
  const product = await Product.findById(id);
  
  res.render('show', {product});
});

router.get('/:id/edit', async (req, res) => { 
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render(`edit`, {product , categories});
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await  Product.findByIdAndUpdate(id, req.body, {runValidators: true , new: true});
  console.log(req.body);
   res.redirect(`/${product._id}`);
});

router.delete('/:id', async (req, res) => { 
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/');
});

module.exports = router;
