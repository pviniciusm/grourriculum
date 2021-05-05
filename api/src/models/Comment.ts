import { model, Document, Model, Schema } from 'mongoose';

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

const Comment: Model<IComment> = model('Comment', commentSchema);

export default Comment;
export { IComment };
