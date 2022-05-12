import express, { Request, Response } from 'express';

import getCandidate from '../utils/getCandidate';

function getRoutesCandidate() {
  const router = express.Router();

  router.get('/', candidate);

  return router;
}

async function candidate(req: Request, res: Response) {
  // TODO: Get country code from headers
  res.send(await getCandidate({ countryCode: 'ES' }));
}

export { getRoutesCandidate };
