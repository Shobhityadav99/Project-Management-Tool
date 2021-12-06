const mongoose = require("mongoose");
const User = require("./User");

const projectSchema = new mongoose.Schema({
    users : [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    data : [{
        title: {
            type: String,
            required: true
        },
        tasks: [{
            type: String,
        }]
    }]
});

module.exports = mongoose.model("Project", projectSchema);