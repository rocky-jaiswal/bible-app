'use strict';

const DB = require('./knexfile');
const FS = require('fs');

let fullText = '';

const asJSON = (records) => {

  // console.log(records.length);
  let nextIsTen = false;
  records.forEach((record) => {

    const book     = record.book === 'Psalms' || record.book === 'Psalms'? 'Psalm' : record.book;
    const verseStr = record.verse + '';
    const chapter  = parseInt(verseStr.split('.')[0]);
    const verse    = nextIsTen ? 10 : parseInt(verseStr.split('.')[1]);
    const text     = record.unformatted.replace(/([^a-z0-9"'“”.,:;-\s]+)/gi, '').replace(/(\s+)/gi, ' ');

    fullText = fullText + `{ "book": "${book}", "chapter": ${chapter}, "verse": ${verse}, "text": "${text}" },`;
    if (verse === 9) {
      nextIsTen = true;
    } else {
      nextIsTen = false;
    }
  });

  return;
}

const promise = DB.raw('select v.verse, v.unformatted, b.human as book from verses v, books b where v.book == b.osis');

promise.then((records) => {

  fullText = fullText + '[';
  asJSON(records);
  fullText = fullText.substring(0, fullText.length - 1) + ']';

  FS.writeFile('./bibles/niv.json', fullText, (err) => {

    if (err) throw err;
    console.log('Saved!');
  });

  DB.destroy();
}).catch((error) => {

  console.log(JSON.stringify(error));
  DB.destroy();
});
