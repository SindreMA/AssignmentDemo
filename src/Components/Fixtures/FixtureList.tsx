import React from 'react';
import { IFixture } from '../../Models/IFixture';
import DataTable from 'react-data-table-component';
import cH from '../../SharedFunctions/cargoHelper'
import styles from './Fixture.module.scss'
import CargoList from './Cargos/CargoList'
import { ICargo } from '../../Models/ICargo';

const fixtureList = (props: { fixtures: IFixture[], filter?: string, cargoList: ICargo[] }) => {

    const columns = [

        {
            name: 'Id',
            selector: 'fixNo',

        },
        {
            name: 'Charterer Code',
            selector: 'chartererCode',
            right: true,
        },
        {
            name: 'Broker',
            selector: x => x.broker ?? "None",
            right: true,
            wrap: true
        },
        {

            name: 'Quantity',
            selector: 'quantity',
            right: true,
        },
        {
            name: 'Type',
            selector: 'fixType',
            right: true,
            sortable: true,
        },
        {
            name: 'Cargo',
            selector: 'cargo',
            right: true,
            sortable: true,
            wrap: true
        },
        {
            name: 'Currency',
            selector: 'currency',
            right: true,
            sortable: true,
        }
    ];


    if (props.filter && props.filter === 'in') {
        columns.push({
            name: 'Unload location',
            selector: x => cH.capitalize(x.dischDescr),
            right: true,
            wrap: false
        })
    } else if (props.filter && props.filter === 'out') {
        columns.push({
            name: 'Load location',
            selector: x => cH.capitalize(x.loadDescr),
            right: true,
            wrap: false
        })
    } else {
        columns.push({
            name: 'Unload location',
            selector: x => cH.capitalize(x.dischDescr),
            right: true,
            wrap: false

        })
        columns.push({
            name: 'Load location',
            selector: x => cH.capitalize(x.loadDescr),
            right: true,
            wrap: false

        })
    }


    return (
        <div >
            <DataTable
                className={styles.cargoContainer}
                noHeader={true}
                columns={columns}
                data={props.fixtures}
                expandableRows
                expandableRowsComponent={<CargoList filter={props.filter} cargoList={props.cargoList} />}
            />
        </div >
    );
}
export default fixtureList;
