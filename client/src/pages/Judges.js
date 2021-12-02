import React from 'react';

import JUDGES from '../meta/judges.json';

const Judges = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="font-bold text-4xl text-center mb-12 text-neutral">
        Judges
      </h1>
      {JUDGES.map(({ name, bio, img }, idx) => (
        <>
          <article
            className="flex flex-col lg:flex-row md:mb-10 lg:mb-12"
            key={name}
          >
            <div className="flex-shrink-0 mx-auto mb-6 w-56 h-56 md:w-64 md:h-64 lg:mr-16 lg:mb-0 lg:w-80 lg:h-80 rounded-full shadow-lg">
              <img src={img} alt="" className="w-full" />
            </div>
            <div className="flex-1 lg:pt-12">
              <h2 className="font-bold text-center text-2xl md:text-3xl text-neutral mb-2 md:mb-3 lg:mb-4 lg:text-left ">
                {name}
              </h2>
              {bio.split('\n').map((text) => (
                <p className="mb-2 lg:last:mb-3 leading-relaxed text-base text-gray-600 md:text-lg">
                  {text.trim()}
                </p>
              ))}
            </div>
          </article>
          {idx < JUDGES.length - 1 && (
            <div className="divider divider-horizontal opacity-10 mb-12"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default Judges;
