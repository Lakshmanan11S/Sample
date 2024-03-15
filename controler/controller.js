const UserModel = require("../model/model")

// Create and Save a new user
exports.create = async (req, res) => {
    // if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    // }
    
    const user = new UserModel({
        employeeId: req.body.employeeId,
        employeeName: req.body.employeeName,
    });
    
    await user.save().then(data => {
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};


exports.getAll= async (req,res) => {

    try{
        const employee = await UserModel.find()
        res.status(200).json(employee)
    } catch(error) {
        console.log(error)
    }
}