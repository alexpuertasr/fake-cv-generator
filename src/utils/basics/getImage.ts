import fetch from 'node-fetch';

import { Faces } from '../../types/types';

const male: string[] = [];
let malePage: number = 0;
const female: string[] = [];
let femalePage: number = 0;

function formatFaces(faces: Faces): string[] {
  return faces.faces.reduce((previousValue: string[], currentValue) => {
    const image = currentValue.urls.find((url) => url['512']);
    if (image && image['512']) return [...previousValue, image['512']];
    return [...previousValue];
  }, []);
}

async function getImage({ gender }: { gender: 'male' | 'female' }): Promise<string | null> {
  let images;

  if (gender === 'male') {
    if (!male.length) {
      malePage += 1;
      const response = await fetch(
        `https://api.generated.photos/api/v1/faces?page=${malePage}&per_page=100&age=young-adult&gender=male`,
        { headers: { Authorization: `API-Key ${process.env.GENERATED_PHOTOS_API_KEY}` } }
      );

      const maleFaces = (await response.json()) as Faces;

      if (!maleFaces.faces.length) malePage = 0;

      male.push(...formatFaces(maleFaces as unknown as Faces));
    }

    images = male;
  } else {
    if (!female.length) {
      femalePage += 1;
      const response = await fetch(
        `https://api.generated.photos/api/v1/faces?page=${femalePage}&per_page=100&age=young-adult&gender=female`,
        { headers: { Authorization: `API-Key ${process.env.GENERATED_PHOTOS_API_KEY}` } }
      );

      const femaleFaces = (await response.json()) as Faces;

      if (!femaleFaces.faces.length) femalePage = 0;

      female.push(...formatFaces(femaleFaces as unknown as Faces));
    }

    images = female;
  }

  const image = images[0];
  images.shift();

  return image ? image : null;
}

export default getImage;
