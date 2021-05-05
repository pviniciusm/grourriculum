import { Document, FilterQuery, model, Model as MongooseModel, Schema } from 'mongoose';

class Model<T extends Document> {
  protected _model: MongooseModel<T>;

  constructor (modelName: string, modelSchema: Schema, _model?: MongooseModel<T>) {
    this._model = _model || model(modelName, modelSchema);
  }

  async create (data: T): Promise<T> {
    return await this._model.create(data);
  }

  async get (filter?: FilterQuery<T>): Promise<T> {
    return await this._model.findOne(filter);
  }

  async list (filter?: FilterQuery<T>): Promise<T[]> {
    return await this._model.find(filter);
  }
}

export default Model;
