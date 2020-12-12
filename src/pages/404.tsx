/* @jsx jsx */
import { Link } from 'gatsby';
import { jsx, Card, Heading } from 'theme-ui';

import { Page } from '../components/Page';
import { Section } from '../components/Section';

export default function NotFoundPage() {
  return (
    <Page>
      <Section>
        <Card sx={{ p: 4 }}>
          <Heading as="h2">Page not found</Heading>
          <Link sx={{ fontSize: 3 }} to="/">
            Go back
          </Link>
        </Card>
      </Section>
    </Page>
  );
}
