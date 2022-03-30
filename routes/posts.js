const posts = (req, res) => {
    res.status(200).json({
        "message": "get request to /posts"
    });
};

module.exports = posts;