const handleNoCache = (noCache) => {
    const noCacheAcceptedValues = ["yes", "no"];
    const noCacheValue = noCache.toLowerCase().trim();
    if(noCacheAcceptedValues.includes(noCacheValue)){
        return noCacheValue === "yes";
    }
    return "invalid";
};
module.exports = handleNoCache;