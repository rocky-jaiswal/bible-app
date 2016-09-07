'use strict';

const DB = require('./knexfile');
const FS = require('fs');

let fullText = '';

const asJSON = (records) => {

  // console.log(records.length);
  records.forEach((record) => {

    const verseStr = record.verse + '';
    const chapter  = parseInt(verseStr.split('.')[0]);
    const verse    = parseInt(verseStr.split('.')[1]);
    const text     = record.unformatted.replace(/([^a-z0-9"'“”.,:;-\s]+)/gi, '').replace(/(\s+)/gi, ' ');

    fullText = fullText + `{ "book": "${record.book}", "chapter": ${chapter}, "verse": ${verse}, "text": "${text}" },`;
  });

  return;
}

const promise = DB.raw('select v.verse, v.unformatted, b.human as book from verses v, books b where v.book == b.osis');

promise.then((records) => {

  fullText = fullText + '[';
  asJSON(records);
  fullText = fullText.substring(0, fullText.length - 1) + ']';

  FS.writeFile('./bibles/jub.json', fullText, (err) => {

    if (err) throw err;
    console.log('Saved!');
  });

  DB.destroy();
}).catch((error) => {

  console.log(JSON.stringify(error));
  DB.destroy();
});
