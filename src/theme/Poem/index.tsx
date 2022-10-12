import React from 'react';

import styles from './poem.module.css';

interface Props {
  children: string;
}

const Poem = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <div className={styles.poem}>{children}</div>
    </div>
  );
};

export default Poem;
