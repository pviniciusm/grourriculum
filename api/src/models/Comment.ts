import { Document, Schema } from 'mongoose';
import Model from './Model';

interface IComment extends Document {
  id?: Object,
  name: String,
  relation: String,
  content: String
}

const commentSchema: Schema = new Schema({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  content: { type: String, required: true }
});

// const Comment: Model<IComment> = model('Comment', commentSchema);

class Comment extends Model<IComment> {
  constructor () {
    super('Comment', commentSchema);
  }
}

export default Comment;
export { IComment };
