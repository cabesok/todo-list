const express = require("express");
const path = require("path");
const app = express();
/* const cors = require("cors") */

/* if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
} */

// App Server
app.set("port",process.env.PORT || 3001);
app.listen(app.get("port"),() => console.log("Server Start http://localhost:" + app.get("port")));

// App Access Public
app.use(express.static(path.resolve(__dirname, "../public")));

//allow OPTIONS on all resources
/* app.options('*', cors())

app.use(cors()); */







