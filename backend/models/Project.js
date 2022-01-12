const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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