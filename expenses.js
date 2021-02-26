const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/dogfood', (req, res) => {
  res.sendFile(__dirname + '/dogFood.html');
})

app.post('/', function (req, res) {
  let foodCost = parseInt(req.body.foodCost);
  let drinkCost = parseInt(req.body.drinkCost);
  let totalCost = foodCost + drinkCost;
  res.send("The total costs are: " +totalCost);
})

app.post('/dogfood', function (req, res) {
  let dogFoodAmount = parseInt(req.body.dogFoodAmount);
  let dogFoodPrice = parseInt(req.body.dogFoodPrice);
  let totalDogCost = dogFoodAmount * dogFoodPrice;
  res.send("The total dogfoodcosts are: " +totalDogCost);
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
