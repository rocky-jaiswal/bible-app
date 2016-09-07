/*
 *
 * ChapterView
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push } from 'react-router-redux';

import {
  selVersion,
  selBook,
  selChapter,
  selError,
  selLoading,
} from './../Main/selectors';

import {
  selectChapter,
} from './../App/actions';

import Main from 'containers/Main';

export class ChapterView extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.book === '') {
      this.openRoute('/');
    }
    this.props.onSelectChapter('');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book === '') {
      this.openRoute('/');
    }
    if (nextProps.chapter !== '') {
      this.openRoute('/verses');
    }
  }

  openRoute = (url) => {
    this.props.dispatch(push(url));
  }

  render() {
    return (
      <Main />
    );
  }

}

const mapStateToProps = createStructuredSelector({
  version: selVersion(),
  book: selBook(),
  chapter: selChapter(),
  error: selError(),
  loading: selLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectChapter: (chapter) => dispatch(selectChapter(chapter)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterView);
