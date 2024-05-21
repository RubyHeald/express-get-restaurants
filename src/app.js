const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/restaurants", async (request, response) =>{
    const restaurant = await Restaurant.findAll();
        response.json(restaurant);
})

app.get("/restaurants/:id", async (request, response) =>{
    const number = req.params.id;
        const restaurant = await Restaurant.findByPk(number);
            response.json(restaurant)
})

app.post("resturants", async (req, res) =>{
    const restaurant = await Restaurant.create(rew, body)
    res.json(restaurant)
})

app.put("resturants/:id", async (req, res) =>{
    const updatedRest = await Restaurant.update(req.body,{where:{id: req.params.id}})
    res.json(updatedRest)
})

app.delete("resturants/:id", async (req, res)=>{
    const deletedRest = await Restaurant.destroy({where: {id: req.params.id}})
    res.json(deletedRest)
})


module.exports = app;