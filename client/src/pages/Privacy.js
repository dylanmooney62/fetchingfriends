import React from 'react';
import { Container } from '../components/Container';
import privacyPolicy from '../meta/privacypolicy.json';

const Privacy = () => {
  const { title, updated, overview, content } = privacyPolicy;

  return (
    <Container as="main">
      <div className="prose-sm md:prose md:max-w-4xl container mx-auto ">
        <h1 className="mb-2">{title}</h1>
        <p>
          <span className="font-bold">Last Updated: </span>
          {updated}
        </p>
        <p>{overview}</p>
        {content.map(({ title, body }, idx) => (
          <section key={idx}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
};

export default Privacy;
