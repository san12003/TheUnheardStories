const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true],
        minlength:[3,"Minimum length must be at least 3 characters"],
    },
    categories: {
        type: String,
        required: [true],
        enum: ['Adventure', 'Inspiration', 'Life Lessons', 'Personal Growth', 'Travel','others'],
    },
    content: {
        type: String,
        required: [true],
        minlength:[20,"Minimum length must be at least 20 characters"],
    },
    date:{
        type: Date,
        default: Date.now,
    },
    image: {
        type: String,
        validate: {
            validator: function (v) {
                return !v || /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(v);
            },
            message: "Image must be a valid URL ending with jpg, jpeg, png, or gif",
        },
    },
    emotion:{
        type: String,
        required: false,
        enum: ['happy','sad','surprised','Angry','Love','Peacefull','Thoughtfull','Funny'],
    },
    likes:{
        type: Number,
        default: 0,
        min: [0, "Likes cannot be negative"],
    }
})
// postSchema.pre("save", function (next) {
//     if (!this.title || !this.categories || !this.content) {
//         return next(new Error("Title, categories, and content are required"));
//     }
//
//     // Example: make sure title + content are not identical
//     if (this.title === this.content) {
//         return next(new Error("Title and content cannot be the same"));
//     }
//
//     next(); // continue if valid
// });

const postData = mongoose.model("communityPost", postSchema);
module.exports = postData;