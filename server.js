import  express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname,'public')));
app.use(bodyParser.json({
  extended: true,
  limit: 30971520
}));
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
});

app.get('/coins', (req, res) => {

  const coins = [
    {
      id: 1,
      nombre: 'ABC'
    },
    {
      id: 2,
      nombre: 'QQQ'
    }
  ];

  res.json(coins);
});

app.get('/frutas', (req, res) => {
  const frutas = require(path.join(__dirname, 'data', 'frutas.json'));
  res.json(frutas);
});

app.post('/frutas', (req, res) => {
  console.log('Recibo los datos del POST');
  console.log(req.body);
  res.send({});
});

app.put('/frutas', (req, res) => {
  console.log('Recibo los datos del PUT');
  console.log(req.body);
  res.send({});
});

app.delete('/frutas', (req, res) => {
  console.log('Recibo los datos del DELETE');
  console.log(req.body);
  res.send({});
});
