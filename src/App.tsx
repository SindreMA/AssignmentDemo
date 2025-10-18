import React, { useState, useEffect} from 'react';
import styles from './App.module.scss';
import { IShip } from './Models/IShip';
import { fetchData } from './DataProvider/fetchData';
import ShipList from './Components/Ships/ShipList'
import ShipDetails from './Components/Ships/ShipDetails'

const App = () => {
  const [ships, setShips] = useState<IShip[]>([]);
  const [SelectedShip, setSelectedShip] = useState<IShip>();

  useEffect(()=>{
    fetchData.getShips().then(_=>setShips(_))
  },[])

  return (
    <div className={styles.app}>
      <h1> Ships </h1>
      {SelectedShip ? 
      <ShipDetails ship={SelectedShip} onResetClick={x=> setSelectedShip(null)}/>: 
      <ShipList ships={ships} ItemSelected={setSelectedShip}/>}
    </div>
  );
}

export default App;

