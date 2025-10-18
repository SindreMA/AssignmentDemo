import React from 'react';
import styles from './Ship.module.scss';
import { IShip } from '../../Models/IShip';
import VoyagesList from './Voyages/VoyagesList';
import { Text } from 'office-ui-fabric-react/lib/Text';



const ShipCard = (props:{ ship: IShip, onResetClick: any})=>{



    return (
      <div className={styles.container}>
        <h5 onClick={props.onResetClick} className={styles.hyperText}>{"<- Back"}</h5>
        <br/>
        <div className={styles.shipDetailsContainer}>
        <Text variant={'large'} block>
            {props.ship.title}
        </Text>
        <Text variant={'medium'} block>
            {props.ship.dateBuilt} / {props.ship.codeFlag}
        </Text>
        </div>
        <br/>
        <VoyagesList shipCode={props.ship.shipCode}/>
      </div >
    );
  }
export default ShipCard;
