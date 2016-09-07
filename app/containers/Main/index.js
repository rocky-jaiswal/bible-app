/*
 *
 * Main
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { push, goBack } from 'react-router-redux';

import {
  selAllVersions,
  selBibles,
  selVersion,
  selBook,
  selChapter,
  selError,
  selLoading,
} from './selectors';

import {
  fetchBibles,
  setLoading,
  selectVersion,
  selectBook,
  selectChapter,
  selectHome,
} from './../App/actions';

import styles from './styles.css';

import Header from 'components/Header';
import Navbar from 'components/Navbar';
import MainContent from 'components/MainContent';
import Footer from 'components/Footer';
import LoadingIndicator from 'components/LoadingIndicator';


export class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.setLoadingTrue();
    this.props.loadBibles();
  }

  render() {
    const showNav = this.props.loading ? <LoadingIndicator /> : <Navbar allVersions={this.props.allVersions} version={this.props.version} selectVersion={ (v) => this.props.onSelectVersion(v) } />;

    return (
      <div className={styles.main}>
        <Header
          selectHome={ () => this.props.onSelectHome() }
          back={ () => this.props.back() }
        />
        { showNav }
        <MainContent
          bibles={this.props.bibles}
          version={this.props.version}
          book={this.props.book}
          chapter={this.props.chapter}
          selectBook={ (book) => this.props.onSelectBook(book) }
          selectChapter={ (chapter) => this.props.onSelectChapter(chapter) }
        />
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  allVersions: selAllVersions(),
  bibles: selBibles(),
  version: selVersion(),
  book: selBook(),
  chapter: selChapter(),
  error: selError(),
  loading: selLoading(),
});

function mapDispatchToProps(dispatch) {

  return {
    loadBibles: () => dispatch(fetchBibles()),
    onSelectVersion: (version) => dispatch(selectVersion(version)),
    onSelectBook: (book) => dispatch(selectBook(book)),
    onSelectChapter: (chapter) => dispatch(selectChapter(chapter)),
    onSelectHome: () => dispatch(selectHome()),
    setLoadingTrue: () => dispatch(setLoading(true)),
    changeRoute: (url) => dispatch(push(url)),
    back: () => dispatch(goBack()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
