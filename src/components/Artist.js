import React from 'react';

const Artist = ({ artist }) => (
  <div>
    <div>{artist ? artist.Name : 'None'}</div>
    <div>{artist ? artist.Origin : 'None'}</div>
  </div>
);

export default Artist;
