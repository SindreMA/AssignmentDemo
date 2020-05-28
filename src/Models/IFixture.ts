import { ICargo } from "./ICargo";

export interface IFixture {
    fixNo : number;
    shipCode : number;
    voyageNumber : number;
    chartererCode : string;
    charterer : string;
    broker : string;
    loadDescr : string;
    dischDescr : string;
    quantity : number;
    fixType : string;
    shipKey : number;
    cargo : string;
    currency : string;
}
  