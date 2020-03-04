import React from 'react';
import {Banner} from '../App.components';

const resultsBanner = (name, phone, values) => (
<Banner><text>{name}</text><text>{phone}</text><text>{values}</text></Banner>
)
const Results = (length, name, phone, values) => {
  let results = [];
  for(let i = 0; i < length; i++){
    results.push(resultsBanner(name, phone, values))
  }
  return results;
}

export default Results;
