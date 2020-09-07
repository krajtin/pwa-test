const  express  = require("express");
const  path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
  var index = path.join(__dirname, "index.html");
  res.sendFile(index)
})
app.get('/index.html', (req, res) => {
  var index = path.join(__dirname, "index.html");
  res.sendFile(index)
})
app.get('/listado', (req, res) => {
  console.log("LISTADO")
  var item = path.join(__dirname, "listado.html");
  res.sendFile(item);
})



app.use(bodyParser.json({
  extended: true,
  limit: 30971520
}));
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
});
