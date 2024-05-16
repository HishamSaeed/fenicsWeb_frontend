import React from 'react';

const VisualizerEmbed = () => {
  return (
    <iframe
      src="http://localhost:8080"
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title="ParaView Visualizer"
    />
  );
};

export default VisualizerEmbed;