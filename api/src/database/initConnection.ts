import mongoose from 'mongoose';

const getConnectionUri = () => {
  const environment = process.env.npm_config_config || 'local';

  require('dotenv').config({
    path: environment !== 'production'
      ? '.env.' + environment
      : '.env'
  });

  if (environment === 'local') {
    return `${process.env.DBTYPE}://${process.env.DBURI}:27017/${process.env.DATABASE}`;
  }

  return `${process.env.DBTYPE}://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBURI}/${process.env.DATABASE}?retryWrites=true&writeConcern=majority`;
};

const initDefaultConnection = (successCallback: () => void): void => {
  if (mongoose.connection.readyState === 0) {
    const uri = getConnectionUri();
    console.log(uri);

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
