const redis = require("redis");
const cacheAPIData = async (tag, response) => {
    const client = redis.createClient({
        socket: {
            host: "127.0.0.1",
            port: 6379
        },
    });
    await client.connect();
    await client.set(tag, JSON.stringify(response));
};

module.exports = cacheAPIData;