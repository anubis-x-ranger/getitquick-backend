import { connectToDatabase } from './config/db';

require('dotenv').config();
const app = require('./app');
connectToDatabase()
const PORT = process.env.PORT || 3000;

async function start() {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});
