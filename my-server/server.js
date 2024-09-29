const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });
const { TwitterApi } = require("twitter-api-v2");

app.use(cors({
  origin: "*", // replace with your frontend url
}));
app.use(express.json());


app.get('/getAuthLink',async (req, res) =>{
    const client = new TwitterApi({
      appKey: "pQ2Jfk0zW2hzlKHvyf1f93dQo",
      appSecret: "vLDG5Fmq5hx1gSkRG2oTGxPSUCPssQcSV9R2wbYCC70c7NeS4B",
    });
    const twitterClient = client.readWrite;  
    const authLink = await twitterClient.generateAuthLink(
      "https://f7e8-103-204-209-115.ngrok-free.app/dashboard",
      {linkMode: "authorize"}
    );
    console.log(authLink)
    res.json(authLink);
})

app.post('/login', async (req, res) => {
  console.log(req.body.url);
  // const url = req.body.url;
  try {
    // res.redirect(url);
    // console.log(url)
  } catch (error) {
    console.error('Error generating auth link:', error);
    res.status(500).json({ error: 'Failed to generate auth link' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});