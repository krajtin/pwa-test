import  express  from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname,'public2')));

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

app.get('/personas', (req, res) => {
  const personas = require(path.join(__dirname, 'data', 'personas.json'));
  setTimeout(function () {
    res.json(personas);
  }, 1000);

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

app.get('/users/:userId', (req, res) => {

  res.json([
    {
      id: 1,
      nombre: 'Ana',
      salarioMes: 2000
    }
  ]);
});
