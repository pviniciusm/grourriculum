import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({
    data: {},
    message: 'Success'
  });
});

app.listen(3333);
