const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

let posts = [{text: "Awesome Park"}]

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  console.log("Posts", JSON.stringify(posts))
  res.send(JSON.stringify(posts));
});

app.post('/api/hello', (req, res) => {
  console.log("post content: ", req.body);
  const newPost = {
    text: req.body
  }
  res.send(
    newPost
  );
  posts.push(newPost)
  console.log(posts)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
