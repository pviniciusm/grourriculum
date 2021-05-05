import express from 'express';
import CommentController from '../controllers/CommentController';

const initExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', async (req, res) => {
    const commentModel = new CommentController();
    const comments = await commentModel.listSummarized(1);

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
