const express = require("express");
const app = express();
require("dotenv").config();

const apiRoutes = require("./routes/api.js");

app.use("/api", apiRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})