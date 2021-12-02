import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

const Home = () => {
  return (
    <>
      <header className="bg-base-200 bg-squares">
        <Container>
          <div class="hero">
            <div class="flex-col hero-content lg:flex-row-reverse">
              <img
                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                class="rounded-lg shadow-2xl w-2/6 h-96 object-cover object-center"
                alt=""
              />
              <div className="flex-1">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5 w-5/6 text-lg text-gray-600 leading-relaxed">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container as="section" className="pt-24">
          <h1 className="font-bold text-4xl text-center mb-4 text-neutral">
            About the Contest
          </h1>
          <p className="text-center font-semibold mb-8">
            Enter your dog and vote for your favourites with Fetching Friends!
          </p>
          <div className="max-w-4xl text-lg leading-loose mx-auto">
            <div>
              <p className="mb-3">
                Fetching Friends is a modern contest encouraging fun, creativity
                and friendly competition. Each month Fetching Friends will run a
                contest, sometimes with a seasonal theme! You can enter your own
                dog, vote on others, and show off your ribbon collection on your
                pup’s profile.
              </p>
              <p className="mb-4">
                In addition to a popular vote decided upon by our users,
                Fetching Friends also employs{' '}
                <Link to="/judges" className="link link-primary">
                  experienced judges
                </Link>{' '}
                to give out coveted Judge’s Choice prizes, so there are many
                opportunities to be a winner!{' '}
              </p>
              <p>
                To enter{' '}
                <Link to="login" className="link link-primary">
                  simply login or sign up
                </Link>
                , view our{' '}
                <Link to="entries" className="link link-primary">
                  stunning entrants
                </Link>{' '}
                and click the heart to vote on as many as you like.{' '}
              </p>
            </div>
          </div>
          <div className="text-center py-12">
            <Link to="/login" class="btn btn-primary btn-lg">
              Join the fun
            </Link>
          </div>
        </Container>
        <Container>
          <div class="grid grid-cols-3 gap-2 mx-auto">
            {Array(6)
              .fill()
              .map((_, idx) => (
                <img
                  src={`img/gallery/dog-${idx}.jpg`}
                  className="w-full h-full object-center object-cover"
                  alt="gallery dog"
                ></img>
              ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
