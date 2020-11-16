const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

let reviewSchema = new mongoose.Schema({
  user_id: Number,
  product_id: Number,
  user_name: String,
  user_email: String,
  location: String,
  title_text: String,
  description_text: String,
  review_date: String,
  ratingSnap: {
    rating: Number,
    recommended: Boolean,
    overall_fit: Number,
    width: Number,
    typical_shoe_size: String,
    age: String,
    height: String,
    weight_range: String
  }
})


let productSchema = new mongoose.Schema({
  user_id: Number,
  product_id: Number,
  product_name: String,
  product_brand: String
});

let Review = mongoose.model("Review", reviewSchema);

let Product = mongoose.model("Product", productSchema);

let save = (input) => {
  Review.insertMany(input)
    .then(result => console.log(result))
    .catch(error => console.log(error))

  Product.insertMany(input)
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

module.exports = { Review, Product }
// module.exports.save = save;