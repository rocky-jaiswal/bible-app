/**
*
* MainContent
*
*/

import React from 'react';

import styles from './styles.css';

import Query from './../../services/query';

class MainContent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  showBooks(bibles, ver) {
    return (
      <table>
        <tbody>
          {Query.getBooks(bibles, ver).map((book, idx) =>
            <tr key={idx}>
              <td>
                <button onClick={() => this.props.selectBook(book)}>{book}</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  showChapters(bibles, ver, book) {
    return (
      <table>
        <tbody>
          {Query.getChapters(bibles, ver, book).map((chapter, idx) =>
            <tr key={idx}>
              <td>
                <button onClick={() => this.props.selectChapter(chapter)}>{chapter}</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  showVerses(bibles, ver, book, chapter) {
    return (
      <table>
        <tbody>
          {Query.getVerses(bibles, ver, book, chapter).map((verse, idx) =>
            <tr key={idx}>
              <td>
                <p>{verse.verse}</p>
              </td>
              <td>
                <p>{verse.text}</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let content = '';
    if (this.props.book === '') {
      content = this.showBooks(this.props.bibles, this.props.version);
    } else if (this.props.chapter === '') {
      content = this.showChapters(this.props.bibles, this.props.version, this.props.book);
    } else {
      content = this.showVerses(this.props.bibles, this.props.version, this.props.book, this.props.chapter);
    }

    return (
      <div className={styles.mainContent}>
        <h3>{this.props.book} {this.props.chapter}</h3>
        {content}
      </div>
    );
  }
}

export default MainContent;
