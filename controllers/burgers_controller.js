const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
      
      toEatData = data.filter(burger => burger.devoured === 0)
      eatenData = data.filter(burger => burger.devoured === 1)

    res.render("index", { toEat: toEatData, eaten: eatenData });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne((req.body.burger), function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res){
  burger.updateOne((req.params.id), function(result){
    console.log(`Burger #${req.params.id} devoured.`);
    res.status(200).end();
  })
})
  
  module.exports = router;