/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect} from 'react';
import { IShip } from '../../Models/IShip';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { DetailsList, IColumn} from 'office-ui-fabric-react/lib/DetailsList';


const ships = (props:{ ships: Array<IShip>, ItemSelected: any})=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ships, setShips] = useState<IShip[]>([...props.ships]);

  useEffect(()=>{
    setShips([...props.ships]);
  },[props.ships])

  const _columns: IColumn[] = [    
    {
      minWidth: 80,
      maxWidth: 100,
      key: 'shipCode',
      name: 'Ship Code',
      onRender: item => `${item.shipCode}`,
    } as IColumn,
    {
      key: 'title',
      name: 'Name',
      onRender: item => `${item.title}`,
    } as IColumn,
    {
      key: 'dateBuilt',
      name: 'Built',
      onRender: item => `${item.dateBuilt}`,
    } as IColumn,
    {
      key: 'codeFlag',
      name: 'Flag Code',
      onRender: item => `${item.codeFlag}`,
    } as IColumn,
    
  ];

  const _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    setShips([...props.ships.filter(i => i.title.toLowerCase().includes(text) || i.shipCode.toString().includes(text) || i.dateBuilt.toString().includes(text) || i.codeFlag.toLowerCase().includes(text))]);    
  };
  const _onItemInvoked = (item: any): void => {
    props.ItemSelected(item);
  }

  return (
    <div>
      <TextField label="Search:" onChange={_onChangeText} />
      <DetailsList
        items={ships}
        columns={_columns}
        checkboxVisibility={2}
        onItemInvoked={_onItemInvoked}
        className={"pointer"}

      />
      
    </div>

    
  );
}
export default ships;
