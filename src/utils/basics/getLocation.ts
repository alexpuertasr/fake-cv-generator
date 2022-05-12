import { Candidate, GetLocationVars } from '../../types/types';

import getRandomElement from '../getRandomElement';
import getRandomNumber from '../getRandomNumber';

function getLocation({
  country,
  streetName,
  streetSurname,
}: GetLocationVars): Candidate['basics']['location'] {
  const region = getRandomElement(country?.regions ?? []);
  const city = getRandomElement(region?.cities ?? []);

  return {
    address: `C/${streetName.name} ${streetSurname.surname} ${getRandomNumber(2)}`,
    city: city?.city ?? null,
    countryCode: country?.countryCode ?? null,
    postalCode: city?.postalCode ?? null,
    region: region?.region ?? null,
  };
}

export default getLocation;
