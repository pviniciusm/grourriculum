import { Router } from 'express';
import ContactController from '../../controllers/ContactController';

const controller: ContactController = new ContactController();

const contactRoutes: Router = Router();
contactRoutes.get('/', async (req, res) => {
  try {
    const ret = await controller.list();
    res.status(200).send(ret);
  } catch (err) {
    res.status(500).send({
      data: {},
      ok: false,
      exception: err.toString()
    });
  }
});

contactRoutes.post('/', async (req, res) => {
  try {
    const ret = await controller.create(req.body);
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

contactRoutes.get('/summarized', async (req, res) => {
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

export default contactRoutes;
