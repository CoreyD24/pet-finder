const express = require(`express`); 
const data = require("./data");
const app = express();


const PORT = 5173;
app.listen(PORT, () => {
    console.log(`listening on port number ${PORT}`)
})

app.get("/api/v1/pets/owner", (req, res) => {
    const {owner} = req.query;
    const filtered = data.filter(
        (pet) => pet.owner.toLowerCase() === owner.toLowerCase ()
    )
    res.send(filtered);
})

//reference only in case I need it
app.get('/hello-query/:name', (req, res) => { 
    const name = req.params.name; 
    res.send(`Hello ${name}`); 
});  

//homepage of "Pet Finder"
app.get(`/`, (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//this is to get the list of pet names
app.get(`/api/v1/pets`,(req, res) => {
    res.send(data)
})

//this is to get a specific pet name
app.get(`/api/v1/pets/:name`, (req, res) => {
    const {name} = req.params
    const filtered = data.filter(
        (pet) => pet.name.toLowerCase() === name.toLowerCase()
    );
   res.send(filtered)
})

