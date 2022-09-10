const express = require("express");
const Product = require("../models/product");
const router = express.Router();

// const slugify = require("slugify");

router.post("/create", (req, res) => {
  //    const {} = req.body
  const { name, price, description,quantity, category } = req.body;

  const product = new Product({
    name: name,
    // slug: slugify(name),
    price,
    description,
    quantity,
    category,
  });

  product.save(((error, product)=>{
    if(error) return res.status(400).send({error});
    if(product){
       res.status(201).json({ product});
    }
 }))
});

module.exports = router;
