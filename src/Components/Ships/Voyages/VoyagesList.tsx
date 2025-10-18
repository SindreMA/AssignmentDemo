/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState,useEffect} from 'react';
import { IFixture } from '../../../Models/IFixture';
import VoyageCard from './VoyageCard'
import { fetchData } from '../../../DataProvider/fetchData';
import _ from 'underscore'
import { IVoyage } from '../../../Models/IVoyage';
import DataTable from 'react-data-table-component';
import styles from './Voyage.module.scss';
import cH from '../../../SharedFunctions/cargoHelper'



const voyage = (props:{ shipCode: number})=>{

  const [fixtures, setFixtures] = useState<IFixture[]>([]);
  const [uniqueVoyages, setFilteredVoyages] = useState<IVoyage[]>([]);

  useEffect( () => {
    fetchData.getIFixtures().then(z=>setFixtures([...z.filter(x=> x.shipCode === props.shipCode )]))
    
    var Voyages : IVoyage[] = []
    for (let i = 0; i < fixtures.length; i++) {
      const element = fixtures[i];
      
      const Voyage = Voyages.find(x=> x.id === element.voyageNumber);
      if (Voyage) {
        Voyage.fixtures.push(element)
      } else {
        Voyages.push({
          id: element.voyageNumber,
          fixtures: [element]
        });
      }
    }
    setFilteredVoyages(Voyages)
    
  },[fixtures,props.shipCode])

  
  const columns = [
   
    {
      name: 'Locations',
      selector: x=> { return cH.getLocations(x.fixtures).join(', ')},
      sortable: true,
      
    },
    {
      name: 'Voyage Number',
      selector: 'id',
      right: true,
      sortable: true,
    },
  ];
  

  const LocationComponent = (props: { data?: IVoyage }) => {
    const locations = cH.getLocations(props.data.fixtures);
    const locObjects = []
    for (let i = 0; i < locations.length; i++) {
      const loc = locations[i];
      locObjects.push({
        value: loc,
        id:i
      })
    }

    const locColumns = [
   
      {
        name: 'Location',
        selector: x=> x.value,
        sortable: true,
        
      },
      {
        name: 'Id',
        selector: x=> x.id,
        sortable: true,
        
      }
    ];

    return <DataTable
    columns={locColumns}
    data={locObjects}
    expandableRows
    expandableRowsComponent={<div>test</div>}
    //expandableRowsComponent={<VoyageCard voyage={props.data}/>}
  />
  }
  

  

  return (
    <div>
        <DataTable
        title="Voyage List"
        columns={columns}
        data={uniqueVoyages}
        expandableRows
        expandableRowsComponent={<LocationComponent/>}
      />
    </div>
  );
}
export default voyage;
