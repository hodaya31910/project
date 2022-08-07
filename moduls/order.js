const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        amount: {type: int, default: 0,},
        price: {type: int, default: 0,},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User",},
        products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product",},],
        createdAt: {type: String, default: null,},
        updatedAt: {type: String, default: null,},
        deletedAt: {type: String, default: null,},
    },
    {timestamps: true}
);
module.exports = mongoose.model("User", userSchema);
