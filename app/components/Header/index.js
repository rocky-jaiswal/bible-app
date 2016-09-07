/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import homeIcon from './home.png';
import backIcon from './back.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.header}>
        <span className={styles.mainNav}>
          <h1><FormattedMessage {...messages.header} /></h1>
          <button className={styles.btn} onClick={() => this.props.back()}><img src={backIcon} role="presentation" /></button>
          <button className={styles.btn} onClick={() => this.props.selectHome()}><img src={homeIcon} role="presentation" /></button>
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  back: React.PropTypes.func,
  selectHome: React.PropTypes.func,
};

export default Header;
