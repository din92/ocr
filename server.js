let express = require("express");
let app = express();
let http = require("http");
let server = http.createServer(app);
let bodyParser = require("body-parser");
let router = express.Router();
let session = require("express-session")({
    secret:"ocr-secret",
    resave:true,
    saveUninitialized:true
})
router = require("./route")(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session);
app.use(router)

app.set("PORT",5553);
server.listen(app.get("PORT"));
server.on("listening",()=>{
    console.log("server is listening at port ",app.get("PORT"));
})