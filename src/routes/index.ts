import express from 'express';

import { getRoutesCandidateCV } from './candidate-cv';
import { getRoutesCandidate } from './candidate';

function getRoutes() {
  const router = express.Router();

  router.use('/candidate', getRoutesCandidate());
  router.use('/candidate-cv', getRoutesCandidateCV());

  return router;
}

export { getRoutes };
