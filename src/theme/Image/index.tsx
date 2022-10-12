import React from 'react';

interface Props {
  src: string;
  alt: string;
}

const Image = ({ src, alt, ...props }: Props): JSX.Element => {
  return <img {...props} src={src} alt={alt} />;
};

export default Image;
