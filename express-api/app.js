const express = require('express'),
      bodyParser = require('body-parser'),
      routes = require('./routes/routes');
const port  = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/* app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({
        message: 'Node.js and Express REST API'
    });
}); */
routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server is running on port ${server.address().port}`)
})

