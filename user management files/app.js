var scripts = require("./scripts");
var express = require("express");
app.set("view engine", "ejs");
var app = express();
var fs = require('fs');

const sqlite3Handler = require('sqlite3').verbose();

let dbHandler = new sqlite3Handler.Database('PROJECT_NAME', (connectionError)=> {
    if (connectionError) {
        console.log(connectionError.message)
    }
    else {
        console.log('connected to the database')
    }
});

var myReadStream = fs.createReadStream(__dirname + document.getElementById("saveTXTButton").value, "utf8");

myReadStream.on("data", function(chunk){ //READ AND WRITE FROM GIVEN .TXT
    console.log("Data received to the database");
    console.log(chunk);
})


app.get("/test", function(req, res) {
    res.send("mainpage/test brings to new page");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/add_post.html"); //use routes, not file names
});
app.get("/profile/:id", function(req, res) { //profile/:id part of milestone 5
    data1 = document.getElementById("saveManualButton").value;
    var data = {info: data1} //output of the database later
    res.render("profile", {person: req.params.info, data: data});
});

app.listen(3000);

function saveFunction() {
    dbHandler.run("insert into posts (post_title, post_contents) values (?,?)", [scripts.postTitle, scripts.postContent], (insertError)=> {
        if (insertError) {
            console.log(insertError.message)
        }
        else {
            console.log("success")
        }
    });
}

/*
dbHandler.run("insert into posts (post_title, post_contents) values (?,?)", ["thisGoesInPost_Title", "thisGoesInPost_Contents"], (insertError)=> {
    if (insertError) {
        console.log(insertError.message)
    }
    else {
        console.log("success")
    }
});*/

//document.getElementById("saveManualButton").addEventListener("click", saveFunction);