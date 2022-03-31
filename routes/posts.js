const axios = require("axios");
const postsObject = {};
const postsArray = [];
const sendRequest = async (tags) => {
    const response = await axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tags}`);
    for(let i=0; i<response.data.posts.length;i++){
        postsObject[response.data.posts[i].id] = response.data.posts[i];
    }
    return postsObject;
};

const posts = async (req, res) => {
    const response = await sendRequest("tech");
    res.status(200).json({
        "posts":response
    });
};

module.exports = posts;