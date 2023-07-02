import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{height: '100vh', width: '100%' }}>
      MAP HERE
    </div>
  );
};

