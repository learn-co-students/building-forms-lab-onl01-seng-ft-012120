import React, { Component } from "react";

const Bands = (props) => {
  const bands = props.bands.map((band, ind) => {
    return <li key={ind}>{band.name}</li>;
  });

  return <div>{bands}</div>;
};

export default Bands;
