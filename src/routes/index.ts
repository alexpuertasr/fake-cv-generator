import express from 'express';

import { getRoutesCandidate } from './candidate';
import { getRoutesCandidateCV } from './candidate-cv';

function getRoutes() {
  const router = express.Router();

  router.use('/candidate', getRoutesCandidate());
  router.use('/candidate-cv', getRoutesCandidateCV());

  return router;
}

export { getRoutes };
