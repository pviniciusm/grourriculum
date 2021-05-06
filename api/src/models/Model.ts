import Infra, { Return } from 'dev-infra';
import { Document, FilterQuery, model, Model as MongooseModel, Schema } from 'mongoose';

abstract class Model<T extends Document> {
  protected _model: MongooseModel<T>;

  constructor (modelName: string, modelSchema: Schema, _model?: MongooseModel<T>) {
    this._model = _model || model(modelName, modelSchema);
  }

  async create (data: object): Promise<Return> {
    try {
      const ret = await this._model.create(data as T);

      if (!ret) {
        return new Infra.Error('Unknown error at object create');
      }

      return new Infra.Success(ret);
    } catch (err) {
      return new Infra.Exception(err.toString());
    }
  }

  async get (filter?: object): Promise<Return> {
    try {
      const ret = await this._model.findOne(filter as FilterQuery<T>);

      if (!ret) {
        return new Infra.Error('Unknown error at object get');
      }

      return new Infra.Success(ret);
    } catch (err) {
      return new Infra.Exception(err.toString());
    }
  }

  async list (filter?: object): Promise<Return> {
    try {
      const ret = await this._model.find(filter as FilterQuery<T>);

      if (!ret) {
        return new Infra.Error('Unknown error at object list');
      }

      return new Infra.Success(ret);
    } catch (err) {
      return new Infra.Exception(err.toString());
    }
  }
}

export default Model;
