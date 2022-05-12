import { GetEmailVars } from '../../types/types';

import getRandomElement from '../getRandomElement';

function getEmail({ nickname }: GetEmailVars): string {
  const emailDomain = getRandomElement(['gmail', 'outlook', 'hotmail']);

  return `${nickname}@${emailDomain}.com`;
}

export default getEmail;
