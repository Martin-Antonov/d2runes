import {ItemType, QualityType, SubType} from "./Items";

export interface IUniquesFilterConfig {
  search?: string;
  itemTypes?: Array<ItemType>;
  itemSubtypes?: Array<SubType>;
  qualities?: Array<QualityType>;
  stats?: Array<string>;
  heroSpecific?: Array<string>;
  build?: {name: string, items: Array<string>};
}
