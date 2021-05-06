import commentRoutes from './routes/commentRoutes';
import contactRoutes from './routes/contactRoutes';

const initRoutes = (app: any) => {
  app.use('/api/comments', commentRoutes);
  app.use('/api/contact', contactRoutes);
};

export default initRoutes;
