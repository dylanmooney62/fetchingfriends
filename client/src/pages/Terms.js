import React from 'react';
import { Container } from '../components/Container';
import termsConditions from '../meta/terms.json';

const Terms = () => {
  const { title, updated, overview, content, interpretation, definitions } =
    termsConditions;

  return (
    <Container as="main">
      <article className="prose-sm md:prose md:max-w-4xl container mx-auto ">
        <h1 className="mb-2">{title}</h1>
        <p>
          <span className="font-bold">Last Updated: </span>
          {updated}
        </p>
        <p>{overview}</p>

        <section>
          <h2>{interpretation.title}</h2>
          <p>{interpretation.body}</p>
        </section>

        <section>
          <h2>{definitions.title}</h2>
          <p>{definitions.body.text}</p>
          <ul>
            {definitions.body.definitions.map((definition) => (
              <li>{definition}</li>
            ))}
          </ul>
        </section>

        {content.map(({ title, body }, idx) => (
          <section key={idx}>
            <h2>{title}</h2>
            <p>{body}</p>
          </section>
        ))}
      </article>
    </Container>
  );
};

export default Terms;
