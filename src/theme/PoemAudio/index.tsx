import React from 'react';
import styles from './index.module.css';

interface Props {
  src: string;
  reader?: {
    name: string;
  };
}

const PoemAudio = (props: Props): JSX.Element => {
  const { reader, ...audioProps } = props;
  return (
    <div className={styles.main}>
      <audio controls className={styles.audio} {...audioProps} />
      <em>Audioversie. Voorgelezen door {reader?.name}.</em>
    </div>
  );
};

export default PoemAudio;
