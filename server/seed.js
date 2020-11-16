//requires necessary library
const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const { Review, Product } = require('../database/index.js');
const assert = require("assert");
const _ = require('lodash');

//connection url
const url = "mongodb://localhost/test";

//database name
const dbName = "test";

// use connect method to connect to server
MongoClient.connect(url, function (err, client) {

  assert.equal(null, err)
  const db = client.db(dbName);

  console.log("Connected successfully to Mongo!")

  //get access to the relevant collection
  const reviewCollection = db.collection("Review");
  const productCollection = db.collection("Product");

  //generating faker data
  let reviewEntry = [];
  for (var x = 0; x < 100; x++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const randomGender = faker.random.arrayElement(['Mens', "Womens", "Kids"]);
    const randomShoeSize = faker.random.number({ min: 5, max: 15 });
    const randomFeet = faker.random.number({ min: 3, max: 7 });
    const randomInch = faker.random.number({ min: 0, max: 12 });

    const reviews = {
      user_name: faker.internet.userName(),
      user_email: faker.internet.email(firstName, lastName),
      location: {
        city: faker.address.city(),
        state: faker.address.state()
      },
      title_text: faker.lorem.sentence(),
      description_text: faker.lorem.sentences(),
      review_date: faker.date.between('2019-01-10', '2020-11-15'),
      ratingSnap: {
        rating: faker.random.number({ min: 1, max: 5 }),
        recommended: faker.random.arrayElement(['Yes', 'No']),
        overall_fit: faker.random.arrayElement(['Runs Small', 'True to Size', 'Runs Large']),
        width: faker.random.arrayElement(['Runs Narrow', 'True to Width Fit', 'Runs Wide']),
        typical_shoe_size: `${randomGender} ${randomShoeSize}`,
        age: faker.random.arrayElement(['Under 18', '18-24', '25-35', '35-45', '45-55', '55-65', '65-74', 'Over 75']),
        height: `${randomFeet}feet ${randomInch}inches`,
        weight_range: faker.random.arrayElement(['Less than 100', '100-149', '150-199', '200-249', 'More than 250']),
      }
    }
    reviewEntry.push(reviews);
  }
  reviewCollection.insertMany(reviewEntry);

  console.log('Database seeded!');
  client.close();
})





