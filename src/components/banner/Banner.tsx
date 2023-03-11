import React from 'react';
import styles from './Banner.module.css';

interface Props {
  children: React.ReactNode;
}

const Banner = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Banner;
