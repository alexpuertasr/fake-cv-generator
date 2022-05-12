import { GetNickname } from '../types/types';

function getNickname({ name, surname }: GetNickname): string {
  return `${name.name.toLocaleLowerCase().charAt(0)}${surname.surname
    .toLocaleLowerCase()
    .replaceAll(' ', '')}`;
}

export default getNickname;
