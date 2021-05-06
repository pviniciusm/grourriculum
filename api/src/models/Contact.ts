import Infra, { Return } from 'dev-infra';
import { Document, Schema } from 'mongoose';
import Model from './Model';

interface IContact extends Document {
  id?: Object,
  name: String,
  email: String,
  content: String
}

const commentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true }
});

class Contact extends Model<IContact> {
  constructor () {
    super('Contact', commentSchema);
  }

  async listSummarized (index: number): Promise<Return> {
    try {
      const ret = await this._model.find().limit(index);

      if (!ret) {
        return new Infra.Error('Unknown error at object create');
      }

      return new Infra.Success(ret);
    } catch (err) {
      return new Infra.Exception(err.toString());
    }
  }
}

export default Contact;
export { IContact };
