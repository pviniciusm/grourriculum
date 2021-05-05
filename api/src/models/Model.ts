import { Document, FilterQuery, model, Model as MongooseModel, Schema } from 'mongoose';

abstract class Model<T extends Document> {
  protected _model: MongooseModel<T>;

  constructor (modelName: string, modelSchema: Schema, _model?: MongooseModel<T>) {
    this._model = _model || model(modelName, modelSchema);
  }

  async create (data: T): Promise<T> {
    return await this._model.create(data);
  }

  async get (filter?: object): Promise<T> {
    return await this._model.findOne(filter as FilterQuery<T>);
  }

  async list (filter?: object): Promise<T[]> {
    return await this._model.find(filter as FilterQuery<T>);
  }
}

export default Model;
