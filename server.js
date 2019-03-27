
const express = require('express');
var request = require('request');
const app = express();
const bodyParse = require('body-parser');
const path = require('path');

const port = process.env.PORT || 5000;



// create a GET route
app.get('/photogallery', (req, res) => {
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  const key = process.env.CLOUDINARY_KEY;
  const secret = process.env.CLOUDINARY_SECRET;
  const url = `https://${key}:${secret}@api.cloudinary.com/v1_1/dhnfxvusr/resources/image/tags/photogallery?max_results=29`;
  request(url, function (err, response, body) {
    if (err) {
      console.log("THERE WAS AN API ERROR");
    }
    if (response.statusCode === 200) {
      return res.send(body);
    } else {
      console.log(response.statusCode);
    }
  });
});

// create a GET route
app.get('/photogallery:nextCursor', (req, res) => {
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  const key = process.env.CLOUDINARY_KEY;
  const secret = process.env.CLOUDINARY_SECRET;
  const url = `https://${key}:${secret}@api.cloudinary.com/v1_1/dhnfxvusr/resources/image/tags/photogallery?max_results=29&next_cursor=${req.nextCursor}`;
  request(url, function (err, response, body) {
    if (err) {
      console.log("THERE WAS AN API ERROR");
    }
    if (response.statusCode === 200) {
      return res.send(body);
    } else {
      console.log(response.statusCode);
    }
  });
});

// create a GET route
app.get('/homepageimages', (req, res) => {
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  const key = process.env.CLOUDINARY_KEY;
  const secret = process.env.CLOUDINARY_SECRET;
  const url = `https://${key}:${secret}@api.cloudinary.com/v1_1/dhnfxvusr/resources/image/tags/homepageMenu`;
  request(url, function (err, response, body) {
    if (err) {
      console.log("THERE WAS AN API ERROR");
    }
    if (response.statusCode === 200) {
      return res.send(body);
    } else {
      console.log(response.statusCode);
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));