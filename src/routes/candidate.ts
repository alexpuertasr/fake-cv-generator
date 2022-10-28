import express, { Request, Response } from 'express';

import { Gender } from '../types/types';
import getCandidate from '../utils/getCandidate';
import getRandomElement from '../utils/getRandomElement';

function getRoutesCandidate() {
  const router = express.Router();

  router.get('/', candidate);

  return router;
}

const genderOptions: Gender[] = ['female', 'male'];

async function candidate(req: Request, res: Response) {
  let gender: Gender = getRandomElement(genderOptions);

  if (req.query.gender) gender = req.query.gender as Gender;

  res.send(await getCandidate({ gender, countryCode: 'ES' }));
}

export { getRoutesCandidate };
