import  express  from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname,'public')));
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
