import React from 'react';
import Button from 'react-bootstrap/Button';

function Welcome() {
  return (
    <div className="jumbotron">
      <h1>Images Gallery</h1>
      <p>
        Simple App to retrieve photos using Unsplash API. In order to start
        enter any seatch term in input field
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          Learn more
        </Button>
      </p>
    </div>
  );
}
export default Welcome;
