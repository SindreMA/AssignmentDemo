import React from 'react';
import DataTable from 'react-data-table-component';
import { IVoyage } from '../../Models/IVoyage';
import cH from '../../SharedFunctions/cargoHelper'
import styles from './Voyage.module.scss';
import VoyageCard from './VoyageCard'

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
        
      }
    ];

    return <div className={styles.border}>
        <DataTable
    className={styles.tableSidePadding}
    columns={locColumns}
    data={locObjects}
    expandableRows
    noHeader={true}
    noTableHead={true}
    expandableRowsComponent={<VoyageCard voyage={props.data}/>}
  />
    </div> 
  }
export default LocationComponent;
