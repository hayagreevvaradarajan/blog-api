const handleTags = (tags) => {
    if(!tags){
        return null;
    }
    return tags.split(",");
};

module.exports = handleTags;