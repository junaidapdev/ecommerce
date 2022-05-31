const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");


exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if (err) {
            return res.status(400).json({
              error: "Product not found in DB"
            });
          }
        req.product = product;
        next(); 
    })
}

exports.createProduct = (req, res) => {
    const form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, (err, fiels, file) => {
        if (err) {
            return res.status(400).json({
              error: "Problem with image"
            });
          }

        // TODO

        let product = new Product(fields)

        //handle file here

        if(file.photo){
            if(file.photo.size > 3000000) {
                return res.status(400).json({
                    error: "file too big"
                  });
            }
            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type
            
        }


        // save to the DB

        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                  error: "Error saving tshirt in DB"
                });
              }
            res.json(product)
        })
    })
}