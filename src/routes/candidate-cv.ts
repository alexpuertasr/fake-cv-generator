import express, { Request, Response } from 'express';

import { Gender } from '../types/types';
import getCandidate from '../utils/getCandidate';
import getCandidateDOC from '../utils/getCandidateDOC';
import getRandomElement from '../utils/getRandomElement';

function getRoutesCandidateCV() {
  const router = express.Router();

  router.get('/', candidateCV);

  return router;
}

const genderOptions: Gender[] = ['female', 'male'];

async function candidateCV(req: Request, res: Response) {
  let gender: Gender = getRandomElement(genderOptions);

  if (req.query.gender) gender = req.query.gender as Gender;

  const candidate = await getCandidate({ gender, countryCode: 'ES' });
  const doc = await getCandidateDOC(candidate);

  const chunks: Uint8Array[] = [];

  doc.on('data', function (chunk) {
    chunks.push(chunk);
  });

  doc.on('end', function () {
    const result = Buffer.concat(chunks);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-disposition',
      `attachment; filename=${candidate.basics.name.replaceAll(' ', '_')}_CV.pdf`
    );
    res.send(result);
  });

  doc.end();
}

export { getRoutesCandidateCV };
