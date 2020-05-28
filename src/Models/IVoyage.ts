import { IFixture } from './IFixture'
import { ICargo } from './ICargo';

export interface IVoyage {
  id: number;
  fixtures: IFixture[];
  cargos: ICargo[];
}