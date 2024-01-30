import ServiceModel from "../models/serviceModel.js";
import UserModel from "../models/userModel.js";

// Get a User
export const getServiceById = async (req, res) => {
    const id = req.params.id;

    try {
        const serviceId = await ServiceModel.findById(id);
        if (serviceId) {
            res.status(200).json(serviceId);
        } else {
            res.status(404).json("No such Service");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get all users
export const getAllService = async (req, res) => {

    try {
        let allService = await ServiceModel.find();
        res.status(200).json(allService);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const createService = async (req, res) => {
    const userId = req.params.id;
    const { nameService,
        description,
        price,
        image,
        rating,
        detailsService,
    } = req.body;

    if (nameService == null ||
        description == null ||
        price == null ||
        image == null ||
        rating == null ||
        detailsService == null) {
        return res.status(400).json("You need to fill in the Service information");
    }
    const user = await UserModel.findById(userId);
    if (user.isAdmin === true) {
        try {
            const newService = new ServiceModel(req.body);
            const Service = await newService.save();
            res.status(200).json(Service);

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(403).json("Access Denied!");
    }
};


// udpate a user

export const updateServiceById = async (req, res) => {
    const id = req.params.id;
    // console.log("Data Received", req.body)
    const { nameService,
        description,
        price,
        image,
        rating,
        detailsService,
    } = req.body;

    if (nameService == null ||
        description == null ||
        price == null ||
        image == null ||
        detailsService == null ||
        rating == null) {
        res.status(400).json("You need to fill in the Service information");
    }

    try {
        // have to change this
        const Service = await ServiceModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(Service);

    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a user
export const deleteServiceById = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.query;
    const Service = await ServiceModel.findById(id);
    if (Service === undefined) {
        res.status(200).json("Service does not exist!");
    }
    const user = await UserModel.findById(userId);
    if (user?.isAdmin === true) {
        try {
            await ServiceModel.findByIdAndDelete(id);
            res.status(200).json("Service Deleted Successfully!");
        } catch (error) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Access Denied!");
    }
};

