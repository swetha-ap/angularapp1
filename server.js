//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory of our project application 'app1'
app.use(express.static(__dirname + '/dist/app1'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/app1/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);