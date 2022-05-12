import { GetPhoneVars } from '../../types/types';

function getPhone({ country }: GetPhoneVars): string | null {
  if (!country) return null;

  const { callingCode, callingRegExp, callingFormat, callingLength } = country;

  const phone = Math.floor(
    Math.pow(10, callingLength - 1) + Math.random() * 9 * Math.pow(10, callingLength - 1)
  ).toString();

  return `${callingCode} ${phone.replace(new RegExp(callingRegExp), callingFormat)}`;
}

export default getPhone;
