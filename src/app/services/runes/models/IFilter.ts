export interface IFilterConfig {
  sockets?: Array<number>;
  weaponTypes?: Array<string>;
  runes?: Array<string>;
  level?: {from: number, to:number};
  stats?: Array<string>;
}
