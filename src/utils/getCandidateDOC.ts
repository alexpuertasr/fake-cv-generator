import pdfMakePrinter from 'pdfmake';
import path from 'path';

import { Candidate } from '../types/types';

const fonts = {
  Roboto: {
    normal: path.join(__dirname, '../fonts/Roboto-Regular.ttf'),
    bold: path.join(__dirname, '../fonts/Roboto-Medium.ttf'),
    italics: path.join(__dirname, '../fonts/Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, '../fonts/Roboto-MediumItalic.ttf'),
  },
};

function getCandidateDOC(candidate: Candidate): PDFKit.PDFDocument {
  const printer = new pdfMakePrinter(fonts);

  return printer.createPdfKitDocument({
    content: [
      { text: candidate.basics.name, style: 'header' },
      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2 }] },
      {
        margin: [0, 10, 0, 0],
        text: `${candidate.basics.location.city} (${candidate.basics.location.countryCode})`,
      },
      { text: candidate.basics.phone },
      { text: candidate.basics.email },
    ],
    styles: { header: { fontSize: 36, bold: true } },
  });
}

export default getCandidateDOC;
