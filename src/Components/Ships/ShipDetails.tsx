import React, { useState,useEffect} from 'react';
import { IShip } from '../../Models/IShip';
import VoyagesList from '../Voyages/VoyagesList'
import { Text } from 'office-ui-fabric-react/lib/Text';
import { fetchData } from '../../DataProvider/fetchData';
import { ICargo } from '../../Models/ICargo';
import { IFixture } from '../../Models/IFixture';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
initializeIcons(/* optional base url */);

const ShipCard = (props:{ ship: IShip, onResetClick: any})=>{

  const [fixtureLs, setFixtures] = useState<IFixture[]>([]);
  const [cargoLs, setCargos] = useState<ICargo[]>([]);
  
  useEffect(()=>{
      fetchData.getIFixtures(props.ship.shipCode).then(z=> {
        setFixtures(z);
      })  
      fetchData.getCargo(props.ship.shipCode).then(z=> {
        setCargos(z); 
      })  
  },[props.ship.shipCode])



    return (
      <div >
         <ActionButton onClick={props.onResetClick} iconProps={{ iconName: 'Back' }}>
          Go back
         </ActionButton>
        <br/>
        <div>
        <Text variant={'large'} block>
            {props.ship.title}
        </Text>
        <Text variant={'medium'} block>
            {props.ship.dateBuilt} / {props.ship.codeFlag}
        </Text>
        </div>
        <br/>
        <VoyagesList shipCode={props.ship.shipCode} fixtureList={fixtureLs} cargoList={cargoLs}/>
      </div >
    );
  }
export default ShipCard;
