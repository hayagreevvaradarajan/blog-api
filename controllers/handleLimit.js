const isInteger = (number) => {
    return /^\+?[1-9]\d*$/.test(number);
};
const handleLimit = (limit) => {
    if(limit){
        if(isInteger(limit)){
            return limit;
        }
        return "invalid";
    }
    return null;
};

module.exports = handleLimit;