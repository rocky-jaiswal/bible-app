import _ from 'lodash';

const Query = {

  getBooks(bibles, ver) {
    return _.uniq(_.map(bibles[ver], (r) => r.book));
  },

  getChapters(bibles, ver, book) {
    return _.uniq(_.map(_.filter(bibles[ver], (obj) => obj.book === book), (verse) => verse.chapter));
  },

  getVerses(bibles, ver, book, chapter) {
    return _.filter(bibles[ver], (obj) => obj.book === book && obj.chapter === chapter);
  },

};

export default Query;
