/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState,useEffect} from 'react';
import { IFixture } from '../../Models/IFixture';
import { IVoyage } from '../../Models/IVoyage';
import DataTable from 'react-data-table-component';
import styles from './Voyage.module.scss';
import cH from '../../SharedFunctions/cargoHelper'
import LocationComponent from './LocationList'
import { ICargo } from '../../Models/ICargo';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


const voyage = (props:{ shipCode: number, fixtureList: IFixture[], cargoList: ICargo[]})=>{
  const [uniqueVoyages, setFilteredVoyages] = useState<IVoyage[]>([]);
  const [searchText , setSearchText] = useState<string>('');
  useEffect( () => {
    var Voyages : IVoyage[] = []

    for (let i = 0; i < props.fixtureList.length; i++) {
      const element = props.fixtureList[i];
      if ((element.loadDescr && element.loadDescr.toLowerCase().includes(searchText.toLowerCase())) || (element.dischDescr && element.dischDescr.toLowerCase().includes(searchText.toLowerCase())) || ( element.voyageNumber && element.voyageNumber.toString().includes(searchText.toLowerCase()))) {
        const Voyage = Voyages.find(x=> x.id === element.voyageNumber);
      if (Voyage) {
        Voyage.fixtures.push(element)
      } else {
        Voyages.push({
          id: element.voyageNumber,
          fixtures: [element],
          cargos: props.cargoList
        });
      }
      }
      
    }
    setFilteredVoyages(Voyages)
  },[props.fixtureList,props.shipCode,props.cargoList, searchText])

  
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

  const _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    setSearchText(text);    
  };

  return (
    <div>
        <DataTable
        defaultSortField={'id'}
        defaultSortAsc={false}
        className={styles.container}
        title="Voyage List"
        columns={columns}
        data={uniqueVoyages}
        expandableRows
        expandableRowsComponent={<LocationComponent/>}
        subHeader
        subHeaderAlign={'left'}
        subHeaderComponent={<TextField label="Search:" onChange={_onChangeText} />}
      />
    </div>
  );
}
export default voyage;
