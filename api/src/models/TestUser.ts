import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  id?: string;
  name: string;
  age: string;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true }
});

const User: Model<IUser> = model('User', UserSchema);
export default User;
export {
  UserSchema, IUser
};
