const express=require("express");
const { url } = require("inspector");
const app=express();
const path=require('path');
const { json } = require("stream/consumers");

app.set('view engine','ejs'); 

const URL = process.env.BACKEND_URL || "http://localhost:5000/api";


app.use(express.static(path.join(__dirname,'public')));



app.get('/', async (req, res) => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Backend returned ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        res.render('index', {
            data: result.data
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Failed to fetch backend data');
    }
});

app.listen(3000,function(){
    console.log("app is listening on port 3000")
})