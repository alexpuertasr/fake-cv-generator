import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { getRoutes } from './routes';

const app = express();

app.use(cors());
app.use('/api', getRoutes());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is now running on http://localhost:${PORT}/api`);
});
