// Your server code here...
import express from 'express';


// create a new instance of express
const app = express();


// declare the route
app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

// set the port
const PORT = 3001;

// listen to request
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);

  }

  return console.log('Listening on: http://localhost:' + PORT);
});
