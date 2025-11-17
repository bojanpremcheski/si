//import { SpeedInsights } from "@vercel/speed-insights/next"
const express = require('express');
const app = express();
//<SpeedInsights />
app.get("/", (req, res) => {
  res.json({
    Id: "Id",
  });   
});



app.get("/1", (req, res) => {
  res.json({
    PN: "PN",
  });   
});

app.get('/2', (req, res) => {
  res.send('Id');
});

app.get('/3', (req, res) => {
  res.send('Pn');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at <http://localhost>:${port}`);
});