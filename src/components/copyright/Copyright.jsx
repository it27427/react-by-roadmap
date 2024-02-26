import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <span>{currentYear}</span>
    </>
  );
};

export default Copyright;
