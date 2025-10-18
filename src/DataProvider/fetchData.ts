import { IShip } from "../Models/IShip";
import { IFixture } from "../Models/IFixture";
import ships from './ships.json';
import fixtures from './fixtures.json';

export class fetchData {
    public static getShips(): Promise<IShip[]> {
        return new Promise((resolve)=>{
            resolve(ships);
        }) 
    }
    public static getIFixtures(): Promise<IFixture[]> {
        return new Promise((resolve)=>{
            resolve(fixtures);
        }) 
    }
}