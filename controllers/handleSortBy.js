const lodash = require("lodash");

const handleSortBy = (property) => {
    if(!property){
        return "id";
    }else{
        const lowerProperty = lodash.lowerCase(property);
        const acceptableProperties = ["id", "reads", "likes", "popularity"];
        if(acceptableProperties.includes(lowerProperty)){
            return lowerProperty;
        } else{
            return "invalid";
        }
    }
};

module.exports = handleSortBy;