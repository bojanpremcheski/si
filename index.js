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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at <http://localhost>:${port}`);
});