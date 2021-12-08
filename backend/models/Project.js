const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    users : [{
        type: mongoose.Types.ObjectId,
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