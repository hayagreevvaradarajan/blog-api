# blog-api
This RESTful API was built as a solution for the Hatchways Backend assessment. It is built using Node.js and Express that will make an external request to fetch Blog data from an Hatchways API. If the blog data for a tag is there in the cache, it will fetch it from the cache. If not, it will make an API call to fetch the data and then cache the response for 5 minutes. It will return an array of blog posts sorted by ID ascending by default.
# Setup and run instructions:

1. Install all dependencies using the following command:
    ```
    npm install
    ```
2. Run the server using the following command:
    ```
    npm start
    ```
    This will start a server with the url 
    ```
    http://127.0.0.1:3000
    ```
3. Run the redis server using the following command:
    ```
    sudo service redis-server start
    ```
    This will start a server with the url
    ```
    127.0.0.1:6379
    ```
    If not, please update line 5 in controllers/cacheAPIData.js and line 6 in controllers/retreiveCacheData.js to reflect the url on which your redis server is running.
This API supports two endpoints:
 ```
GET /api/ping and 
GET /api/posts?tags=(tags-separated-by-commas)&sortBy=(parameter-to-sort-results-by)&direction=(direction-to-sort-results-by)
```
GET /api/ping:
```
Return a successful response if a ping to the server is successful.
Status codes: 200
Accepted request headers(These headers are optional. The API will work even if headers are not specified): content-type: application/json
Response header: content-type: application/json
Required Request payload: None
Sample response: 
    200: {
            "success": "true"
         }
```

GET /api/posts?tags=(tags-separated-by-commas)&sortBy=(parameter-to-sort-results-by)&direction=(direction-to-sort-results-by)&limit=(number-of-posts):
```
Returns Blog data as JSON.
Status codes: 200, 400, 500
Accepted request headers(These headers are optional. The API will work even if headers are not specified): content-type: application/json
Response header: content-type: application/json
Required Request payload: None
Query parameters: 
    1. tags - required
    2. sortBy - optional
    3. direction - optional
    4. limit - required
Accepted values for sortBy: id, reads, likes, popularity
Default value for sortBy: id
Accepted values for direction: desc, asc
Default value for direction: asc
Accepted values for limit: Any positive integer greater than 0
Sample response:
    200: {
            "posts": [
                {
                    "author": "Rylee Paul",
                    "authorId": 9,
                    "id": 1,
                    "likes": 960,
                    "popularity": 0.13,
                    "reads": 50361,
                    "tags": [
                        "tech",
                        "health"
                    ]
                },
                {
                    "author": "Zackery Turner",
                    "authorId": 12,
                    "id": 2,
                    "likes": 469,
                    "popularity": 0.68,
                    "reads": 90406,
                    "tags": [
                        "startups",
                        "tech",
                        "history"
                    ]
                }
            ]
         },
    400: {
            "error": "tags parameter is required"
         },
    500: {
            "error": "Internal server error"
         }
    
```