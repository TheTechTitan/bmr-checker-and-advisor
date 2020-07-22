const express = require("express");
const app = express();
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	//res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
	//res.setHeader('Access-Control-Allow-Headers','X-Requested-With,contenttype');
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

//Connect to MongoDB
const server = "localhost:27017";
const database = "fitnessDatabase";
mongoose
	.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
	.then(() => console.log("Connected to MongoDB..."))
	.catch((err) => console.log("Error : " + err));

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
