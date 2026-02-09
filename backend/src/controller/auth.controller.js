const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const foodpartnerModel = require("../models/foodpartner.model");


const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullname,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullname: user.fullname
        }
    })
}



const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });


    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);


    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullname: user.fullname,
        }
    });
}



const logoutUser = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully",
    });
}



const registerFoodPartner = async (req, res) => {
    const { name, email, password, phone, address, contactName } = req.body;

    const isAccountAlreadyExists = await foodpartnerModel.findOne({ email });

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food partner account already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const foodPartner = await foodpartnerModel.create({
        name,
        email,
        phone,
        address,
        contactName,
        password: hashedPassword,
    })

    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food partner created successfully.",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
        }
    });
}




const loginFoodpartner = async (req, res) => {
    const { email, password } = req.body;
    const foodPartner = await foodpartnerModel.findOne({
        email
    });

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "Food partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            name: foodPartner.name,
        }
    });
}




const logoutFoodPartner = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Food partner logged out successfully",
    });
}




module.exports = { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodpartner, logoutFoodPartner };




