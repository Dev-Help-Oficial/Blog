import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className="loading-container">
      <div className="loader"><CircularProgress disableShrink /></div>
    </div>
  );
}

export default Loading;
