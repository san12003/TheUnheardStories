const express = require('express')
const cors = require('cors')
const createPostRoute=require('./routes/createPostRoute')
const getAllPostRoute=require('./routes/getAllPostsRoute')
const {json} = require("express");
const app = express();

app.use(cors())
app.use(json())

app.use('/createPost',createPostRoute)
app.use('/getAllPosts',getAllPostRoute)

module.exports = app;