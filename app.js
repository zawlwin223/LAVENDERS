let express = require ("express");
let app     = express();
var expressLayouts = require('express-ejs-layouts');
let mongoose = require ("mongoose");
// let path     = require ("path");
let file_upload = require ("express-fileupload");
app.use(file_upload());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
mongoose.connect("mongodb://localhost:27017/SHOPPER")
let db = mongoose.connection;
db.on("error",(error)=>{console.log(error)});
db.once("open",()=>{console.log("Connected to mongoose database")});


app.set('view engine', 'ejs');
app.set("views",__dirname+"/views");
app.set("layout","layout/layout.ejs")
app.use(expressLayouts);

let home = require ("./routes/home_route.js");
let shop = require ("./routes/shop_route.js");
let check_out = require ("./routes/checkOut_route.js");
let contact= require ("./routes/contact_route.js");

app.use("/",home);
app.use("/shop",shop);
app.use("/CheckOut",check_out);
app.use("/contact",contact);

app.listen("3000",()=>{
    console.log("Server is running")
})