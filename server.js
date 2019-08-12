if (process.env.NODE_ENV !== 'development') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./Electronic-raffle-draw-5339243d9768.json');
// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet('173LyYOUWwjgTDx3f7ySteFBXiBOhYgST57JCZDOCLSo');


app.get('/contestants', (req,res)=>{
    // Authenticate with the Google Spreadsheets API.
    doc.useServiceAccountAuth(creds, function (err) {
    // Get all of the rows from the spreadsheet.
    doc.getRows(1, function (err, rows) {
      res.json(rows);
    });
  });
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => console.log(`listening on port ${port}!`))

