const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const {createPostController} = require("../controllers/postController");
const jsonParser = bodyParser.json()

router
    .route('/')
    .post(createPostController)

module.exports = router;