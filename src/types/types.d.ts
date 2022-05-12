export type CountryCode = 'ES';

export interface Country {
  _id: string;
  countryName: string;
  countryCode: string;
  callingCode: string;
  callingPattern: string;
  callingRegExp: string;
  callingFormat: string;
  callingLength: number;
  regions: {
    region: string;
    cities: {
      city: string;
      postalCode: string;
    }[];
  }[];
}

export interface Name {
  _id: string;
  name: string;
  gender: 'male' | 'female';
  countryCode: CountryCode;
}

export interface Surname {
  _id: string;
  surname: string;
  countryCode: CountryCode;
}

export interface Location {
  region: string;
  city: string;
}

export interface Candidate {
  basics: {
    name: string;
    label: string | null;
    image: string | null;
    email: string;
    phone: string | null;
    url: string | null;
    summary: string | null;
    location: {
      address: string;
      postalCode: string | null;
      city: string | null;
      countryCode: string | null;
      region: string | null;
    };
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  work: {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  volunteer: {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
  }[];
  awards: {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }[];
  certificates: {
    name: string;
    date: string;
    issuer: string;
    url: string;
  }[];
  publications: {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
  }[];
  skills: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  languages: {
    language: string;
    fluency: string;
  }[];
  interests: {
    name: string;
    keywords: string[];
  }[];
  references: {
    name: string;
    reference: string;
  }[];
  projects: {
    name: string;
    description: string;
    highlights: string[];
    keywords: string[];
    startDate: string;
    endDate: string;
    url: string;
    roles: string[];
    entity: string;
    type: string;
  }[];
}

export interface GetCandidateVars {
  countryCode: CountryCode;
}

export interface GetNickname {
  name: Name;
  surname: Surname;
}

export interface GetEmailVars {
  nickname: string;
}

export interface GetLocationVars {
  country: Country | null;
  streetName: Name;
  streetSurname: Surname;
}

export interface GetPhoneVars {
  country: Country | null;
}
