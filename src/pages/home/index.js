import React from 'react';
import Lorem from './lorem';
import MeetOurTeem from './meet-our-team';
import { team } from 'data';

const Home = () => (
  <div>
    <Lorem />
    <MeetOurTeem members={team} />
  </div>
);

export default Home;
