import React from 'react';
import PropTypes from 'prop-types';

function  Facts({ facts }) {
  const factList = facts.map((fact, i) => 
    <li key={i}>{fact}</li>);
  return (
    <ul> 
      {factList}
    </ul>
  );
}

Facts.propTypes = {
  facts: PropTypes.array.isRequired
};

export default Facts;
