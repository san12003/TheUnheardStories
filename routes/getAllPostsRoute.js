const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const {getPostController} = require("../controllers/postController");
const jsonParser = bodyParser.json()

router
    .route('/')
    .get(getPostController)

module.exports = router;