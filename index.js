const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
var bodyParser = require('body-parser');

require('./database/dbConnect');
const access = require('./model/access');
const accessRoutes = require('./routes/access');
const logsRoutes = require('./routes/logs');
const accountsRoutes = require('./routes/accounts');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

const server = require('http').createServer(app);
server.listen(PORT);

app.get('/', async (req , res) => {
    const access_result = await access.find();
    res.status(200).json({
        status: 200,
        data: access_result
    });
});

app.use("/access", accessRoutes);
app.use("/logs", logsRoutes);
app.use("/accounts", accountsRoutes);