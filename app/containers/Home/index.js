/*
 *
 * Home
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
  selectBook,
} from './../App/actions';

import Main from 'containers/Main';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.onSelectBook('');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book !== '') {
      this.openRoute('/chapter');
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
    onSelectBook: (book) => dispatch(selectBook(book)),
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
