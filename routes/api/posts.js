const getData = require("../../controllers/getData.js");
const handleTags = require("../../controllers/handleTags.js");
const handleDirection = require("../../controllers/handleDirection.js");
const handleSortBy = require("../../controllers/handleSortBy.js");
const handleLimit = require("../../controllers/handleLimit.js");
const handleNoCache = require("../../controllers/handleNoCache.js");

const posts = async (req, res) => {
    const tags = handleTags(req.query.tags);
    const sortBy = handleSortBy(req.query.sortBy);
    const direction = handleDirection(req.query.direction);
    const limit = handleLimit(req.query.limit);
    const noCache = handleNoCache(req.query.noCache);
    console.log(tags);
    console.log(sortBy);
    console.log(direction);
    console.log(limit);
    console.log(noCache);
    if(tags && sortBy !== "invalid" && direction !== "invalid" && limit !== null && limit !== "invalid" && noCache !== "invalid"){
        const data = await getData(tags, sortBy, direction, noCache);
        try{
            res.status(200).json({
                "posts": data.slice(0,limit)
            });
        } catch {
            res.status(200).json({
                "posts": data
            });
        }
    } else{
        if(!tags){
            res.status(400).json({
                "error": "tags parameter is required"
            });
        }
        if(sortBy === "invalid"){
            res.status(400).json({
                "error": "sortBy parameter is invalid"
            });
        }
        if(direction === "invalid"){
            res.status(400).json({
                "error": "direction parameter is invalid"
            });
        }
        if(!limit){
            res.status(400).json({
                "error": "limit parameter is required"
            });
        }
        if(limit === "invalid"){
            res.status(400).json({
                "error": "limit parameter is invalid"
            });
        }
        if(noCache === "invalid"){
            res.status(400).json({
                "error": "noCache parameter is invalid"
            });
        }
    }
};

module.exports = posts;