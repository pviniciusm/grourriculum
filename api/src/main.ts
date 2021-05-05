import initExpressServer from './server/initExpressServer';
import initDefaultConnection from './database/initConnection';

try {
  initDefaultConnection(initExpressServer);
} catch (err) {
  console.log(err);
}
