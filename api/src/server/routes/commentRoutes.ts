import { Router } from 'express';
import CommentController from '../../controllers/CommentController';

const controller: CommentController = new CommentController();

const commentRoutes: Router = Router();
commentRoutes.get('/', async (req, res) => {
  try {
    const ret = await controller.list();
    res.status(200).send({
      data: ret,
      ok: true
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      ok: false,
      exception: err.toString()
    });
  }
});

commentRoutes.get('/summarized', async (req, res) => {
  try {
    const index: number = parseInt(req.query.index.toString()) || 1;
    const ret = await controller.listSummarized(index);
    res.status(200).send({
      data: ret,
      ok: true
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      ok: false,
      exception: err.toString()
    });
  }
});

export default commentRoutes;
