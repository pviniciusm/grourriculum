import Contact from '../models/Contact';

class ContactController {
  protected _model: Contact;

  constructor (model?: Contact) {
    this._model = model || new Contact();
  }

  async create (data: any) {
    return await this._model.create(data);
  }

  async list () {
    return await this._model.list();
  }

  async listSummarized (index: number) {
    return await this._model.listSummarized(index);
  }
}

export default ContactController;
