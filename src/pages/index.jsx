import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DerkWebbinkFauteuil from '../../static/images/derk-webbink-fauteuil.jpg';
import DerkWebbinkGarden from '../../static/images/derk-webbink-garden.jpg';

import styles from './index.module.css';
import Image from '@theme/Image';
import Banner from '../components/banner/Banner';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Banner>
          <p>
            Maart is de <strong>Maand van het Dialect</strong>. Een evenement dat jaarlijks
            plaatsvindt in Nederland en België. Tijdens deze maand wordt extra aandacht besteed aan
            de dialecten die in verschillende regio's gesproken worden.
          </p>

          <p>
            Onze bundel "Vässies" is daarom tijdelijk te koop voor €10,- in Christelijk boekenhuis{' '}
            <a target="_blank" href="http://www.akkerboek.nl/">
              De Akker
            </a>{' '}
            of te bestellen door door een e-mailbericht te sturen naar{' '}
            <a target="_blank" href="mailto:waitndjerk@gmail.com">
              waitndjerk@gmail.com
            </a>
            .
          </p>
        </Banner>

        <header className={styles.header}>
          <div className={styles.title}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p>
              Contact: <a href="mailto:waitndjerk@gmail.com">waitndjerk@gmail.com</a>
            </p>
          </div>
        </header>

        <div className={styles.container}>
          <h2>Derk Webbink</h2>

          <sup>1926 - 1982†</sup>

          <p>
            Onze vader en grootvader Derk was een markante man in het dorp. Hij had een brede
            belangstelling, bekeek de wereld met humor en had een groot hart. Met zijn
            onafscheidelijke sigaar hielp hij, samen met onze moeder, de klanten in de schoenenzaak.
            Daarnaast werkte hij als schoenmaker in de werkplaats met Gait Post. Daar was het altijd
            gezellig en velen bleven bij ons koffie drinken aan de ronde tafel in de woonkamer.
          </p>

          <Image src={DerkWebbinkFauteuil} alt="Derk Webbink in een fauteuil" />

          <p>
            Meer nog dan van de schoenenzaak hield hij van de natuur. Hij wandelde, kende alle
            vogels, hield van jachthonden, ging mee op de jacht als drijver. Onze tuin was altijd
            vol kippen, ganzen, pauwen, konijnen en schildpadden.
          </p>
          <p>
            Zijn grote liefde voor de natuur en zijn bijzondere geloof in God verwoordde hij in
            talloze gedichten in het Vriezenveense dialect. Zelfs tijdens zijn ziekte wist hij ons
            als gezin te troosten en schreef het gedicht “As de vuuegelties wier zingt” voor zijn
            vrouw.
          </p>

          <Image src={DerkWebbinkGarden} alt="Derk Webbink in zijn moestuin" />
        </div>
      </main>
    </Layout>
  );
}
