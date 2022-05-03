import express, { Request, Response } from 'express';

import getCandidate from '../utils/getCandidate';

function getRoutesCandidate() {
  const router = express.Router();

  router.get('/', candidate);

  return router;
}

async function candidate(req: Request, res: Response) {
  res.send(getCandidate());
}

export { getRoutesCandidate };
