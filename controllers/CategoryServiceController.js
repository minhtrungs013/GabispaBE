import CategoryServiceModel from "../models/categoryServiceModel.js";
import UserModel from "../models/userModel.js";

// Get a User
export const getCategoryServiceById = async (req, res) => {
    const id = req.params.id;

    try {
        const categoryServiceId = await CategoryServiceModel.findById(id);
        if (categoryServiceId) {
            res.status(200).json(categoryServiceId);
        } else {
            res.status(404).json("No such CategoryService");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get all users
export const getAllCategoryService = async (req, res) => {

    try {
        let allCategoryService = await CategoryServiceModel.find();
        res.status(200).json(allCategoryService);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const createCategoryService = async (req, res) => {
    const userId = req.params.id;
    const { nameCategoryService,
        description
    } = req.body;

    if (nameCategoryService == null ||
        description == null) {
        return res.status(400).json("You need to fill in the CategoryService information");
    }
    const user = await UserModel.findById(userId);
    if (user.isAdmin === true) {
        try {
            const newCategoryService = new CategoryServiceModel(req.body);
            const CategoryService = await newCategoryService.save();
            res.status(200).json(CategoryService);

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(403).json("Access Denied!");
    }
};


// udpate a user

export const updateCategoryServiceById = async (req, res) => {
    const id = req.params.id;
    const { nameCategoryService,
        description
    } = req.body;

    if (nameCategoryService == null ||
        description == null) {
        res.status(400).json("You need to fill in the CategoryService information");
    }
    try {
        // have to change this
        const CategoryService = await CategoryServiceModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(CategoryService);

    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a user
export const deleteCategoryServiceById = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.query;
    const CategoryService = await CategoryServiceModel.findById(id);
    if (CategoryService === undefined) {
        res.status(200).json("CategoryService does not exist!");
    }
    const user = await UserModel.findById(userId);
    if (user?.isAdmin === true) {
        try {
            await CategoryServiceModel.findByIdAndDelete(id);
            res.status(200).json("CategoryService Deleted Successfully!");
        } catch (error) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Access Denied!");
    }
};

