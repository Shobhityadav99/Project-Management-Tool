const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    ProjectTitle : {
        type: String,
        required: true,
    },
    users : [{
        type: mongoose.Types.ObjectId,
    }],
    data : [{
        title: {
            type: String,
        },
        tasks: [{
            type: String,
        }]
    }]
});

module.exports = mongoose.model("Project", projectSchema);