const postData = require('../models/postSchema');

exports.createPostController = async (req, res) => {
    try {
        const data = new postData(req.body);
        const newPost = await data.save();
        res.status(201).json({
            status: "success",
            message: "Post successfully created",
            newPost,
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message || "Something went wrong",
        });
    }
};

exports.getPostController = async (req, res) => {
    try {
        const data = await postData.find();
        res.status(200).json({
            status: 'success',
            message: "Post successfully found",
            data: data,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: 'Something went wrong',
            error: err.message
        });
    }
};

