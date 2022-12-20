# blog-api
This RESTful API was built as a solution for the Hatchways Backend assessment. It is built using Node.js and Express that will make an external request to fetch Blog data from an Hatchways API. It will return an array of blog posts sorted by ID ascending by default.
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
This API supports two endpoints:
 ```
GET /api/ping and GET /api/posts?tags=<tags-separated-by-commas>&sortBy=<parameter-to-sort-results-by>&direction=<direction-to-sort-results-by>
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