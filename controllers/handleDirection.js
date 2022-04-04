const lodash = require("lodash");

const handleDirection = (direction) => {
    if(!direction){
        return "asc";
    } else{
        const lowerDirection = lodash.lowerCase(direction);
        const acceptableDirection = ["asc", "desc"];
        if(acceptableDirection.includes(lowerDirection)){
            return lowerDirection;
        } else{
            return "invalid";
        }
    }
};

module.exports = handleDirection;