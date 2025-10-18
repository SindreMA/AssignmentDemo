import React from 'react';
import styles from './Ship.module.scss';
import { IShip } from '../../Models/IShip';
import VoyagesList from './Voyages/VoyagesList';

const ShipCard = (props:{ ship: IShip})=>{
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className="ms-Grid-col ms-sm12">
            <span className={styles.title}>{props.ship.title}</span>
          </div>
        </div>
        <div className={styles.row + " " +styles.subTitle}>
          <div className={styles.column4}>
            <div>Code: {props.ship.shipCode}</div>
          </div >
          <div className={[styles.column4,styles.description].join(" ")}>
            <div >Year: {props.ship.dateBuilt}</div>
          </div >
          <div className={styles.column4}>
            <div >Flag: {props.ship.codeFlag}</div>
          </div >
        </div >
        <VoyagesList shipCode={props.ship.shipCode} key={props.ship.shipCode}/>
      </div >
    );
  }
export default ShipCard;
