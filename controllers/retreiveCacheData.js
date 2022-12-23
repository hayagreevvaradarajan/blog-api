const redis = require("redis");

const retreiveCacheData = async (tag) => {
    const client = redis.createClient({
        socket: {
            host: "127.0.0.1",
            port: 6379
        },
    });
    await client.connect();
    const value = await client.get(tag.trim());
    return value;
};

module.exports = retreiveCacheData;