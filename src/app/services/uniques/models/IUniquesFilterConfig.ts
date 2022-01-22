export interface IUniquesFilterConfig {
  search?: string;
  itemTypes?: Array<string>;
  itemSubtypes?: Array<string>;
  qualities?: Array<string>;
  stats?: Array<string>;
  heroSpecific?: Array<string>;
  build?: {name: string, uniques: Array<string>};
}
