const express = require('express');
const sequelize = require("./config/connection.js");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

const routes = require("./controllers");

// Set up react for the app's front end

app.use(express.static("public"));

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
//routing utility 
app.use(routes)

//Starting the server
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});