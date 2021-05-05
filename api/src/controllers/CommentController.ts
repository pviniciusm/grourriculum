import Comment from '../models/Comment';

class CommentController {
  protected _model: Comment;

  constructor (model?: Comment) {
    this._model = model || new Comment();
  }

  async list () {
    return await this._model.list();
  }

  async listSummarized (index: number) {
    return await this._model.listSummarized(index);
  }
}

export default CommentController;
