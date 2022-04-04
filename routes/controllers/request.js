const axios = require("axios");
const sortByProperty = require("./sort.js");

const axiosRequest = async (tags, sortBy, direction) => {
    const postsObject = {};
    const postsArray = [];
    const getUrls = tags.map((tag) => {
        return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`);
    });
    const response = await axios.all([...getUrls]);
    for(let i=0; i<response.length; i++){
        blog = response[i].data.posts;
        for(let j=0; j<blog.length; j++){
            postsObject[blog[j].id] = blog[j];
        }
    }
    for (const post in postsObject) {
        postsArray.push(postsObject[post]);
    }
    const sortedPosts = postsArray.sort(sortByProperty(sortBy, direction));
    return sortedPosts;
};

module.exports = axiosRequest;