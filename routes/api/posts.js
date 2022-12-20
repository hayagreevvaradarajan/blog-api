const sendRequest = require("../../controllers/request.js");
const handleTags = require("../../controllers/handleTags.js");
const handleDirection = require("../../controllers/handleDirection.js");
const handleSortBy = require("../../controllers/handleSortBy.js");
const handleLimit = require("../../controllers/handleLimit.js");

const posts = async (req, res) => {
    const tags = handleTags(req.query.tags);
    const sortBy = handleSortBy(req.query.sortBy);
    const direction = handleDirection(req.query.direction);
    const limit = handleLimit(req.query.limit);
    console.log(tags);
    console.log(sortBy);
    console.log(direction);
    console.log(limit);
    if(tags && sortBy !== "invalid" && direction !== "invalid" && limit !== null && limit !== "invalid"){
        const response = await sendRequest(tags, sortBy, direction);
        try{
            res.status(200).json({
                "posts": response.slice(0,limit)
            });
        } catch {
            res.status(200).json({
                "posts": response
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
    }
};

module.exports = posts;