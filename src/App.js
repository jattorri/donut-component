import React from 'react';
import Donut from './Donut.jsx';
import { populationByRegions } from './data.js';

const App = () =>{

  const config = {
    title:'The Population of Continents and Regions',
    palette:'Soft Pastel',
    dataSource: populationByRegions,
    labelVisible:'true',
    connectorVisible:'true',
    exportEnabled:'true',
    margin:0,
    tooltipEnabled:'true',
    formatType:'millions'

    }

  return(<Donut config={config}/>)
}
  


export default App;
