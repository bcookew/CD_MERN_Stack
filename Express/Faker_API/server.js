const express = require('express');
const {faker} = require('@faker-js/faker');
const Company = require('./Models/Company');
const User = require('./Models/User');

const app = express();
const port = 8000;


// ====================== App Settings

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

// ====================== Routes

app.get("/api", (req, res) => {
    
    res.send([
        {
        Message: "This is the FIRST message within JSON",
        Number: Math.random()
        },
        {
        Message: "This is the second message within JSON",
        Number: Math.random()
        },
        {
        Message: "This is the Third message within JSON",
        Number: Math.random()
        }
    ]);

});

app.get("/api/user/company", (req, res) => {
    const newCompany = new Company();
    const newUser = new User();
    res.send([
        newCompany,
        newUser
    ]);
});
app.get("/api/users/new", (req, res) => {
    res.send([
        new User()
    ]);
});
app.get("/api/companies/new", (req, res) => {
    res.send([
        new Company()
    ]);
});

// ====================== Server kicker

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
