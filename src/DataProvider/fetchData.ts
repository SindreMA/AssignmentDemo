import { IShip } from "../Models/IShip";
import { IFixture } from "../Models/IFixture";
import ships from './ships.json';
import cargos from './cargos.json';
import fixtures from './fixtures.json';
import { ICargo } from "../Models/ICargo";

export class fetchData {


    static getCargo(shipId: number) : Promise<ICargo[]> {
        return new Promise((resolve)=>{
            resolve(cargos.filter(x=> x.shipCode === shipId));
        }) 
    }
    public static getShips(): Promise<IShip[]> {
        return new Promise((resolve)=>{
            resolve(ships);
        }) 
    }
    public static getIFixtures(shipId: number): Promise<IFixture[]> {
        return new Promise((resolve)=>{
            resolve(fixtures.filter(x=> x.shipCode === shipId ));
        }) 
    }
}