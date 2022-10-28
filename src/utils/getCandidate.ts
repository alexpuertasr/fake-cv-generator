import { Candidate, Country, GetCandidateVars, Name, Surname } from '../types/types';

import dbo from '../db/conn';

import getImage from './basics/getImage';
import getEmail from './basics/getEmail';
import getLocation from './basics/getLocation';
import getPhone from './basics/getPhone';

import getNickname from './getNickname';

async function getCandidate({ gender, countryCode }: GetCandidateVars): Promise<Candidate> {
  const dbConnect = dbo.getDb();

  const countries = dbConnect.collection('countries');
  const names = dbConnect.collection('names');
  const surnames = dbConnect.collection('surnames');

  const country = await countries.findOne<Country>({ countryCode });

  const [candidateName, streetName] = await names
    .aggregate<Name>([{ $match: { gender } }, { $sample: { size: 2 } }])
    .toArray();

  const [candidateSurname, streetSurname] = await surnames
    .aggregate<Surname>([{ $sample: { size: 2 } }])
    .toArray();

  const nickname = getNickname({ name: candidateName, surname: candidateSurname });

  return {
    basics: {
      name: `${candidateName.name} ${candidateSurname.surname}`,
      label: null,
      image: await getImage({ gender }),
      email: getEmail({ nickname }),
      phone: getPhone({ country }),
      url: null,
      summary: null,
      location: getLocation({ country, streetName, streetSurname }),
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
