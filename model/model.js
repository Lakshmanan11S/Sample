var mongoose = require("mongoose");

var Schema = new mongoose.Schema({

    employeeId: {
        type: String
    },
    employeeName: {
        type:String
    }
})

var employee = new mongoose.model("user", Schema)
module.exports = employee