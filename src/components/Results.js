import React from 'react';
import {Banner} from '../App.components';

const resultsBanner = (name, phone, values) => (
<Banner style={{fontSize:"2vh", borderStyle:"solid", marginBottom:"10px"}}><text style={{padding:"0 20px 0 20px"}}>{name}</text><text style={{padding:"0 20px 0 20px"}}>{phone}</text><text>{values}</text></Banner>
)
const Results = (length, name, phone, values) => {
  let results = [];
  for(let i = 0; i < length; i++){
    results.push(resultsBanner(name, phone, values))
  }
  return results;
}

export default Results;
