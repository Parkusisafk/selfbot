const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Discord selfbot is running!');
});

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`);
});


const {
  Client,
  RichPresence,
  CustomStatus,
} = require("discord.js-selfbot-v13");
require("dotenv").config();

const client = new Client();

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  // Build a RichPresence object with minimal info
  const presence = new RichPresence(client)
  .setApplicationId('1373266637847007312')
  .setName('9/11 simulator 🏢🏢💥🛩')
  .setDetails('Grinding "no survivors" achievement')
  .setAssetsLargeImage('1373272313780371536') // Image key for large image (must be uploaded to your app)
 // Tooltip text when hovered
  .setAssetsSmallImage('1373272311398010921') // Image key for small image (optional)
  
  .setType('PLAYING'); // Activity type // Valid types: PLAYING, STREAMING, LISTENING, WATCHING

  // Optional: CustomStatus example
  

  // Set the presence with an array of activities
  client.user.setPresence({ activities: [presence] });

  console.log("Presence set!");
});

client.login(process.env.TOKEN).catch(console.error);
