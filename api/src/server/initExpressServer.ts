import express from 'express';
import User from '../models/TestUser';

const initExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', async (req, res) => {
    const users = await User.find();

    res.status(200).send({
      data: {
        teste: 'testando...',
        users
      },
      message: 'Success'
    });
  });
  app.listen(3333);

  console.log('Server is now listening...');
};

export default initExpressServer;
