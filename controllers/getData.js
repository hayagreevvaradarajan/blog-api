const axios = require("axios");
const sortByProperty = require("./sort.js");
const cacheAPIData = require("./cacheAPIData.js");
const retreiveCacheData = require("./retreiveCacheData.js");

const getData = async (tags, sortBy, direction, noCache) => {
    const postsObject = {};
    const postsArray = [];
    const unCachedTags = [];
    if(noCache === false){
        for (let i=0; i<tags.length; i++) {
            const tag = tags[i];
            const cachedBlog = await retreiveCacheData(tag);
            if(!cachedBlog){
                unCachedTags.push(tag);
                continue;
            }
            const cachedBlogJson = JSON.parse(cachedBlog).posts;
            for(let i=0; i<cachedBlogJson.length; i++){
                postsObject[cachedBlogJson[i].id] = cachedBlogJson[i];
            }
        }
    }
    if(noCache === true){
        await tags.forEach((tag) => {
            unCachedTags.push(tag);
        });
    }
    if(unCachedTags.length > 0){
        const urls = unCachedTags.map((tag) => {
            return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`);
        });
        const response = await axios.all([...urls]);
        unCachedTags.forEach(async (tag, index) => {
            await cacheAPIData(tag, response[index].data);
        });
        for(let i=0; i<response.length; i++){
            const blog = response[i].data.posts;
            for(let j=0; j<blog.length; j++){
                postsObject[blog[j].id] = blog[j];
            }
        }
    }
    for (const post in postsObject) {
        postsArray.push(postsObject[post]);
    }
    const sortedPosts = postsArray.sort(sortByProperty(sortBy, direction));
    return sortedPosts;
};

module.exports = getData;