import commentRoutes from './routes/commentRoutes';

const initRoutes = (app: any) => {
  app.use('/api/comments', commentRoutes);
};

export default initRoutes;
