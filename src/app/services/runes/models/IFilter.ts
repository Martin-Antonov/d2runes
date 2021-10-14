export interface IFilterConfig {
  search?: string;
  sockets?: Array<number>;
  runes?: Array<string>;
  itemTypes?: Array<string>;
  level?: { from: number, to: number };
  stats?: Array<string>;
  pd2ModeOn?: boolean;
}
