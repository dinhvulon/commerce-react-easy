import React, { useEffect, useState, useMemo } from 'react';
import Button from '@mui/material/Button';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '1em', border: '5px solid purple' }}>
      <Button variant="contained">Hello World 1</Button>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
