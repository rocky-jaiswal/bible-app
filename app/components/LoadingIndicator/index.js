import React from 'react';

import styles from './styles.css';

function LoadingIndicator() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingIndicator;
