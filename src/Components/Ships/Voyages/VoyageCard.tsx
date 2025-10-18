import React, { useState} from 'react';
import { IVoyage } from '../../../Models/IVoyage';
import styles from './Voyage.module.scss';
import { IFixture } from '../../../Models/IFixture';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import cH from '../../../SharedFunctions/cargoHelper'



const voyage = (props:{ voyage?: IVoyage})=>{
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
  const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
  };
  const locations = cH.getLocations(props.voyage.fixtures);
  
  return (
    <div className={styles.sidePadding}>
      
      <Pivot>
      <PivotItem
        headerText="Cargo In"
      >
        <Label styles={labelStyles}>Cargo In</Label>
      </PivotItem>
      <PivotItem headerText="Cargo Out">
        <Label styles={labelStyles}>Cargo Out</Label>
      </PivotItem>
    </Pivot>
      test {locations.join(', ')}
      {/*locations.join(',')*/}
    </div>
  );
}
export default voyage;
