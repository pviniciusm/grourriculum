import express from 'express';
import initRoutes from './initRoutes';
import cors from 'cors';

const initExpressServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  initRoutes(app);
  app.listen(3333);

  console.log('Server is now listening...');
};

export default initExpressServer;
