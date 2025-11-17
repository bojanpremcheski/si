const express = require('express');
const app = express();
app.get("/", (req, res) => {
  res.json({
    Id: "Id",
  });   
});

app.get("/1", (req, res) => {
  res.json({
    Id
  });   
});

app.get("/2", (req, res) => {
  res.json({
     pn
  });   
});

app.get("/3", (req, res) => {
  res.json({
    PN: "PN",
  });   
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at <http://localhost>:${port}`);
});