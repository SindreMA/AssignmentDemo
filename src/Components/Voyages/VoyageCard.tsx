import React from 'react';
import { IVoyage } from '../../Models/IVoyage';
import styles from './Voyage.module.scss';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import FixtureList from '../Fixtures/FixtureList'


const voyage = (props:{ voyage?: IVoyage, data?: any})=>{

  const inFixtures = props.voyage.fixtures.filter(x=> x.loadDescr.toLowerCase() === props.data.value.toLowerCase());
  const outFixtures = props.voyage.fixtures.filter(x=> x.dischDescr.toLowerCase() === props.data.value.toLowerCase());

  return (
    <div className={styles.locationContainer}>
      <Pivot>
     
      {
        inFixtures.length !== 0 ? 
        <PivotItem
        headerText="Fixtures In"
      >
        <FixtureList fixtures={inFixtures}  filter={`in`} cargoList={props.voyage.cargos} />
      </PivotItem>
      : null
      }
      {
        outFixtures.length !== 0 ? 
        <PivotItem
        headerText="Fixtures Out"
      >
        <FixtureList fixtures={outFixtures} filter={`out`} cargoList={props.voyage.cargos} />
      </PivotItem>
      : null
      }
       <PivotItem
        headerText="All fixtures"
      >
        <FixtureList fixtures={props.voyage.fixtures} cargoList={props.voyage.cargos} />
      </PivotItem>
      
    </Pivot>
    </div>
  );
}
export default voyage;
