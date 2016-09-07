/*
 *
 * VersesView
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

import Main from 'containers/Main';

export class VersesView extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.book === '' || this.props.chapter === '') {
      this.openRoute('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book === '' || nextProps.chapter === '') {
      this.openRoute('/');
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
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VersesView);
