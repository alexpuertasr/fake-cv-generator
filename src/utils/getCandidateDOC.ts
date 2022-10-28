import pdfMakePrinter from 'pdfmake';
import fetch from 'node-fetch';
import path from 'path';

import { Candidate } from '../types/types';

const fonts = {
  Roboto: {
    normal: path.join(__dirname, '../../fonts/Roboto-Regular.ttf'),
    bold: path.join(__dirname, '../../fonts/Roboto-Medium.ttf'),
    italics: path.join(__dirname, '../../fonts/Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, '../../fonts/Roboto-MediumItalic.ttf'),
  },
};

async function getCandidateDOC(candidate: Candidate): Promise<PDFKit.PDFDocument> {
  const printer = new pdfMakePrinter(fonts);
  let base64Image;

  if (candidate.basics.image) {
    base64Image = await fetch(candidate.basics.image)
      .then((res) => res.buffer())
      .then((buf) => `data:image/jpg;base64,` + buf.toString('base64'));
  }

  return printer.createPdfKitDocument({
    content: base64Image
      ? [
          {
            columns: [
              { image: base64Image, width: 150 },
              {
                stack: [
                  { text: candidate.basics.name, style: 'header' },
                  { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 340, y2: 0, lineWidth: 2 }] },
                  {
                    margin: [0, 10, 0, 0],
                    text: `${candidate.basics.location.city} (${candidate.basics.location.countryCode})`,
                  },
                  { text: candidate.basics.phone ?? '' },
                  { text: candidate.basics.email },
                ],
                margin: [20, 0, 0, 0],
                width: '*',
              },
            ],
          },
        ]
      : [
          { text: candidate.basics.name, style: 'header' },
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2 }] },
          {
            margin: [0, 10, 0, 0],
            text: `${candidate.basics.location.city} (${candidate.basics.location.countryCode})`,
          },
          { text: candidate.basics.phone ?? '' },
          { text: candidate.basics.email },
        ],
    styles: { header: { fontSize: 36, bold: true } },
  });
}

export default getCandidateDOC;
