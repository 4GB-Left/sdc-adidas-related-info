const mongoose = require('mongoose');

// shirt schema and model
const shirtsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  picture: String,
  sizes: {type: String, enum: ['x-small', 'small', 'medium', 'large', 'x-large']},
  stock: Number
};
const shirtsModel = mongoose.model('Shirts', shirtsSchema);

// pants schema and model
const pantsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  picture: String,
  sizes: {type: String, enum: ['x-small', 'small', 'medium', 'large', 'x-large']},
  stock: Number
};
const pantsModel = mongoose.model('Pants', pantsSchema);

// socks schema and model
const socksSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  picture: String,
  sizes: {type: String, enum: ['x-small', 'small', 'medium', 'large', 'x-large']},
  stock: Number
};
const socksModel = mongoose.model('Socks', socksSchema);

// related product schema and model
// NOTE: 12 PER LOOKS
const relatedProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  salePrice: Number,
  picture: String,
  description: String,
  category: String,
  likes: Boolean
};
const relatedProductModel = mongoose.model('relatedProduct', relatedProductSchema);

// completTheLook schema and model
// ~3.3 shirts, pants and socks
const completeTheLook = new mongoose.Schema({
    id: Number,
    shirts: {type: Schema.ObjectId, ref: 'shirtsModel'},
    pants: {type: Schema.ObjectId, ref: 'pantsModel'},
    socks: {type: Schema.ObjectId, ref: 'pantsModel'},
    relatedProduct: [{type: Schema.ObjectId, ref: 'relatedProductModel'}]
});
const CompleteTheLook = mongoose.model('CompleteTheLook', completeTheLook);

module.exports.CompleteTheLook = CompleteTheLook;


// RAW data: 1M(looks) * 3.3M(of each product type) + 10M = 25M