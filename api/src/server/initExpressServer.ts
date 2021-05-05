import express from 'express';
import Comment from '../models/Comment';

const initExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', async (req, res) => {
    const comments = await Comment.find();

    res.status(200).send({
      data: {
        teste: 'testando...',
        comments
      },
      message: 'Success'
    });
  });
  app.listen(3333);

  console.log('Server is now listening...');
};

export default initExpressServer;
