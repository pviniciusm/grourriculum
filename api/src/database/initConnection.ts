import mongoose from 'mongoose';

const initDefaultConnection = (successCallback: () => void): void => {
  if (mongoose.connection.readyState === 0) {
    const pass = 'FfG9f0FbVglw1c8L';
    const uri = 'mongodb+srv://node-grou-user:' + pass + '@groucluster.097u6.mongodb.net/test-user?retryWrites=true&writeConcern=majority';

    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoose.connection.on('open', successCallback);
  } else {
    successCallback.call(true);
  }
};

export default initDefaultConnection;
