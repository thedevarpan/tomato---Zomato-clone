const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");
const foodModel = require("../models/food.model");


const createFood = async (req, res) => {

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    });

    res.status(201).json({
        message: "Item created successfully",
        foodItem: foodItem
    });

}


const getFooditems = async (req, res) => {
    const foodItems = await foodModel.find({});
    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems: foodItems
    })
}



module.exports = { createFood, getFooditems };