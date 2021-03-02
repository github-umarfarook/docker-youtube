const express = require("express")
const app = express();

app.get("/", (req, res) => {
res.json({ message: "Your are visiting root"});
});
app.get("/login", (req, res) => {
res.json({ message: "Your are visiting login route"});
});
app.get("/logout", (req, res) => {
res.json({ message: "Thanks for visiting "});
});
app.get("/signup", (req, res) => {
res.json({ message: "Your visiting signup page! "});
});


app.listen(8000,() => {
console.log("App is running at 8000");
}); 
