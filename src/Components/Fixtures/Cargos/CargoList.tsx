/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { ICargo } from '../../../Models/ICargo';
import DataTable from 'react-data-table-component';
import styles from './Cargo.module.scss';
import { IFixture } from '../../../Models/IFixture';
import { ICargoState } from '../../../Models/ICargoState';

const cargo = (props: { cargoList: ICargo[], data?: IFixture, filter?: string }) => {

    const columns = [

        // {
            // name: 'Fixtures number',
            // selector: 'fixNo',
        // },
        {
            name: 'Load Port',
            selector: 'loadPort',
        },
        {
            name: 'Quantity Type',
            selector: 'quantityTt',
        },
        {
            name: 'Quantity',
            selector: 'quantity',
        },
        {
            name: 'Freight Hire',
            selector: 'freightHire',
        },

        {
            name: 'UPDC',
            selector: 'UPDC',
        },

        {
            name: 'Commodity',
            selector: 'commodity',
            wrap: true
        },

        {
            name: 'Commission',
            selector: 'commission',
        },

        {
            name: 'COASpot',
            selector: 'COASpot',
        },
        // {
            // name: 'brokerCode1',
            // selector: 'brokerCode1',
        // },
        // {
            // name: 'brokerCode2',
            // selector: 'brokerCode2',
        // },
        // {
            // name: 'brokerComm1',
            // selector: 'brokerComm1',
        // },


    ];


    var savedChecks: ICargoState[] = []
    if (localStorage.getItem('checkedCargos')
    ) {
        savedChecks = JSON.parse(localStorage.getItem('checkedCargos'))
    }
    const handleChange = (state) => {
        var nwLs = [...savedChecks.filter(x => x.fixNo !== props.data.fixNo || x.filter !== (props.filter ?? 'all'))]

        for (let i = 0; i < state.selectedRows.length; i++) {
            const row = state.selectedRows[i];
            const result: ICargoState = {
                cargoId: row.id,
                fixNo: row.fixNo,
                filter: props.filter ?? 'all'
            }
            nwLs.push(result)
        }

        localStorage.setItem('checkedCargos', JSON.stringify(nwLs))
    };


    return (
        <div className={styles.border}>
            <DataTable
                noHeader={true}
                columns={columns}
                data={props.cargoList.filter(x => x.fixNo === props.data.fixNo)}
                selectableRows
                onSelectedRowsChange={handleChange}
                selectableRowSelected={x => savedChecks.filter(c => c.cargoId === x.id && c.filter === (props.filter ?? 'all')).length !== 0}
            />
            <br />
        </div >
    );
}
export default cargo;
