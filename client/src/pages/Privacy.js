import React from 'react';
import privacyPolicy from '../meta/privacypolicy.json';

const Privacy = () => {
  const { title, updated, overview, content } = privacyPolicy;

  return (
    <div className="prose-sm md:prose md:max-w-4xl container mx-auto ">
      <h1 className="mb-2">{title}</h1>
      <p>
        <span className="font-bold">Last Updated: </span>
        {updated}
      </p>
      <p>{overview}</p>
      {content.map(({ title, body }) => (
        <section>
          <h2>{title}</h2>
          <p>{body}</p>
        </section>
      ))}
    </div>
  );
};

export default Privacy;
