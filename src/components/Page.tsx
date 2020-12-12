/* @jsx jsx */
import { jsx, BaseStyles } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';

import { Header } from './Header';

const title = 'wtf?! JavaScript Quiz';
const description =
  "JavaScript Quiz. Come and see how much you don't know about JS.";
const Meta: React.FC = ({ children }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={title}
    meta={[
      {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:url`,
        content: 'https://jsquiz.wtf',
      },
      {
        name: `twitter:label1`,
        content: `Created by`,
      },
      {
        name: `twitter:data1`,
        content: 'Aleksandra Sikora',
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: `@aleksandrasays`,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: description,
      },
      {
        name: `keywords`,
        content: `javascript, quiz`,
      },
      {
        property: `og:image`,
        content: `seo.png`,
      },
      {
        name: `twitter:image`,
        content: `seo.png`,
      },
    ]}
  >
    <script type={`application/ld+json`}>{`
    {
      "@context": "https://schema.org/",
      "@type": "website",
      "author": {
        "@type": "Person",
        "name": "Aleksandra Sikora"
      },
      "keywords": "javascript, quiz",
      "headline": "${title}",
      "url": "https://jsquiz.wtf",
      "image": {
        "@type": "ImageObject",
        "url": "seo.png",
        "width": "1000",
        "height": "520"
      },
      "description": "${description}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jsquiz.wtf"
      }
    }
  `}</script>
    {children}
  </Helmet>
);

interface PageProps {
  children: React.ReactNode;
}
export function Page({ children }: PageProps) {
  return (
    <BaseStyles>
      <Meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Andika+New+Basic:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Meta>
      <Global
        styles={{
          html: {
            scrollBehavior: 'smooth',
            minHeight: '100%',
          },
          body: {
            minHeight: '100vh',
            position: 'relative',
            ':before': {
              content: '""',
              backgroundImage: 'url("wtf.png")',
              backgroundSize: '110px',
              backgroundBlendMode: 'hard-light',
              opacity: 0.5,
              top: 0,
              width: '100%',
              height: '100%',
              left: 0,
              position: 'absolute',
            },
          },
          '#___gatsby': {
            minHeight: '100%',
          },
        }}
      />
      <div
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'background',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Header />
      </div>
      {children}
      <div
        sx={{
          width: '100%',
          backgroundColor: 'background',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <footer
          sx={{
            p: 1,
            px: 2,
            mt: 2,
            textAlign: 'center',
            position: ['relative', 'absolute', 'absolute'],
            bottom: 0,
            backgroundColor: 'background',
          }}
        >
          © 2020 ・ Built with 🍷 by{' '}
          <a href="https://twitter.com/aleksandrasays">Aleksandra Sikora</a>
        </footer>
      </div>
    </BaseStyles>
  );
}
