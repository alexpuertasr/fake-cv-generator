import express, { Request, Response } from 'express';

import getCandidate from '../utils/getCandidate';
import getCandidateDOC from '../utils/getCandidateDOC';

function getRoutesCandidateCV() {
  const router = express.Router();

  router.get('/', candidateCV);

  return router;
}

async function candidateCV(req: Request, res: Response) {
  const candidate = getCandidate();
  const doc = getCandidateDOC(candidate);

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
