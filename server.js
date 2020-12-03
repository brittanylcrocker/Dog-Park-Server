const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

let posts = [{text: "Awesome Park", url: "https://maps.randwick.nsw.gov.au/public/images/facilities/Baker-Park-768x250.jpg", location: 'Baker Park, Sydney AU'}, {text: "Favourite spot!", url: "https://www.ausleisure.com.au/images/ausleisure/files/_news-main/Randwick_Environmental_Park_wetlands.jpg", location: 'Environment Park, Sydney AU' }]

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  console.log("Posts", JSON.stringify(posts))
  res.send(JSON.stringify(posts));
});

app.post('/api/hello', (req, res) => {
  console.log("post content: ", req.body);
  const newPost = req.body
  res.send(
    newPost
  );
  posts.push(newPost)
  console.log(posts)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
