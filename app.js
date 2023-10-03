const express = require("express");

// call file router.js
const router = require("./routers/router");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get("/", (req, res) => {
    res.send("Server up!");
})

// Konfigurasi router.
app.use("/", router);

app.listen(port, () => {
    console.log(`Server up on server ${port}!`);
});