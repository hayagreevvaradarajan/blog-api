const sendRequest = require("../../controllers/request.js");
const handleTags = require("../../controllers/handleTags.js");
const handleDirection = require("../../controllers/handleDirection.js");
const handleSortBy = require("../../controllers/handleSortBy.js");

const posts = async (req, res) => {
    const tags = handleTags(req.query.tags);
    const sortBy = handleSortBy(req.query.sortBy);
    const direction = handleDirection(req.query.direction);
    console.log(tags);
    console.log(sortBy);
    console.log(direction);
    if(tags && sortBy !== "invalid" && direction !== "invalid"){
        const response = await sendRequest(tags, sortBy, direction);
        res.status(200).json({
            "posts": response
        });
    } else{
        if(!tags){
            res.status(400).json({
                "error": "tags parameter cannot be empty"
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
    }
};

module.exports = posts;