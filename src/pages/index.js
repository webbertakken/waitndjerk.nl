import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <main>
        <header className={styles.header}>
            <div className={styles.title}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <p>Contact: <a href="mailto:waitndjerk@gmail.com">waitndjerk@gmail.com</a></p>
            </div>
        </header>
      </main>
    </Layout>
  );
}
