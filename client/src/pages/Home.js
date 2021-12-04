import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';

const Home = () => {
  return (
    <>
      <header className="bg-base-200 bg-squares py-12">
        <Container>
          <div className="flex items-center max-w-7xl m-auto">
            <div className="flex-1">
              <h1 className="mb-5 text-5xl font-bold text-neutral">
                Show off your Furry Friends
              </h1>
              <p className="mb-5 w-5/6 text-lg text-gray-600 leading-relaxed">
                Enter your dog and vote for your favourites with Fetching
                Friends!
              </p>
              <button to="/" className="btn btn-primary">
                Meet the friends
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              className="hidden md:block rounded-lg shadow-2xl h-96 object-cover object-center lg:ml-12 md:w-2/6"
              alt=""
            />
          </div>
        </Container>
      </header>
      <Container as="main">
        <section className="py-12">
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
            <Link to="/entries" className="btn btn-primary btn-lg">
              Join the fun
            </Link>
          </div>
        </section>
        <div className="grid grid-cols-3 gap-2 mx-auto ">
          {Array(6)
            .fill()
            .map((_, idx) => (
              <div className="aspect-w-16 aspect-h-12">
                <img
                  style={{ aspectRatio: 1 }}
                  key={idx}
                  src={`img/gallery/dog-${idx}.jpg`}
                  className="w-full h-full object-center object-cover"
                  alt="gallery dog"
                ></img>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
