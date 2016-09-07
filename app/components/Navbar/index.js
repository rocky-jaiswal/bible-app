/**
*
* Navbar
*
*/

import React from 'react';

import styles from './styles.css';

class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  isActive(ver) {
    return this.props.version === ver ? 'activeBtn' : 'inactiveBtn';
  }

  allVersions(versions) {
    return versions.map((v) => {
      return <button key={v} className={styles[this.isActive(v)]} onClick={() => this.props.selectVersion(v)}>{v}</button>;
    });
  }

  render() {
    return (
      <div className={styles.navbar}>
        <span className={styles.langNav}>
          {this.allVersions(this.props.allVersions.toJS())}
        </span>
      </div>
    );
  }

}

Navbar.propTypes = {
  version: React.PropTypes.string,
  selectVersion: React.PropTypes.func,
  allVersions: React.PropTypes.object,
};

export default Navbar;
