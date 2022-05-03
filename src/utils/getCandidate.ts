import { Candidate, Location } from '../types/types';

import namesData from './data/names.json';
import surnamesData from './data/surnames.json';
import locationsData from './data/locations.json';

function getRandom<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(digits: number): string {
  return Math.random()
    .toString()
    .slice(2, digits + 2);
}

function getCandidate(): Candidate {
  const names = namesData as string[];
  const surnames = surnamesData as string[];
  const locations = locationsData as Location[];

  const name = getRandom(names);
  const surname = getRandom(surnames);

  const basicName = name.toLocaleLowerCase();
  const basicSurname = surname.toLocaleLowerCase().replaceAll(' ', '');

  const emailDomain = getRandom(['gmail', 'outlook', 'hotmail']);

  const location = getRandom(locations);

  return {
    basics: {
      name: `${name} ${surname}`,
      label: null,
      image: null,
      email: `${basicName.charAt(0)}${basicSurname}@${emailDomain}.com`,
      phone: `+34 6${getRandomNumber(2)} ${getRandomNumber(3)} ${getRandomNumber(3)}`,
      url: null,
      summary: null,
      location: {
        address: `C/${getRandom(names)} ${getRandom(surnames)} ${getRandomNumber(2)}`,
        postalCode: getRandomNumber(5),
        city: location.city,
        countryCode: 'ES',
        region: location.region,
      },
      profiles: [],
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
    projects: [],
  };
}

export default getCandidate;
