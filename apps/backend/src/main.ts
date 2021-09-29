/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {User} from '@basic-js-framework/backend/domain'
const app = express();

app.get('/api', (req, res) => {
  const user = new User()
  user.firstName = 'Jan'
  user.lastName = 'Kowalski'
  res.send({ message: `Welcome ${user.fullName} to backend!` });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
